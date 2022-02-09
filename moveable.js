"use strict";
var Dönerladen;
(function (Dönerladen) {
    class Moveable {
        position;
        velocity;
        constructor() {
            //
        }
        move() {
            this.position.add(this.velocity);
            if (this.position.x < 0)
                this.position.x += Dönerladen.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += Dönerladen.crc2.canvas.height;
            if (this.position.x > Dönerladen.crc2.canvas.width)
                this.position.x -= Dönerladen.crc2.canvas.width;
            if (this.position.y > Dönerladen.crc2.canvas.height)
                this.position.y -= Dönerladen.crc2.canvas.height;
        }
    }
    Dönerladen.Moveable = Moveable;
})(Dönerladen || (Dönerladen = {}));
//# sourceMappingURL=moveable.js.map