describe ('A thermostat', function() {
    
    beforeEach(function(){
        thermoStat = new ThermoStat();
    });

    it ('Starts at 20 degrees', function() {
        expect(thermoStat.temperature()).toEqual(20);
    });

    it ('increases temperature with and up function', function() {
        thermoStat.up();
        expect(thermoStat.temperature()).toEqual(21);
    });

});  