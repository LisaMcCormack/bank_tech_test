(function(exports){
  function BankAccount(){

    this._balance = 0;

    BankAccount.prototype.balance = function() {
      return this._balance;
    }

    BankAccount.prototype.makeDeposit = function(amount) {
      this._balance += amount;
    }

    BankAccount.prototype.makeWithdrawal = function(amount) {
      this._balance -= amount;
    }

  };

  exports.BankAccount = BankAccount;
})(this);
