User story 1
As a user
So I can see how much money is in my BankAccount
I can use a method to find out the balance

```
bankAccount = new BankAccount();
bankAccount.balance();
0
```

User story 2
As a User
Because I want to safely store any money I receive
I can deposit money into my BankAccount

```
bankAccount.makeDeposit(1000, "10/01/2012");
bankAccount.balance();
1000
```

User story 3
As a user
Because I need money to live from day to day
I can make withdrawals from my BankAccount
