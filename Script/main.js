"use strict";
var Dönerladen;
(function (Dönerladen) {
    /*Abschlussarbeit, Hannah Sättele, Matrikelnr. 268473, erstellt.: 27.01.22;
    Inspiration: Lukas D.
    */
    window.addEventListener("load", handleLoad);
    let background;
    //Eingabefelder Quelle: Sequenzmemory
    function handleLoad(_event) {
        let startButton = document.querySelector("#startButton"); // mit klick auf Start, wird Döner-Trainer erstellt
        startButton.addEventListener("click", startTrainer);
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        Dönerladen.crc2 = canvas.getContext("2d");
        //alle div Elemente klickbar machen
        let divs = document.querySelectorAll("div");
        for (let i = 0; i > divs.length; i++) {
            divs[i].addEventListener("click", startTrainer);
        }
        startTrainer();
    }
    function startTrainer() {
        drawBackground();
        background = Dönerladen.crc2.getImageData(0, 0, Dönerladen.crc2.canvas.width, Dönerladen.crc2.canvas.height); // Boden
        Dönerladen.crc2.fillStyle = "white";
        Dönerladen.crc2.fillRect(0, 0, (Dönerladen.crc2.canvas.width * 0.4), Dönerladen.crc2.canvas.height);
        Dönerladen.crc2.fillRect(0, 0, Dönerladen.crc2.canvas.width * 0.6, Dönerladen.crc2.canvas.height * 0.15);
        Dönerladen.crc2.fillRect(Dönerladen.crc2.canvas.width * 0.6, 0, Dönerladen.crc2.canvas.width * 0.1, Dönerladen.crc2.canvas.height);
        Dönerladen.crc2.fillRect(0, Dönerladen.crc2.canvas.height * 0.85, Dönerladen.crc2.canvas.width * 0.6, Dönerladen.crc2.canvas.height * 0.15);
    }
    function drawBackground() {
        Dönerladen.crc2.fillStyle = "#FF69B4";
        Dönerladen.crc2.fillRect(0, 0, Dönerladen.crc2.canvas.width, Dönerladen.crc2.canvas.height);
    }
})(Dönerladen || (Dönerladen = {}));
//# sourceMappingURL=main.js.map