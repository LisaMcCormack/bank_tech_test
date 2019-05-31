function ThermoStat(){

    this._degrees = 20;
    this.PowerSavingMode = 'on';
    this.maxDegrees = 25;

    this.temperature = function(){
        return this._degrees;
    };

    this.reset = function(){
        this._degrees = 20;
    };

    this.up = function(){
        if(this._degrees === this.maxDegrees) { throw 'Do you want to catch a fire?' ;};
        this._degrees++;
    };

    this.down = function(){
        if(this._degrees === 10) {throw 'Do you wanna build a snowman?!' ;};
        this._degrees--;
    };

    this.psm = function(){
      return this.PowerSavingMode;
    };

    this.PowerSavingSwitch = function(){

        if(this.PowerSavingMode === 'on') {

            this.maxDegrees = 32;
            this.PowerSavingMode = 'off';

        } else {

            this.maxDegrees = 25;
            this.PowerSavingMode = 'on';

        };
    };

    this.EnergyUsage = function(){
        if (this._degrees < 18) {
            return "lightgreen";
        } else if (this._degrees < 25) {
            return "orange"
        } else {
            return "red"
        }
    };
};
