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
    let employers = [];
    let customers = [];
    let employerMax;
    let custumorMax = 3;
    let boxPos = [];
    let canvas;
    let auswahl = [500, 300];
    function handleLoad(_event) {
        let startButton = document.querySelector("#startButton"); // mit klick auf Start, wird Döner-Trainer erstellt
        startButton.addEventListener("click", createGamefield);
        canvas = document.querySelector("canvas");
        canvas.addEventListener("click", pos);
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
            employerMax = document.getElementById("employerAnzahl").value;
            custumorMax = document.getElementById("custumorAnzahl").value;
            document.getElementById("settings").style.display = "none";
            employer1 = new Dönerladen.Employee(200, 300);
            for (let i = 0; i < custumorMax; i++) {
                let customer = new Dönerladen.Customer(700 + Math.round(Math.random() * 250), 100 + Math.round(Math.random() * 400));
                customers.push(customer);
            }
            for (let i = 0; i < employerMax; i++) {
                let employer = new Dönerladen.Employee(200 + Math.round(Math.random() * 200), 100 + Math.round(Math.random() * 400));
                employers.push(employer);
            }
            for (let i = 0; i < 6; i++) {
                boxPos.push([510, (110 + i * 65)]);
            }
            console.log(boxPos);
            startTrainer();
            background = Dönerladen.crc2.getImageData(0, 0, Dönerladen.crc2.canvas.width, Dönerladen.crc2.canvas.height); // Boden
        }
        function startTrainer() {
            drawBackground();
            employer1.animate(auswahl[0] - 40, auswahl[1] + 25);
            for (let i = 0; i < customers.length; i++) {
                customers[i].animate();
            }
            for (let i = 0; i < employers.length; i++) {
                employers[i].draw();
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
            Dönerladen.crc2.closePath();
            for (let i = 0; i < 6; i++) {
                Dönerladen.crc2.beginPath();
                Dönerladen.crc2.fillRect(boxPos[i][0], boxPos[i][1], 100, 50);
                Dönerladen.crc2.closePath();
            }
            Dönerladen.crc2.beginPath();
            Dönerladen.crc2.strokeStyle = "white";
            Dönerladen.crc2.fillStyle = "white";
            Dönerladen.crc2.arc(650, 300, 30, 0, 2 * Math.PI);
            Dönerladen.crc2.stroke();
            Dönerladen.crc2.fill();
        }
        function getMousePos(evt) {
            var rect = canvas.getBoundingClientRect();
            return {
                x: evt.clientX - rect.left,
                y: evt.clientY - rect.top
            };
        }
        function pos(event) {
            let pos = getMousePos(event);
            console.log(boxPos.length);
            for (let i = 0; i < boxPos.length; i++) {
                console.log(boxPos[i][1]);
                if (pos.x > boxPos[i][0] && pos.x < boxPos[i][0] + 100 && pos.y > boxPos[i][1] && pos.y < boxPos[i][1] + 50) {
                    auswahl[0] = boxPos[i][0];
                    auswahl[1] = boxPos[i][1];
                }
            }
        }
    }
})(Dönerladen || (Dönerladen = {}));
//# sourceMappingURL=main.js.map