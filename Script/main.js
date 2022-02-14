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
    let stock;
    let vorrat = false;
    let doener;
    let donerFertig = false;
    let zutaten = ["tomaten",
        "zwiebeln",
        "salat",
        "kraut",
        "falafel",
        "soße"];
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
            stock = new Dönerladen.Stock();
            doener = new Dönerladen.Doner();
            startTrainer();
            //background = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height); // Boden
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
            stock.update();
            doener.drawDoner(650, 300);
            setTimeout(startTrainer, 5);
            doenerBestellungFertig();
            if (donerFertig == true) {
                doener.setDoner();
                donerFertig = false;
            }
        }
        function doenerBestellungFertig() {
            let j = 0;
            for (let i = 0; i < customers[0].getBestellung().length; i++) {
                if (doener.getDonerString()[i] == customers[0].getBestellung()[i]) {
                    j++;
                }
                if (j == customers[0].getBestellung().length) {
                    donerFertig = true;
                    customers[0].setErhalten();
                }
            }
            j = 0;
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
                Dönerladen.crc2.fillStyle = "#32CD32";
                if (stock.getFullstand(i + 1) > 0) {
                    Dönerladen.crc2.fillRect(boxPos[i][0], boxPos[i][1], stock.getFullstand(i + 1), 50);
                    Dönerladen.crc2.font = "25px Verdana";
                    Dönerladen.crc2.fillStyle = "black";
                    Dönerladen.crc2.fillText(zutaten[i], boxPos[i][0] + 8, boxPos[i][1] + 35);
                }
                else {
                    Dönerladen.crc2.fillStyle = "red";
                    Dönerladen.crc2.fillRect(boxPos[i][0], boxPos[i][1], 100, 50);
                    Dönerladen.crc2.font = "25px Verdana";
                    Dönerladen.crc2.fillStyle = "black";
                    Dönerladen.crc2.fillText("empty", boxPos[i][0] + 8, boxPos[i][1] + 35);
                }
                Dönerladen.crc2.fillStyle = "#777";
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
                if (pos.x > boxPos[i][0] && pos.x < boxPos[i][0] + 100 && pos.y > boxPos[i][1] && pos.y < boxPos[i][1] + 50 && vorrat == false && doener.getDonerBool(i + 1) == false) {
                    auswahl[0] = boxPos[i][0];
                    auswahl[1] = boxPos[i][1];
                    stock.removeIngredient(i + 1);
                    doener.add(i + 1);
                }
                else if (pos.x > boxPos[i][0] && pos.x < boxPos[i][0] + 100 && pos.y > boxPos[i][1] && pos.y < boxPos[i][1] + 50 && vorrat == true) {
                    auswahl[0] = boxPos[i][0];
                    auswahl[1] = boxPos[i][1];
                    stock.addIngredient(i + 1);
                    vorrat = false;
                }
            }
            if (pos.x > 0 && pos.x < 200 && pos.y > 0 && pos.y < 600) {
                auswahl[0] = 250;
                auswahl[1] = 300;
                vorrat = true;
            }
        }
    }
})(Dönerladen || (Dönerladen = {}));
//# sourceMappingURL=main.js.map