function ThermoStat(){
    
    this._degrees = 20; 

    this.temperature = function(){
        return this._degrees;
    };

    this.up = function(){
        this._degrees++;
    };

};