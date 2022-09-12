let juegos = ["Zelda", "Mario", "Metroid", "Final Fantasy"];
console.log("largo:", juegos.length); // usando lenght me va a indicar el largo de los elementos dentro del array

let primero = juegos[0];
let ultimo = juegos[juegos.length - 1]; //Esto me dice la ultima posicion de un array

console.log({ primero, ultimo });

//El metodo forEach ejecuta una instruccion por cada elemento
juegos.forEach((elementos, indice, arr) => {
  // cuando usamos forEach el primer argumento usado es elemento, segundo index/indice y tercero el array
  console.log({ elementos, indice, arr });
});

let nuevaLongitud = juegos.push("F-Zero"); //Sirve para colocar un nuevo elemento al final del array
console.log({ nuevaLongitud, juegos });

nuevaLongitud = juegos.unshift("Legend of Mana"); //El metodo Unsift sirve para colocar un nuevo elemento en el principio del array
console.log({ nuevaLongitud, juegos });

let juegoBorrado = juegos.pop();
console.log({ juegoBorrado, juegos }); // El metodo POP borra el ultimo elemento del array

let pos = 1; //Establesco una posicion

let juegosBorrados = juegos.splice(pos, 2); //recive un punto inicial (pos) y  cuantos elementos quiere borrar y retorna un nuevo array
console.log({ juegosBorrados, juegos });

let metroidIndex = juegos.indexOf("Metroid");
console.log({ metroidIndex, juegos });
