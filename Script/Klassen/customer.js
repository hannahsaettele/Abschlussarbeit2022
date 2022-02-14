"use strict";
var Dönerladen;
(function (Dönerladen) {
    class Customer {
        zutaten = ["tomaten",
            "zwiebeln",
            "salat",
            "kraut",
            "falafel",
            "soße"];
        wunschZutaten = [];
        isDishCorrect;
        waitingTime;
        erhalten = false;
        posX;
        posY;
        speed = 1;
        farbe = [Math.round(Math.random() * 255), Math.round(Math.random() * 255), Math.round(Math.random() * 255)];
        bestellungInhalt;
        left = true;
        workload;
        custumorTime;
        constructor(_posX, _posY, _time, _workload) {
            this.posX = _posX;
            this.posY = _posY;
            this.custumorTime = _time;
            this.workload = _workload;
            this.bestellungInhalt = Math.round(Math.random() * this.workload);
            for (let i = 0; i <= this.bestellungInhalt; i++) {
                this.wunschZutaten.push(this.zutaten[i]);
            }
        }
        animate() {
            this.move();
            this.draw();
            this.bestellungAnzeige();
        }
        setErhalten() {
            this.erhalten = true;
        }
        move() {
            if (this.posX < 1050 + 1000 / this.custumorTime && this.erhalten == true) {
                this.posX += +1;
                this.left = false;
            }
            else if (this.posX > 750 && this.erhalten == false) {
                this.posX += -1;
                this.left = true;
            }
            else if (this.posX >= 1050 + 1000 / this.custumorTime && this.erhalten == true) {
                console.log(this.zutaten);
                this.neuKunde();
            }
        }
        neuKunde() {
            this.posX -= 1;
            this.left = true;
            this.wunschZutaten = [];
            console.log(this.wunschZutaten);
            this.erhalten = false;
            this.bestellungInhalt = Math.round(Math.random() * this.workload);
            for (let i = 0; i <= this.bestellungInhalt; i++) {
                this.wunschZutaten.push(this.zutaten[i]);
            }
            this.farbe = [Math.round(Math.random() * 255), Math.round(Math.random() * 255), Math.round(Math.random() * 255)];
            console.log(this.wunschZutaten);
        }
        bestellungAnzeige() {
            for (let i = 0; i <= this.bestellungInhalt; i++) {
                Dönerladen.crc2.font = "25px Verdana";
                Dönerladen.crc2.fillStyle = "black";
                Dönerladen.crc2.fillText(this.zutaten[i], this.posX, this.posY + 30 * i + 50);
            }
        }
        getBestellung() {
            return this.wunschZutaten;
        }
        draw() {
            if (this.left == false) {
                Dönerladen.crc2.beginPath();
                Dönerladen.crc2.strokeStyle = "rgb(" + this.farbe[0] + "," + this.farbe[1] + "," + this.farbe[2] + ")";
                Dönerladen.crc2.fillStyle = "rgb(" + this.farbe[0] + "," + this.farbe[1] + "," + this.farbe[2] + ")";
                Dönerladen.crc2.arc(this.posX, this.posY, 30, 0, 2 * Math.PI);
                Dönerladen.crc2.stroke();
                Dönerladen.crc2.fill();
                Dönerladen.crc2.fillRect(this.posX, this.posY - 35, 50, 10);
                Dönerladen.crc2.fillRect(this.posX, this.posY + 25, 50, 10);
            }
            else {
                Dönerladen.crc2.beginPath();
                Dönerladen.crc2.strokeStyle = "rgb(" + this.farbe[0] + "," + this.farbe[1] + "," + this.farbe[2] + ")";
                Dönerladen.crc2.fillStyle = "rgb(" + this.farbe[0] + "," + this.farbe[1] + "," + this.farbe[2] + ")";
                Dönerladen.crc2.arc(this.posX, this.posY, 30, 0, 2 * Math.PI);
                Dönerladen.crc2.stroke();
                Dönerladen.crc2.fill();
                Dönerladen.crc2.fillRect(this.posX - 50, this.posY - 35, 50, 10);
                Dönerladen.crc2.fillRect(this.posX - 50, this.posY + 25, 50, 10);
            }
        }
    }
    Dönerladen.Customer = Customer;
})(Dönerladen || (Dönerladen = {}));
//# sourceMappingURL=customer.js.map