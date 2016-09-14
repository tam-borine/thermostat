const PS = 25;
const PS_OFF = 32;
const MIN = 10;
const DEF_TEMPERATURE = 20;
const DEFAULT_COLOUR = "yellow"

function Thermostat() {
  this._temperature = DEF_TEMPERATURE;
  this._maxTemp = PS;
  this._colour = DEFAULT_COLOUR;
}

Thermostat.prototype = {
  temperature: function() {
    return this._temperature;
  },
  up: function() {
    if (this._temperature < this._maxTemp){
        this._temperature ++;
        this.colour();
    }
  },

  down: function() {
    if (this._temperature > MIN) {
      this._temperature --;
      this.colour();
    }
  },

  pstoggle: function() {
  this._maxTemp == PS ? this._maxTemp = PS_OFF : this._maxTemp = PS;
  },

  reset: function() {
    this._temperature = DEF_TEMPERATURE;
  },

  colour: function() {
    if (this._temperature < 18) {
      this._colour = "green"
    } else if (this._temperature > 24){
      this._colour = "red"
    } else {
      this._colour = DEFAULT_COLOUR
    }
  }

};
$(document).ready(function(){
  var thermostat = new Thermostat();
  $('#temp').text(thermostat._temperature);

  $('#temp-up').on('click', function(){
    thermostat.up()
    $('#temp').text(thermostat._temperature);
  });
  $('#temp-down').on('click', function(){
    thermostat.down()
    $('#temp').text(thermostat._temperature);
  });
  $('#temp-reset').on('click', function(){
    thermostat.reset()
    $('#temp').text(thermostat._temperature);
  });
  $('#psm').on('click', function(){
    thermostat.pstoggle()
    $('#temp').text(thermostat._temperature);
  });
});
