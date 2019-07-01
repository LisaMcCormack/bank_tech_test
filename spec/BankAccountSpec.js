describe ('A bank account:', function() {

    beforeEach(function(){
        bankAccount = new BankAccount();
    });

    it ('starts with a balance of zero', function() {
        expect(bankAccount.balance()).toEqual(0);
    });

    it ('allows the customer to make deposits with amount and date information', function() {
      bankAccount.makeDeposit(1000, "10/01/2012");
      expect(bankAccount.balance()).toEqual(1000);
    });

    it ('allows the customer to make withdrawals with amount and date information', function() {
      bankAccount.makeDeposit(1000, "10/01/2012");
      bankAccount.makeWithdrawal(500, "14/01/2012");
      expect(bankAccount.balance()).toEqual(500);
    });
});
