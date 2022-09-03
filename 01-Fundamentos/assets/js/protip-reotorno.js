// function crearPersona(nombre, apellido) {
//   return {
//     nombre: nombre,
//     apellido: apellido,
//   };
// }

const crearPersona = (nombre, apellido) => ({ nombre, apellido }); //lo que hago aca es que retorne todo lo que tengo dentro de la funcion como un obj

const persona = crearPersona("Tadeo", "Leon Ferenese");
console.log(persona);

function imprimeArgumentos() {
  console.log(arguments);
}

const imprimeArgumentos2 = (...args) => {
  //"..." este parametro se llama rest, el cual hace que todos los argumentos que sean enviados a "imprimeArgumentos2" los imprima
  //despues de este parametro no se puede poner otro argumento pero si antes
  //   console.log(edad, args);
  return args;
};

//nombrar variables en una sola linea
const [casado, vivo, nombre, saludo] = (10, true, false, "tadeo", "holis"); //de esta forma le doy un nombre a cada valor en una sola linea
console.log(casado, vivo, nombre, saludo);

//redefinir el nombre de una variable
const { apellido: nuevoApellido } = crearPersona("Tadeo", "Leon"); //De esta forma cambio el nombre de una variable que quiero
console.log({ nuevoApellido });

//restructuracion de una clase
let personaje = {
  nombre: " Tony Stark",
  codeName: "Ironman",
  vivo: false,
  //   edad: 35,
  trajes: ["mark 1", "mark v", "Hulkbuster"],
};

// const imprimePropiedades = (personaje) => {
//   console.log(personaje.nombre);
//   console.log(personaje.codeName);
//   console.log(personaje.vivo);
//   console.log(personaje.trajes);
// }; //NO ES BUENA PRACTICA DEFINIR UNA FUNCION ABAJO

const imprimePropiedades = ({ nombre, codeName, vivo, edad = 35, trajes }) => {
  console.log({ nombre });
  console.log({ codeName });
  console.log({ vivo });
  console.log({ edad });
  console.log({ trajes });
}; //NO ES BUENA PRACTICA DEFINIR UNA FUNCION ABAJO // DEFINO LA EDAD EN LOS PARAMETROS

imprimePropiedades(tony);
