function Thermostat() {
  this.temperature = 20;
  this.minTemperature = 10;
  this.maxTemperature = 25;
}

Thermostat.prototype = {
  increaseTemperature: function() {
    if (this.temperature < this.maxTemperature) {
    this.temperature ++ ;
  }
    else {this.temperature = this.maxTemperature ;}
  },

  decreaseTemperature: function() {
    if (this.temperature >= this.minTemperature)   {
       this.temperature -- ;
    }
    else { this.temperature = this.minTemperature;}
  },

  powerSaveSwitch: function() {
    (this.maxTemperature == 25) ? this.maxTemperature = 32 : this.maxTemperature = 25;
  },

  reset: function() {
    this.temperature = 20;
  }
};
