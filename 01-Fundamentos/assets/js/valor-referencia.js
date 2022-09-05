let a = 10;
let b = a;
a = 30; //JS trabaja en cascada

console.log({ a, b });

// esto es incorrecto
// let juan = { nombre: "Juan" };
// let ana = juan;
// ana.nombre = "Ana";

// console.log({ juan, ana }); // aca  me va a tomar a juan como ana y ana como anda por que se renombra la variable ana y a su vez ana tiene de valor juan

//Esto es incorrecto
// const cambiarNombre = (persona) => {
//   persona.nombre = "Tony";
//   return persona;
// };

// let peter = { nombre: "peter" };
// let tony = cambiarNombre(peter);

// console.log({ peter, tony }); // imprime ambos obj iguales ("tony") por que por parametro le paso tony y en la funcion cambia de nombre y por eso son ambos iguales

//Forma correcta de copiar valor de un obj
let juan = { nombre: "Juan" };
let ana = { ...juan }; // la forma correcta es con spread ("...") y englobarlo como obj
ana.nombre = "Ana";

console.log({ juan, ana });

const cambiarNombre = ({ ...persona }) => {
  persona.nombre = "Tony";
  return persona;
};

let peter = { nombre: "peter" };
let tony = cambiarNombre(peter);

console.log({ peter, tony });

//Arreglos
const frutas = ["Manzana", "Pera", "Piña"];

// const otrasFrutas = frutas; // esta linea esta mal
// const otrasFrutas = [...frutas]; //esto es un modo de hacerlo
console.time("slice");
const otrasFrutas = frutas.slice();
console.timeEnd("slice");

console.time("spread");
const otrasFrutas2 = [...frutas]; // en este caso el spread es mucho mas rapido que el slice
console.timeEnd("spread"); //uso el console.time para ver cual es que renderiza mas rapido y es mas eficaz

otrasFrutas.push("Mango");

console.table({ frutas, otrasFrutas });
