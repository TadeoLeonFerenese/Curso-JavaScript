// funciones

function saludar(nombre) {
  // forma tradicional
  console.log(arguments); //esto sirve para que aparezca en consola todos los parametros usados al llamar una function yno pasarlos dentro de ella
  console.log("Hola " + nombre);
}

const saludar2 = function saludar(nombre) {
  //Funcion anonima, no se puede reutilizar en la apk por la variable "const"
  console.log("Hola " + nombre);
};

const saludarArrow = (algo) => {
  console.log("hola " + algo);
};

saludar("Tadeo", 31, true, "Argentina"); //con arguments se imprime en consola todo esto
saludar2("Tadeo");
saludarArrow("Tadeo");
