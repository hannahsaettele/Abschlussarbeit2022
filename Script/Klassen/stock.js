"use strict";
var Dönerladen;
(function (Dönerladen) {
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
    class Stock {
        type;
        rawAmount;
        counterAmount;
        constructor() {
            //
        }
        addIngredient() {
        }
    }
    Dönerladen.Stock = Stock;
})(Dönerladen || (Dönerladen = {}));
//# sourceMappingURL=stock.js.map