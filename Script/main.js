"use strict";
var Dönerladen;
(function (Dönerladen) {
    /*Abschlussarbeit, Hannah Sättele, Matrikelnr. 268473, erstellt.: 27.01.22;
    In Zusammenarbeit mit: Lukas D.
    */
    window.addEventListener("load", handleLoad);
    let background;
    //Eingabefelder Quelle: Sequenzmemory
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        Dönerladen.crc2 = canvas.getContext("2d");
        //alle div Elemente klickbar machen
        let divs = document.querySelectorAll("div");
        for (let i = 0; i > divs.length; i++) {
            divs[i].addEventListener("click", doIt);
        }
        startTrainer();
        createContainer();
    }
    function doIt() {
        //
    }
    function startTrainer() {
        drawBackground();
        background = Dönerladen.crc2.getImageData(0, 0, Dönerladen.crc2.canvas.width, Dönerladen.crc2.canvas.height);
    }
    function drawBackground() {
        Dönerladen.crc2.fillStyle = "#FFC0CB";
        Dönerladen.crc2.fillRect(0, 0, Dönerladen.crc2.canvas.width, Dönerladen.crc2.canvas.height);
    }
    function createContainer(_position) {
        Dönerladen.crc2.save();
        Dönerladen.crc2.beginPath();
        // Stamm erstellen
        Dönerladen.crc2.translate(500, 500);
        Dönerladen.crc2.moveTo(0, 0);
        Dönerladen.crc2.rect(-5, -20, 10, 20); // beginn links oben rectangle Rechteck
        Dönerladen.crc2.closePath();
        Dönerladen.crc2.fillStyle = "darkrosa";
        Dönerladen.crc2.fill();
        let container = new Path2D();
    }
})(Dönerladen || (Dönerladen = {}));
//# sourceMappingURL=main.js.map