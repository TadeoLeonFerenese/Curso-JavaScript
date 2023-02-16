import "./style.css";
import javascriptLogo from "./javascript.svg";
import Logo from "./public/BrBa2.png";
import { BreakingBadApp } from "./src/breakingbad/breakingbad-app";

document.querySelector("#app").innerHTML = `
  <div>
    <a id="icon-img" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${Logo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1 id="app-title">Hello Vite!</h1>
    <div class="card">
    </div>
  </div>
`;

const element = document.querySelector(".card");

BreakingBadApp(element);
