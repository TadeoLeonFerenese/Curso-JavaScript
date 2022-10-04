//Como instanciar un objeto con this y new

const tadeo = {
  nombre: "Tadeo",
  edad: 31,
  imprimir() {
    console.log(`nombre: ${this.nombre} - edad: ${this.edad}`);
  },
};
const Daniel = {
  nombre: "Daniel",
  edad: 31,
  imprimir() {
    console.log(`nombre: ${this.nombre} - edad: ${this.edad}`);
  },
};

// tadeo.imprimir();

//La P mayuscula en el inicio solo indica que es para instanciar
function Persona(nombre, edad) {
  console.log("Se esta ejecuntando esta linea");
  this.nombre = nombre;
  this.edad = edad;

  this.impirmir = function () {
    console.log(`nombre: ${this.nombre} - edad: ${this.edad}`);
  };
}

// con la palabra "new" lo que se hace es crear una nueva classe
const maria = new Persona("Maria", 29);
const melissa = new Persona("Melissa", 33);
console.log(maria);
console.log(melissa);
