
User story 1
As a user
So I can see how much money is in my BankAccount
I can use a method to find out the balance


bankAccount = new BankAccount();
bankAccount.balance();
0


User story 2
As a User
Because I want to safely store any money I receive
I can deposit money into my BankAccount

bankAccount = new BankAccount();
statement = new Statement();
statement.credit('10/01/2012', 1000);
bankAccount.balance();
1000


User story 3
As a user
Because I need money to live from day to day
I can make withdrawals from my BankAccount

bankAccount = new BankAccount();
statement = new Statement();
statement.credit('10/01/2012', 1000);
statement.debit('13/01/2012', 500)
bankAccount.balance();
500

User story 4
As a User
So I can keep track of my finances
I can receive a statement of all debits and credits to my BankAccount

statement = new Statement();
statement.credit('10/01/2012', 1000);
statement.debit('13/01/2012', 500);
'date || credit || debit || balance'
13/01/2012','||', 500, 500,
10/01/2012', 1000, '||', 1000,
