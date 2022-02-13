namespace Dönerladen {
    /*Abschlussarbeit, Hannah Sättele, Matrikelnr. 268473, erstellt.: 27.01.22; 
    Inspiration: Lukas D. 
    */

    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;
    let background: ImageData;
    let formData: FormData;

    function handleLoad(_event: Event): void {
        
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        drawBackground();
        background = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height); // Boden


        //alle div Elemente klickbar machen
        let divs: NodeListOf<HTMLDivElement> = document.querySelectorAll("div");

        for (let i: number = 0; i > divs.length; i++) {
            divs[i].addEventListener("click", startTrainer);

            createGamefield();
            startTrainer();
        }
        function createGamefield (): void {
            formData = new FormData(document.forms[0]);

            let startButton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#startButton"); // mit klick auf Start, wird Döner-Trainer erstellt
            startButton.addEventListener("click", createGamefield);

        }
        


        function startTrainer(): void {
          
            crc2.fillStyle = "white";
            crc2.fillRect(0, 0, (crc2.canvas.width * 0.4), crc2.canvas.height);
            crc2.fillRect(0, 0, crc2.canvas.width * 0.6, crc2.canvas.height * 0.15);
            crc2.fillRect(crc2.canvas.width * 0.6, 0, crc2.canvas.width * 0.1, crc2.canvas.height);
            crc2.fillRect(0, crc2.canvas.height * 0.85, crc2.canvas.width * 0.6, crc2.canvas.height * 0.15);
        }

        function drawBackground(): void {
            crc2.fillStyle = "#FF69B4";
            crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        }
    }
}
