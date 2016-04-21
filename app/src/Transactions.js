System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Account, calculateInterest;
    return {
        setters:[],
        execute: function() {
            Account = (function () {
                function Account(balance) {
                    var _this = this;
                    this.deposit = function (amount) {
                        _this.balance += amount;
                        return _this.balance;
                    };
                    this.withdraw = function (amount) {
                        _this.balance -= amount;
                        return _this.balance;
                    };
                    this.calculateMonthlyInterest = function (interestRate, duration) {
                        return _this.balance * interestRate * duration / 12;
                    };
                    this.balance = balance;
                }
                return Account;
            }());
            calculateInterest = function (amount, interestRate, duration) { return amount * interestRate * duration / 12; };
            exports_1("Account", Account);
            exports_1("calculateInterest", calculateInterest);
        }
    }
});
//# sourceMappingURL=Transactions.js.map