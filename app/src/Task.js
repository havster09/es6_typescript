System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Task, HardTask;
    return {
        setters:[],
        execute: function() {
            Task = (function () {
                function Task(jobDescription, durationMinute) {
                    var _this = this;
                    this.showId = function (smNum) { console.log(_this.jobDescription, smNum); };
                    this.jobDescription = jobDescription;
                    this.durationMinute = durationMinute;
                    console.log("creating instance " + this.jobDescription);
                }
                return Task;
            }());
            exports_1("Task", Task);
            HardTask = (function (_super) {
                __extends(HardTask, _super);
                function HardTask(jobDescription, durationMinute) {
                    _super.call(this, jobDescription, durationMinute);
                    console.log("hard task will take " + this.durationMinute);
                }
                return HardTask;
            }(Task));
            exports_1("HardTask", HardTask);
        }
    }
});
//# sourceMappingURL=Task.js.map