import Calculations, {smArrSht} from './Calculations';

const calculator = new Calculations('basic');

console.log(Calculations.addStatic(5, 5));

console.log(calculator.add(2, 3));
console.log(calculator.subtract(2, 3));
console.log(calculator.addAny('dfdf', 3));

console.log(calculator.getZero());
console.log(calculator.getType());
console.log(calculator.getRemainder(5, 5));
console.log(smArrSht('return smsht'));

let smArrShtMain:(x:string) =>string = function (x) {
    console.log(this.AnimationEvent);
    return x;
};

let smShtMain = <T>(x:T):T => {
    console.log(this);
    return x;
};


console.log(smShtMain('return smsht Main'));
console.log(smShtMain(1));
console.log(calculator.appendHaven('give me money'));

calculator.getThis();