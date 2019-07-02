### Bank Tech Test

As part of Makers week 10 tech test week I created a simple program in Javascript for recording bank deposits, withdrawals and statements.  It was test driven using Jasmine.  

## To use this program

In the command line:

```
git clone git@github.com:LisaMcCormack/bank_tech_test.git
```
Then:
```
open specRunner.html
```


## Specification

# Requirements

You should be able to interact with your code via a REPL like IRB or the JavaScript console. (You don't need to implement a command line interface that takes input from STDIN.)
Deposits, withdrawal.
Account statement (date, amount, balance) printing.
Data can be kept in memory (it doesn't need to be stored to a database or anything).

# Acceptance criteria

Given a client makes a deposit of 1000 on 10-01-2012
And a deposit of 2000 on 13-01-2012
And a withdrawal of 500 on 14-01-2012
When she prints her bank statement
Then she would see
date || credit || debit || balance

14/01/2012 || || 500.00 || 2500.00

13/01/2012 || 2000.00 || || 3000.00

10/01/2012 || 1000.00 || || 1000.00



```

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
```
