
var helperModule = (function() {
  var _helpers = {};

   _helpers.decrement = function(n, thermostat) {
    for (var i = 0; i < n; i++) {
      thermostat.decreaseTemperature();
    }
};
console.log(_helpers);
return _helpers;
})();
