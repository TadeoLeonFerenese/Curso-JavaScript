import { heroes } from "../data/heroes";

//<----------- Promesas ----------->

/**
 *
 * @param {HTMLDivElement} element
 */
export const promiseComponent = (element) => {
  const renderHero = (hero) => {
    element.innerHTML = hero.name;
  };

  const renderError = (error) => {
    element.innerHTML = `
    <h1>Error:</h1>
    <h3>${error}</h3>`;
  };

  const id1 = "5d86371fd55e2e2a30fe1ccb2";
  const id2 = "5d86371fd55e2e2a30fe1ccb4";

  //then sirve para cuando esta todo bn
  //catch cuando esta todo mal
  //finally es para terminar
  findhero(id1)
    .then(renderHero) //esta linea sirve para consumir la pomesa
    .catch((error) => renderError(error)); //esta linea sirve para ejecutar en caso de error de busqueda
};

/**
 *
 * @param {String} id
 * @returns {Promise}
 */
const findhero = (id) => {
  return new Promise((resolve, reject) => {
    const hero = heroes.find((hero) => hero.id === id);

    if (hero) {
      resolve(hero);
      return;
    }
    reject(`Hero with ${id} not found`);
  });
};
