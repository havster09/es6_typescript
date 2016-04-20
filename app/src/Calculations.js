System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Calculations, smArrSht;
    return {
        setters:[],
        execute: function() {
            Calculations = (function () {
                function Calculations(type) {
                    var _this = this;
                    this.add = function (x, y) { return x + y; };
                    this.addAny = function (x, y) { return x + y; };
                    this.subtract = function (x, y) {
                        return x - y;
                    };
                    this.getType = function () { return _this.type; };
                    this.getZero = function () { return 0; };
                    this.getThis = function () {
                        console.log(_this);
                        return _this;
                    };
                    this.divide = function (x, y) { return x / y; };
                    this.getRemainder = function (x, y) { return x % y; };
                    this.appendHaven = function (x) { return x + ' haven'; };
                    this.type = type;
                }
                Calculations.addStatic = function (x, y) {
                    return x + y;
                };
                return Calculations;
            }());
            smArrSht = function (x) {
                console.log(this);
                return x;
            };
            exports_1("default", Calculations);
            exports_1("smArrSht", smArrSht);
        }
    }
});
//# sourceMappingURL=Calculations.js.map