describe ('A bank account:', function() {

    beforeEach(function(){
        bankAccount = new BankAccount();
    });

    it ('Starts with a balance of zero', function() {
        expect(bankAccount.balance()).toEqual(0);
    });
});  
