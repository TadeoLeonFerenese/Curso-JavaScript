//Importo la funcion "saludar del archivo  Componentes "
import { saludar } from "./js/componentes.js"; //Esto sirve para importar como en react pero de esta forma es webpack manual

const nombre = "Tadeo";

saludar(nombre);

//ejecuto el main con el comando "npm run build"
