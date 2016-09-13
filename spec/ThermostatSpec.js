describe('Thermostat', function() {

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('Starts at 20 degrees', function(){
    expect(thermostat.temperature()).toEqual(20);
  });

  it('Allows to increase the temperature with the up button', function(){
    expect(thermostat.up()).toChange(thermostat.temperature());
  });

});
