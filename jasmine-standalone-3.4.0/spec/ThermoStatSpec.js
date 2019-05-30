describe ('A thermostat:', function() {
    
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

    it ('decreases temperature with and down function', function() {
        thermoStat.down();
        expect(thermoStat.temperature()).toEqual(19);
    });

    it ('has a minimum temperate of 10 degrees', function() {
        thermoStat._degrees = 10;
        
        expect(function(){
            thermoStat.down();
        }).toThrow('Do you wanna build a snowman?!');

        expect(thermoStat.temperature()).toEqual(10);
        console.log(thermoStat._degrees);
    });

    it ('temperature can be reset to 20', function() {
        thermoStat.up();
        thermoStat.reset();
        expect(thermoStat._degrees).toEqual(20);
    });

    describe('Power saving mode:', function() {
        
        it('has a switch', function(){
            thermoStat.PowerSavingSwitch();
            expect(thermoStat.PowerSavingMode).toEqual(false);
            thermoStat.PowerSavingSwitch();
            expect(thermoStat.PowerSavingMode).toEqual(true);
        });

        describe('Is on', function(){ 
            it('has low max', function () {
                expect(thermoStat.PowerSavingMode).toEqual(true);    
            });

            it('can\'t increase temperature past 25 degrees', function(){
                thermoStat._degrees = 25;

                expect(function(){
                    thermoStat.up();
                }).toThrow('Do you want to catch a fire?');
            }); 

        });
    
        describe('Is off', function(){ 
            it('has high max', function () {
                thermoStat.PowerSavingMode = false;
                console.log(thermoStat.PowerSavingMode);
                expect(thermoStat.PowerSavingMode).toEqual(false);    
            });
        });

    });

    describe ('Energy usage:', function(){
       
        it('Is low-usage', function () {
            thermoStat._degrees = 17
            expect(thermoStat.EnergyUsage()).toEqual('low-energy usage');
        });
        
        it('Is medium-usage', function () {
            thermoStat._degrees = 24 
            expect(thermoStat.EnergyUsage()).toEqual('medium-energy usage');
        });

        it('Is high-usage', function () {
            thermoStat._degrees = 26
            expect(thermoStat.EnergyUsage()).toEqual('high-energy usage');
        });
    });
});  