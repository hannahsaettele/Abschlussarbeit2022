"use strict";
var Dönerladen;
(function (Dönerladen) {
    /*Abschlussarbeit, Hannah Sättele, Matrikelnr. 268473, erstellt.: 27.01.22;
    Inspiration: Lukas D.
    */
    window.addEventListener("load", handleLoad);
    let background;
    let formData;
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
    let volumenStcok;
    let counter = 0;
    let employerAuswahl = 0;
    let moodValue = 0;
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
            document.getElementById("settings").style.display = "none";
            volumenStcok = document.getElementById("stock").value;
            let customer = new Dönerladen.Customer(700 + Math.round(Math.random() * 250), 100 + Math.round(Math.random() * 400), document.getElementById("custumorAnzahl").value, document.getElementById("workload").value);
            customers.push(customer);
            for (let i = 0; i < employerMax; i++) {
                let employer = new Dönerladen.Employee(200 + Math.round(Math.random() * 200), 100 + Math.round(Math.random() * 400));
                employers.push(employer);
            }
            for (let i = 0; i < 6; i++) {
                boxPos.push([510, (110 + i * 65)]);
            }
            console.log();
            stock = new Dönerladen.Stock(volumenStcok);
            doener = new Dönerladen.Doner();
            setInterval(mood, 6000);
            startTrainer();
            //background = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height); // Boden
        }
        function mood() {
            moodValue++;
        }
        function startTrainer() {
            drawBackground();
            for (let i = 0; i < customers.length; i++) {
                customers[i].animate();
            }
            for (let i = 0; i < employers.length; i++) {
                employers[i].active = false;
                employers[employerAuswahl].active = true;
                employers[i].animate(auswahl[0] - 40, auswahl[1] + 25);
            }
            stock.update();
            doener.drawDoner(650, 300);
            setTimeout(startTrainer, 5);
            doenerBestellungFertig();
            if (donerFertig == true) {
                doener.setDoner();
                counter++;
                donerFertig = false;
                moodValue -= 1;
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
            Dönerladen.crc2.font = "30px Verdana";
            Dönerladen.crc2.fillStyle = "black";
            Dönerladen.crc2.fillText("ROHSTOFFE", 10, 300);
            Dönerladen.crc2.fillStyle = "#000";
            Dönerladen.crc2.fillRect(0, 0, 200, 100);
            Dönerladen.crc2.fillStyle = "#777";
            Dönerladen.crc2.closePath();
            for (let i = 0; i < 6; i++) {
                Dönerladen.crc2.beginPath();
                Dönerladen.crc2.fillRect(boxPos[i][0], boxPos[i][1], volumenStcok, 50);
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
                Dönerladen.crc2.font = "25px Verdana";
                Dönerladen.crc2.fillStyle = "white";
                Dönerladen.crc2.fillText("" + counter, 10, 50);
                Dönerladen.crc2.fillStyle = "#777";
                Dönerladen.crc2.closePath();
            }
            Dönerladen.crc2.beginPath();
            Dönerladen.crc2.strokeStyle = "white";
            Dönerladen.crc2.fillStyle = "white";
            Dönerladen.crc2.arc(650, 300, 30, 0, 2 * Math.PI);
            Dönerladen.crc2.stroke();
            Dönerladen.crc2.fill();
            if (moodValue == 0) {
                Dönerladen.crc2.fillStyle = "white";
                Dönerladen.crc2.fillRect(100, 0, 100, 100);
                Dönerladen.crc2.font = "50px Verdana";
                Dönerladen.crc2.fillStyle = "black";
                Dönerladen.crc2.fillText(":D", 110, 60);
            }
            if (moodValue == 1) {
                Dönerladen.crc2.fillStyle = "green";
                Dönerladen.crc2.fillRect(100, 0, 100, 100);
                Dönerladen.crc2.font = "50px Verdana";
                Dönerladen.crc2.fillStyle = "black";
                Dönerladen.crc2.fillText(":)", 110, 60);
            }
            if (moodValue == 2) {
                Dönerladen.crc2.fillStyle = "orange";
                Dönerladen.crc2.fillRect(100, 0, 100, 100);
                Dönerladen.crc2.font = "50px Verdana";
                Dönerladen.crc2.fillStyle = "black";
                Dönerladen.crc2.fillText(":O", 110, 60);
            }
            if (moodValue >= 3) {
                Dönerladen.crc2.fillStyle = "red";
                Dönerladen.crc2.fillRect(100, 0, 100, 100);
                Dönerladen.crc2.font = "50px Verdana";
                Dönerladen.crc2.fillStyle = "black";
                Dönerladen.crc2.fillText(":(", 110, 60);
            }
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
                    stock.addIngredient(i + 1, volumenStcok);
                    vorrat = false;
                }
            }
            if (pos.x > 0 && pos.x < 200 && pos.y > 0 && pos.y < 600) {
                auswahl[0] = 250;
                auswahl[1] = 300;
                vorrat = true;
            }
            for (let i = 0; i < employerMax; i++) {
                if (pos.x > employers[i].posX - 30 && pos.x < employers[i].posX + 50 && pos.y > employers[i].posY - 40 && pos.y < employers[i].posY + 50) {
                    employerAuswahl = i;
                }
            }
        }
    }
})(Dönerladen || (Dönerladen = {}));
//# sourceMappingURL=main.js.map