function ThermoStat(){
    
    this._degrees = 20; 
    this.PowerSavingMode = true;
    this.maxDegrees = 25;

    this.temperature = function(){
        return this._degrees;
    };

    this.up = function(){
        if(this._degrees === this.maxDegrees) { throw 'Do you want to catch a fire?' ;};
        this._degrees++;
    };

    this.down = function(){
        if(this._degrees === 10) {throw 'Do you wanna build a snowman?!' ;};
        this._degrees--;
    };

    this.PowerSavingSwitch = function(){
        
        if(this.PowerSavingMode === true) {
            
            this.maxDegrees = 32;
            this.PowerSavingMode = false;

        } else {

            this.maxDegrees = 25;
            this.PowerSavingMode = true;

        };

    };
};