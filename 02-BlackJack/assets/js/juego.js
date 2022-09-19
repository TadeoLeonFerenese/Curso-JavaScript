/**
 * "2C = two  of clubs (treboles)"
 * "2D = two  of diamonds (treboles)"
 * "2H = two  of hearts (treboles)"
 * "2S = two  of sapdes (treboles)"
 */

//reglas: hay que alcanzar los 21 puntos o acercarnos, si nos pasamos perdemos

let deck = []; //aca podes crear un array con todas las cartas pero no es eficiente y es mala practica
const tipos = ["C", "D", "H", "S"];
const especiales = ["A", "J", "Q", "K"];

// <!--Creo el deck->
const crearDeck = () => {
  for (let i = 2; i <= 10; i++) {
    // deck.push(i + "C"); // Si lo hago de esta forma tengo que repetir codigo con cada tipo de carta
    for (let tipo of tipos) {
      deck.push(i + tipo); // De este modo hago dinamico y pushea segun la condicion que puse del 2 al 10 un tipo y luego resetea hasta que pushea todos
    }
  }

  for (let tipo of tipos) {
    for (let esp of especiales) {
      deck.push(esp + tipo);
    }
  }
  //   console.log(deck);
  // Utilizo UNDERSCORE.js para randomizar el orden de loas cartas y que no salgan siempre en orden
  deck = _.shuffle(deck);
  console.log(deck);
};

crearDeck();

// <!--Pedir Carta->
const pedirCarta = () => {
  if (deck.length === 0) {
    throw "The Deck is empty"; //Esto da error cuando no hay mas cartas en este caso
  }

  const carta = deck.pop();

  console.log(deck);
  console.log(carta);
  return carta;
};
// console.log(carta);

pedirCarta();

// <!--Valor de la Carta->
const valorCarta = (carta) => {
  // Forma CORTA
  const valor = carta.substring(0, carta.length - 1); // substring es por que si lo uso con un array el valor 10 no lo toma
  return isNaN(valor) ? (valor === "A" ? 10 : 11) : valor * 1;
};
// Forma LARGA
//   let puntos = 0;
//   console.log({ valor });
//isNaN sirve para determinar que el valor no es un numero
//   if (isNaN(valor)) {
//     puntos = valor === "A" ? 10 : 11;
//   } else {
//     console.log("Es un numero");
//     puntos = valor * 1; // Lo multiplico por 1 para pasarlo de string a number
//   }
//   console.log(puntos);
// };

const valor = valorCarta(pedirCarta());
console.log({ valor });
