/**
 *
 * @param {HTMLDivElement} element
 */

export const asyncComponent = (element) => {
  const id1 = "5d86371fd55e2e2a30fe1ccb";
  findHero(id1)
    .then(({ name }) => (element.innerHTML = name))
    .catch((error) => (element.innerHTML = error));
};

/**
 * @param {String} id
 */
//!El async transforma el objeto en una promesa
const findHero = async () => {
  const hero = hero.find((hero) => hero.id === id);
  return hero;
};
