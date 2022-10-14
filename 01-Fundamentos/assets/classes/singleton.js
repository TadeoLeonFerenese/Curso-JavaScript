//El singleton sirve para que me retorne siempre una unica instancia  de mi class
//Sirve para compartir informacion

class singleton {
  static instancia;
  nombre = "";

  constructor(nombre = "") {
    if (!!singleton.instancia) {
      // la doble negacion le indica que haga lo opuesto de true
      return singleton.instancia;
    }

    singleton.instancia = nombre;
    this.nombre = nombre;

    // return this;
  }
}

const instancia1 = new singleton("Ironman");
const instancia2 = new singleton("Spiderman");
const instancia3 = new singleton("Blackpanther");

console.log(`El nombre de la instancia es ${instancia1.nombre}`); //Por mas que declare una nueva instancia siempre va a llamar a una sola, para eso es el singleton
console.log(`El nombre de la instancia es ${instancia2.nombre}`);
console.log(`El nombre de la instancia es ${instancia3.nombre}`);
