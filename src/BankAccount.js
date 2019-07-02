(function(exports){
  function BankAccount(){

    this._data = [];
    this._balance = 0;

    BankAccount.prototype.balance = function() {
      return this._balance;
    }

    BankAccount.prototype.makeDeposit = function(date, amount) {
      this._balance += amount;
      this._data.unshift(date,'||', amount, this._balance, '\n')
    }

    BankAccount.prototype.makeWithdrawal = function(date, amount) {
      this._balance -= amount;
      this._data.unshift(date, amount, '||', this._balance, '\n')
    }

    BankAccount.prototype.data = function() {
      return this._data
    }

  };

  exports.BankAccount = BankAccount;
})(this);
