// Clases

class Persona {
  // por defecto vienen "use strict", osea que no podes hacer referencia en el constructor a una var en el scope
  nombre = "";
  codigo = "";
  frase = "";
  //Es un metodo que se ejecuta en el momento que se va a instanciar en el momento que se crea una nueva instanciacion de Persona
  constructor(
    nombre = "Sin Nombre",
    codigo = "Sin Codigo",
    frase = "Sin Frase"
  ) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.frase = frase;
  }
}

const spiderman = new Persona(
  "Pteter Parker",
  "Spider",
  "Soy tu amigable vecino Spiderman"
);
const ironman = new Persona("Tont Stark", "Iron", "Soy rico y vos no pobre");
console.log(spiderman);
console.log(ironman);
