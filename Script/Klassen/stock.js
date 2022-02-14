"use strict";
var Dönerladen;
(function (Dönerladen) {
    let INGREDIENT;
    (function (INGREDIENT) {
        INGREDIENT[INGREDIENT["Tomaten"] = 0] = "Tomaten";
        INGREDIENT[INGREDIENT["Zwieblen"] = 1] = "Zwieblen";
        INGREDIENT[INGREDIENT["Salat"] = 2] = "Salat";
        INGREDIENT[INGREDIENT["Kraut"] = 3] = "Kraut";
        INGREDIENT[INGREDIENT["Falafel"] = 4] = "Falafel";
        INGREDIENT[INGREDIENT["So\u00DFe"] = 5] = "So\u00DFe";
        INGREDIENT[INGREDIENT["Chilliso\u00DFe"] = 6] = "Chilliso\u00DFe";
    })(INGREDIENT || (INGREDIENT = {}));
    class Stock {
        behaelterVolumen = 100;
        tomatenMax = this.behaelterVolumen;
        zwiebelnMax = this.behaelterVolumen;
        salatMax = this.behaelterVolumen;
        krautMax = this.behaelterVolumen;
        falafelMax = this.behaelterVolumen;
        soßeMax = this.behaelterVolumen;
        doenerGroeße = 25;
        constructor() {
            // 
        }
        update() {
            for (let i = 0; i < 6; i++) {
                let h = this.getFullstand(i);
                if (h < 0) {
                    this.setIngredient(i, 0);
                }
            }
        }
        addIngredient(_zutatID) {
            if (_zutatID == 1) {
                this.tomatenMax = 100;
            }
            else if (_zutatID == 2) {
                this.zwiebelnMax = 100;
            }
            else if (_zutatID == 3) {
                this.salatMax = 100;
            }
            else if (_zutatID == 4) {
                this.krautMax = 100;
            }
            else if (_zutatID == 5) {
                this.falafelMax = 100;
            }
            else if (_zutatID == 6) {
                this.soßeMax = 100;
            }
        }
        setIngredient(_zutatID, set) {
            if (_zutatID == 1) {
                this.tomatenMax = set;
            }
            else if (_zutatID == 2) {
                this.zwiebelnMax = set;
            }
            else if (_zutatID == 3) {
                this.salatMax = set;
            }
            else if (_zutatID == 4) {
                this.krautMax = set;
            }
            else if (_zutatID == 5) {
                this.falafelMax = set;
            }
            else if (_zutatID == 6) {
                this.soßeMax = set;
            }
        }
        removeIngredient(_zutatID) {
            if (_zutatID == 1) {
                this.tomatenMax -= this.doenerGroeße;
            }
            else if (_zutatID == 2) {
                this.zwiebelnMax -= this.doenerGroeße;
            }
            else if (_zutatID == 3) {
                this.salatMax -= this.doenerGroeße;
            }
            else if (_zutatID == 4) {
                this.krautMax -= this.doenerGroeße;
            }
            else if (_zutatID == 5) {
                this.falafelMax -= this.doenerGroeße;
            }
            else if (_zutatID == 6) {
                this.soßeMax -= this.doenerGroeße;
            }
        }
        getFullstand(_zutatID) {
            if (_zutatID == 1) {
                return this.tomatenMax;
            }
            else if (_zutatID == 2) {
                return this.zwiebelnMax;
            }
            else if (_zutatID == 3) {
                return this.salatMax;
            }
            else if (_zutatID == 4) {
                return this.krautMax;
            }
            else if (_zutatID == 5) {
                return this.falafelMax;
            }
            else if (_zutatID == 6) {
                return this.soßeMax;
            }
            else {
                return 0;
            }
        }
    }
    Dönerladen.Stock = Stock;
})(Dönerladen || (Dönerladen = {}));
//# sourceMappingURL=stock.js.map