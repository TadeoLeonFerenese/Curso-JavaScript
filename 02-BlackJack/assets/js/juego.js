/**
 * "2C = two  of clubs (treboles)"
 * "2D = two  of diamonds (treboles)"
 * "2H = two  of hearts (treboles)"
 * "2S = two  of sapdes (treboles)"
 */
// <!--Modulos-->
//Es como una funcion anonima digamos

(() => {
  ("use strict"); //ayuda para no tener tantos errores

  //reglas: hay que alcanzar los 21 puntos o acercarnos, si nos pasamos perdemos

  let deck = []; //aca podes crear un array con todas las cartas pero no es eficiente y es mala practica
  const tipos = ["C", "D", "H", "S"],
    especiales = ["A", "J", "Q", "K"];

  let puntosJugadores = [];

  // <!--Referencias del HTML->

  const btnPedir = document.querySelector("#btnPedir"),
    btnDetener = document.querySelector("#btnDetener"),
    btnNuevo = document.querySelector("#btnNuevo");

  const divCartasJugador = document.querySelector("#jugador-cartas"),
    divcartasComputadora = document.querySelector("#computadora-cartas"),
    puntosHTML = document.querySelectorAll("small");

  // <!--Inicia el juego->

  const inicializarJuego = (numJugadores = 2) => {
    deck = crearDeck();
    for (i = 0; o < numJugadores; i++) {
      puntosJugadores.push(0);
    }
  };

  // <!--Creo el deck->
  const crearDeck = () => {
    deck = []; // reinicio el deck
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
    return _.shuffle(deck);
  };

  // <!--Pedir Carta->
  const pedirCarta = () => {
    if (deck.length === 0) {
      throw "The Deck is empty"; //Esto da error cuando no hay mas cartas en este caso
    }
    return deck.pop();
  };

  // <!--Valor de la Carta->
  const valorCarta = (carta) => {
    // Forma CORTA
    const valor = carta.substring(0, carta.length - 1); // substring es por que si lo uso con un array el valor 10 no lo toma
    return isNaN(valor) ? (valor === "A" ? 10 : 11) : valor * 1;
  };

  // <!-- Acumulador de puntos  -->

  const acumularPuntos = () => {};

  // <!-- turno computadora -->

  const turnoComputadora = (puntosMinimos) => {
    do {
      const carta = pedirCarta();

      puntosComputadora = puntosComputadora + valorCarta(carta);
      puntosHTML[1].innerText = puntosComputadora; // con esta linea pusheo los puntos del jugador si uso "1" los de la computadora

      // <!--IMG de las cartas -->
      const imgCarta = document.createElement("img");
      imgCarta.src = `assets/cartas/${carta}.png`; //cualquier valor aparecera de forma Dinamica
      imgCarta.classList.add("carta");
      // <!--DIV de las cartas -->
      divcartasComputadora.append(imgCarta);

      if (puntosMinimos > 21) {
        break;
      }
    } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

    setTimeout(() => {
      if (puntosComputadora === puntosMinimos) {
        alert("Nadie gana :(");
      } else if (puntosMinimos > 21) {
        alert("Computadora gana");
      } else if (puntosComputadora > 21) {
        alert("Jugador Gana");
      } else {
        alert("Computadora Gana");
      }
    }, 100);
  };
  // <!--Eventos->
  btnPedir.addEventListener("click", () => {
    //nombre de la clase, escuchador de eventos (escuchao cuando hago click, call back)

    const carta = pedirCarta();

    puntosJugador = puntosJugador + valorCarta(carta);
    puntosHTML[0].innerText = puntosJugador; // con esta linea pusheo los puntos del jugador si uso "1" los de la computadora

    // <!--IMG de las cartas -->
    const imgCarta = document.createElement("img");
    imgCarta.src = `assets/cartas/${carta}.png`; //cualquier valor aparecera de forma Dinamica
    imgCarta.classList.add("carta");
    // <!--DIV de las cartas -->
    divCartasJugador.append(imgCarta);

    // <!-- Logica de los puntos -->

    if (puntosJugador > 21) {
      console.warn("Lo siento mucho, perdiste");
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora(puntosJugador);
    } else if (puntosJugador === 21) {
      console.warn("21, genial!");
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora(puntosJugador);
    }
  });

  btnNuevo.addEventListener("click", () => {
    //FORMA FACIL ( receteando el navegador )
    // location.reload();

    //FORMA LARGA
    console.clear;
    inicializarJuego();
    // deck = [];
    // deck = crearDeck();
    puntosJugador = 0;
    puntosComputadora = 0;

    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;
    divCartasJugador.innerHTML = "";
    divcartasComputadora.innerHTML = "";
    btnDetener.disabled = false;
    btnPedir.disabled = false;
  });
  btnDetener.addEventListener("click", () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);
  });
})();
