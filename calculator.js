// RythuSeva Smart "Best Market to Sell" Net Profit Calculator
// Formula: Best Selling (Net Earnings) = Mandi Price - Transportation Cost - Other Charges

import { CROP_DATA, TRANSPORT_RATES, MANDI_CHARGES, STATES_DISTRICTS_DATA, BEST_SELLING_DESTINATIONS } from './data.js';

export const ProfitCalculator = {
  /**
   * Calculates net earnings for a specific market yard and crop
   * Explicit Formula: Best Selling = Gross Price - Transport Cost - Other Charges
   */
  calculateMarketProfit({
    market,
    cropId,
    quantityQtl,
    vehicleType = 'minitruck',
    customDistanceKm = null
  }) {
    const crop = CROP_DATA[cropId];
    if (!crop || !market) return null;

    // Get crop price in this market, or fallback to state/benchmark average
    const marketCropData = market.crops && market.crops[cropId] ? market.crops[cropId] : null;
    const pricePerQtl = marketCropData ? marketCropData.price : crop.avgMarketPrice;
    const demand = marketCropData ? marketCropData.demand : crop.demandLevel;

    // 1. Gross Crop Price (Mandi Rate × Quantity)
    const grossRevenue = pricePerQtl * quantityQtl;

    // 2. Transportation Cost: Base vehicle fee + (Distance * Rate per km)
    const distanceKm = customDistanceKm !== null ? Number(customDistanceKm) : (market.distanceEstimateKm || 15);
    const vehicle = TRANSPORT_RATES[vehicleType] || TRANSPORT_RATES.minitruck;
    const transportCost = Math.round(vehicle.baseFee + (distanceKm * vehicle.ratePerKm));

    // 3. Other Charges: Hamali/unloading + Weighment + User Cess
    const hamaliRate = market.handlingFeePerQtl || MANDI_CHARGES.hamaliLoading;
    const hamaliTotal = hamaliRate * quantityQtl;
    const weighmentTotal = MANDI_CHARGES.weighmentFee * quantityQtl;
    // Mandi user cess (0% in direct Govt MSP procurement center, 1% in open APMC yard)
    const isGovtDirect = market.type.includes('Govt Procurement') || market.type.includes('Direct') || market.type.includes('Specialized');
    const cessRate = isGovtDirect ? 0 : MANDI_CHARGES.marketUserFeePercentage;
    const cessTotal = Math.round(grossRevenue * cessRate);
    const otherCharges = hamaliTotal + weighmentTotal + cessTotal;

    // 4. Best Selling = Price - Transportation Cost - Other Charges
    const netProfit = Math.round(grossRevenue - transportCost - otherCharges);
    const netPerQtl = Math.round(netProfit / quantityQtl);

    return {
      marketId: market.id,
      marketName: market.name,
      marketNameTe: market.nameTe,
      type: market.type,
      address: market.address,
      mapUrl: market.mapUrl,
      phone: market.phone,
      distanceKm,
      pricePerQtl,
      demand,
      arrivalsTodayQtl: marketCropData ? marketCropData.arrivalsTodayQtl : 'Moderate',
      mspComparison: marketCropData ? marketCropData.mspComparison : 'At Benchmark',
      grossRevenue,
      transportCost,
      otherCharges,
      breakdown: {
        vehicleType: vehicle.name,
        distanceKm,
        ratePerKm: vehicle.ratePerKm,
        baseFee: vehicle.baseFee,
        hamaliRate,
        hamaliTotal,
        weighmentFeePerQtl: MANDI_CHARGES.weighmentFee,
        weighmentTotal,
        cessRate: `${(cessRate * 100).toFixed(1)}%`,
        cessTotal,
        formulaString: `Best Selling (${netProfit.toLocaleString('en-IN')}) = Gross Price (${grossRevenue.toLocaleString('en-IN')}) - Transport (${transportCost.toLocaleString('en-IN')}) - Other Charges (${otherCharges.toLocaleString('en-IN')})`
      },
      netProfit,
      netPerQtl
    };
  },

  /**
   * Evaluates all government market yards in the selected state & district,
   * sorts them by Net Earnings, and flags the best selling place.
   */
  findBestMarkets({
    stateId,
    districtId,
    cropId,
    quantityQtl,
    vehicleType
  }) {
    const state = STATES_DISTRICTS_DATA[stateId];
    if (!state || !state.districts || !state.districts[districtId]) return [];

    const district = state.districts[districtId];
    if (!district.markets || district.markets.length === 0) return [];

    const results = [];

    // Evaluate all markets in this district
    district.markets.forEach(market => {
      const evaluation = this.calculateMarketProfit({
        market,
        cropId,
        quantityQtl,
        vehicleType
      });
      if (evaluation) {
        results.push(evaluation);
      }
    });

    // Sort descending by highest Net Profit (Best Selling Realized Return)
    results.sort((a, b) => b.netProfit - a.netProfit);

    // Mark the top one as the Best Selling Choice
    if (results.length > 0) {
      results[0].isBestChoice = true;
    }

    return results;
  },

  /**
   * Returns national benchmark selling destinations and preferred buying areas for any crop
   */
  getNationalDestinations(cropId) {
    return BEST_SELLING_DESTINATIONS[cropId] || null;
  }
};
