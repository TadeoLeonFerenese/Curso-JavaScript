/**
 *
 * @param {HTMLDivElement} element
 */

export const eviromentsComponent = (element) => {
  console.log(import.meta.env); //esto nos da un registro de las variables de entorno

  const html = `
  Dev:${import.meta.env} <br/>
  Prod:${import.meta.PROD} <br/>
  KEY:${import.meta.VITE_API_KEY} <br/>
  URL:${import.meta.VITE_BASE_URL} <br/>
  `;
  element.innerHTML = html;
};
