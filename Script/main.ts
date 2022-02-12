namespace Dönerladen {
    /*Abschlussarbeit, Hannah Sättele, Matrikelnr. 268473, erstellt.: 27.01.22; 
    In Zusammenarbeit mit: Lukas D. 
    */

    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;
    let background: ImageData;

    //Eingabefelder Quelle: Sequenzmemory
  

    function handleLoad(_event: Event): void {

        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d")


        //alle div Elemente klickbar machen
        let divs: NodeListOf<HTMLDivElement> = document.querySelectorAll("div");

        for (let i: number = 0; i > divs.length; i++) {
            divs[i].addEventListener("click", doIt);
        }

        startTrainer();
        createContainer();
    }

    function doIt(): void {
        //
    }


    function startTrainer(): void {


        drawBackground();
        background = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);

    }
    function drawBackground(): void {
        crc2.fillStyle = "#FFC0CB";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

    }

    function createContainer(_position): void {

        crc2.save();
        crc2.beginPath();
            // Stamm erstellen
        crc2.translate(500, 500);
        crc2.moveTo(0, 0);
        crc2.rect( -5 , -20, 10, 20);  // beginn links oben rectangle Rechteck
        crc2.closePath();
        crc2.fillStyle = "darkrosa";
        crc2.fill();
    
        let container: Path2D = new Path2D();
    }


}
