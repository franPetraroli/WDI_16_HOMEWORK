class BankAccount {
  constructor(type = 'savings', balance = 0) {
    this.type = type;
    this.balance = balance;
    this.history = [];
    let setup = {
      action: 'creation',
      amount: this.balance,
      balance: this.balance
    };
    this.history.push(setup);
  }

  withdraw(amount) {
    if (amount < 0) {
      return 'Cannot withdraw a negative number';
    }
    this.balance -= amount;
    this.updateHistory('withdraw', amount);
  }

  deposit(amount) {
    if (amount < 0) {
      return 'Cannot deposit a negative number';
    }
    this.balance += amount;
    this.updateHistory('deposit', amount);
  }

  showBalance() {
    return this.balance;
  }

  updateHistory(action, amount) {
    let newMovement = {
      action,
      amount,
      balance: this.balance
    };
    this.history.push(newMovement);
  }

  displayHistory() {
    console.log(this.history);
    return this.history;
  }
}

let account = new BankAccount('checking', 1000);

// account.withdraw(100);
// account.showBalance();
// account.deposit(2000);
// account.showBalance();
// account.displayHistory();

module.exports = BankAccount;
