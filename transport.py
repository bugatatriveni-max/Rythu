from typing import Dict, Any, Tuple
from backend.database import get_connection

# Known distance matrix (in km) between major agricultural districts and market yards
DISTRICT_MARKET_DISTANCES = {
    ('krishna', 'mkt_kri_01'): 18.0,  # Vijayawada APMC
    ('krishna', 'mkt_gnt_01'): 42.0,  # Guntur Mirchi Yard
    ('krishna', 'mkt_eg_01'): 145.0,  # Rajahmundry
    ('krishna', 'mkt_kri_02'): 35.0,  # Gudivada
    ('krishna', 'mkt_klr_01'): 410.0, # Kolar Tomato Hub

    ('guntur', 'mkt_gnt_01'): 12.0,   # Guntur Mirchi Yard
    ('guntur', 'mkt_gnt_02'): 28.0,   # Tenali APMC
    ('guntur', 'mkt_gnt_03'): 22.0,   # Duggirala Turmeric
    ('guntur', 'mkt_kri_01'): 45.0,   # Vijayawada APMC
    ('guntur', 'mkt_prk_01'): 115.0,  # Ongole APMC
    ('guntur', 'mkt_wgl_01'): 225.0,  # Warangal Enumamula
    ('guntur', 'mkt_klr_01'): 430.0,  # Kolar

    ('east_godavari', 'mkt_eg_01'): 15.0,
    ('east_godavari', 'mkt_kri_01'): 150.0,
    ('east_godavari', 'mkt_gnt_01'): 195.0,

    ('kurnool', 'mkt_knl_01'): 10.0,
    ('kurnool', 'mkt_knl_02'): 88.0,
    ('kurnool', 'mkt_gnt_01'): 275.0,

    ('warangal', 'mkt_wgl_01'): 8.0,
    ('warangal', 'mkt_khm_01'): 115.0,
    ('warangal', 'mkt_gnt_01'): 230.0,
    ('warangal', 'mkt_nzb_01'): 185.0,

    ('khammam', 'mkt_khm_01'): 10.0,
    ('khammam', 'mkt_wgl_01'): 115.0,
    ('khammam', 'mkt_kri_01'): 118.0,
    ('khammam', 'mkt_gnt_01'): 140.0,

    ('nizamabad', 'mkt_nzb_01'): 12.0,
    ('nizamabad', 'mkt_wgl_01'): 185.0,

    ('kolar', 'mkt_klr_01'): 14.0,
    ('kolar', 'mkt_gnt_01'): 430.0,
    ('kolar', 'mkt_kri_01'): 410.0,

    ('ntr', 'mkt_kri_01'): 10.0,
    ('ntr', 'mkt_gnt_01'): 35.0,
    ('palnadu', 'mkt_gnt_01'): 45.0,
    ('palnadu', 'mkt_kri_01'): 85.0,
    ('bapatla', 'mkt_gnt_01'): 48.0,
    ('bapatla', 'mkt_gnt_02'): 25.0,
    ('prakasam', 'mkt_prk_01'): 15.0,
    ('prakasam', 'mkt_gnt_01'): 115.0,
    ('nellore', 'mkt_prk_01'): 125.0,
    ('nellore', 'mkt_gnt_01'): 235.0,
    ('nandyal', 'mkt_knl_01'): 72.0,
    ('nandyal', 'mkt_gnt_01'): 240.0,
    ('anantapur', 'mkt_knl_01'): 145.0,
    ('anantapur', 'mkt_klr_01'): 180.0,
    ('annamayya', 'mkt_klr_01'): 85.0,
    ('annamayya', 'mkt_gnt_01'): 360.0,
    ('chittoor', 'mkt_klr_01'): 95.0,
    ('tirupati', 'mkt_klr_01'): 165.0,
    ('kakinada', 'mkt_eg_01'): 55.0,
    ('konaseema', 'mkt_eg_01'): 60.0,
    ('west_godavari', 'mkt_eg_01'): 75.0,
    ('eluru', 'mkt_kri_01'): 60.0,
    ('anakapalli', 'mkt_eg_01'): 170.0,
    ('vizianagaram', 'mkt_eg_01'): 225.0,
    ('srikakulam', 'mkt_eg_01'): 280.0,
    ('hyderabad', 'mkt_wgl_01'): 145.0,
    ('rangareddy', 'mkt_wgl_01'): 165.0,
    ('suryapet', 'mkt_khm_01'): 65.0,
    ('siddipet', 'mkt_wgl_01'): 95.0,
    ('nashik', 'mkt_nsk_01'): 25.0,
    ('delhi_central', 'mkt_del_01'): 10.0
}

class TransportEstimationService:
    @staticmethod
    def get_distance(origin_district_id: str, market_id: str) -> float:
        """Returns distance in km between farmer origin district and destination market."""
        key = (origin_district_id.lower(), market_id.lower())
        if key in DISTRICT_MARKET_DISTANCES:
            return DISTRICT_MARKET_DISTANCES[key]
        # Default reasonable road distance if inter-district
        return 50.0

    @staticmethod
    def calculate_cost(
        origin_district_id: str,
        market_id: str,
        quantity_qtl: float,
        vehicle_type: str = "minitruck"
    ) -> Tuple[float, float, str]:
        """
        Calculates estimated transportation cost using the formula:
        estimated_transport_cost = base_fee + (distance_km * vehicle_rate * trip_factor)
        
        Returns:
            (estimated_cost, distance_km, assumptions_text)
        """
        conn = get_connection()
        cur = conn.cursor()
        cur.execute("SELECT * FROM transport_estimates WHERE vehicle_type = ?;", (vehicle_type,))
        row = cur.fetchone()
        conn.close()

        if not row:
            # Fallback to default minitruck
            base_fee = 250.0
            rate_per_km = 24.0
            trip_factor = 1.0
            vehicle_name = "Mini Truck / Bolero"
            assumptions = "Estimated road distance with base fee and standard vehicle tariff."
        else:
            base_fee = float(row['base_fee'])
            rate_per_km = float(row['rate_per_km'])
            trip_factor = float(row['trip_factor'])
            vehicle_name = row['name_display']
            assumptions = row['assumptions_note']

        distance_km = TransportEstimationService.get_distance(origin_district_id, market_id)

        # Formula: base_fee + (distance * rate * trip_factor)
        cost = base_fee + (distance_km * rate_per_km * trip_factor)
        rounded_cost = round(cost, 2)

        note = f"Vehicle: {vehicle_name}. Distance: {distance_km} km. Base fee: ₹{base_fee}, Rate: ₹{rate_per_km}/km. Transportation cost is an estimate."
        return rounded_cost, distance_km, note
