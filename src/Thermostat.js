function Thermostat() {
  this._temperature = 20;

}

Thermostat.prototype = {
  temperature: function() {
    return this._temperature;
  },
  up: function() {
    this._temperature ++;
  },
  down: function() {
    if (this._temperature > 10) {
      this._temperature --;
    }    
  }
};
