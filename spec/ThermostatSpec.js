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
    thermostat.down();
    expect(thermostat.temperature()).toEqual(10);
  });

  it("doesn't go above 25 with PS mode", function(){
    for (i = 0; i<5; i++) {
      thermostat.up();
    }
    thermostat.up();
    expect(thermostat.temperature()).toEqual(25)
  });

  it("doesn't go above 32 with PS mode off", function(){
    thermostat.pstoggle()
    for (i = 0; i<12; i++) {
      thermostat.up();
    }
    thermostat.up();
    expect(thermostat.temperature()).toEqual(32)
  })

});
