namespace Dönerladen {

    enum MOOD {
        happy,
        bored,
        aggressiv
    }

    enum DISH {
        Döner,
        Lahmacun,
        Yuffka
    }

    enum Zutaten {
       
     
    }

    export class Customer {
        zutaten : string[] = ["tomaten",
        "zwiebeln",
        "salat",
        "kraut",
        "falafel",
        "soße"];
        wunschZutaten : string[] = [];
        isDishCorrect: boolean;
        waitingTime: number;
        erhalten:boolean = false;
        posX: number;
        posY: number;
        speed: number = 1;
        farbe: number[] = [Math.round(Math.random() * 255), Math.round(Math.random() * 255), Math.round(Math.random() * 255)];
        bestellungInhalt : number;
        left:boolean = true;
        workload:number;
        custumorTime:number;

        constructor(_posX: number, _posY: number, _time:number,_workload:number) {
            this.posX = _posX;
            this.posY = _posY;
            this.custumorTime = _time;
            this.workload = _workload;
            this.bestellungInhalt =   Math.round(Math.random()*this.workload);
        for(let i:number = 0; i<= this.bestellungInhalt;i++){
            this.wunschZutaten.push(this.zutaten[i]);
        }
    
            
        }
        animate(): void {

            this.move();
            this.draw();
            this.bestellungAnzeige();
        }
        setErhalten(){
         this.erhalten = true;
         
        }
        move(): void {
            
            if (this.posX < 1050+ 1000/this.custumorTime && this.erhalten == true) {
                this.posX += +1;
                this.left = false;
            }
            else if (this.posX > 750 && this.erhalten == false) {
                this.posX += -1;
                this.left  =true;
            }
            else if(this.posX >= 1050 + 1000/this.custumorTime && this.erhalten== true){
                console.log(this.zutaten);
                this.neuKunde();
               
            }
        }
        neuKunde(){
            this.posX -=1;
            
                this.left=true;
                this.wunschZutaten = [];
                console.log(this.wunschZutaten);
                this.erhalten = false;
                this.bestellungInhalt=  Math.round(Math.random()*this.workload);
                for(let i:number = 0; i<= this.bestellungInhalt;i++){
                    this.wunschZutaten.push(this.zutaten[i]);
                }
                this.farbe = [Math.round(Math.random() * 255), Math.round(Math.random() * 255), Math.round(Math.random() * 255)];
                console.log(this.wunschZutaten);
              
        }
        bestellungAnzeige(){
            for(let i :number = 0; i<= this.bestellungInhalt;i++){
                crc2.font = "25px Verdana";
                crc2.fillStyle = "black";

                crc2.fillText(this.zutaten[i], this.posX,this.posY+30*i+50);     
            }
        }
        getBestellung():string[]{
            return this.wunschZutaten;
        }
        draw(): void {
            if (this.left == false) {
                crc2.beginPath();
                crc2.strokeStyle = "rgb(" + this.farbe[0] + "," + this.farbe[1] + "," + this.farbe[2] + ")";
                crc2.fillStyle = "rgb(" + this.farbe[0] + "," + this.farbe[1] + "," + this.farbe[2] + ")";
                crc2.arc(this.posX, this.posY, 30, 0, 2 * Math.PI);
                crc2.stroke();
                crc2.fill();
                crc2.fillRect(this.posX, this.posY - 35, 50, 10);
                crc2.fillRect(this.posX, this.posY + 25, 50, 10);

            }
            else {
                crc2.beginPath();
                crc2.strokeStyle = "rgb(" + this.farbe[0] + "," + this.farbe[1] + "," + this.farbe[2] + ")";
                crc2.fillStyle = "rgb(" + this.farbe[0] + "," + this.farbe[1] + "," + this.farbe[2] + ")";
                crc2.arc(this.posX, this.posY, 30, 0, 2 * Math.PI);
                crc2.stroke();
                crc2.fill();
                crc2.fillRect(this.posX - 50, this.posY - 35, 50, 10);
                crc2.fillRect(this.posX - 50, this.posY + 25, 50, 10);

            }
        }
    }
}
