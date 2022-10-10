// Clases

class Persona {
  static _conteo = 0;
  static get conteo() {
    return Persona._conteo + " instancias";
  }
  //creo un metodo sin hacer referencia al instanciamiento de la clase
  static mensaje() {
    console.log(this.nombre); //Undefined, no se puede hacer referencia al constructor
    console.log("Hola a todos soy un metodo estatico");
  }
  // por defecto vienen "use strict", osea que no podes hacer referencia en el constructor a una var en el scope
  nombre = "";
  codigo = "";
  frase = "";
  comida = "";
  //Es un metodo que se ejecuta en el momento que se va a instanciar en el momento que se crea una nueva instanciacion de Persona
  constructor(
    nombre = "Sin Nombre",
    codigo = "Sin Codigo",
    frase = "Sin Frase"
  ) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.frase = frase;
    //Hago referencia a la class misma y no a la instancia que seria con "this"
    Persona._conteo++;
  }
  //<----Sets and Gets---->
  // estos sirven para que cada vz que se establezca un valor por ej en "comida" que es una propiedad pueda controlar como se establece
  // Los sets tienen solo un parametro, no se recomienda mas
  set setComidaFavorita(comida) {
    this.comida = comida.toUpperCase();
  }
  get getComidaFavorita() {
    return `La comida favorita de ${this.nombre} es ${this.comida}`;
  }
  //<----esto es un metodo---->
  quienSoy() {
    console.log(`soy ${this.nombre} y mi identidad es ${this.codigo}`);
  }

  miFrase() {
    this.quienSoy();
    console.log(` ${this.codigo} dice ${this.frase}`);
  }
}

const spiderman = new Persona(
  "Pteter Parker",
  "Spider",
  "Soy tu amigable vecino Spiderman"
);
// const ironman = new Persona("Tont Stark", "Iron", "Soy rico y vos no pobre");

// Persona._conteo = 2;
// console.log(spiderman);
// console.log(ironman);

spiderman.quienSoy();
// spiderman.miFrase();
spiderman.setComidaFavorita = "La torta de cereza de la tia May";
// console.log(spiderman.getComidaFavorita);
console.log("conteo estatico", Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje();

Persona.propiedadExterna = "Hola mundo";
console.log(Persona.propiedadExterna);
console.log(Persona);
