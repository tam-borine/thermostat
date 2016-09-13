describe('Thermostat', function() {

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('Starts at 20 degrees', function(){
    expect(thermostat.temperature()).toEqual(20);
  });

  it('Allows to increase the temperature with the up button', function(){
    // expect(thermostat.up()).toChange(thermostat.temperature());
    thermostat.up();
    expect(thermostat.temperature()).toEqual(21);
  });

  it('Allows to decrease the temperature with the down button', function(){
    // expect(thermostat.up()).toChange(thermostat.temperature());
    thermostat.down();
    expect(thermostat.temperature()).toEqual(19);
  });

  it('Doesnt go below 10 degrees', function(){
    for (i = 0; i < 10; i++) {
      thermostat.down();
    }
    expect(thermostat.temperature()).toEqual(10);
    thermostat.down();
    expect(thermostat.temperature()).toEqual(10);
  });
});
