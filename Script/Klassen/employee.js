"use strict";
var Dönerladen;
(function (Dönerladen) {
    let TASK;
    (function (TASK) {
        TASK[TASK["prepareFood"] = 0] = "prepareFood";
        TASK[TASK["cutFood"] = 1] = "cutFood";
        TASK[TASK["stockUp"] = 2] = "stockUp";
        TASK[TASK["wait"] = 3] = "wait";
    })(TASK || (TASK = {}));
    let MOOD;
    (function (MOOD) {
        MOOD[MOOD["happy"] = 0] = "happy";
        MOOD[MOOD["bored"] = 1] = "bored";
        MOOD[MOOD["aggressiv"] = 2] = "aggressiv";
    })(MOOD || (MOOD = {}));
    class Employee {
        posX;
        posY;
        task;
        isClicked;
        isBussy; //evtl ist der unnötig 
        mood;
        workload;
        maximumWorkload;
        minimumWorkload;
        speedX = 1;
        speedY = 1;
        left = false;
        constructor(_posX, _posY) {
            this.posX = _posX;
            this.posY = _posY;
        }
        animate(_xPos, _yPos) {
            this.moveto(_xPos, _yPos);
            this.move();
            this.draw();
        }
        move() {
            this.posX += this.speedX;
            this.posY += this.speedY;
        }
        moveto(_xPos, _yPos) {
            if (this.posX < _xPos) {
                this.speedX = 1;
                this.left = false;
            }
            else if (this.posX > _xPos) {
                this.speedX = -1;
                this.left = true;
            }
            else {
                this.speedX = 0;
            }
            if (this.posY < _yPos) {
                this.speedY = 1;
            }
            else if (this.posY > _yPos) {
                this.speedY = -1;
            }
            else {
                this.speedY = 0;
            }
        }
        draw() {
            if (this.left == false) {
                Dönerladen.crc2.beginPath();
                Dönerladen.crc2.strokeStyle = "black";
                Dönerladen.crc2.fillStyle = "black";
                Dönerladen.crc2.arc(this.posX, this.posY, 30, 0, 2 * Math.PI);
                Dönerladen.crc2.stroke();
                Dönerladen.crc2.fill();
                Dönerladen.crc2.fillRect(this.posX, this.posY - 35, 50, 10);
                Dönerladen.crc2.fillRect(this.posX, this.posY + 25, 50, 10);
            }
            else {
                Dönerladen.crc2.beginPath();
                Dönerladen.crc2.strokeStyle = "black";
                Dönerladen.crc2.fillStyle = "black";
                Dönerladen.crc2.arc(this.posX, this.posY, 30, 0, 2 * Math.PI);
                Dönerladen.crc2.stroke();
                Dönerladen.crc2.fill();
                Dönerladen.crc2.fillRect(this.posX - 50, this.posY - 35, 50, 10);
                Dönerladen.crc2.fillRect(this.posX - 50, this.posY + 25, 50, 10);
            }
        }
        prepareFood() {
        }
        cutFood() {
        }
        stockUp() {
        }
    }
    Dönerladen.Employee = Employee;
})(Dönerladen || (Dönerladen = {}));
//# sourceMappingURL=employee.js.map