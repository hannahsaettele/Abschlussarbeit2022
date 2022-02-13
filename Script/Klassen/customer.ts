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

    export  class Customer {
        mood: MOOD;
        order: DISH;
        extra: SPECIAL;
        isDishCorrect: boolean;
        waitingTime: number;

        posX:number;
        posY:number;
        speed:number = 1;
        farbe:number[] = [Math.round(Math.random()*255),Math.round(Math.random()*255),Math.round(Math.random()*255)];
        
                constructor(_posX:number,_posY:number) {
            this.posX = _posX;
            this.posY = _posY;
        }
        animate():void{
            console.log(this.farbe);
            this.move();
            this.draw();
        }
        move(): void {
                this.posX += this.speed;
                if(this.posX >1000){
                    this.speed *=-1;
                }
                else if(this.posX <700){
                    this.speed *=-1;
                }
        }
        draw(): void {
            if(this.speed>0){
            crc2.beginPath();
            crc2.strokeStyle = "rgb("+this.farbe[0]+","+this.farbe[1]+","+this.farbe[2]+")";
           crc2.fillStyle = "rgb("+this.farbe[0]+","+this.farbe[1]+","+this.farbe[2]+")";
          crc2.arc(this.posX, this.posY, 30, 0, 2 * Math.PI);
           crc2.stroke();
           crc2.fill();
           crc2.fillRect(this.posX,this.posY-35,50,10);
           crc2.fillRect(this.posX,this.posY+25,50,10);
         
            }
            else{
                crc2.beginPath();
                crc2.strokeStyle = "rgb("+this.farbe[0]+","+this.farbe[1]+","+this.farbe[2]+")";
               crc2.fillStyle = "rgb("+this.farbe[0]+","+this.farbe[1]+","+this.farbe[2]+")";
              crc2.arc(this.posX, this.posY, 30, 0, 2 * Math.PI);
               crc2.stroke();
               crc2.fill();
               crc2.fillRect(this.posX-50,this.posY-35,50,10);
               crc2.fillRect(this.posX-50,this.posY+25,50,10);
               console.log("sd");
            }
        }
    }
}
