"use strict";
var Dönerladen;
(function (Dönerladen) {
    /*Abschlussarbeit, Hannah Sättele, Matrikelnr. 268473, erstellt.: 27.01.22;
    In Zusammenarbeit mit: Lukas D.
    */
    window.addEventListener("load", handleLoad);
    let background;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        Dönerladen.crc2 = canvas.getContext("2d");
        //enums anlegen
        let MOOD;
        (function (MOOD) {
            MOOD[MOOD["happy"] = 0] = "happy";
            MOOD[MOOD["bored"] = 1] = "bored";
            MOOD[MOOD["aggressiv"] = 2] = "aggressiv";
        })(MOOD || (MOOD = {}));
        ;
        let TASK;
        (function (TASK) {
            TASK[TASK["prepareFood"] = 0] = "prepareFood";
            TASK[TASK["cutFood"] = 1] = "cutFood";
            TASK[TASK["stockUp"] = 2] = "stockUp";
            TASK[TASK["wait"] = 3] = "wait";
        })(TASK || (TASK = {}));
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
            SPECIAL[SPECIAL["kein"] = 3] = "kein";
            SPECIAL[SPECIAL["Special"] = 4] = "Special";
        })(SPECIAL || (SPECIAL = {}));
        ;
        let INGREDIENT;
        (function (INGREDIENT) {
            INGREDIENT[INGREDIENT["Tomaten"] = 0] = "Tomaten";
            INGREDIENT[INGREDIENT["Zwieblen"] = 1] = "Zwieblen";
            INGREDIENT[INGREDIENT["Mais"] = 2] = "Mais";
            INGREDIENT[INGREDIENT["Salat"] = 3] = "Salat";
            INGREDIENT[INGREDIENT["Kraut"] = 4] = "Kraut";
            INGREDIENT[INGREDIENT["Falafel"] = 5] = "Falafel";
            INGREDIENT[INGREDIENT["So\u00DFe"] = 6] = "So\u00DFe";
            INGREDIENT[INGREDIENT["Chilliso\u00DFe"] = 7] = "Chilliso\u00DFe";
        })(INGREDIENT || (INGREDIENT = {}));
        ;
    }
    window.addEventListener("click");
})(Dönerladen || (Dönerladen = {}));
//# sourceMappingURL=main.js.map