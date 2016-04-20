System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var projectName;
    return {
        setters:[],
        execute: function() {
            projectName = 'Module Loader Test';
            exports_1("projectName", projectName);
            console.log('in module1');
        }
    }
});
//# sourceMappingURL=module1.js.map