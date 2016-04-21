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

interface Iprice{
    getPrice:(price:number)=>number;
    getMarkUpPrice:(price:number,markup:number)=>number;
}

let price:Iprice = {
    getPrice:function(price:number):number{
        let resultNum = Number(Math.round(price * 100) / 100).toFixed(2);
        return +resultNum;
    },
    getMarkUpPrice:function(price:number,markup:number):number{
        let resultNum = Number(Math.round((price * markup) * 100) / 100).toFixed(2);
        return +resultNum;
    }
};

console.log(price.getPrice(2.99));

console.log(smShtMain('return smsht Main'));
console.log(smShtMain(1));
console.log(calculator.appendHaven('give me money'));

calculator.getThis();

