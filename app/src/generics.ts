interface IGenericIdentity {
    <T>(arg:T):T;
}

function identitySimple<T>(arg:T):T {
    return arg;
}

interface IRamos {
    fname:string;
    lname:string;
}

class Ramos implements IRamos {
    fname:string;
    lname:string;
    parents:IRamos[];

    constructor(fname:string, lname:string = 'ramos') {
        this.parents = [];
        this.fname = fname;
        this.lname = lname;
    }
}

class RamosParent<T> {
    children:T[];

    constructor() {
        this.children = [];
    }
}

class CentrelinkParent<T> {
    child:T;

    setChild(child:T) {
        this.child = child;
    }

    getChild = ():T => this.child;

    convertToFullName<TParam extends IRamos>(parameter:TParam):string {
        return `${parameter.fname} ${parameter.lname}`;
    }

    static getDefaultLname = ():string => 'default is ramos';

    constructor() {

    }


}

const myIdentity:IGenericIdentity = identitySimple;

export {identitySimple, myIdentity, Ramos, IRamos, RamosParent, CentrelinkParent};

