"use strict";
var Dönerladen;
(function (Dönerladen) {
    let MOOD;
    (function (MOOD) {
        MOOD[MOOD["happy"] = 0] = "happy";
        MOOD[MOOD["bored"] = 1] = "bored";
        MOOD[MOOD["aggressiv"] = 2] = "aggressiv";
    })(MOOD || (MOOD = {}));
    ;
    let DISH;
    (function (DISH) {
        DISH[DISH["D\u00F6ner"] = 0] = "D\u00F6ner";
        DISH[DISH["Lahmacun"] = 1] = "Lahmacun";
        DISH[DISH["Yuffka"] = 2] = "Yuffka";
    })(DISH || (DISH = {}));
    ;
    let SPECIAL;
    (function (SPECIAL) {
        SPECIAL[SPECIAL["ohneZwiebeln"] = 0] = "ohneZwiebeln";
        SPECIAL[SPECIAL["extraScharf"] = 1] = "extraScharf";
        SPECIAL[SPECIAL["vielSo\u00DFe"] = 2] = "vielSo\u00DFe";
        SPECIAL[SPECIAL["keinSpecial"] = 3] = "keinSpecial";
    })(SPECIAL || (SPECIAL = {}));
    ;
    class Customer {
        mood;
        order;
        extra;
        isDishCorrect;
        waitingTime;
        constructor() {
            //
        }
        move(_timeslice) {
        }
        draw() {
        }
    }
    Dönerladen.Customer = Customer;
})(Dönerladen || (Dönerladen = {}));
//# sourceMappingURL=customer.js.map