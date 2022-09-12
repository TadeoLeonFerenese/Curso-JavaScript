// Objetos Literales
// Los objetos literales son objetos que tienen pares
let personaje = {
  nombre: " Tony Stark",
  codeName: "Ironman",
  vivo: false,
  coords: {
    lat: 34.034,
    lng: -118.7,
  },
  trajes: ["mark 1", "mark v", "Hulkbuster"],
  direccion: {
    zip: "10880, 90265",
    ubicacion: "Malibu, California",
  },
  "ultima-pelicula": "Infinity War",
};

console.log(personaje); //El orden de los valores del objeto se imprimen de forma alfabetica en consola
console.log("Nombre", personaje.nombre); // instanciar el objeto
console.log("Nombre", personaje["nombre"]); // instanciar el objeto y usar la propiedad que necesito
console.log("Edad", personaje.edad);

console.log("Coords", personaje.coords); //usar las cordenadas y latitud
console.log("Lat", personaje.coords.lat);

console.log("No. Trajes", personaje.trajes.length); //Miro la cantidad de elementos en el array
console.log("Traje", personaje.trajes[personaje.trajes.length - 2]); //Miro algun elemento en particular del array

const x = "vivo";
console.log("Vivo", personaje[x]); //esto esta medio hardcodeado, pero es para usar la variable "vivo" que por defecto es false

console.log("ultima pelicula", personaje["ultima-pelicula"]); //esto sirve para llamar a un valor del objeto (clase) que tiene un guion medio en el nombre

//Mas detalles acerca de Objetos literales

delete personaje.edad; //Borrar el valor edad
console.log(personaje);

personaje.casado = true;

const entriesPares = Object.entries(personaje); // divide el objeto en pares
console.log(entriesPares);

//personaje = true
console.log(personaje);

Object.freeze(personaje); //Congela el objeto en el momento que le doy la instruccion haciendo que no aparezcan mas cambios ( no afecta a los objt dentro de otros)

personaje.dinero = 100000000000000;
personaje.direccion.ubicacion = "Argentina";
console.log(personaje);

const propiedades = Object.getOwnPropertyNames(personaje); //Toma forma de array en lugar de clase
const valores = Object.values(personaje); //Toma forma de array en lugar de clase
console.log(personaje, valores);
