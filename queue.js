// RythuSeva Queue Management, Slot Booking & 6-Stage Procurement Tracker
// Resilient Hybrid Architecture: Live FastAPI Backend Sync + Offline LocalStorage Fallback (Zero-Crash)

import { INITIAL_BOOKINGS, STATES_DISTRICTS_DATA, CROP_DATA } from './data.js';
import { currentLanguage, t } from './i18n.js';

export const QueueManager = {
  bookings: [],
  currentlyServingToken: 'AP-GNT-2026-0839',
  servingNumber: 839,
  isBackendConnected: false,

  getApiBase() {
    if (typeof window !== 'undefined' && window.FARMDIRECT_API_BASE) {
      return window.FARMDIRECT_API_BASE.replace(/\/+$/, '');
    }
    return '';
  },

  async init() {
    // 1. Instant hydration from local storage
    const saved = localStorage.getItem('rythu_bookings');
    if (saved) {
      try {
        this.bookings = JSON.parse(saved);
      } catch (e) {
        this.bookings = [...INITIAL_BOOKINGS];
      }
    } else {
      this.bookings = [...INITIAL_BOOKINGS];
      this.saveBookings();
    }

    // 2. Asynchronous background synchronization with FastAPI backend
    await this.syncWithBackend();
  },

  saveBookings() {
    try {
      localStorage.setItem('rythu_bookings', JSON.stringify(this.bookings));
    } catch (e) {
      console.warn('[QueueManager] LocalStorage write failed:', e);
    }
  },

  async syncWithBackend() {
    const apiBase = this.getApiBase();
    try {
      // Fetch live bookings
      const bRes = await fetch(`${apiBase}/api/bookings?limit=50`, {
        headers: { 'Accept': 'application/json' },
        signal: AbortSignal.timeout(5000)
      });
      if (bRes.ok) {
        const serverBookings = await bRes.json();
        if (Array.isArray(serverBookings) && serverBookings.length > 0) {
          // Merge server bookings with local bookings (server takes precedence for matching tokens)
          const mergedMap = new Map();
          this.bookings.forEach(b => mergedMap.set(b.token, b));
          serverBookings.forEach(sb => mergedMap.set(sb.token, sb));
          this.bookings = Array.from(mergedMap.values());
          this.saveBookings();
        }
        this.isBackendConnected = true;
      }

      // Fetch live queue status
      const qRes = await fetch(`${apiBase}/api/queue/status`, {
        headers: { 'Accept': 'application/json' },
        signal: AbortSignal.timeout(5000)
      });
      if (qRes.ok) {
        const qData = await qRes.json();
        if (qData.currentlyServingToken) {
          this.currentlyServingToken = qData.currentlyServingToken;
          this.servingNumber = qData.servingNumber || this.servingNumber;
        }
        this.isBackendConnected = true;
      }
    } catch (e) {
      // Offline fallback: continue flawlessly with local state
      console.info('[QueueManager] Running in offline / local cache mode:', e.message || e);
    }
  },

  /**
   * Generates a deterministic SVG QR code representation
   */
  generateQrSvg(text) {
    const hash = Array.from(text || 'TOKEN').reduce((acc, char) => (acc * 31 + char.charCodeAt(0)) | 0, 0);
    const size = 140;
    const cells = 15;
    const cellSize = size / cells;
    let rects = '';

    // Corner Finder Patterns
    const drawCorner = (startX, startY) => {
      let str = '';
      str += `<rect x="${startX * cellSize}" y="${startY * cellSize}" width="${7 * cellSize}" height="${7 * cellSize}" fill="#059669" rx="3"/>`;
      str += `<rect x="${(startX + 1) * cellSize}" y="${(startY + 1) * cellSize}" width="${5 * cellSize}" height="${5 * cellSize}" fill="#ffffff" rx="2"/>`;
      str += `<rect x="${(startX + 2) * cellSize}" y="${(startY + 2) * cellSize}" width="${3 * cellSize}" height="${3 * cellSize}" fill="#059669" rx="1"/>`;
      return str;
    };

    rects += drawCorner(0, 0);
    rects += drawCorner(cells - 7, 0);
    rects += drawCorner(0, cells - 7);

    // Inner data matrix pseudorandom pattern based on token hash
    for (let r = 0; r < cells; r++) {
      for (let c = 0; c < cells; c++) {
        if ((r < 7 && c < 7) || (r < 7 && c >= cells - 7) || (r >= cells - 7 && c < 7)) continue;
        const bit = ((hash ^ (r * 17 + c * 37)) & 3) === 0;
        if (bit) {
          rects += `<rect x="${c * cellSize}" y="${r * cellSize}" width="${cellSize - 0.5}" height="${cellSize - 0.5}" fill="#0f172a" rx="1"/>`;
        }
      }
    }

    return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border-radius:12px; padding:8px; box-shadow:0 4px 12px rgba(0,0,0,0.08);">${rects}</svg>`;
  },

  createBooking(formData) {
    const statePrefix = formData.state === 'andhra_pradesh' ? 'AP' : (formData.state === 'telangana' ? 'TG' : 'IN');
    const distPrefix = formData.district ? formData.district.slice(0, 3).toUpperCase() : 'MND';
    const randNum = Math.floor(1000 + Math.random() * 9000);
    const token = `${statePrefix}-${distPrefix}-2026-${randNum}`;

    const crop = CROP_DATA[formData.cropId] || {};
    const cropName = crop.name ? (crop.name[currentLanguage] || crop.name.en) : formData.cropId;

    const waitMins = 15 + Math.floor(Math.random() * 25);
    const vehiclesAhead = 2 + Math.floor(Math.random() * 6);

    const newBooking = {
      token,
      farmerName: formData.farmerName,
      mobile: formData.mobile,
      kisanId: formData.aadhaar || 'KS-' + randNum,
      state: formData.state,
      district: formData.district,
      mandal: formData.mandal || '',
      marketId: formData.marketId,
      marketName: formData.marketName || 'Government Agricultural Market Yard',
      cropId: formData.cropId,
      cropName,
      quantityQtl: Number(formData.quantityQtl),
      vehicleType: formData.vehicleType,
      vehicleNo: formData.vehicleNo || 'AP 07 TR ' + Math.floor(1000 + Math.random() * 9000),
      slotDate: formData.slotDate,
      slotTime: formData.slotTime,
      gateNo: 'Gate ' + (1 + Math.floor(Math.random() * 3)) + ' (Weighbridge Bay A)',
      status: 'booked',
      queuePosition: vehiclesAhead,
      estWaitMins: waitMins,
      moisturePercent: null,
      qualityGrade: null,
      grossWeightQtl: null,
      tareWeightQtl: null,
      netWeightQtl: null,
      ratePerQtl: crop.avgMarketPrice || 2400,
      totalAmount: (crop.avgMarketPrice || 2400) * Number(formData.quantityQtl),
      dbtBank: 'State Bank of India (Direct Farmer Account)',
      dbtAccountLast4: formData.aadhaar ? formData.aadhaar.slice(-4) : '9102',
      dbtStatus: 'Pending Mandi Verification',
      timestamp: new Date().toISOString()
    };

    // Save locally immediately to guarantee responsive UI
    this.bookings.unshift(newBooking);
    this.saveBookings();

    // Asynchronously dispatch to FastAPI backend (fire & update, zero crash if offline)
    this.sendBookingToBackend(newBooking).catch(err => {
      console.warn('[QueueManager] Offline mode: saved locally only', err);
    });

    return newBooking;
  },

  async sendBookingToBackend(booking) {
    const apiBase = this.getApiBase();
    try {
      const resp = await fetch(`${apiBase}/api/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          farmerName: booking.farmerName,
          mobile: booking.mobile,
          kisanId: booking.kisanId,
          state: booking.state,
          district: booking.district,
          mandal: booking.mandal,
          marketId: booking.marketId,
          marketName: booking.marketName,
          cropId: booking.cropId,
          cropName: booking.cropName,
          quantityQtl: booking.quantityQtl,
          vehicleType: booking.vehicleType,
          vehicleNo: booking.vehicleNo,
          slotDate: booking.slotDate,
          slotTime: booking.slotTime,
          token: booking.token,
          gateNo: booking.gateNo
        }),
        signal: AbortSignal.timeout(6000)
      });
      if (resp.ok) {
        const data = await resp.json();
        console.log('[QueueManager] Booking persisted to backend:', data);
        this.isBackendConnected = true;
      }
    } catch (e) {
      console.info('[QueueManager] Backend sync deferred (offline cache):', e.message);
    }
  },

  advanceQueue() {
    this.servingNumber += 1;
    this.currentlyServingToken = `AP-GNT-2026-0${this.servingNumber}`;

    // Adjust wait times and queue positions for active bookings
    this.bookings.forEach(b => {
      if (b.status === 'booked') {
        b.status = 'arrived';
        b.queuePosition = Math.max(1, b.queuePosition - 1);
        b.estWaitMins = Math.max(5, b.estWaitMins - 6);
      } else if (b.status === 'arrived') {
        b.queuePosition = Math.max(0, b.queuePosition - 1);
        if (b.queuePosition === 0) {
          b.status = 'inspected';
          b.moisturePercent = (10.5 + Math.random() * 2).toFixed(1);
          b.qualityGrade = 'Grade A (MSP Approved)';
          b.estWaitMins = 0;
        }
      } else if (b.status === 'inspected') {
        b.status = 'weighed';
        b.grossWeightQtl = (b.quantityQtl + 0.3).toFixed(1);
        b.tareWeightQtl = '0.3';
        b.netWeightQtl = b.quantityQtl.toFixed(1);
      } else if (b.status === 'weighed') {
        b.status = 'billed';
        b.dbtStatus = 'Bill Generated • Pushed to DBT Gateway';
      } else if (b.status === 'billed') {
        b.status = 'paid';
        b.dbtStatus = `DBT ₹${b.totalAmount ? b.totalAmount.toLocaleString('en-IN') : '25,000'} Credited to Bank A/c ending ${b.dbtAccountLast4 || '4109'}`;
      }
    });

    this.saveBookings();
    return {
      nowServing: this.currentlyServingToken,
      activeBookings: this.bookings
    };
  },

  findBooking(query) {
    if (!query) return null;
    const cleanQuery = query.trim().toUpperCase();
    return this.bookings.find(b => 
      (b.token && b.token.toUpperCase() === cleanQuery) || 
      (b.mobile && b.mobile.includes(cleanQuery)) ||
      (b.kisanId && b.kisanId.toUpperCase().includes(cleanQuery))
    );
  },

  async findBookingAsync(query) {
    if (!query) return null;
    const cleanQuery = query.trim().toUpperCase();

    // 1. Instant check in memory
    const local = this.findBooking(query);
    if (local) return local;

    // 2. Query backend if not found locally
    const apiBase = this.getApiBase();
    try {
      const resp = await fetch(`${apiBase}/api/bookings/${encodeURIComponent(cleanQuery)}`, {
        headers: { 'Accept': 'application/json' },
        signal: AbortSignal.timeout(4000)
      });
      if (resp.ok) {
        const serverBooking = await resp.json();
        if (serverBooking && serverBooking.token) {
          this.bookings.unshift(serverBooking);
          this.saveBookings();
          return serverBooking;
        }
      }
    } catch (e) {
      console.warn('[QueueManager] Remote booking lookup failed:', e.message);
    }
    return null;
  }
};
