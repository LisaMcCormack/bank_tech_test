describe ('statement', function() {



  it ('add the bank account data to the statement class', function() {
    var statement = new Statement(bankAccount);
    var data = [{date: "12/01/2012", amount: 1000, balance: 1000}, {date: "13/01/2012", amount: -500, balance: 500}]
    statement.format(data)
    expect(statement.print()).toEqual(['date || credit || debit || balance \n', '13/01/2012 || || 500  || 500 \n', '12/01/2012 || 1000 || || 1000 \n'])
  });
});
