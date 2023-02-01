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

  const renderTwoHero = (hero1, hero2) => {
    element.innerHTML = `
   <h3>${hero1.name}</h3>
   <h3>${hero2.name}</h3>
  `;
  };

  const renderError = (error) => {
    element.innerHTML = `
    <h1>Error:</h1>
    <h3>${error}</h3>`;
  };

  const id1 = "5d86371fd55e2e2a30fe1ccb2";
  const id2 = "5d86371fd55e2e2a30fe1ccb4";

  //! Forma 3 (Solo se puede usar si las promesas no dependen la una de la otra)
  Promise.all([findhero(id1), findhero(id2)])
    .then(([hero1, hero2]) => {
      renderTwoHero(hero1, hero2);
    })
    .catch(renderError);

  //! Forma2
  // let hero1;
  // findhero(id1)
  //   .then((hero) => {
  //     hero1 = hero;
  //     return findhero(id2);
  //   })
  //   .then((hero2) => {
  //     renderTwoHero(hero1, hero2);
  //   })
  //   .catch(renderError);

  //! THEN, CATCH, FINALLY
  //then sirve para cuando esta todo bn
  //catch cuando esta todo mal
  //finally es para terminar
  // findhero(id1)
  //   .then((hero) => {
  //     hero1 = hero2;

  //! Forma 1
  //     findhero(id2).then((hero2) => {
  //       renderTwoHero(hero1, hero2);
  //     })
  //     .catch(renderError);
  //   }) //esta linea sirve para consumir la pomesa
  //   .catch((error) => renderError(error)); //esta linea sirve para ejecutar en caso de error de busqueda
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
