//<----classes y subclasses---->
class Persona {
  static _conteo = 0;
  static get conteo() {
    return Persona._conteo + " instancias";
  }
  static mensaje() {
    console.log(this.nombre);
    console.log("Hola a todos soy un metodo estatico");
  }
  nombre = "";
  codigo = "";
  frase = "";
  comida = "";
  constructor(
    nombre = "Sin Nombre",
    codigo = "Sin Codigo",
    frase = "Sin Frase"
  ) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.frase = frase;
    Persona._conteo++;
  }
  //<----Sets and Gets---->
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
//<---- SubClass ---->
class Heroe extends Persona {
  clan = "sin clan";

  constructor(nombre, codigo, frase) {
    super(nombre, codigo, frase); //"super" se utiliza para hacer referencia del constructor de la classe original

    this.clan = "The Avengers";
  }

  quienSoy() {
    console.log(`Soy ${this.nombre}, ${this.clan}`);
    super.quienSoy(); //asi no sobreescribo el metodo original "quienSoy"
  }
}

const spiderman = new Heroe(
  "Pteter Parker",
  "Spider",
  "Soy tu amigable vecino Spiderman"
);
// const spiderman = new Heroe();
// const ironman = new Persona("Tont Stark", "Iron", "Soy rico y vos no pobre");
