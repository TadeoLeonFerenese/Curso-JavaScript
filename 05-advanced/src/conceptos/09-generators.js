/**
 *
 * @param {HTMLDivElement} element
 */

export const generatorFunctionsComponent = (element) => {
  // const myGenerator = myFirstGeneratorFuncion();
  // console.log(myGenerator.next());
  const genId = idGnenerator();

  const button = document.createElement("button");
  button.innerText = "Click me";
  element.append(button);

  const renderButton = () => {
    const {} = genId.next();
    button.innerText = `Click ${value}`;
  };

  button.addEventListener("click", renderButton);
};

function* idGnenerator() {
  let currentId = 0;
  while (true) {
    yield ++currentId;
  }
}

function* myFirstGeneratorFuncion() {
  yield "Primer valor";
  yield "Segundo valor";
  yield "Tercer valor";
  yield "Cuarto valor";

  return "No hay valores";
  yield "Ya no pueden hacer nada";
}
