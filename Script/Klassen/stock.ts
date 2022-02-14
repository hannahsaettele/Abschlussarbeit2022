namespace Dönerladen {

    enum INGREDIENT {
        Tomaten,
        Zwieblen,
        Salat,
        Kraut,
        Falafel,
        Soße,
        Chillisoße
    }


    export class Stock {


        behaelterVolumen: number = 100;
        tomatenMax: number = this.behaelterVolumen;
        zwiebelnMax: number = this.behaelterVolumen;
        salatMax: number = this.behaelterVolumen;
        krautMax: number = this.behaelterVolumen;
        falafelMax: number = this.behaelterVolumen;
        soßeMax: number = this.behaelterVolumen;
        doenerGroeße: number = 25;
        constructor() {
            // 
        }
        update() {
            for (let i: number = 0; i < 6; i++) {

                let h: number = this.getFullstand(i);
                if (h < 0) {
                    this.setIngredient(i, 0);
                }
            }
        }
        addIngredient(_zutatID: number) {
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
        setIngredient(_zutatID: number, set: number) {
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
        removeIngredient(_zutatID: number) {
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

        getFullstand(_zutatID: number): number {
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
}
