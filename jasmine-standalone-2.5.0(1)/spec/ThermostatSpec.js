describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("has a deafault temperature of 20", function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it("has a min temperature of 10", function() {
    expect(thermostat.minTemperature).toEqual(10);
  });

  it("has a max temperature on power saving mode by default", function() {
    expect(thermostat.maxTemperature).toEqual(25);
  });

  it("has an up button that increases temperature", function() {
    thermostat.increaseTemperature();
    expect(thermostat.temperature).toEqual(21);
  });

  it("has an up button that decreases temperature", function() {
    thermostat.decreaseTemperature();
    expect(thermostat.temperature).toEqual(19);
  });

  it("has a power saving function", function() {
    thermostat.powerSaveSwitch();
    expect(thermostat.maxTemperature).toEqual(32);
  });

  it("has a power saving function", function() {
    thermostat.powerSaveSwitch();
    thermostat.powerSaveSwitch();
    expect(thermostat.maxTemperature).toEqual(25);
  });

  it("has a reset button which resets temperature to 20", function(){
    thermostat.reset();
    expect(thermostat.temperature).toEqual(20);
  });

  describe('temperature limit enforcement', function() {

      it("does not let you decrease temperature beyond min limit", function(){
        helperModule.decrement(12, thermostat);
        expect(thermostat.temperature).toEqual(10);
      });

      it("does not let you increase temperature beyond max limit - powersave is off", function(){
        thermostat.powerSaveSwitch();
        helperModule.increment(13, thermostat);
        expect(thermostat.temperature).toEqual(32);
      });

      it("does not let you increase temperature beyond max limit - powersave is on", function(){
        helperModule.increment(6, thermostat);
        expect(thermostat.temperature).toEqual(25);
      });
  });

  describe("colour rules", function() {

    it("is green at 15 degrees", function() {
      helperModule.decrement(5, thermostat);
      expect(thermostat.colour).toEqual("green");
    });

    it("is yellow at 23 degrees", function() {
      helperModule.increment(3, thermostat);
      expect(thermostat.colour).toEqual("yellow");
    });

    it("is red at 30 degrees", function() {
      helperModule.increment(10, thermostat);
      expect(thermostat.colour).toEqual("red");
    });

  });


});
