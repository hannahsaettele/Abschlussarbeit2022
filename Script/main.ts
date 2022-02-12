namespace Dönerladen {
    /*Abschlussarbeit, Hannah Sättele, Matrikelnr. 268473, erstellt.: 27.01.22; 
    In Zusammenarbeit mit: Lukas D. 
    */

    window.addEventListener("load", handleLoad);
    export let crc2: CanvasRenderingContext2D;
    let background: ImageData;

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d")
        
        //enums anlegen
        
        enum MOOD {
            happy,
            bored,
            aggressiv
        };

        enum TASK {
            prepareFood, 
            cutFood,
            stockUp,
            wait
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
            kein Special
        };
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

        }
        window.addEventListener("click");
    }

    }
