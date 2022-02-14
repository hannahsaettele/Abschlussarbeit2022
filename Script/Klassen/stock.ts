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


        behaelterVolumen: number = 0;
        tomatenMax: number;
        zwiebelnMax: number;
        salatMax: number;
        krautMax: number ;
        falafelMax: number ;
        soßeMax: number ;
        doenerGroeße: number = 25;
        constructor(_volumen:number) {
            this.behaelterVolumen = _volumen;
            this.tomatenMax = this.behaelterVolumen;
            this.zwiebelnMax = this.behaelterVolumen;
            this.salatMax = this.behaelterVolumen;
            this.krautMax = this.behaelterVolumen;
            this.falafelMax = this.behaelterVolumen;
            this.soßeMax = this.behaelterVolumen;
        }
        update() {
            for (let i: number = 0; i < 6; i++) {

                let h: number = this.getFullstand(i);
                if (h < 0) {
                    this.setIngredient(i, 0);
                }
            }
        }
        addIngredient(_zutatID: number, _volumen:number) {
            if (_zutatID == 1) {
                this.tomatenMax = _volumen;
            }
            else if (_zutatID == 2) {
                this.zwiebelnMax = _volumen;
            }
            else if (_zutatID == 3) {
                this.salatMax = _volumen;
            }
            else if (_zutatID == 4) {
                this.krautMax = _volumen;
            }
            else if (_zutatID == 5) {
                this.falafelMax = _volumen;
            }
            else if (_zutatID == 6) {
                this.soßeMax = _volumen;
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
