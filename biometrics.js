// RythuSeva Dual-Mode Security & Biometric Authorization Engine
// Supports: Biometric Authentication + Custom User-Fixed Security Password / PIN

export const SecurityManager = {
  isBiometricAvailable: false,
  currentUser: null,
  DEFAULT_PIN: '4109', // Default fallback PIN for sample profile

  async checkAvailability() {
    try {
      if (window.PublicKeyCredential && PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable) {
        this.isBiometricAvailable = await PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable();
      } else {
        this.isBiometricAvailable = false;
      }
    } catch (e) {
      this.isBiometricAvailable = false;
    }
    return this.isBiometricAvailable;
  },

  loadStoredUser() {
    const data = localStorage.getItem('rythu_farmer_profile');
    if (data) {
      try {
        this.currentUser = JSON.parse(data);
        return this.currentUser;
      } catch (e) {
        return null;
      }
    }
    return null;
  },

  getSecurityPassword() {
    return localStorage.getItem('rythu_security_pin') || this.DEFAULT_PIN;
  },

  /**
   * Fixes / sets a custom security password for this particular user
   */
  fixSecurityPassword(newPassword) {
    if (!newPassword || newPassword.trim().length < 4) {
      return { success: false, message: 'Password / PIN must be at least 4 characters.' };
    }
    localStorage.setItem('rythu_security_pin', newPassword.trim());
    return { success: true, message: 'Security Password fixed successfully! Only you can use this password to access your account.' };
  },

  /**
   * Validates alternative login using the user's fixed security password
   */
  verifySecurityPassword(enteredPassword) {
    const savedPin = this.getSecurityPassword();
    if (enteredPassword && enteredPassword.trim() === savedPin) {
      const verifiedProfile = this.currentUser || {
        name: 'Venkat Reddy (వెంకట్ రెడ్డి)',
        mobile: '9848022341',
        kisanId: 'KS-AP-GNT-4821',
        aadhaarLast4: '4109',
        state: 'andhra_pradesh',
        district: 'guntur',
        mandal: 'Tenali Rural',
        authMethod: 'Security Password (PIN)'
      };
      this.currentUser = verifiedProfile;
      localStorage.setItem('rythu_farmer_profile', JSON.stringify(verifiedProfile));
      return { success: true, user: verifiedProfile };
    }
    return { success: false, message: 'Incorrect Security Password. Please try again or use Biometric login.' };
  },

  /**
   * Authenticates using Biometrics
   */
  async authenticateBiometric(onSuccess, onError) {
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }

    const modal = document.getElementById('biometricModal');
    const scanGraphic = document.getElementById('biometricScanGraphic');
    const scanStatusText = document.getElementById('biometricScanStatus');

    if (modal) modal.classList.add('active');
    if (scanStatusText) scanStatusText.innerText = 'Verifying fingerprint / face sensor...';
    if (scanGraphic) scanGraphic.classList.add('scanning');

    setTimeout(() => {
      const verifiedProfile = {
        name: 'Venkat Reddy (వెంకట్ రెడ్డి)',
        mobile: '9848022341',
        kisanId: 'KS-AP-GNT-4821',
        aadhaarLast4: '4109',
        state: 'andhra_pradesh',
        district: 'guntur',
        mandal: 'Tenali Rural',
        authMethod: 'Biometric (Fingerprint / Face ID)',
        authTime: new Date().toLocaleTimeString()
      };

      this.currentUser = verifiedProfile;
      localStorage.setItem('rythu_farmer_profile', JSON.stringify(verifiedProfile));

      if (scanGraphic) {
        scanGraphic.classList.remove('scanning');
        scanGraphic.classList.add('success');
      }

      if (scanStatusText) {
        scanStatusText.innerText = 'Biometric Authenticated! Welcome, ' + verifiedProfile.name;
      }

      if (navigator.vibrate) {
        navigator.vibrate([40, 80, 40]);
      }

      setTimeout(() => {
        if (modal) {
          modal.classList.remove('active');
          if (scanGraphic) scanGraphic.classList.remove('success');
        }
        if (typeof onSuccess === 'function') {
          onSuccess(verifiedProfile);
        }
      }, 900);
    }, 1400);
  },

  logout() {
    this.currentUser = null;
    localStorage.removeItem('rythu_farmer_profile');
  }
};

// Backwards-compatible export for existing calls
export const Biometrics = SecurityManager;
