System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Ramos, RamosParent, CentrelinkParent, myIdentity;
    function identitySimple(arg) {
        return arg;
    }
    return {
        setters:[],
        execute: function() {
            Ramos = (function () {
                function Ramos(fname, lname) {
                    if (lname === void 0) { lname = 'ramos'; }
                    this.parents = [];
                    this.fname = fname;
                    this.lname = lname;
                }
                return Ramos;
            }());
            RamosParent = (function () {
                function RamosParent() {
                    this.children = [];
                }
                return RamosParent;
            }());
            CentrelinkParent = (function () {
                function CentrelinkParent() {
                    var _this = this;
                    this.getChild = function () { return _this.child; };
                }
                CentrelinkParent.prototype.setChild = function (child) {
                    this.child = child;
                };
                CentrelinkParent.prototype.convertToFullName = function (parameter) {
                    return parameter.fname + " " + parameter.lname;
                };
                CentrelinkParent.getDefaultLname = function () { return 'default is ramos'; };
                return CentrelinkParent;
            }());
            myIdentity = identitySimple;
            exports_1("identitySimple", identitySimple);
            exports_1("myIdentity", myIdentity);
            exports_1("Ramos", Ramos);
            exports_1("RamosParent", RamosParent);
            exports_1("CentrelinkParent", CentrelinkParent);
        }
    }
});
//# sourceMappingURL=generics.js.map