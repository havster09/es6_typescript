System.register(['./Task', './generics', './person', './muthaFunctions', './module1', './module2'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Task_1, generics_1, person_1, muthaFunctions_1, module1_1, values;
    var person, task, hTask, haven, ted, oldMan, singleMum, myAdd;
    return {
        setters:[
            function (Task_1_1) {
                Task_1 = Task_1_1;
            },
            function (generics_1_1) {
                generics_1 = generics_1_1;
            },
            function (person_1_1) {
                person_1 = person_1_1;
            },
            function (muthaFunctions_1_1) {
                muthaFunctions_1 = muthaFunctions_1_1;
            },
            function (module1_1_1) {
                module1_1 = module1_1_1;
            },
            function (values_1) {
                values = values_1;
            }],
        execute: function() {
            console.log('starting in main');
            console.log('ending in main');
            person = new person_1.Person();
            console.log(person.name + " is working on " + module1_1.projectName);
            person_1.project.projectIdNumber = 199;
            console.log(person_1.project.projectIdNumber);
            console.log(values);
            console.log(muthaFunctions_1.showMoney(5));
            task = new Task_1.Task('learn ng2', 200);
            hTask = new Task_1.HardTask('learn es6', 500);
            hTask.showId(50);
            console.log(generics_1.identitySimple('5'));
            console.log(generics_1.identitySimple(5));
            console.log(generics_1.identitySimple([5]));
            haven = new generics_1.Ramos('haven');
            ted = new generics_1.Ramos('ted');
            haven.parents.push(ted);
            console.log(haven.parents[0].fname);
            oldMan = new generics_1.RamosParent();
            oldMan.children.push(haven);
            console.log(oldMan.children[0].fname);
            singleMum = new generics_1.CentrelinkParent();
            singleMum.setChild(haven);
            console.log(singleMum.getChild());
            console.log(generics_1.CentrelinkParent.getDefaultLname());
            console.log(singleMum.convertToFullName(haven));
            myAdd = function (x, y) { return x + y; };
            console.log(myAdd(5, 5));
        }
    }
});
//# sourceMappingURL=main.js.map