"use strict";
var Dönerladen;
(function (Dönerladen) {
    /*Abschlussarbeit, Hannah Sättele, Matrikelnr. 268473, erstellt.: 27.01.22;
    In Zusammenarbeit mit: Liz, Lukas
    */
    window.addEventListener("load", handleLoad);
    let background;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        Dönerladen.crc2 = canvas.getContext("2d");
        window.addEventListener("click");
    }
})(Dönerladen || (Dönerladen = {}));
//# sourceMappingURL=main.js.map