import "./style.css";
import javascriptLogo from "./javascript.svg";
import { eviromentsComponent } from "./src/conceptos/01-enviroments";
import { callbacksComponent } from "./src/conceptos/02-callbacks";
import { promiseComponent } from "./src/conceptos/03-promises";
import { promiseRaceComponent } from "./src/conceptos/04-promise-race.js";
import { asyncComponent } from "./src/conceptos/05-async.js";
import { asyncAwaitComponent } from "./src/conceptos/06-async-await";
import { asyncAwait2Component } from "./src/conceptos/07-async-await";
import { forAwaitComponent } from "./src/conceptos/08-for-await";
import { generatorFunctionsComponent } from "./src/conceptos/09-generators";
import { generatorsAsyncComponent } from "./src/conceptos/10-generators-async";

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
// promiseComponent(element);
// promiseRaceComponent(element);
// asyncComponent(element);
// asyncAwaitComponent(element);
// asyncAwait2Component(element);
// forAwaitComponent(element);
// generatorFunctionsComponent(element);
generatorsAsyncComponent(element);
