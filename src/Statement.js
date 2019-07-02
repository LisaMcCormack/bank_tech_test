(function(exports){
  function Statement(bankAccount) {
    this.bankAccount = bankAccount
    this._statement = [];
  }

  Statement.prototype.print = function() {
    this._statement.push(this.bankAccount.data())
    this._statement.unshift('date || credit || debit || balance'+'\n')
    return this._statement;
  }

  exports.Statement = Statement;
})(this);
