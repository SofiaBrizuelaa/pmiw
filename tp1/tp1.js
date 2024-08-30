//Brizuela Sofía 
//Comisión 3
//118977/0
//https://youtu.be/dA3DaFQDEcg

let colorCirculos;
let columnas = 19;
let filas = 19;
let tamMax =25;
let tamMin = 5;
let img;

//Carga de imagen
function preload () {
img = loadImage("/data/F_10.jpg");
}


function setup() {
 createCanvas (800, 400); 
 colorCirculos = color(255); //color inicial de los círculos
}


function draw() {
 background (0);
 noStroke();
 image(img, 0, 0, 400, 400);
 
 //espacios entre los círculos
 let xespacio = (width / 2) / (columnas + 1);
 let yespacio = height / (filas + 1);
 
// Coordenadas del centro del círculo
  let centroX = 3 * width / 4;
  let centroY = height / 2;
  
    // Círculos en una cuadrícula
  for (let i = 0; i < columnas; i++) {
    for (let j = 0; j < filas; j++) {

      let x = (i + 1) * xespacio + width / 2;
      let y = (j + 1) * yespacio;
      
            // Distancia desde el centro
      let distancia = dist(centroX, centroY, x, y);
      let maxDist = dist(width / 2, 0, centroX, centroY);
      
      // Función propia para calcular el diámetro
      let diametro = calcularDiametro(distancia, maxDist, tamMin, tamMax);
      
      // Dibujar el círculo con el diámetro calculado
      fill(colorCirculos);
      ellipse(x, y, diametro, diametro);
    }
  }
}

// Función que calcula el diámetro de un círculo
function calcularDiametro(distancia, maxDist, tamMin, tamMax) {
  return map(distancia, 0, maxDist, tamMin, tamMax);
}

// Función para cambiar el color de los círculos a uno aleatorio
function colorAleatorio() {
  colorCirculos = color(random(255), random(255), random(255));
}

function mousePressed() {
  // Si el clic es en la mitad derecha de la pantalla, cambia el color de los círculos
  if (mouseX > width / 2) {
    colorAleatorio();
  }
}

function keyPressed() {
  // Si se presiona la tecla 'r', reinicia el color de los círculos a blanco
  if (key == 'r') {
    colorCirculos = color(255);
  }
}
