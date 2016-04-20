import {Task, HardTask} from './Task';
import {identitySimple, Ramos,IRamos, RamosParent,CentrelinkParent} from './generics';
import {Person,project} from './person';
import {showMoney} from './muthaFunctions';
console.log('starting in main');
import {projectName} from './module1'
import * as values from './module2'
console.log('ending in main');

let person = new Person();
console.log(`${person.name} is working on ${projectName}`);

project.projectIdNumber = 199;

console.log(project.projectIdNumber);

console.log(values);

console.log(showMoney(5));

let task = new Task('learn ng2',200);
let hTask = new HardTask('learn es6',500);

hTask.showId(50);

console.log(identitySimple('5'));
console.log(identitySimple(5));
console.log(identitySimple([5]));

const haven:Ramos = new Ramos('haven');

const ted:Ramos = new Ramos('ted');

haven.parents.push(ted);

console.log(haven.parents[0].fname);

const oldMan:RamosParent<IRamos> = new RamosParent<IRamos>();

oldMan.children.push(haven);

console.log(oldMan.children[0].fname);

const singleMum:CentrelinkParent<IRamos> = new CentrelinkParent<IRamos>();

singleMum.setChild(haven);
console.log(singleMum.getChild());

console.log(CentrelinkParent.getDefaultLname());

console.log(singleMum.convertToFullName(haven));

let myAdd = function(x: number, y: number): number { return x+y; };

console.log(myAdd(5,5));
