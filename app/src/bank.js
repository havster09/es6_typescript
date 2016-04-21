System.register(['./Transactions'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Transactions_1;
    var havenAcc;
    return {
        setters:[
            function (Transactions_1_1) {
                Transactions_1 = Transactions_1_1;
            }],
        execute: function() {
            console.log(Transactions_1.calculateInterest(10000, 5.2, 5));
            havenAcc = new Transactions_1.Account(10);
            console.log(havenAcc.deposit(50000));
            console.log(havenAcc.withdraw(10000));
        }
    }
});
//# sourceMappingURL=bank.js.map