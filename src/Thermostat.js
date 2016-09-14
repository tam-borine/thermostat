const PS = 25
const PS_OFF = 32
const MIN = 10

function Thermostat() {
  this._temperature = 20;
  this._maxTemp = PS
}

Thermostat.prototype = {
  temperature: function() {
    return this._temperature;
  },
  up: function() {
    if (this._temperature < this._maxTemp){
        this._temperature ++;
    }
  },

  down: function() {
    if (this._temperature > MIN) {
      this._temperature --;
    }
  },

  pstoggle: function() {
  this._maxTemp == PS ? this._maxTemp = PS_OFF : this._maxTemp = PS;
  }
};
