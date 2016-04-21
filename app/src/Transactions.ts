interface IBankAccount{
    balance:number;
    deposit:(amount:number)=>number;
    withdraw:(amount:number)=>number;
    calculateMonthlyInterest?:(amount:number,interestRate:number,duration:number)=>number;
}

class Account implements IBankAccount{
    balance:number;
    deposit = (amount:number) => {
        this.balance += amount;
        return this.balance;
    };
    withdraw = (amount:number) => {
        this.balance -= amount;
        return this.balance;
    };
    calculateMonthlyInterest = (interestRate:number,duration:number) =>{
      return this.balance * interestRate * duration/12;
    };
    constructor(balance:number){
        this.balance = balance;
    }
}

const calculateInterest = (amount:number,interestRate:number,duration:number):number=>amount * interestRate * duration/12;

export {Account,calculateInterest};
