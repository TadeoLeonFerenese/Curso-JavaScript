//peticion HTTP desde una api

/**
 * @returns {Object} Quote information
 */
const fetchQuote = async () => {
  // <<<<<<< HEAD
  // const res = await fetch(" https://api.breakingbadquotes.xyz/v1/quotes"); //metodo para realizar una peticion http
  // console.log(res);
  // =======
  const res = await fetch(" https://api.breakingbadquotes.xyz/v1/quotes "); //metodo para realizar una peticion http
  const data = await res.json(); //El Json se utiliza para obtener el bodi de la data (api)

  console.log(data[0]);
  return data[0];
  // >>>>>>> 535ed85b3bff9a669c15faf48199b31cd079fd41
};

/**
 *
 * @param {HTMLDivElement} element
 */
export const BreakingBadApp = async (element) => {
  document.querySelector("#app-title").innerHTML = "Breakingbad App";
  element.innerHTML = "Loading ...";
  // await fetchQuote();

  const quoteLabel = document.createElement("blockquote");
  const authoLabel = document.createElement("h3");
  const nextQuoteButton = document.createElement("button");
  nextQuoteButton.innerText = "Next Quote";

  const renderQuote = (data) => {
    quoteLabel.innerHTML = data.quote;
    authoLabel.innerHTML = data.author;
    element.replaceChildren(quoteLabel, authoLabel, nextQuoteButton);
  };

  //Añadir Listener
  nextQuoteButton.addEventListener("click", async () => {
    element.innerHTML = "Loading ...";
    const quote = await fetchQuote();
    renderQuote(quote);
  });

  fetchQuote().then(renderQuote);
};
