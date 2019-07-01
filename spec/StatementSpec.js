describe ('statement', function() {

  beforeEach(function(){
      statement = new Statement();
  });

  it ('should give a statement showing that the user has deposited money', function() {
    statement.credit('10/01/2012', 1000);
    expect(statement.summary()).toEqual(['date || credit || debit || balance'+'\n', '10/01/2012', 1000, '||', 1000, '\n'])
  });

  it ('should give a statement showing that the user has withdrawn money', function() {
    statement.credit('10/01/2012', 1000);
    statement.debit('13/01/2012', 500);
    expect(statement.summary()).toEqual(['date || credit || debit || balance'+'\n','13/01/2012','||', 500, 500, '\n','10/01/2012', 1000, '||', 1000, '\n'])
  });
});
