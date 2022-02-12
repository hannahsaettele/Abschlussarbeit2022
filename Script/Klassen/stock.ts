namespace Dönerladen {

    enum INGREDIENT {
        Tomaten,
        Zwieblen,
        Mais,
        Salat,
        Kraut,
        Falafel,
        Soße,
        Chillisoße
    }; 

    export abstract class Stock {
        type: INGREDIENT;
        rawAmount: number;
        counterAmount: number;

        constructor() {
//
        }
        addIngredient() {

        }

    }
}
