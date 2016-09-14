function Thermostat() {
  this.temperature = 20;
  this.minTemperature = 10;
  this.maxTemperature = 25;
  this.colour = "yellow";
}

Thermostat.prototype = {
  increaseTemperature: function() {
    if (this.temperature < this.maxTemperature) {
    this.temperature ++ ;
  }
    else {this.temperature = this.maxTemperature ;}
    this.colourChange();

  },

  decreaseTemperature: function() {
    if (this.temperature >= this.minTemperature)   {
       this.temperature -- ;
    }
    else { this.temperature = this.minTemperature;}
    this.colourChange();

  },

  powerSaveSwitch: function() {
    (this.maxTemperature == 25) ? this.maxTemperature = 32 : this.maxTemperature = 25;
  },

  reset: function() {
    this.temperature = 20;
  },

  colourChange: function() {
    switch(true) {
      case this.temperature < 18:
        this.colour = "green";
        break;
      case this.temperature < 25:
        this.colour = "yellow";
        break;
      default:
        this.colour = "red";
    }
  }


};
