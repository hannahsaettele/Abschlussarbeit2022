namespace Dönerladen {

    export abstract class Customer {
        mood: MOOD;
        order: DISH;
        extra: SPECIAL;
        isDishCorrect: boolean;
        waitingTime: number;


        constructor() {
//
        }

        move(_timeslice: number): void{

        }
        draw (): void { 

        }
    }
}
