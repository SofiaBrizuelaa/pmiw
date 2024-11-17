/*
COM3 
tpfinalparte2
Sofia Brizuela
Ada Rojas       
VIDEO:https://youtu.be/82HLSZmoPNc
*/



let juego;

function setup() {
  createCanvas(640, 480);
  juego = new Juego();
}

function draw() {
  background(6, 13, 52);
  juego.mostrar();
}

function mousePressed() {
    juego.verificarClick(mouseX, mouseY); 
}
 
