namespace Dönerladen {


    
    export class Doner {
      tomaten:boolean = false;
      zwiebeln :boolean = false;
      salat :boolean = false;
      kraut :boolean = false;
      falafel :boolean = false;
      soße :boolean = false;
      inhalt:string[] = [];
    constructor() {
      // 
  }
  add(_zutatID:number){
    if (_zutatID == 1) {
     this.tomaten=true;
     this.inhalt.push("tomaten");
  }
  else if (_zutatID == 2) {
      this.zwiebeln = true;
      this.inhalt.push("zwiebeln");
  }
  else if (_zutatID == 3) {
      this.salat = true;
      this.inhalt.push("salat");
  }
  else if (_zutatID == 4) {
      this.kraut = true;
      this.inhalt.push("kraut");
  }
  else if (_zutatID == 5) {
     this.falafel = true;
     this.inhalt.push("falafel");
  }
  else if (_zutatID == 6) {
      this.soße  = true;
      this.inhalt.push("soße");
  }
  }
  getDonerBool(_zutatID:number):boolean{
    if (_zutatID == 1) {
     return this.tomaten;
   }
   else if (_zutatID == 2) {
    return this.zwiebeln;
   }
   else if (_zutatID == 3) {
    return this.salat;
   }
   else if (_zutatID == 4) {
    return this.kraut;
   }
   else if (_zutatID == 5) {
    return this.falafel;
   }
   else if (_zutatID == 6) {
    return this.soße;
   }
   return false;
  }
  getDonerString():String[]{
    return this.inhalt;
  }
  setDoner(){
    this.tomaten = false;
    this.salat = false;
    this.falafel = false;
    this.kraut = false;
    this.soße = false;
    this.zwiebeln= false;
    this.inhalt = [];
  }
  drawDoner(_xPos:number, _yPos:number){
    if (this.salat == true) {
      this.drawSalat(_xPos,_yPos);
  }
    if (this.soße == true) {
      this.drawSoße(_xPos,_yPos);
  }
    if (this.tomaten == true) {
      this.drawTomaten(_xPos,_yPos);
   }
   
   if (this.zwiebeln == true) {
       this.drawZwiebeln(_xPos,_yPos);
   }
 
   if (this.falafel == true) {
      this.drawFalafel(_xPos,_yPos);
   }
   
   if (this.kraut == true) {
    this.drawKraut(_xPos,_yPos);
}
 
  }
      drawTomaten(_xPos:number, _yPos:number){

        crc2.beginPath();
        crc2.strokeStyle = "red";
        crc2.fillStyle = "red";
        crc2.arc(_xPos-7, _yPos-7, 15, 0, 2 * Math.PI);
        crc2.arc(_xPos+7, _yPos+7, 15, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fill();
      }
      drawZwiebeln(_xPos:number, _yPos:number){

        crc2.beginPath();
        crc2.strokeStyle = "white";
        crc2.arc(_xPos, _yPos, 15, 0, 2 * Math.PI);
        crc2.stroke();

      }
      drawSalat(_xPos:number, _yPos:number){

        crc2.beginPath();
        crc2.strokeStyle = "green";
        crc2.fillStyle = "green";
        crc2.arc(_xPos, _yPos, 30, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fill();

      }
      drawKraut(_xPos:number, _yPos:number){
        crc2.beginPath();
        crc2.strokeStyle = "blueviolet";
        crc2.fillStyle = "blueviolet";
        crc2.rect(_xPos-5, _yPos-5, 3, 10);
        crc2.rect(_xPos+5, _yPos+5, 3, 10);
        crc2.rect(_xPos-7, _yPos-7, 3, 10);
        crc2.rect(_xPos-9, _yPos-9, 3, 10);
        crc2.rect(_xPos+7, _yPos+7, 3, 10);
        crc2.rect(_xPos+9, _yPos+9, 3, 10);
        crc2.stroke();
        crc2.fill();


      }
      drawFalafel(_xPos:number, _yPos:number){

        crc2.beginPath();
        crc2.strokeStyle = "brown";
        crc2.fillStyle = "brown";
        crc2.arc(_xPos-7, _yPos-7, 10, 0, 2 * Math.PI);
        crc2.arc(_xPos+7, _yPos+7, 10, 0, 2 * Math.PI);
        crc2.arc(_xPos-9, _yPos-9, 10, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fill();
      }
      drawSoße(_xPos:number, _yPos:number){
        crc2.beginPath();
        crc2.strokeStyle = "white";
        crc2.fillStyle = "white";
        crc2.arc(_xPos, _yPos, 20, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fill();

      }

    }
}