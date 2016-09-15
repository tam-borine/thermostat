$(document).ready(function(){
  var thermostat = new Thermostat();

  function updateTemp() {
    $('#temp').text(thermostat._temperature);
    $('#temp').css('color', thermostat._colour);
  };

  $('#temp').text(thermostat._temperature);

  $('#temp-up').on('click', function(){
    thermostat.up();
    updateTemp();
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


  $('#wclick').on('click', function (event){
      event.preventDefault();
      var city = $('#city').val();
      api(city);
  });

  function api(city){
    $.ajax({
      url : "http://api.wunderground.com/api/1438b2278b4123c8/geolookup/conditions/q/IA/"+city +".json",
      dataType : "jsonp",
      success : function(parsed_json) {
      var location = parsed_json['location']['city'];
      var temp_c = parsed_json['current_observation']['temp_c'];
      $('#weather').text('the temperature in '+ location + ' is ' +temp_c +' Celsius' )}
    });
  }
});
