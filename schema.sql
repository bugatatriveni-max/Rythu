-- ============================================================================
-- FarmDirect Production PostgreSQL Database Schema
-- Architecture: Government Sources -> Ingestion -> Database -> Backend -> UI
-- Covers: All Indian States, Districts, Markets, Verified Prices, APMC Charges,
--         Transport Estimations, Recommendation Logs, Data Sources & Sync Logs.
-- ============================================================================

-- Enable UUID extension if available
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Supported Indian Languages (12 National Languages)
CREATE TABLE IF NOT EXISTS languages (
    code VARCHAR(10) PRIMARY KEY,
    name_english VARCHAR(50) NOT NULL,
    native_name VARCHAR(100) NOT NULL,
    script VARCHAR(50),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. Official Data Sources Registry
CREATE TABLE IF NOT EXISTS data_sources (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    organization VARCHAR(200) NOT NULL,
    api_endpoint VARCHAR(300),
    documentation_url VARCHAR(300),
    auth_type VARCHAR(50) DEFAULT 'API_KEY',
    is_active BOOLEAN DEFAULT TRUE,
    last_ping_status VARCHAR(50) DEFAULT 'HEALTHY',
    last_successful_sync TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. Data Synchronization & Ingestion Audit Logs
CREATE TABLE IF NOT EXISTS data_sync_logs (
    id SERIAL PRIMARY KEY,
    source_id VARCHAR(50) REFERENCES data_sources(id),
    records_fetched INT DEFAULT 0,
    records_normalized INT DEFAULT 0,
    records_inserted INT DEFAULT 0,
    records_updated INT DEFAULT 0,
    sync_status VARCHAR(50) NOT NULL, -- SUCCESS, PARTIAL, FAILED, DEMO_FALLBACK
    error_message TEXT,
    started_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    completed_at TIMESTAMP WITH TIME ZONE
);

-- 4. Complete India Location Hierarchy: States & Union Territories
CREATE TABLE IF NOT EXISTS states (
    id VARCHAR(50) PRIMARY KEY,
    code VARCHAR(10) UNIQUE NOT NULL,
    name_en VARCHAR(100) NOT NULL,
    name_te VARCHAR(100),
    name_hi VARCHAR(100),
    capital VARCHAR(100),
    region VARCHAR(50), -- South, North, West, East, Central, North-East
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 5. Districts (Mapped to States)
CREATE TABLE IF NOT EXISTS districts (
    id VARCHAR(50) PRIMARY KEY,
    state_id VARCHAR(50) REFERENCES states(id) ON DELETE CASCADE,
    name_en VARCHAR(100) NOT NULL,
    name_te VARCHAR(100),
    name_hi VARCHAR(100),
    headquarters VARCHAR(100),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 6. Agricultural Markets (APMCs, Mandis & Regulated Purchase Centres)
CREATE TABLE IF NOT EXISTS markets (
    market_id VARCHAR(50) PRIMARY KEY,
    market_name VARCHAR(150) NOT NULL,
    market_name_te VARCHAR(150),
    market_name_hi VARCHAR(150),
    state_id VARCHAR(50) REFERENCES states(id),
    district_id VARCHAR(50) REFERENCES districts(id),
    market_type VARCHAR(50) NOT NULL, -- APMC Yard, Sub-Yard, Private Market, Govt Procurement Center
    address TEXT NOT NULL,
    pincode VARCHAR(10),
    phone VARCHAR(30),
    email VARCHAR(100),
    website VARCHAR(200),
    commodities_traded TEXT,
    source VARCHAR(100) DEFAULT 'Agmarknet / DMI',
    source_url VARCHAR(300),
    last_verified_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(30) DEFAULT 'ACTIVE', -- ACTIVE, SEASONAL, INACTIVE
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 7. Verified Market Geographic Coordinates
-- CRITICAL REQUIREMENT: Never invent coordinates. NULL coordinates represent unavailable data.
CREATE TABLE IF NOT EXISTS market_coordinates (
    market_id VARCHAR(50) PRIMARY KEY REFERENCES markets(market_id) ON DELETE CASCADE,
    latitude DOUBLE PRECISION,
    longitude DOUBLE PRECISION,
    geo_source VARCHAR(100) DEFAULT 'Survey of India / Official Mandi Registry',
    is_verified BOOLEAN DEFAULT FALSE,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 8. Crops / Agricultural Commodities
CREATE TABLE IF NOT EXISTS crops (
    crop_id VARCHAR(50) PRIMARY KEY,
    name_en VARCHAR(100) NOT NULL,
    name_te VARCHAR(100),
    name_hi VARCHAR(100),
    name_ta VARCHAR(100),
    name_kn VARCHAR(100),
    category VARCHAR(50), -- Cereals, Pulses, Oilseeds, Commercial, Spices, Vegetables, Fruits
    official_msp NUMERIC(10, 2), -- Government Benchmark Minimum Support Price (₹/Quintal)
    default_unit VARCHAR(20) DEFAULT 'Quintal',
    icon VARCHAR(10) DEFAULT '🌾',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 9. Crop Commercial Varieties
CREATE TABLE IF NOT EXISTS crop_varieties (
    variety_id VARCHAR(50) PRIMARY KEY,
    crop_id VARCHAR(50) REFERENCES crops(crop_id) ON DELETE CASCADE,
    variety_name VARCHAR(100) NOT NULL,
    grade VARCHAR(20) DEFAULT 'FAQ', -- FAQ, Grade A, Premium
    description TEXT
);

-- 10. Market Daily Prices Table
CREATE TABLE IF NOT EXISTS market_prices (
    id SERIAL PRIMARY KEY,
    market_id VARCHAR(50) REFERENCES markets(market_id) ON DELETE CASCADE,
    crop_id VARCHAR(50) REFERENCES crops(crop_id) ON DELETE CASCADE,
    commodity VARCHAR(100) NOT NULL,
    variety VARCHAR(100),
    grade VARCHAR(50) DEFAULT 'FAQ',
    min_price NUMERIC(10, 2) NOT NULL,
    max_price NUMERIC(10, 2) NOT NULL,
    modal_price NUMERIC(10, 2) NOT NULL, -- Standard daily trading modal rate
    unit VARCHAR(20) DEFAULT 'Quintal', -- Quintal or kg
    arrival_quantity NUMERIC(12, 2) DEFAULT 0,
    price_date DATE NOT NULL,
    source VARCHAR(150) NOT NULL, -- e.g. "data.gov.in Mandi Price API"
    source_record_id VARCHAR(100),
    last_updated TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT unique_market_crop_date UNIQUE(market_id, crop_id, price_date)
);

-- 11. Market Daily Arrivals Table
CREATE TABLE IF NOT EXISTS market_arrivals (
    id SERIAL PRIMARY KEY,
    market_id VARCHAR(50) REFERENCES markets(market_id) ON DELETE CASCADE,
    crop_id VARCHAR(50) REFERENCES crops(crop_id),
    arrival_date DATE NOT NULL,
    quantity_quintals NUMERIC(12, 2) NOT NULL,
    trucks_count INT DEFAULT 0,
    source VARCHAR(100)
);

-- 12. Granular Market Charges & APMC Fee Schedules
-- Specific to each state and market yard
CREATE TABLE IF NOT EXISTS market_charges (
    id SERIAL PRIMARY KEY,
    market_id VARCHAR(50) REFERENCES markets(market_id) ON DELETE CASCADE,
    state_id VARCHAR(50) REFERENCES states(id),
    market_fee_percent NUMERIC(5, 2) DEFAULT 1.0, -- Usually 1.0%
    loading_charge_per_qtl NUMERIC(8, 2) DEFAULT 10.0,
    unloading_charge_per_qtl NUMERIC(8, 2) DEFAULT 18.0, -- Hamali
    commission_percent NUMERIC(5, 2) DEFAULT 0.0, -- In APMC yards, farmer commission is 0% by law
    weighing_charge_per_qtl NUMERIC(8, 2) DEFAULT 5.0,
    handling_charge_per_qtl NUMERIC(8, 2) DEFAULT 0.0,
    storage_charge_per_bag_day NUMERIC(8, 2) DEFAULT 2.0,
    other_charge_per_qtl NUMERIC(8, 2) DEFAULT 0.0,
    source VARCHAR(100) DEFAULT 'State APMC Act Schedule',
    last_verified_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 13. Transport Rate Estimation Table
CREATE TABLE IF NOT EXISTS transport_estimates (
    vehicle_type VARCHAR(50) PRIMARY KEY, -- tractor, minitruck, auto, heavy_truck
    name_display VARCHAR(100) NOT NULL,
    base_fee NUMERIC(8, 2) NOT NULL,
    rate_per_km NUMERIC(8, 2) NOT NULL,
    trip_factor NUMERIC(4, 2) DEFAULT 1.0, -- Round-trip empty haul consideration
    capacity_quintals NUMERIC(8, 2) NOT NULL,
    assumptions_note TEXT NOT NULL
);

-- 14. Registered Farmers
CREATE TABLE IF NOT EXISTS farmers (
    id VARCHAR(50) PRIMARY KEY,
    kisan_id VARCHAR(50) UNIQUE NOT NULL,
    name VARCHAR(150) NOT NULL,
    mobile VARCHAR(15) UNIQUE NOT NULL,
    aadhaar_last4 VARCHAR(4) NOT NULL,
    password_hash VARCHAR(255),
    webauthn_credential_id TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 15. Farmer Geo-Locations
CREATE TABLE IF NOT EXISTS farmer_locations (
    id SERIAL PRIMARY KEY,
    farmer_id VARCHAR(50) REFERENCES farmers(id) ON DELETE CASCADE,
    state_id VARCHAR(50) REFERENCES states(id),
    district_id VARCHAR(50) REFERENCES districts(id),
    village_mandal VARCHAR(150),
    latitude DOUBLE PRECISION,
    longitude DOUBLE PRECISION
);

-- 16. Market Recommendations Audit Trail
CREATE TABLE IF NOT EXISTS recommendations (
    id SERIAL PRIMARY KEY,
    crop_id VARCHAR(50) REFERENCES crops(crop_id),
    quantity_qtl NUMERIC(10, 2) NOT NULL,
    origin_district_id VARCHAR(50) REFERENCES districts(id),
    recommended_market_id VARCHAR(50) REFERENCES markets(market_id),
    gross_value NUMERIC(12, 2) NOT NULL,
    estimated_transport NUMERIC(10, 2) NOT NULL,
    known_charges NUMERIC(10, 2) NOT NULL,
    estimated_net_return NUMERIC(12, 2) NOT NULL,
    reasoning_summary TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for lightning fast queries across 100+ mandis and daily prices
CREATE INDEX IF NOT EXISTS idx_markets_district ON markets(district_id);
CREATE INDEX IF NOT EXISTS idx_markets_state ON markets(state_id);
CREATE INDEX IF NOT EXISTS idx_prices_market ON market_prices(market_id);
CREATE INDEX IF NOT EXISTS idx_prices_crop ON market_prices(crop_id);
CREATE INDEX IF NOT EXISTS idx_prices_date ON market_prices(price_date DESC);
CREATE INDEX IF NOT EXISTS idx_districts_state ON districts(state_id);
