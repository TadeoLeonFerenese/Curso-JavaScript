// Maneras de crear FUNCIONES y definirlas.

function saludar(nombre) {
  // forma tradicional
  console.log(arguments); //esto sirve para que aparezca en consola todos los parametros usados al llamar una function yno pasarlos dentro de ella
  console.log("Hola " + nombre);
  return 1; // aca se puede retornar lo que yo quiera, valor, array, str, etc

  console.log("Soy un codigo despues del returno"); //no se ejecuta nunca esta linea por que luego del return no pasa nada mas
}

const saludar2 = function saludar(nombre) {
  //Funcion anonima, no se puede reutilizar en la apk por la variable "const"
  console.log("Hola " + nombre);
};

//Arrow function

const saludarArrow = () => {
  console.log("Hola Arrow");
};

const saludarArrow2 = (algo) => {
  console.log("hola " + algo);
};

const retornoDeSaludar = saludar("Tadeo", 31, true, "Argentina"); //con arguments se imprime en consola todo esto //ESTO ES COMO SI DIJERA RETURN = 1
console.log(retornoDeSaludar);
// saludar2("Tadeo");
// saludarArrow();
// saludarArrow2("Tadeo");

// function sumar(a, b) {
//   return a + b;
// }

const sumar2 = (a, b) => a + b; //De esta forma resumiria toda la funcion a una linea de codigo ya que esto retorna tmb a + b

//Function para randomizar valores
function getAleatorio() {
  return Math.random();
}

//Tarea hacer la funcion a arrow sin llaves, llamarla getAleatorio2

const getAleatorio2 = () => Math.random();

console.log(getAleatorio2());

// console.log(sumar2(1, 2));
