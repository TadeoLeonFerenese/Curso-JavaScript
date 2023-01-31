import "./style.css";
import javascriptLogo from "./javascript.svg";
import { eviromentsComponent } from "./src/conceptos/01-enviroments";
import { callbacksComponent } from "./src/conceptos/02-callbacks";
import { promiseComponent } from "./src/conceptos/03-promises";

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">


    </div>

  </div>
`;

const element = document.querySelector(".card");

// eviromentsComponent(element);
// callbacksComponent(element);
promiseComponent(element);
