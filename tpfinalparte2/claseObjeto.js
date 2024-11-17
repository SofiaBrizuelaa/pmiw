class Objeto {
  constructor() {
    this.x = random(0, width);
    this.y = 0;
    this.tam = 80;
    this.velocidad = random(2, 5);
    this.bueno = random(1) > 0.5; // 50% buenos, 50% malos
   
    
    if(!Objeto.imagenesBuenas) {
      Objeto.imagenesBuenas = [
      loadImage ("data/velasoscuras.png"),
      loadImage("data/pasteloscuro.png"), 
      loadImage("data/veneno.png"),
      loadImage("data/pianoviejo.png"),
      ];
    }
    if(!Objeto.imagenesMalas) {
       Objeto.imagenesMalas = [
       loadImage("data/pastelrosa.png"),
       loadImage("data/pianorosa.png"), 
       loadImage("data/velasclaras.png"),
       ];
    }


if (this.bueno) {
  this.imagen = random(Objeto.imagenesBuenas);
} else {
  this.imagen = random(Objeto.imagenesMalas);
}
  }




  mostrar() {
    image (this.imagen, this.x, this.y, this.tam, this.tam);
  }

  mover() {
    this.y += this.velocidad;
  }

  toca(personaje) {
    return (
      this.y + this.tam / 2 > personaje.y &&
      this.x > personaje.x &&
      this.x < personaje.x + personaje.tam
    );
  }

  fueraDePantalla() {
    return this.y > height;
  }
}
