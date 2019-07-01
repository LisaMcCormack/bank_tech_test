(function(exports){
  function Statement() {
    this._statement = [];
    bankAccount = new BankAccount();
  }

  Statement.prototype.credit = function(date, amount) {
    bankAccount.makeDeposit(amount)
    this._statement.unshift(date, amount, '||', bankAccount._balance, '\n')
  }

  Statement.prototype.debit = function(date, amount) {
    bankAccount.makeWithdrawal(amount)
    this._statement.unshift(date, '||', amount, bankAccount._balance, '\n')
  }


  Statement.prototype.summary = function() {
    this._statement.unshift('date || credit || debit || balance'+'\n')
    return this._statement;
  }

  exports.Statement = Statement;
})(this);
