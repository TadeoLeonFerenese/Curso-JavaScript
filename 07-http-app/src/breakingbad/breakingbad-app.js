//peticion HTTP desde una api

/**
 * @returns {Object} Quote information
 */
const fetchQuote = async () => {
  const res = await fetch(" https://api.breakingbadquotes.xyz/v1/quotes"); //metodo para realizar una peticion http
  console.log(res);
};

/**
 *
 * @param {HTMLDivElement} element
 */
export const BreakingBadApp = (element) => {
  document.querySelector("#app-title").innerHTML = "Breakingbad App";
  element.innerHTML = "Loading ...";

  fetchQuote();
};
