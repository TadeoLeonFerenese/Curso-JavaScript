import _ from "underscore";
import { crearDeck } from "./useCases/crear-deck";

/**
 * "2C = two  of clubs (treboles)"
 * "2D = two  of diamonds (treboles)"
 * "2H = two  of hearts (treboles)"
 * "2S = two  of sapdes (treboles)"
 */
// <!--Modulos-->
//Es como una funcion anonima digamos

const miModulo = (() => {
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

  const divCartasJugadores = document.querySelectorAll(".divCartas"),
    puntosHTML = document.querySelectorAll("small");

  // <!--Inicia el juego->

  const inicializarJuego = (numJugadores = 2) => {
    deck = crearDeck();

    puntosJugadores = [];
    for (let i = 0; i < numJugadores; i++) {
      puntosJugadores.push(0);
    }

    puntosHTML.forEach((elem) => (elem.innerText = 0));
    divCartasJugadores.forEach((elem) => (elem.innerHTML = ""));

    btnDetener.disabled = false;
    btnPedir.disabled = false;
  };

  crearDeck();

  // <!--Pedir Carta->
  const pedirCarta = () => {
    if (deck.length === 0) {
      throw "No hay cartas en el deck";
    }
    return deck.pop();
  };

  // <!--Valor de la Carta->
  const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
  };

  // <!-- Acumulador de puntos // Turno: 0 = primer jugador y el ultimo sera la computadora   -->

  const acumularPuntos = (carta, turno) => {
    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
    puntosHTML[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
  };

  const crearCarta = (carta, turno) => {
    // <!--IMG de las cartas -->
    const imgCarta = document.createElement("img");
    imgCarta.src = `assets/cartas/${carta}.png`; //cualquier valor aparecera de forma Dinamica
    imgCarta.classList.add("carta");
    // <!--DIV de las cartas -->
    divCartasJugadores[turno].append(imgCarta);
  };

  const determinarGanador = () => {
    const [puntosMinimos, puntosComputadora] = puntosJugadores;

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

  // <!-- turno computadora -->

  const turnoComputadora = (puntosMinimos) => {
    let puntosComputadora = 0;
    do {
      const carta = pedirCarta();
      puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1);
      crearCarta(carta, puntosJugadores.length - 1);

      if (puntosMinimos > 21) {
        break;
      }
    } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

    determinarGanador();
  };
  // <!--Eventos->
  btnPedir.addEventListener("click", () => {
    //nombre de la clase, escuchador de eventos (escuchao cuando hago click, call back)

    const carta = pedirCarta();
    const puntosJugador = acumularPuntos(carta, 0);

    crearCarta(carta, 0);

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
    inicializarJuego();
  });

  btnDetener.addEventListener("click", () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugadores[0]);
  });

  //TODO LO QUE ESTA EN ESTE RETURN ES PUBLICO, EL RESTO NO
  return {
    nuevoJuego: inicializarJuego,
  };
})();
