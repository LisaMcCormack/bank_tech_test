describe ('statement', function() {

  it ('should give a statement showing that the user has deposited money', function() {
    spyOn(bankAccount, 'data').and.returnValue(['10/01/2012', 1000, '||', 1000, '\n'])
    statement = new Statement(bankAccount);
    expect(statement.print()).toEqual(['date || credit || debit || balance'+ '\n',['10/01/2012', 1000, '||', 1000, '\n']])
  });

  it ('should give a statement showing that the user has withdrawn money', function() {
    spyOn(bankAccount, 'data').and.returnValue(['13/01/2012','||', 500, 500, '\n', '10/01/2012', 1000, '||', 1000, '\n'])
    statement = new Statement(bankAccount);
    expect(statement.print()).toEqual(['date || credit || debit || balance'+'\n',['13/01/2012','||', 500, 500, '\n','10/01/2012', 1000, '||', 1000, '\n']])
  });
});
