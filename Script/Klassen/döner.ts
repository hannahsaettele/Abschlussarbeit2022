namespace Dönerladen {

    enum DISH {
        Döner,
        Lahmacun,
        Yuffka
    }
    
    export abstract class Döner {
    type: DISH;
    currentIngredients: string []
    
        constructor() {
    //
        }

        addIngredient(){
//
    }
    }
}