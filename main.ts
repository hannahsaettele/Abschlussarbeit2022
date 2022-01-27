namespace Dönerladen {
    /*Abschlussarbeit, Hannah Sättele, Matrikelnr. 268473, erstellt.: 27.01.22; 
    In Zusammenarbeit mit: Liz, Lukas
    */

    window.addEventListener("load", handleLoad);
    export let crc2: CanvasRenderingContext2D;
    let background: ImageData;

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d")
        

        window.addEventListener("click");
    }

    }
