namespace Dönerladen {
    /*Abschlussarbeit, Hannah Sättele, Matrikelnr. 268473, erstellt.: 27.01.22; 
    Inspiration: Lukas D. 
    */

    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;
    let background: ImageData;
    let formData: FormData;
    let employer1:Employee ;
    let customers:Customer[] = [];
    let custumorMax:number;
    let boxPos:number[][] = [];
    function handleLoad(_event: Event): void {
        
        let startButton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#startButton"); // mit klick auf Start, wird Döner-Trainer erstellt
        startButton.addEventListener("click", createGamefield);

        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

      


        //alle div Elemente klickbar machen
        let divs: NodeListOf<HTMLDivElement> = document.querySelectorAll("div");

        for (let i: number = 0; i > divs.length; i++) {
            divs[i].addEventListener("click", startTrainer);

            createGamefield();
           
        }

        function createGamefield (): void {
            formData = new FormData(document.forms[0]);
            document.getElementById("screen").style.display = "block";
            custumorMax = document.getElementById("customerAnzahl").value;
            document.getElementById("settings").style.display = "none";

            employer1 = new Employee(200, 300);
            for(let i:number = 0; i< custumorMax; i++){
            let customer = new Customer(700+Math.round(Math.random()*250),100+Math.round(Math.random()*400));
            customers.push(customer);
            }
            
            startTrainer();
            background = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height); // Boden
            
        
        }
        


        function startTrainer(): void {
                drawBackground();
                employer1.animate(boxPos[2][0],boxPos[2][1]);
                for(let i:number=0; i<customers.length;i++){
                    customers[i].animate();
                }
                
                setTimeout(startTrainer,5);
        }

        function drawBackground(): void {            
            crc2.fillStyle = "white";
            crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
            crc2.fillStyle = "#FF69B4";
            crc2.fillRect(500, 100,200, 400);
            crc2.fillRect(0, 0,200, 600);
            crc2.fillStyle = "#000";
            crc2.fillRect(0, 0,300, 100);
            crc2.fillStyle = "#777";
            for(let i:number = 0; i<6; i++){
                crc2.fillRect(510, 110 + i * 65,100, 50);
                boxPos.push([510,110 + i * 65 + 25]);
                
            }
           
            crc2.beginPath();
            crc2.strokeStyle = "white";
            crc2.fillStyle = "white";
            crc2.arc(650,300, 30, 0, 2 * Math.PI);
            crc2.stroke();
            crc2.fill();
        }
    }

   
}
