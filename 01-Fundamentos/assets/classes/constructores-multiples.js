//<---- Multi Constructor/ProTip ---->

class Persona {
  //Con el metodo Static porObjeto que cree lo que hago es  utilizarlo como multiconstructor ya que no hay limites para crear metodos staticos
  static porObjeto({ nombre, apellido, pais }) {
    return new Persona(nombre, apellido, pais);
  }

  constructor(nombre, apellido, pais) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.pais = pais;
  }

  getInfo() {
    console.log(`info: ${this.nombre}, ${this.apellido}, ${this.pais}`);
  }
}

const nombre1 = "Mleisa",
  apellido1 = "Flores",
  pais1 = "Honduras";

const tadeo = {
  nombre: "Tadeo",
  apellido: "Leon Ferenese",
  pais: "Argentina",
};

const persona1 = new Persona(nombre1, apellido1, pais1);
const persona2 = Persona.porObjeto(tadeo); //aca hago instancia de la class pero no lo llamo con "new" por que no se puede tener mas de un constructor.

persona1.getInfo();
persona2.getInfo();
