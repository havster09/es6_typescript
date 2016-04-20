System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var project, Person;
    return {
        setters:[],
        execute: function() {
            project = {
                projectIdNumber: 99
            };
            console.log(project.projectIdNumber);
            Person = (function () {
                function Person() {
                    this.name = 'David';
                }
                return Person;
            }());
            exports_1("project", project);
            exports_1("Person", Person);
        }
    }
});
//# sourceMappingURL=person.js.map