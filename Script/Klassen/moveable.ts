namespace Dönerladen {

    export abstract class Moveable {
        position: Vector;
        velocity: Vector;

        constructor() {
//
        }

       move(): void {
            this.position.add(this.velocity);

            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;
        }
        abstract draw(): void;
    }
    
}
