//Un callback es una funcion que recibe un argumento y ese argumento es una funcion dentro de su funcion

import { heroes } from "../data/heroes";

/**
 *
 * @param {HTMLDivElement} element
 */

export const callbacksComponent = (element) => {
  const id = "5d86371fd55e2e2a30fe1ccb1";

  findHero(id, (error, hero) => {
    // element.innerHTML = hero?.name || "No hay heroe"; // Basicamente aca pongo los condicionales "?" y "||" para preguntar si hay heroe

    //Esta es una forma de manejar errores en callbacks
    if (error) {
      element.innerHTML = error;
      return;
    }

    element.innerHTML = hero.name;
  });
};

/**
 *
 * @param {String} id
 * @param {(error?: String|Null, hero: object)=>void} callback
 */
const findHero = (id, callback) => {
  const hero = heroes.find((hero) => hero.id === id);

  if (!hero) {
    callback(`Hero with id ${id} not found`);
    return; //con esto cierro la funcion y da undefined
  }

  callback(null, hero);
};
