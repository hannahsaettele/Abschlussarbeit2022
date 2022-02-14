namespace Dönerladen {
    /*Abschlussarbeit, Hannah Sättele, Matrikelnr. 268473, erstellt.: 27.01.22; 
    Inspiration: Lukas D. 
    */

    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;
    let background: ImageData;
    let formData: FormData;
    let employer1:Employee ;
    let employers:Employee[] = [] ;
    let customers:Customer[] = [];
    let employerMax:number;
    let custumorMax:number = 3;
    let boxPos:number[][] = [];
    let canvas: HTMLCanvasElement | null;
    let auswahl:number[] = [500,300];
    let stock :Stock;
    let vorrat:boolean = false;
    let doener: Doner;
    let donerFertig : boolean = false;
    let zutaten : string[] = ["tomaten",
    "zwiebeln",
    "salat",
    "kraut",
    "falafel",
    "soße"];
    function handleLoad(_event: Event): void {
        
        let startButton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#startButton"); // mit klick auf Start, wird Döner-Trainer erstellt
        startButton.addEventListener("click", createGamefield);

        canvas  = document.querySelector("canvas");
        canvas.addEventListener("click", pos);
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
            employerMax = document.getElementById("employerAnzahl").value;
            custumorMax = document.getElementById("custumorAnzahl").value;
            document.getElementById("settings").style.display = "none";

            employer1 = new Employee(200, 300);
           
            for(let i:number = 0; i< custumorMax; i++){
            let customer = new Customer(700+Math.round(Math.random()*250),100+Math.round(Math.random()*400));
            customers.push(customer);
            }
            for(let i:number = 0; i< employerMax; i++){
                
                let employer = new Employee(200+Math.round(Math.random()*200),100+Math.round(Math.random()*400));
                employers.push(employer);
                }
            for(let i:number = 0; i<6; i++){            
                boxPos.push([510, (110 + i * 65)]);
                    
            }
            stock = new Stock();
            doener = new Doner();
            startTrainer();
            //background = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height); // Boden
          
        
        }
        


        function startTrainer(): void {
            
                drawBackground();
             
                
                
                employer1.animate(auswahl[0]-40,auswahl[1]+25);
               
                for(let i:number=0; i<customers.length;i++){
                    customers[i].animate();
                }
                for(let i:number=0; i<employers.length;i++){
                    employers[i].draw();
                }
                
                stock.update();
                doener.drawDoner(650,300);
                setTimeout(startTrainer,5);

            doenerBestellungFertig();

                if(donerFertig == true){
                    doener.setDoner();
              
                    donerFertig = false;
                   
                }
        }
        function doenerBestellungFertig(){
            let j:number = 0;
          
            for(let i :number = 0; i<customers[0].getBestellung().length; i++){
                if(doener.getDonerString()[i] == customers[0].getBestellung()[i]){
                    j++
                }
                if(j ==customers[0].getBestellung().length){
                    donerFertig = true;
                    customers[0].setErhalten();
                }
            }
         
            j = 0;
            
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
            crc2.closePath();
            for(let i:number = 0; i<6; i++){
                crc2.beginPath();
                crc2.fillRect(boxPos[i][0], boxPos[i][1],100, 50);
                crc2.fillStyle = "#32CD32";
                if(  stock.getFullstand(i+1) > 0){
                    crc2.fillRect(boxPos[i][0], boxPos[i][1], stock.getFullstand(i+1), 50);
                    crc2.font = "25px Verdana";
                    crc2.fillStyle = "black";
                    crc2.fillText(zutaten[i], boxPos[i][0]+8, boxPos[i][1]+35);
                }
                else {
                    crc2.fillStyle = "red";
                    crc2.fillRect(boxPos[i][0], boxPos[i][1], 100, 50);
                    crc2.font = "25px Verdana";
                    crc2.fillStyle = "black";
                    crc2.fillText("empty", boxPos[i][0]+8, boxPos[i][1]+35);
                }
                crc2.fillStyle = "#777";
                crc2.closePath();
            }
           
            crc2.beginPath();
            crc2.strokeStyle = "white";
            crc2.fillStyle = "white";
            crc2.arc(650,300, 30, 0, 2 * Math.PI);
            crc2.stroke();
            crc2.fill();
        }
        function getMousePos(evt: MouseEvent) {
            var rect = canvas.getBoundingClientRect();
           
            return {
              x: evt.clientX - rect.left,
              y: evt.clientY - rect.top
            };
        }
        function pos(event: MouseEvent){
            let pos :any = getMousePos(event);
            console.log(boxPos.length);
            for(let i:number=0; i<boxPos.length; i++){
               
                if(pos.x > boxPos[i][0] && pos.x < boxPos[i][0]+100 && pos.y > boxPos[i][1] && pos.y < boxPos[i][1]+50 && vorrat == false && doener.getDonerBool(i+1)==false){
                    auswahl[0] = boxPos[i][0];
                    auswahl[1] = boxPos[i][1];
                    stock.removeIngredient(i+1);
                   doener.add(i+1);
                }
                else if(pos.x > boxPos[i][0] && pos.x < boxPos[i][0]+100 && pos.y > boxPos[i][1] && pos.y < boxPos[i][1]+50 && vorrat == true){
                    auswahl[0] = boxPos[i][0];
                    auswahl[1] = boxPos[i][1];
                    stock.addIngredient(i+1);
                    vorrat = false;
                }
            }
            if(pos.x > 0 && pos.x < 200 && pos.y >0 && pos.y < 600){
                auswahl[0] = 250;
                auswahl[1] = 300;
                vorrat = true;
            }
        }
    }

   
}
