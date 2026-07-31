
// ANACONDA MyTV - Device ID Bridge
// Automatically reads ANDROID_ID via native plugin or falls back to localStorage
window.AnacondaDevice = {
  getMac: async function() {
    // Try native Capacitor plugin first
    try {
      if (window.Capacitor && Capacitor.Plugins && Capacitor.Plugins.DeviceId) {
        const result = await Capacitor.Plugins.DeviceId.getDeviceId();
        localStorage.setItem('anaconda_device_id', result.androidId);
        localStorage.setItem('anaconda_mac', result.mac);
        return result;
      }
    } catch(e) { console.log('Native plugin not available, using fallback', e); }

    // Fallback for web preview
    let deviceId = localStorage.getItem('anaconda_device_id');
    if (!deviceId) {
      deviceId = 'AN' + Math.random().toString(36).substring(2, 12).toUpperCase() + Date.now().toString(16).toUpperCase();
      localStorage.setItem('anaconda_device_id', deviceId);
    }
    let hex = deviceId.replace(/[^0-9A-F]/gi,'').toUpperCase();
    if (hex.length < 6) hex = hex.padEnd(6, '0');
    const last6 = hex.slice(-6);
    const mac = `00:1A:79:${last6.slice(0,2)}:${last6.slice(2,4)}:${last6.slice(4,6)}`;
    return { androidId: deviceId, last6: last6, mac: mac };
  }
};

// Auto-inject into Stalker form if exists
document.addEventListener('DOMContentLoaded', async () => {
  const res = await window.AnacondaDevice.getMac();
  console.log('ANACONDA Device MAC:', res);
  // Try to fill input if page has it
  setTimeout(() => {
    const macInput = document.querySelector('input[placeholder*="00:1A:79"]');
    if (macInput && !macInput.value) macInput.value = res.mac;
  }, 1000);
});
