import _ from "underscore";

// <!--Creo el deck->

export const crearDeck = (tipoDeCarta, tiposEspeciales) => {
  deck = []; // reinicio el deck
  for (let i = 2; i <= 10; i++) {
    // deck.push(i + "C"); // Si lo hago de esta forma tengo que repetir codigo con cada tipo de carta
    for (let tipo of tipos) {
      deck.push(i + tipo); // De este modo hago dinamico y pushea segun la condicion que puse del 2 al 10 un tipo y luego resetea hasta que pushea todos
    }
  }

  for (let tipo of tipoDeCarta) {
    for (let esp of tiposEspeciales) {
      deck.push(esp + tipo);
    }
  }
  //   console.log(deck);
  // Utilizo UNDERSCORE.js para randomizar el orden de loas cartas y que no salgan siempre en orden
  deck = _.shuffle(deck);
  return deck;
};
