let balance = 500.00;

class Account {
  constructor(username) {
    this.username = username;
    // Have the account balance start at $0 since that makes more sense
    this.balance = 0;
  }
}

class Transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  commit() {
    this.account.balance += this.value;
  }
}

class Deposit extends Transaction {

  get value() {
    return this.amount;
  }
}

class Withdrawal extends Transaction {

  get value() {
    return -this.amount;
  }

}

// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

const myAccount = new Account('billybob');

console.log('Starting Balance:', myAccount.balance);

const t1 = new Deposit(120.00, myAccount);
t1.commit();

// console.log(t1);

const t2 = new Withdrawal(50.00, myAccount);
t2.commit();

console.log(t2);

console.log('Ending Balance:', myAccount.balance);
