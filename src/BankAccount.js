function BankAccount(){

  this._balance = 0;

  this.balance = function() {
    return this._balance;
  }

  this.makeDeposit= function(amount, date) {
    this._balance += amount;
  }

};
