"use strict";
var Dönerladen;
(function (Dönerladen) {
    class Doner {
        tomaten = false;
        zwiebeln = false;
        salat = false;
        kraut = false;
        falafel = false;
        soße = false;
        inhalt = [];
        constructor() {
            // 
        }
        add(_zutatID) {
            if (_zutatID == 1) {
                this.tomaten = true;
                this.inhalt.push("tomaten");
            }
            else if (_zutatID == 2) {
                this.zwiebeln = true;
                this.inhalt.push("zwiebeln");
            }
            else if (_zutatID == 3) {
                this.salat = true;
                this.inhalt.push("salat");
            }
            else if (_zutatID == 4) {
                this.kraut = true;
                this.inhalt.push("kraut");
            }
            else if (_zutatID == 5) {
                this.falafel = true;
                this.inhalt.push("falafel");
            }
            else if (_zutatID == 6) {
                this.soße = true;
                this.inhalt.push("soße");
            }
        }
        getDonerBool(_zutatID) {
            if (_zutatID == 1) {
                return this.tomaten;
            }
            else if (_zutatID == 2) {
                return this.zwiebeln;
            }
            else if (_zutatID == 3) {
                return this.salat;
            }
            else if (_zutatID == 4) {
                return this.kraut;
            }
            else if (_zutatID == 5) {
                return this.falafel;
            }
            else if (_zutatID == 6) {
                return this.soße;
            }
            return false;
        }
        getDonerString() {
            return this.inhalt;
        }
        setDoner() {
            this.tomaten = false;
            this.salat = false;
            this.falafel = false;
            this.kraut = false;
            this.soße = false;
            this.zwiebeln = false;
            this.inhalt = [];
        }
        drawDoner(_xPos, _yPos) {
            if (this.salat == true) {
                this.drawSalat(_xPos, _yPos);
            }
            if (this.soße == true) {
                this.drawSoße(_xPos, _yPos);
            }
            if (this.tomaten == true) {
                this.drawTomaten(_xPos, _yPos);
            }
            if (this.zwiebeln == true) {
                this.drawZwiebeln(_xPos, _yPos);
            }
            if (this.falafel == true) {
                this.drawFalafel(_xPos, _yPos);
            }
            if (this.kraut == true) {
                this.drawKraut(_xPos, _yPos);
            }
        }
        drawTomaten(_xPos, _yPos) {
            Dönerladen.crc2.beginPath();
            Dönerladen.crc2.strokeStyle = "red";
            Dönerladen.crc2.fillStyle = "red";
            Dönerladen.crc2.arc(_xPos - 7, _yPos - 7, 15, 0, 2 * Math.PI);
            Dönerladen.crc2.arc(_xPos + 7, _yPos + 7, 15, 0, 2 * Math.PI);
            Dönerladen.crc2.stroke();
            Dönerladen.crc2.fill();
        }
        drawZwiebeln(_xPos, _yPos) {
            Dönerladen.crc2.beginPath();
            Dönerladen.crc2.strokeStyle = "white";
            Dönerladen.crc2.arc(_xPos, _yPos, 15, 0, 2 * Math.PI);
            Dönerladen.crc2.stroke();
        }
        drawSalat(_xPos, _yPos) {
            Dönerladen.crc2.beginPath();
            Dönerladen.crc2.strokeStyle = "green";
            Dönerladen.crc2.fillStyle = "green";
            Dönerladen.crc2.arc(_xPos, _yPos, 30, 0, 2 * Math.PI);
            Dönerladen.crc2.stroke();
            Dönerladen.crc2.fill();
        }
        drawKraut(_xPos, _yPos) {
            Dönerladen.crc2.beginPath();
            Dönerladen.crc2.strokeStyle = "blueviolet";
            Dönerladen.crc2.fillStyle = "blueviolet";
            Dönerladen.crc2.rect(_xPos - 5, _yPos - 5, 3, 10);
            Dönerladen.crc2.rect(_xPos + 5, _yPos + 5, 3, 10);
            Dönerladen.crc2.rect(_xPos - 7, _yPos - 7, 3, 10);
            Dönerladen.crc2.rect(_xPos - 9, _yPos - 9, 3, 10);
            Dönerladen.crc2.rect(_xPos + 7, _yPos + 7, 3, 10);
            Dönerladen.crc2.rect(_xPos + 9, _yPos + 9, 3, 10);
            Dönerladen.crc2.stroke();
            Dönerladen.crc2.fill();
        }
        drawFalafel(_xPos, _yPos) {
            Dönerladen.crc2.beginPath();
            Dönerladen.crc2.strokeStyle = "brown";
            Dönerladen.crc2.fillStyle = "brown";
            Dönerladen.crc2.arc(_xPos - 7, _yPos - 7, 10, 0, 2 * Math.PI);
            Dönerladen.crc2.arc(_xPos + 7, _yPos + 7, 10, 0, 2 * Math.PI);
            Dönerladen.crc2.arc(_xPos - 9, _yPos - 9, 10, 0, 2 * Math.PI);
            Dönerladen.crc2.stroke();
            Dönerladen.crc2.fill();
        }
        drawSoße(_xPos, _yPos) {
            Dönerladen.crc2.beginPath();
            Dönerladen.crc2.strokeStyle = "white";
            Dönerladen.crc2.fillStyle = "white";
            Dönerladen.crc2.arc(_xPos, _yPos, 20, 0, 2 * Math.PI);
            Dönerladen.crc2.stroke();
            Dönerladen.crc2.fill();
        }
    }
    Dönerladen.Doner = Doner;
})(Dönerladen || (Dönerladen = {}));
//# sourceMappingURL=doner.js.map