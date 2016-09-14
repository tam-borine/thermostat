$(document).ready(function(){
  var thermostat = new Thermostat();

  function updateTemp() {
    $('#temp').text(thermostat._temperature);
    $('#temp').css('color', thermostat._colour);
  }

  $('#temp').text(thermostat._temperature);

  $('#temp-up').on('click', function(){
    thermostat.up()
    updateTemp()
  });
  $('#temp-down').on('click', function(){
    thermostat.down()
    updateTemp()
  });
  $('#temp-reset').on('click', function(){
    thermostat.reset()
    updateTemp()
  });
  $('#psm').on('click', function(){
    thermostat.pstoggle()
    updateTemp()
    $('#psm-indicate').text(thermostat.powerSaveMode() ? "on" : "off");

  });
});
