const BankAccount = require('./app');

test('should display the balance', () => {
  const account = new BankAccount('savings', 1000);
  expect(account.showBalance()).toBe(1000);
});

test('should display the history', () => {
  const account = new BankAccount('savings', 1000);
  expect(account.displayHistory()).toEqual([
    { action: 'creation', amount: 1000, balance: 1000 }
  ]);
});

test('Should increase the ammount by 1000', () => {
  const account = new BankAccount('savings', 1000);
  account.deposit(1000);
  expect(account.showBalance()).toBe(2000);
});

test('Should return can not deposit negative number', () => {
  const account = new BankAccount('savings', 1000);
  account.deposit(-1000);
  expect(account.deposit(-1000)).toBe('Cannot deposit a negative number');
});

test('Should return can not witdraw negative number', () => {
  const account = new BankAccount('savings', 1000);
  account.withdraw(-1000);
  expect(account.withdraw(-1000)).toBe('Cannot withdraw a negative number');
});

test('Should upadate the balance increasing by 1000', () => {
  const account = new BankAccount('savings', 1000);
  account.deposit(1000);
  expect(account.displayHistory()).toEqual([
    { action: 'creation', amount: 1000, balance: 1000 },
    { action: 'deposit', amount: 1000, balance: 2000 }
  ]);
});
