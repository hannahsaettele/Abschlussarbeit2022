"use strict";
var Dönerladen;
(function (Dönerladen) {
    let MOOD;
    (function (MOOD) {
        MOOD[MOOD["happy"] = 0] = "happy";
        MOOD[MOOD["bored"] = 1] = "bored";
        MOOD[MOOD["aggressiv"] = 2] = "aggressiv";
    })(MOOD || (MOOD = {}));
    ;
    let DISH;
    (function (DISH) {
        DISH[DISH["D\u00F6ner"] = 0] = "D\u00F6ner";
        DISH[DISH["Lahmacun"] = 1] = "Lahmacun";
        DISH[DISH["Yuffka"] = 2] = "Yuffka";
    })(DISH || (DISH = {}));
    ;
    let SPECIAL;
    (function (SPECIAL) {
        SPECIAL[SPECIAL["ohneZwiebeln"] = 0] = "ohneZwiebeln";
        SPECIAL[SPECIAL["extraScharf"] = 1] = "extraScharf";
        SPECIAL[SPECIAL["vielSo\u00DFe"] = 2] = "vielSo\u00DFe";
        SPECIAL[SPECIAL["keinSpecial"] = 3] = "keinSpecial";
    })(SPECIAL || (SPECIAL = {}));
    ;
    class Customer {
        mood;
        order;
        extra;
        isDishCorrect;
        waitingTime;
        posX;
        posY;
        speed = 1;
        farbe = [Math.round(Math.random() * 255), Math.round(Math.random() * 255), Math.round(Math.random() * 255)];
        constructor(_posX, _posY) {
            this.posX = _posX;
            this.posY = _posY;
        }
        animate() {
            this.move();
            this.draw();
        }
        move() {
            this.posX += this.speed;
            if (this.posX > 1000) {
                this.speed *= -1;
            }
            else if (this.posX < 700) {
                this.speed *= -1;
            }
        }
        draw() {
            if (this.speed > 0) {
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