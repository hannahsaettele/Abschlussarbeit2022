"use strict";
var Dönerladen;
(function (Dönerladen) {
    let TASK;
    (function (TASK) {
        TASK[TASK["prepareFood"] = 0] = "prepareFood";
        TASK[TASK["cutFood"] = 1] = "cutFood";
        TASK[TASK["stockUp"] = 2] = "stockUp";
        TASK[TASK["wait"] = 3] = "wait";
    })(TASK || (TASK = {}));
    ;
    let MOOD;
    (function (MOOD) {
        MOOD[MOOD["happy"] = 0] = "happy";
        MOOD[MOOD["bored"] = 1] = "bored";
        MOOD[MOOD["aggressiv"] = 2] = "aggressiv";
    })(MOOD || (MOOD = {}));
    ;
    class Employee {
        task;
        isClicked;
        isBussy; //evtl ist der unnötig 
        mood;
        workload;
        maximumWorkload;
        minimumWorkload;
        constructor() {
            //
        }
        move(_timeslice) {
        }
        draw() {
        }
        prepareFood() {
        }
        cutFood() {
        }
        stockUp() {
        }
    }
    Dönerladen.Employee = Employee;
})(Dönerladen || (Dönerladen = {}));
//# sourceMappingURL=employee.js.map