// RythuSeva Master Application Controller
// Orchestrates i18n, Market Intelligence, Slot Booking, Queue Management, Voice AI, Biometrics, and Custom Security Password

import { CROP_DATA, TRANSPORT_RATES, STATES_DISTRICTS_DATA, TOLL_FREE_HELPLINES, BEST_SELLING_DESTINATIONS } from './data.js';
import { currentLanguage, setLanguage, getLanguage, t } from './i18n.js';
import { SecurityManager } from './biometrics.js';
import { ProfitCalculator } from './calculator.js';
import { VoiceAssistant } from './voice.js';
import { QueueManager } from './queue.js';

class RythuSevaApp {
  constructor() {
    this.currentTab = 'home';
    this.audioCtx = null;
    this.activeCropFilter = 'chilli';
  }

  init() {
    // Global Zero-Crash Interceptors
    if (typeof window !== 'undefined') {
      window.addEventListener('error', (event) => {
        console.warn('[RythuSeva Error Interceptor] Safely caught error:', event.message || event);
      });
      window.addEventListener('unhandledrejection', (event) => {
        console.warn('[RythuSeva Error Interceptor] Safely caught rejection:', event.reason);
      });
    }

    getLanguage();
    QueueManager.init().then(() => {
      this.renderLiveQueueBoard();
    }).catch(err => {
      console.warn('[App] QueueManager init background error:', err);
    });

    SecurityManager.checkAvailability();
    VoiceAssistant.init();
    this.checkBackendHealth();

    this.setupNavigation();
    this.setupLanguageSwitcher();
    this.setupSecurityAndBiometrics();
    this.setupDropdowns();
    this.setupSlotBooking();
    this.setupQueueUI();
    this.setupBestSellingDestinations();
    this.setupMarketCalculator();
    this.setupTracker();
    this.setupVoiceUI();
    this.renderActiveUser();

    this.applyTranslations();
    this.updateMarketListings();
    this.runProfitCalculation();
    this.renderLiveQueueBoard();

    setInterval(() => {
      this.refreshQueueSilently();
    }, 15000);
  }

  async checkBackendHealth() {
    const pill = document.getElementById('backendStatusPill');
    const label = document.getElementById('backendStatusLabel');
    if (!pill || !label) return;

    const apiBase = (typeof window !== 'undefined' && window.FARMDIRECT_API_BASE) 
      ? window.FARMDIRECT_API_BASE.replace(/\/+$/, '') 
      : '';

    try {
      const res = await fetch(`${apiBase}/api/health`, { signal: AbortSignal.timeout(4000) });
      if (res.ok) {
        pill.className = 'backend-status-pill';
        const dot = pill.querySelector('.status-pulse-dot');
        if (dot) dot.className = 'status-pulse-dot online';
        label.innerText = '🟢 Backend: Online (v2.0)';
        return true;
      }
    } catch (e) {}

    pill.className = 'backend-status-pill offline';
    const dot = pill.querySelector('.status-pulse-dot');
    if (dot) dot.className = 'status-pulse-dot offline';
    label.innerText = '🟠 Offline Mode (Active)';
    return false;
  }

  playChime(type = 'success') {
    try {
      if (!this.audioCtx) {
        this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }

      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      const now = this.audioCtx.currentTime;
      if (type === 'success') {
        osc.frequency.setValueAtTime(587.33, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.15);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
        osc.start(now);
        osc.stop(now + 0.4);
      } else if (type === 'notify') {
        osc.frequency.setValueAtTime(659.25, now);
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
        osc.start(now);
        osc.stop(now + 0.25);
      }
    } catch (e) {}
  }

