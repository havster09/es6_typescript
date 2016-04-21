System.register(['./Calculations'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var _this = this;
    var Calculations_1;
    var calculator, smArrShtMain, smShtMain, price;
    return {
        setters:[
            function (Calculations_1_1) {
                Calculations_1 = Calculations_1_1;
            }],
        execute: function() {
            calculator = new Calculations_1.default('basic');
            console.log(Calculations_1.default.addStatic(5, 5));
            console.log(calculator.add(2, 3));
            console.log(calculator.subtract(2, 3));
            console.log(calculator.addAny('dfdf', 3));
            console.log(calculator.getZero());
            console.log(calculator.getType());
            console.log(calculator.getRemainder(5, 5));
            console.log(Calculations_1.smArrSht('return smsht'));
            smArrShtMain = function (x) {
                console.log(this.AnimationEvent);
                return x;
            };
            smShtMain = function (x) {
                console.log(_this);
                return x;
            };
            price = {
                getPrice: function (price) {
                    var resultNum = Number(Math.round(price * 100) / 100).toFixed(2);
                    return +resultNum;
                },
                getMarkUpPrice: function (price, markup) {
                    var resultNum = Number(Math.round((price * markup) * 100) / 100).toFixed(2);
                    return +resultNum;
                }
            };
            console.log(price.getPrice(2.99));
            console.log(smShtMain('return smsht Main'));
            console.log(smShtMain(1));
            console.log(calculator.appendHaven('give me money'));
            calculator.getThis();
        }
    }
});
//# sourceMappingURL=arrow_functions.js.map