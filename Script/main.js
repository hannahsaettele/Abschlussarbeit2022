"use strict";
var Dönerladen;
(function (Dönerladen) {
    /*Abschlussarbeit, Hannah Sättele, Matrikelnr. 268473, erstellt.: 27.01.22;
    Inspiration: Lukas D.
    */
    window.addEventListener("load", handleLoad);
    let background;
    let formData;
    let employer1;
    let customers = [];
    let custumorMax;
    let boxPos = [];
    function handleLoad(_event) {
        let startButton = document.querySelector("#startButton"); // mit klick auf Start, wird Döner-Trainer erstellt
        startButton.addEventListener("click", createGamefield);
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        Dönerladen.crc2 = canvas.getContext("2d");
        //alle div Elemente klickbar machen
        let divs = document.querySelectorAll("div");
        for (let i = 0; i > divs.length; i++) {
            divs[i].addEventListener("click", startTrainer);
            createGamefield();
        }
        function createGamefield() {
            formData = new FormData(document.forms[0]);
            document.getElementById("screen").style.display = "block";
            custumorMax = document.getElementById("customerAnzahl").value;
            document.getElementById("settings").style.display = "none";
            employer1 = new Dönerladen.Employee(200, 300);
            for (let i = 0; i < custumorMax; i++) {
                let customer = new Dönerladen.Customer(700 + Math.round(Math.random() * 250), 100 + Math.round(Math.random() * 400));
                customers.push(customer);
            }
            startTrainer();
            background = Dönerladen.crc2.getImageData(0, 0, Dönerladen.crc2.canvas.width, Dönerladen.crc2.canvas.height); // Boden
        }
        function startTrainer() {
            drawBackground();
            employer1.animate(boxPos[2][0], boxPos[2][1]);
            for (let i = 0; i < customers.length; i++) {
                customers[i].animate();
            }
            setTimeout(startTrainer, 5);
        }
        function drawBackground() {
            Dönerladen.crc2.fillStyle = "white";
            Dönerladen.crc2.fillRect(0, 0, Dönerladen.crc2.canvas.width, Dönerladen.crc2.canvas.height);
            Dönerladen.crc2.fillStyle = "#FF69B4";
            Dönerladen.crc2.fillRect(500, 100, 200, 400);
            Dönerladen.crc2.fillRect(0, 0, 200, 600);
            Dönerladen.crc2.fillStyle = "#000";
            Dönerladen.crc2.fillRect(0, 0, 300, 100);
            Dönerladen.crc2.fillStyle = "#777";
            for (let i = 0; i < 6; i++) {
                Dönerladen.crc2.fillRect(510, 110 + i * 65, 100, 50);
                boxPos.push([510, 110 + i * 65 + 25]);
            }
            Dönerladen.crc2.beginPath();
            Dönerladen.crc2.strokeStyle = "white";
            Dönerladen.crc2.fillStyle = "white";
            Dönerladen.crc2.arc(650, 300, 30, 0, 2 * Math.PI);
            Dönerladen.crc2.stroke();
            Dönerladen.crc2.fill();
        }
    }
})(Dönerladen || (Dönerladen = {}));
//# sourceMappingURL=main.js.map