  showToast(message, type = 'success') {
    const toast = document.getElementById('appToast');
    if (!toast) return;
    toast.innerText = message;
    toast.className = `app-toast show ${type}`;
    this.playChime(type === 'success' ? 'success' : 'notify');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3500);
  }

  setupNavigation() {
    const navButtons = document.querySelectorAll('[data-nav-tab]');
    navButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetTab = btn.getAttribute('data-nav-tab');
        this.switchTab(targetTab);
        window.location.hash = targetTab;
      });
    });

    // Support direct URL hash links (e.g. #voice, #tab-voice, #talk)
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (hash === 'voice' || hash === 'tab-voice') {
        this.switchTab('voice');
      } else if (hash === 'talk' || hash === 'homevoiceherocard') {
        this.switchTab('home');
        const hero = document.getElementById('homeVoiceHeroCard');
        if (hero) hero.scrollIntoView({ behavior: 'smooth' });
      } else if (hash && ['home', 'book', 'queue', 'markets', 'track'].includes(hash)) {
        this.switchTab(hash);
      }
    };

    window.addEventListener('hashchange', handleHash);
    handleHash();
  }

  switchTab(tabId) {
    this.currentTab = tabId;
    document.querySelectorAll('[data-nav-tab]').forEach(btn => {
      if (btn.getAttribute('data-nav-tab') === tabId) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    document.querySelectorAll('.tab-section').forEach(sec => {
      if (sec.id === `tab-${tabId}`) {
        sec.classList.add('active');
      } else {
        sec.classList.remove('active');
      }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  setupLanguageSwitcher() {
    const selector = document.getElementById('langSelect');
    if (selector) {
      selector.value = currentLanguage;
      selector.addEventListener('change', (e) => {
        const lang = e.target.value;
        this.changeLanguage(lang);
        this.showToast(`Language switched to ${e.target.selectedOptions[0].text}`);
      });
    }
  }

  changeLanguage(lang) {
    setLanguage(lang);
    VoiceAssistant.setVoiceLanguage(lang);
    this.applyTranslations();
    this.setupDropdowns();
    this.updateMarketListings();
    this.runProfitCalculation();
  }

  applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      el.innerText = t(key);
    });

    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.getAttribute('data-i18n-ph');
      el.setAttribute('placeholder', t(key));
    });

    if (typeof this.renderBestSellingDestinations === 'function') {
      this.renderBestSellingDestinations(this.activeCropFilter || 'chilli');
    }
  }

  setupSecurityAndBiometrics() {
    // 1. Biometric Trigger
    document.querySelectorAll('.btn-biometric-trigger').forEach(btn => {
      btn.addEventListener('click', () => {
        SecurityManager.authenticateBiometric((user) => {
          this.renderActiveUser(user);
          this.showToast(`${t('biometricSuccess')} (${user.name})`);
          this.autoFillFarmerDetails(user);
        });
      });
    });

    // Close Biometric Modal
    document.getElementById('biometricModalClose')?.addEventListener('click', () => {
      document.getElementById('biometricModal')?.classList.remove('active');
    });

    // 2. Security Password Login Trigger & Modal
    const passLoginModal = document.getElementById('passwordLoginModal');
    document.querySelectorAll('.btn-password-login-trigger').forEach(btn => {
      btn.addEventListener('click', () => {
        if (passLoginModal) passLoginModal.classList.add('active');
        document.getElementById('enteredSecurityPin')?.focus();
      });
    });

    document.getElementById('closePasswordLoginModal')?.addEventListener('click', () => {
      passLoginModal?.classList.remove('active');
    });

    document.getElementById('btnSubmitPasswordLogin')?.addEventListener('click', () => {
      const pin = document.getElementById('enteredSecurityPin')?.value;
      const res = SecurityManager.verifySecurityPassword(pin);
      if (res.success) {
        passLoginModal?.classList.remove('active');
        this.renderActiveUser(res.user);
        this.showToast(`${t('passwordSuccess')} (${res.user.name})`);
        this.autoFillFarmerDetails(res.user);
      } else {
        this.showToast(res.message, 'notify');
      }
    });

    // 3. Fix / Set Security Password Trigger & Modal
    const fixModal = document.getElementById('fixPasswordModal');
    document.querySelectorAll('.btn-fix-password-trigger').forEach(btn => {
      btn.addEventListener('click', () => {
        if (fixModal) fixModal.classList.add('active');
        document.getElementById('newSecurityPin')?.focus();
      });
    });

    document.getElementById('closeFixPasswordModal')?.addEventListener('click', () => {
      fixModal?.classList.remove('active');
    });

    document.getElementById('btnSaveFixedPassword')?.addEventListener('click', () => {
      const newPin = document.getElementById('newSecurityPin')?.value;
      const confirmPin = document.getElementById('confirmSecurityPin')?.value;

      if (!newPin || newPin.trim().length < 4) {
        this.showToast('Password / PIN must be at least 4 digits.', 'notify');
        return;
      }
      if (newPin !== confirmPin) {
        this.showToast('Passwords do not match. Please re-enter.', 'notify');
        return;
      }

      const res = SecurityManager.fixSecurityPassword(newPin);
      if (res.success) {
        fixModal?.classList.remove('active');
        this.showToast(res.message, 'success');
        document.getElementById('currentPasswordDisplay').innerText = `Active PIN: •••• (${newPin})`;
      }
    });

    // Load existing stored profile
    const storedUser = SecurityManager.loadStoredUser();
    if (storedUser) {
      this.renderActiveUser(storedUser);
    }
  }

  renderActiveUser(user = null) {
    const banner = document.getElementById('userProfileBanner');
    const u = user || SecurityManager.currentUser;
    const currentPin = SecurityManager.getSecurityPassword();

    if (banner) {
      if (u) {
        banner.innerHTML = `
          <div class="user-pill">
            <span class="pulse-dot"></span>
            <span class="user-name">👤 ${u.name}</span>
            <span class="user-badge">${t('kisanId')}: ${u.kisanId}</span>
            <span class="bio-verified-tag">✓ Auth: ${u.authMethod || 'Secured'}</span>
            <button class="btn-text-action btn-fix-password-trigger" title="Fix / Change Security Password">
              ⚙️ ${t('fixPasswordBtn')}
            </button>
          </div>
        `;
      } else {
        banner.innerHTML = `
          <div class="auth-buttons-group">
            <button class="btn-fast-bio btn-biometric-trigger">
              <span class="fingerprint-icon">👆</span>
              <span>${t('biometricLoginBtn')}</span>
            </button>
            <button class="btn-fast-pass btn-password-login-trigger">
              <span>🔑</span>
              <span>${t('passwordLoginBtn')}</span>
            </button>
            <button class="btn-fix-pill btn-fix-password-trigger">
              <span>⚙️</span>
              <span>${t('fixPasswordBtn')}</span>
            </button>
          </div>
        `;
      }

      // Re-bind triggers
      banner.querySelector('.btn-biometric-trigger')?.addEventListener('click', () => {
        SecurityManager.authenticateBiometric((verified) => {
          this.renderActiveUser(verified);
          this.showToast(`${t('biometricSuccess')} (${verified.name})`);
          this.autoFillFarmerDetails(verified);
        });
      });

      banner.querySelector('.btn-password-login-trigger')?.addEventListener('click', () => {
        document.getElementById('passwordLoginModal')?.classList.add('active');
        document.getElementById('enteredSecurityPin')?.focus();
      });

      banner.querySelector('.btn-fix-password-trigger')?.addEventListener('click', () => {
        document.getElementById('fixPasswordModal')?.classList.add('active');
        document.getElementById('newSecurityPin')?.focus();
      });
    }
  }

  autoFillFarmerDetails(user) {
    const nameEl = document.getElementById('bookFarmerName');
    const mobileEl = document.getElementById('bookMobile');
    const aadhaarEl = document.getElementById('bookAadhaar');
    const stateEl = document.getElementById('bookState');
    const districtEl = document.getElementById('bookDistrict');
    const mandalEl = document.getElementById('bookMandal');

    if (nameEl && !nameEl.value) nameEl.value = user.name;
    if (mobileEl && !mobileEl.value) mobileEl.value = user.mobile;
    if (aadhaarEl && !aadhaarEl.value) aadhaarEl.value = user.aadhaarLast4;
    if (stateEl) {
      stateEl.value = user.state;
      this.populateDistricts('bookState', 'bookDistrict');
    }
    if (districtEl) {
      districtEl.value = user.district;
      this.populateMarketYards('bookDistrict', 'bookMarket');
    }
    if (mandalEl) mandalEl.value = user.mandal || '';
  }

  setupDropdowns() {
    const stateSelects = ['bookState', 'calcState'];
    stateSelects.forEach(selId => {
      const sel = document.getElementById(selId);
      if (!sel) return;
      const prevVal = sel.value;
      sel.innerHTML = `<option value="">-- ${t('fieldState')} --</option>`;
      Object.values(STATES_DISTRICTS_DATA).forEach(st => {
        const opt = document.createElement('option');
        opt.value = st.id;
        opt.innerText = st.name[currentLanguage] || st.name.en;
        sel.appendChild(opt);
      });
      sel.value = prevVal || 'andhra_pradesh';
    });

    const setupDistrictBinding = (stateId, distId, marketId = null) => {
      const stateEl = document.getElementById(stateId);
      const distEl = document.getElementById(distId);
      if (!stateEl || !distEl) return;

      const update = () => {
        this.populateDistricts(stateId, distId);
        if (marketId) {
          this.populateMarketYards(distId, marketId);
        }
      };

      stateEl.addEventListener('change', update);
      distEl.addEventListener('change', () => {
        if (marketId) {
          this.populateMarketYards(distId, marketId);
        }
        if (stateId === 'calcState') {
          this.updateMarketListings();
          this.runProfitCalculation();
        }
      });
    };

    setupDistrictBinding('bookState', 'bookDistrict', 'bookMarket');
    setupDistrictBinding('calcState', 'calcDistrict');

    this.populateDistricts('bookState', 'bookDistrict');
    this.populateMarketYards('bookDistrict', 'bookMarket');
    this.populateDistricts('calcState', 'calcDistrict');

    const cropSelects = ['bookCrop', 'calcCrop'];
    cropSelects.forEach(selId => {
      const sel = document.getElementById(selId);
      if (!sel) return;
      const prev = sel.value;
      sel.innerHTML = '';
      Object.values(CROP_DATA).forEach(c => {
        const opt = document.createElement('option');
        opt.value = c.id;
        const cropName = c.name[currentLanguage] || c.name.en;
        opt.innerText = `${c.icon} ${cropName} (MSP: ₹${c.msp})`;
        sel.appendChild(opt);
      });
      sel.value = prev || 'chilli';
    });

    const vehicleSelects = ['bookVehicle', 'calcVehicle'];
    vehicleSelects.forEach(selId => {
      const sel = document.getElementById(selId);
      if (!sel) return;
      const prev = sel.value;
      sel.innerHTML = '';
      Object.entries(TRANSPORT_RATES).forEach(([key, val]) => {
        const opt = document.createElement('option');
        opt.value = key;
        opt.innerText = `${val.name} • ₹${val.ratePerKm}/km`;
        sel.appendChild(opt);
      });
      sel.value = prev || 'minitruck';
    });
  }

  populateDistricts(stateSelectId, districtSelectId) {
    const stateEl = document.getElementById(stateSelectId);
    const distEl = document.getElementById(districtSelectId);
    if (!stateEl || !distEl) return;

    const stateId = stateEl.value || 'andhra_pradesh';
    const stateData = STATES_DISTRICTS_DATA[stateId];
    distEl.innerHTML = '';

    if (stateData && stateData.districts) {
      Object.values(stateData.districts).forEach(d => {
        const opt = document.createElement('option');
        opt.value = d.id;
        opt.innerText = d.name[currentLanguage] || d.name.en;
        distEl.appendChild(opt);
      });
    }
  }

  populateMarketYards(districtSelectId, marketSelectId) {
    const distEl = document.getElementById(districtSelectId);
    const mktEl = document.getElementById(marketSelectId);
    if (!distEl || !mktEl) return;

    const distId = distEl.value;
    mktEl.innerHTML = '';

    const stateSelectId = districtSelectId === 'bookDistrict' ? 'bookState' : 'calcState';
    const stateId = document.getElementById(stateSelectId)?.value || 'andhra_pradesh';
    const districtData = STATES_DISTRICTS_DATA[stateId]?.districts[distId];

    if (districtData && districtData.markets) {
      districtData.markets.forEach(m => {
        const opt = document.createElement('option');
        opt.value = m.id;
        const name = currentLanguage === 'te' && m.nameTe ? m.nameTe : m.name;
        opt.innerText = `${name} (${m.type})`;
        mktEl.appendChild(opt);
      });
    }
  }

  setupSlotBooking() {
    const form = document.getElementById('slotBookingForm');
    const today = new Date().toISOString().split('T')[0];
    const dateInput = document.getElementById('bookDate');
    if (dateInput) {
      dateInput.min = today;
      dateInput.value = today;
    }

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = {
          farmerName: document.getElementById('bookFarmerName').value,
          mobile: document.getElementById('bookMobile').value,
          aadhaar: document.getElementById('bookAadhaar').value,
          state: document.getElementById('bookState').value,
          district: document.getElementById('bookDistrict').value,
          mandal: document.getElementById('bookMandal').value,
          marketId: document.getElementById('bookMarket').value,
          marketName: document.getElementById('bookMarket').selectedOptions[0]?.text,
          cropId: document.getElementById('bookCrop').value,
          quantityQtl: document.getElementById('bookQuantity').value,
          vehicleType: document.getElementById('bookVehicle').value,
          vehicleNo: document.getElementById('bookVehicleNo').value,
          slotDate: document.getElementById('bookDate').value,
          slotTime: document.getElementById('bookTimeSlot').value
        };

        const newBooking = QueueManager.createBooking(formData);
        this.showToast(`${t('bookingSuccess')} Token: ${newBooking.token}`);
        this.renderTokenSlipModal(newBooking);
        this.renderLiveQueueBoard();
      });
    }
  }

  renderTokenSlipModal(booking) {
    const modal = document.getElementById('tokenSlipModal');
    const content = document.getElementById('tokenSlipContent');
    if (!modal || !content) return;

    const qrSvg = QueueManager.generateQrSvg(booking.token);

    content.innerHTML = `
      <div class="digital-token-pass">
        <div class="pass-header">
          <div class="gov-emblem">🌾 RYTHU SEVA DIGITAL PASS</div>
          <div class="token-code">${booking.token}</div>
          <div class="pass-gate">${booking.gateNo}</div>
        </div>

        <div class="pass-body">
          <div class="pass-qr-wrap">
            ${qrSvg}
            <div class="scan-label">Scan at Mandi Entry Gate</div>
          </div>

          <div class="pass-details-grid">
            <div class="detail-item">
              <span class="detail-label">${t('fieldName')}:</span>
              <span class="detail-val font-bold">${booking.farmerName}</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">${t('fieldCrop')}:</span>
              <span class="detail-val">${booking.cropName} (${booking.quantityQtl} Qtl)</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">${t('fieldMarket')}:</span>
              <span class="detail-val">${booking.marketName}</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">Reporting Window:</span>
              <span class="detail-val font-bold text-emerald-700">${booking.slotDate} • ${booking.slotTime}</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">Vehicle Reg:</span>
              <span class="detail-val">${booking.vehicleNo} (${booking.vehicleType.toUpperCase()})</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">Current Queue Position:</span>
              <span class="detail-val queue-num">${booking.queuePosition} Vehicles Ahead</span>
            </div>
          </div>
        </div>

        <div class="pass-footer">
          <button class="btn btn-primary" onclick="window.print()">🖨️ Print / Save Pass</button>
          <button class="btn btn-secondary" id="closePassModal">Done</button>
        </div>
      </div>
    `;

    modal.classList.add('active');
    document.getElementById('closePassModal')?.addEventListener('click', () => {
      modal.classList.remove('active');
      this.switchTab('queue');
    });
  }

  setupQueueUI() {
    const btnSimulate = document.getElementById('btnSimulateAdvance');
    if (btnSimulate) {
      btnSimulate.addEventListener('click', () => {
        const result = QueueManager.advanceQueue();
        this.renderLiveQueueBoard();
        this.showToast(`Calling Token ${result.nowServing}! Gate Pass verified.`);
        this.playChime('notify');
      });
    }
  }

  async refreshQueueSilently() {
    try {
      await QueueManager.syncWithBackend();
    } catch (e) {}
    this.renderLiveQueueBoard();
    this.checkBackendHealth();
  }

  renderLiveQueueBoard() {
    const servingEl = document.getElementById('nowServingTokenDisplay');
    const homeServing = document.getElementById('homeServingToken');
    const activeTableBody = document.getElementById('liveQueueTableBody');

    if (servingEl) servingEl.innerText = QueueManager.currentlyServingToken;
    if (homeServing) homeServing.innerText = QueueManager.currentlyServingToken;

    if (activeTableBody) {
      activeTableBody.innerHTML = '';
      QueueManager.bookings.slice(0, 8).forEach(b => {
        const tr = document.createElement('tr');
        const statusBadge = this.getStatusBadge(b.status);
        tr.innerHTML = `
          <td><strong>${b.token}</strong></td>
          <td>${b.farmerName}</td>
          <td>${b.cropName}</td>
          <td>${b.quantityQtl} Qtl</td>
          <td><span class="badge ${b.estWaitMins <= 15 ? 'badge-green' : 'badge-amber'}">${b.estWaitMins} mins</span></td>
          <td>${statusBadge}</td>
          <td>
            <button class="btn-table-action" onclick="app.viewBookingDetails('${b.token}')">View</button>
          </td>
        `;
        activeTableBody.appendChild(tr);
      });
    }
  }

  getStatusBadge(status) {
    switch (status) {
      case 'booked': return '<span class="status-pill pill-blue">Slot Booked</span>';
      case 'arrived': return '<span class="status-pill pill-amber">Gate Inward</span>';
      case 'inspected': return '<span class="status-pill pill-purple">Quality Passed</span>';
      case 'weighed': return '<span class="status-pill pill-indigo">Weighed</span>';
      case 'billed': return '<span class="status-pill pill-teal">MSP Bill Issued</span>';
      case 'paid': return '<span class="status-pill pill-green">DBT Paid</span>';
      default: return '<span class="status-pill">Pending</span>';
    }
  }

  setupBestSellingDestinations() {
    this.activeCropFilter = 'chilli';
    const pills = document.querySelectorAll('#bestCropFilterPills .crop-pill-btn');
    pills.forEach(btn => {
      btn.addEventListener('click', () => {
        pills.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cropId = btn.getAttribute('data-crop');
        this.activeCropFilter = cropId;
        this.renderBestSellingDestinations(cropId);
      });
    });
    this.renderBestSellingDestinations('chilli');
  }

  renderBestSellingDestinations(cropId = 'chilli') {
    const container = document.getElementById('bestDestinationsView');
    if (!container) return;

    const data = BEST_SELLING_DESTINATIONS[cropId] || BEST_SELLING_DESTINATIONS.chilli;
    const crop = CROP_DATA[cropId] || CROP_DATA.chilli;
    const cropName = crop.name[currentLanguage] || crop.name.en;

    let mandisHtml = '';
    data.topSellingMandis.forEach((m, idx) => {
      const name = currentLanguage === 'te' && m.nameTe ? m.nameTe : m.name;
      const reason = currentLanguage === 'te' && m.reasonTe ? m.reasonTe : m.reason;
      mandisHtml += `
        <div class="mandi-rank-item ${idx === 0 ? 'top-rank' : ''}">
          <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:8px;">
            <div>
              <div style="display:flex; align-items:center; gap:6px;">
                <span class="badge ${idx === 0 ? 'badge-green' : 'badge-amber'}">#${idx + 1} Best Choice</span>
                <strong style="font-size:0.95rem; color:#0f172a;">${name}</strong>
              </div>
              <p style="font-size:0.78rem; color:#64748b; margin-top:2px;">📍 ${m.district}, ${m.state}</p>
            </div>
            <div style="text-align:right;">
              <div style="font-size:1.15rem; font-weight:800; color:#059669;">₹${m.price.toLocaleString('en-IN')}<span style="font-size:0.75rem; color:#64748b; font-weight:500;">/Qtl</span></div>
              <span style="font-size:0.72rem; color:#10b981; font-weight:700;">${m.benchmarkDiff}</span>
            </div>
          </div>
          <div style="font-size:0.82rem; color:#334155; margin-top:8px; line-height:1.4;">
            💡 <strong>${currentLanguage === 'te' ? 'ఎందుకు ఉత్తమం:' : 'Why it pays most:'}</strong> ${reason}
          </div>
          <div style="margin-top:8px; font-size:0.75rem; color:#047857; font-weight:600;">
            ${m.rating}
          </div>
        </div>
      `;
    });

    const primaryAreas = currentLanguage === 'te' && data.preferredBuyingHubs.primaryAreasTe ? data.preferredBuyingHubs.primaryAreasTe : data.preferredBuyingHubs.primaryAreas;
    let buyersHtml = '';
    data.preferredBuyingHubs.buyerClusters.forEach(b => {
      const bName = currentLanguage === 'te' && b.nameTe ? b.nameTe : b.name;
      const pref = currentLanguage === 'te' && b.preferenceTe ? b.preferenceTe : b.preference;
      buyersHtml += `
        <div class="buyer-cluster-item">
          <div style="font-weight:700; color:#1e293b; font-size:0.88rem;">🏢 ${bName}</div>
          <div style="font-size:0.78rem; color:#64748b; margin-top:2px;">📍 <strong>${currentLanguage === 'te' ? 'కొనుగోలు ప్రాంతాలు:' : 'Presence:'}</strong> ${b.presence}</div>
          <div style="font-size:0.82rem; color:#0f172a; margin-top:4px;">
            ✓ <strong>${currentLanguage === 'te' ? 'నాణ్యత ప్రమాణం:' : 'Preference:'}</strong> ${pref}
          </div>
        </div>
      `;
    });

    const whyText = currentLanguage === 'te' && data.preferredBuyingHubs.whyPreferThisAreaTe ? data.preferredBuyingHubs.whyPreferThisAreaTe : data.preferredBuyingHubs.whyPreferThisArea;

    container.innerHTML = `
      <div class="best-destinations-grid">
        <!-- Left: Top Ranked Mandis -->
        <div class="destinations-card">
          <h4 style="font-size:1rem; color:#064e3b; margin-bottom:12px; display:flex; align-items:center; gap:6px;">
            <span>🏆</span>
            <span data-i18n="topMandisSellTitle">${t('topMandisSellTitle')}</span> (${cropName})
          </h4>
          <div class="mandis-rank-list">
            ${mandisHtml}
          </div>
        </div>

        <!-- Right: Preferred Buying Hubs & Demand Clusters -->
        <div class="destinations-card">
          <h4 style="font-size:1rem; color:#1e40af; margin-bottom:12px; display:flex; align-items:center; gap:6px;">
            <span>🏢</span>
            <span data-i18n="whoPreferablyBuysTitle">${t('whoPreferablyBuysTitle')}</span>
          </h4>
          <div style="background:#eff6ff; border:1px solid #bfdbfe; border-radius:var(--radius-sm); padding:10px 12px; margin-bottom:12px;">
            <div style="font-size:0.78rem; font-weight:700; color:#1e40af; text-transform:uppercase;">
              📍 ${currentLanguage === 'te' ? 'ప్రధాన కొనుగోలు ప్రాంతాలు:' : 'Primary Buying Hubs:'}
            </div>
            <div style="font-size:0.88rem; color:#1e3a8a; font-weight:600; margin-top:4px;">
              ${primaryAreas.join(' • ')}
            </div>
          </div>

          <div class="buyer-clusters-list">
            ${buyersHtml}
          </div>

          <div style="background:#f0fdf4; border:1px solid #bbf7d0; border-radius:var(--radius-sm); padding:10px 12px; margin-top:10px; font-size:0.8rem; color:#166534;">
            <strong>${t('whyBuyersPreferLabel')}</strong> ${whyText}
          </div>
        </div>
      </div>
    `;
  }

  setupMarketCalculator() {
    const calcBtn = document.getElementById('btnRunCalculator');
    const cropSel = document.getElementById('calcCrop');
    const qtyInput = document.getElementById('calcQuantity');
    const vehSel = document.getElementById('calcVehicle');
    const distSel = document.getElementById('calcDistrict');

    const triggerUpdate = () => {
      this.updateMarketListings();
      this.runProfitCalculation();
    };

    if (calcBtn) calcBtn.addEventListener('click', triggerUpdate);
    if (cropSel) cropSel.addEventListener('change', triggerUpdate);
    if (qtyInput) qtyInput.addEventListener('input', triggerUpdate);
    if (vehSel) vehSel.addEventListener('change', triggerUpdate);
    if (distSel) distSel.addEventListener('change', triggerUpdate);
  }

  updateMarketListings() {
    const stateId = document.getElementById('calcState')?.value || 'andhra_pradesh';
    const distId = document.getElementById('calcDistrict')?.value || 'guntur';
    const cropId = document.getElementById('calcCrop')?.value || 'chilli';
    const container = document.getElementById('districtMarketsList');

    if (!container) return;

    const state = STATES_DISTRICTS_DATA[stateId];
    const district = state?.districts[distId];

    if (!district || !district.markets || district.markets.length === 0) {
      container.innerHTML = `<div class="empty-notice">No government markets registered for this district yet.</div>`;
      return;
    }

    container.innerHTML = '';
    district.markets.forEach(m => {
      const cropInfo = m.crops && m.crops[cropId] ? m.crops[cropId] : null;
      const crop = CROP_DATA[cropId];
      const price = cropInfo ? cropInfo.price : crop.avgMarketPrice;
      const demand = cropInfo ? cropInfo.demand : crop.demandLevel;

      const name = currentLanguage === 'te' && m.nameTe ? m.nameTe : m.name;
      const card = document.createElement('div');
      card.className = 'market-info-card';
      card.innerHTML = `
        <div class="market-card-top">
          <div>
            <h4 class="market-name">${name}</h4>
            <span class="market-badge">${m.type}</span>
          </div>
          <div class="price-pill">
            <span class="rate-num">₹${price.toLocaleString('en-IN')}</span>
            <span class="rate-unit">/ Qtl</span>
          </div>
        </div>

        <div class="market-card-body">
          <p class="market-addr">📍 ${m.address}</p>
          <div class="market-meta-row">
            <span class="meta-item">🕒 ${m.operatingHours}</span>
            <span class="meta-item">📞 ${m.phone}</span>
            <span class="meta-item ${m.congestion === 'green' ? 'text-green' : (m.congestion === 'amber' ? 'text-amber' : 'text-red')}">
              🚦 ${m.currentQueueVehicles} Vehicles in Queue (~${m.currentWaitMins}m wait)
            </span>
          </div>
          <div class="demand-row">
            <span class="demand-badge ${demand}">
              ${demand === 'very_high' ? '🔥 ' + t('veryHighDemand') : (demand === 'high' ? '🟢 ' + t('highDemand') : '🟡 ' + t('steadyDemand'))}
            </span>
            <span class="msp-diff">${cropInfo ? cropInfo.mspComparison : 'Govt Benchmark'}</span>
          </div>
        </div>

        <div class="market-card-footer">
          <a href="${m.mapUrl}" target="_blank" rel="noopener" class="btn btn-outline btn-sm">
            🗺️ ${t('viewOnMap')}
          </a>
          <button class="btn btn-secondary btn-sm" onclick="app.prefillSlot('${m.id}', '${cropId}')">
            ⚡ Book Slot Here
          </button>
        </div>
      `;
      container.appendChild(card);
    });
  }

  runProfitCalculation() {
    const stateId = document.getElementById('calcState')?.value || 'andhra_pradesh';
    const distId = document.getElementById('calcDistrict')?.value || 'guntur';
    const cropId = document.getElementById('calcCrop')?.value || 'chilli';
    const quantityQtl = Number(document.getElementById('calcQuantity')?.value) || 30;
    const vehicleType = document.getElementById('calcVehicle')?.value || 'minitruck';

    const results = ProfitCalculator.findBestMarkets({
      stateId,
      districtId: distId,
      cropId,
      quantityQtl,
      vehicleType
    });

    const resultsContainer = document.getElementById('profitResultsList');
    if (!resultsContainer) return;

    if (results.length === 0) {
      resultsContainer.innerHTML = `<div class="empty-notice">No calculation data available.</div>`;
      return;
    }

    resultsContainer.innerHTML = '';
    results.forEach((res, index) => {
      const card = document.createElement('div');
      card.className = `profit-result-card ${res.isBestChoice ? 'best-choice' : ''}`;
      
      const mktName = currentLanguage === 'te' && res.marketNameTe ? res.marketNameTe : res.marketName;

      card.innerHTML = `
        ${res.isBestChoice ? `<div class="best-choice-ribbon">${t('bestChoiceBadge')}</div>` : ''}
        <div class="result-card-header">
          <div>
            <span class="rank-number">#${index + 1}</span>
            <strong class="result-market-name">${mktName}</strong>
            <span class="dist-tag">~${res.distanceKm} km</span>
          </div>
          <div class="net-profit-badge">
            <span class="net-label">${t('netProfitAmount')}:</span>
            <span class="net-value">₹${res.netProfit.toLocaleString('en-IN')}</span>
          </div>
        </div>

        <div style="background:#f8fafc; border:1px solid #d1fae5; border-radius:6px; padding:8px 12px; margin: 8px 0 12px; font-size:0.84rem; color:#065f46; font-weight:600;">
          📐 <strong>Best Selling</strong> = ₹${res.grossRevenue.toLocaleString('en-IN')} (Price) − ₹${res.transportCost.toLocaleString('en-IN')} (Transport) − ₹${res.otherCharges.toLocaleString('en-IN')} (Charges) = <span style="color:#047857; font-weight:800;">₹${res.netProfit.toLocaleString('en-IN')}</span> Net Payout
        </div>

        <div class="formula-breakdown-grid">
          <div class="formula-col plus">
            <span class="f-label">${t('grossRevenue')}</span>
            <span class="f-val">₹${res.grossRevenue.toLocaleString('en-IN')}</span>
            <span class="f-sub">(₹${res.pricePerQtl}/Qtl × ${quantityQtl})</span>
          </div>
          <div class="formula-col minus">
            <span class="f-label">${t('transportDeduction')}</span>
            <span class="f-val">- ₹${res.transportCost.toLocaleString('en-IN')}</span>
            <span class="f-sub">(${res.distanceKm} km via ${res.breakdown.vehicleType.split('(')[0]})</span>
          </div>
          <div class="formula-col minus">
            <span class="f-label">${t('otherChargesDeduction')}</span>
            <span class="f-val">- ₹${res.otherCharges.toLocaleString('en-IN')}</span>
            <span class="f-sub">(Hamali ₹${res.breakdown.hamaliTotal} + Weighing ₹${res.breakdown.weighmentTotal})</span>
          </div>
          <div class="formula-col equals">
            <span class="f-label">${t('netPerQtl')}</span>
            <span class="f-val text-emerald-600">₹${res.netPerQtl.toLocaleString('en-IN')}</span>
            <span class="f-sub">Realized in Hand</span>
          </div>
        </div>

        <div class="result-action-bar">
          <a href="${res.mapUrl}" target="_blank" rel="noopener" class="text-link">📍 View Directions on Maps</a>
          <button class="btn btn-primary btn-sm" onclick="app.prefillSlot('${res.marketId}', '${cropId}')">
            Select & Book Slot (₹${res.netProfit.toLocaleString('en-IN')})
          </button>
        </div>
      `;
      resultsContainer.appendChild(card);
    });
  }

  prefillSlot(marketId, cropId) {
    this.switchTab('book');
    const cropSel = document.getElementById('bookCrop');
    if (cropSel && cropId) cropSel.value = cropId;
    const mktSel = document.getElementById('bookMarket');
    if (mktSel && marketId) mktSel.value = marketId;
    this.showToast(`Selected Market Yard for Slot Booking!`);
  }

  setupTracker() {
    const trackBtn = document.getElementById('btnSearchToken');
    const input = document.getElementById('trackTokenInput');
    const resultBox = document.getElementById('trackResultBox');

    const doTrack = async () => {
      const q = input.value.trim();
      if (!q) {
        this.showToast('Please enter a valid Token or Mobile Number', 'notify');
        return;
      }

      const booking = await QueueManager.findBookingAsync(q);
      if (!booking) {
        resultBox.style.display = 'block';
        resultBox.innerHTML = `
          <div class="not-found-card">
            <p>⚠️ No record found for "<strong>${q}</strong>". Try sample token: <code>AP-GNT-2026-0842</code> or your mobile number.</p>
          </div>
        `;
        return;
      }

      this.renderTrackerResult(booking);
    };

    if (trackBtn) trackBtn.addEventListener('click', doTrack);
    if (input) {
      input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') doTrack();
      });
    }
  }

  async viewBookingDetails(token) {
    this.switchTab('track');
    const input = document.getElementById('trackTokenInput');
    if (input) input.value = token;
    const booking = await QueueManager.findBookingAsync(token);
    if (booking) {
      this.renderTrackerResult(booking);
    }
  }

  renderTrackerResult(b) {
    const resultBox = document.getElementById('trackResultBox');
    if (!resultBox) return;

    resultBox.style.display = 'block';

    const stages = [
      { id: 'booked', label: t('stage1'), desc: `Slot confirmed for ${b.slotDate}` },
      { id: 'arrived', label: t('stage2'), desc: `${b.gateNo} Entry Recorded` },
      { id: 'inspected', label: t('stage3'), desc: b.moisturePercent ? `Moisture: ${b.moisturePercent}%, ${b.qualityGrade}` : 'Moisture & Impurity Test' },
      { id: 'weighed', label: t('stage4'), desc: b.netWeightQtl ? `Gross: ${b.grossWeightQtl} Qtl, Net: ${b.netWeightQtl} Qtl` : 'Electronic Weighbridge Pass' },
      { id: 'billed', label: t('stage5'), desc: `Procurement Bill: ₹${b.totalAmount.toLocaleString('en-IN')}` },
      { id: 'paid', label: t('stage6'), desc: b.dbtStatus || 'Direct Bank Transfer' }
    ];

    const stageOrder = ['booked', 'arrived', 'inspected', 'weighed', 'billed', 'paid'];
    const currentIdx = stageOrder.indexOf(b.status);

    const stepsHtml = stages.map((st, idx) => {
      const isCompleted = idx <= currentIdx;
      const isCurrent = idx === currentIdx;
      return `
        <div class="tracker-step ${isCompleted ? 'completed' : ''} ${isCurrent ? 'current' : ''}">
          <div class="step-circle">${isCompleted ? '✓' : idx + 1}</div>
          <div class="step-content">
            <div class="step-title">${st.label}</div>
            <div class="step-desc">${st.desc}</div>
          </div>
        </div>
      `;
    }).join('');

    resultBox.innerHTML = `
      <div class="tracker-card">
        <div class="tracker-card-header">
          <div>
            <span class="token-title">${b.token}</span>
            <div class="farmer-meta">${b.farmerName} • 📱 ${b.mobile}</div>
          </div>
          <div class="amount-pill">
            <span>Bill Amount:</span>
            <strong>₹${b.totalAmount.toLocaleString('en-IN')}</strong>
          </div>
        </div>

        <div class="tracker-stepper">
          ${stepsHtml}
        </div>

        <div class="dbt-status-box ${b.status === 'paid' ? 'paid-success' : ''}">
          <div class="dbt-icon">🏛️</div>
          <div class="dbt-details">
            <span class="dbt-heading">DBT Bank Transfer Status:</span>
            <span class="dbt-msg">${b.dbtStatus}</span>
            <span class="dbt-account">Target Bank: ${b.dbtBank} (A/c **${b.dbtAccountLast4})</span>
          </div>
        </div>
      </div>
    `;
  }

  setupVoiceUI() {
    // Voice Assistant DOM events are cleanly attached by VoiceAssistant.attachDomListeners()
    // in js/voice.js with duplicate protection (data-bound flags) to prevent multi-triggering.
  }
}

window.app = new RythuSevaApp();
document.addEventListener('DOMContentLoaded', () => {
  window.app.init();
});
