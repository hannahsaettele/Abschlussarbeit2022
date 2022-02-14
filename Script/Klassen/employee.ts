namespace Dönerladen {

    enum TASK {
        prepareFood,
        cutFood,
        stockUp,
        wait
    }

    enum MOOD {
        happy,
        bored,
        aggressiv
    }

    export class Employee {
        posX: number;
        posY: number;
        task: TASK;
        isClicked: boolean;
        isBussy: boolean; //evtl ist der unnötig 
        mood: MOOD;
        workload: number;
        maximumWorkload: number;
        minimumWorkload: number;
        speedX: number = 1;
        speedY: number = 1;
        left: boolean = false;
        active:boolean = false;
        constructor(_posX: number, _posY: number) {
            this.posX = _posX;
            this.posY = _posY;
        }
        animate(_xPos: number, _yPos: number): void {
            if(this.active == true){
                this.moveto(_xPos, _yPos);
            
           
            }
            else{
                this.moveto(300,500);
            }
            this.move();
            this.draw();
            
        }
        move(): void {
            this.posX += this.speedX;
            this.posY += this.speedY;
        }

        moveto(_xPos: number, _yPos: number) {
            if (this.posX < _xPos) {
                this.speedX = 1;
                this.left = false;
            }
            else if (this.posX > _xPos) {
                this.speedX = -1;
                this.left = true;
            }
            else { this.speedX = 0 }
            if (this.posY < _yPos) {
                this.speedY = 1;
            }
            else if (this.posY > _yPos) {
                this.speedY = -1;
            }
            else { this.speedY = 0 }
        }
        draw(): void {
            if (this.left == false) {
                crc2.beginPath();
                crc2.strokeStyle = "black";
                crc2.fillStyle = "black";
                crc2.arc(this.posX, this.posY, 30, 0, 2 * Math.PI);
                crc2.stroke();
                crc2.fill();
                crc2.fillRect(this.posX, this.posY - 35, 50, 10);
                crc2.fillRect(this.posX, this.posY + 25, 50, 10);

            }
            else {
                crc2.beginPath();
                crc2.strokeStyle = "black";
                crc2.fillStyle = "black";
                crc2.arc(this.posX, this.posY, 30, 0, 2 * Math.PI);
                crc2.stroke();
                crc2.fill();
                crc2.fillRect(this.posX - 50, this.posY - 35, 50, 10);
                crc2.fillRect(this.posX - 50, this.posY + 25, 50, 10);
            }
        }
        prepareFood() {

        }
        cutFood() {

        }
        stockUp() {

        }
    }
}