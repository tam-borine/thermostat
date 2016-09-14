
var helperModule = (function() {
  var _helpers = {};

   _helpers.decrement = function(n, thermostat) {
    for (var i = 0; i < n; i++) {
      thermostat.decreaseTemperature();
    }

    _helpers.increment = function(n, thermostat) {
      for (var i = 0; i < n; i++) {
        thermostat.increaseTemperature();
      }
    };
};
console.log(_helpers);
return _helpers;
})();
