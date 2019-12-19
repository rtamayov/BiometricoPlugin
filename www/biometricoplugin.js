// Empty constructor
function BiometricoPlugin() {}

// The function that passes work along to native shells
// Message is a string, duration may be 'long' or 'short'
BiometricoPlugin.prototype.bio = function(successCallback, errorCallback) {
  var options = {};
  cordova.exec(successCallback, errorCallback, 'BiometricoPlugin', 'bio', [options]);
}

// Installation constructor that binds ToastyPlugin to window
BiometricoPlugin.install = function() {
  if (!window.plugins) {
    window.plugins = {};
  }
  window.plugins.biometricoPlugin = new BiometricoPlugin();
  return window.plugins.biometricoPlugin;
};
cordova.addConstructor(BiometricoPlugin.install);