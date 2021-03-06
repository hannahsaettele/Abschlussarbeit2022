"use strict";
var Dönerladen;
(function (Dönerladen) {
    class Doner {
        constructor() {
            // 
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
//# sourceMappingURL=d%C3%B6ner.js.map