// Operador ternario
//problema planteado

/**
 * Dias de semana abrimos a las 11
 * pero los fines de semana abrimos a las 9
 */

// Entra a un sitio web, para consultar si esta abierto hoy........
const dia = 0; // 0: domingo....1:lunes...
const horaActual = 10;

let horaApertura;
let mensaje; // Esta abierto, esta cerrado, hoy abrimos XX

// if (dia === 0 || dia === 6) {
// if ([0, 6].includes(dia)) {
//   // De esta forma achico el codigo y le doy un rango, dia 0:domingo a 6:sabado y pregunto con includes si el valor en la constante eesta dentro
//   console.log("Fin de semana");
//   horaApertura = 11;
// } else {
//   console.log("Dia de semana");
//   horaApertura = 11;
// }
//resumen de los "IF and Else" en una variable con operadores ternarios

horaApertura = [0, 6].includes(dia) ? 9 : 11; // El  "?" funciona como IF y el ":" funciona como Else

// if (horaActual >= horaApertura) {
//   mensaje = "Esta Abierto";
// } else {
//   mensaje = `Esta cerrado, hoy abrimos a las ${horaApertura}`;
// }
//Resumen con operadores ternarios

mensaje =
  horaActual >= horaApertura
    ? "Esta Abierto"
    : `esta cerrado, hoy abrimos ${horaApertura}`;

console.log({ horaApertura });
