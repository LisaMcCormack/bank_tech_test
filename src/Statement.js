(function(exports){
  function Statement(bankAccount) {
    this.bankAccount = bankAccount
  }

  Statement.prototype.format = function(data) {
    if (data['amount'] > 0) {
      return  `${(data['date'])} || ${(data['amount'])} || || ${(data['balance'])} \n`
  } else {
    return  `${(data['date'])} || || ${(data['amount']* -1)}  || ${(data['balance'])} \n`
    }
  }

  Statement.prototype.print = function() {
    this.statement = [];
    for (var i = 0; i < this.bankAccount.data().length; i++) {
      this.statement.push(this.format(this.bankAccount.data()[i]));
    }
    this.statement.unshift('date || credit || debit || balance \n')
    return this.statement;
  }

  exports.Statement = Statement;
})(this);
