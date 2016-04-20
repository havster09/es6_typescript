interface ICalculations {
    type:string;
    getZero:()=>number;
    add:(x:number, y:number)=>number;
    getType:<T>()=>T;
    addAny:<T>(x:T,y:T)=>T;
    getRemainder:(x:number,y:number)=>number;
    appendHaven:<T>(x:T)=>string;
}

class Calculations implements ICalculations {
    type:string;

    static addStatic(x:number, y:number) {
        return x + y;
    }

    add = (x:number,y:number):number => x+y;

    addAny = (x,y) => x+y;

    subtract = (x:number,y:number):number => {
      return x-y;
    };

    getType = ():string=>this.type;
    getZero = ():number=>0;
    getThis = ():ICalculations=>{
        console.log(this);
        return this;
    };

    divide = (x:number,y:number):number => x/y;

    getRemainder = (x,y):number => x%y;

    appendHaven = <T>(x:T):string => x+' haven';

    constructor(type:string) {
        this.type = type;
    }
}

const smArrSht:(x:string) =>string = function(x){
    console.log(this);
    return x;
};

export {Calculations as default,smArrSht};

