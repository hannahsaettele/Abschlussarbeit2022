namespace Dönerladen {

    enum MOOD {
        happy,
        bored,
        aggressiv
    };
    enum DISH {
        Döner,
        Lahmacun,
        Yuffka
    };
    enum SPECIAL {
        ohneZwiebeln,
        extraScharf,
        vielSoße,
        keinSpecial
    };

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
