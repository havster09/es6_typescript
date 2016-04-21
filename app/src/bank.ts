import {Account,calculateInterest} from './Transactions';

console.log(calculateInterest(10000,5.2,5));

let havenAcc = new Account(10);

console.log(havenAcc.deposit(50000));
console.log(havenAcc.withdraw(10000));

