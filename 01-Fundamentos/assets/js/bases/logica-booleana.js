//=============================================== Clase 35 ========================================================//
const regresaTrue = () => {
  console.log("Regresa true");
  return true;
};

const regresaFalse = () => {
  console.log("Regresa False");
  return false;
};

console.warn("not o la negacion");
console.log(true); // true
console.log(!true); // false "al agrear "!" le negamos el parametro que pasamos y da como resoltado lo contrario"
console.log(!false); // false "al agrear "!" le negamos el parametro que pasamos y da como resoltado lo contrario"

console.log(!regresaFalse()); //Esto es true por el operador negacion

console.warn("And"); // true si todos los valores son verdaderos
console.log(true && true); // true
console.log(true && !false); //true

console.log("======");
console.log(regresaFalse() && regresaTrue()); // false
console.log(regresaTrue() && regresaFalse()); // false pero primero ejecuta el true, evalua lo segundo y retorna false

console.log("====== & ======");
regresaFalse() && regresaTrue();

console.log("4 condiciones ", true && true && true && false); //false

console.warn("OR"); //true
console.log(true || false);
console.log(false || false);

console.log(regresaTrue() || regresaFalse()); // aca da true por que ya "regresaTrue" da ese valor, por eso no ejecuta el regresaFalse
console.log("4 condiciones ", true || true || true || false); //false

console.warn("Asignaciones");

//===========================================PROTIPS CLASE 36===========================================================================//

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = true && "Hola Mundo" && 150; // EN ESTE CASO EL VALOR ASIGNADO EN CONSOLA ES EL ULTIMO YA QUE UNO ES BOOLEAN, OTRO STRING Y EL ULTIMO ES NUMERICO, !!!PERO ES POR QUE ES "TRUE" SI ES FALSE NO PASA ESTO!!!!
const a2 = "Hola" && "Mundo" && soyFalso; // ACA Da FALSE PERO POR QUE TIENEN QUE DAR TODAS LAS ASIGNACIONES TRUE PARA QUE SALGA EL ULTIMO VALOR SINO SE CORTA EN EL FALSE
const a3 = soyFalso || "Ya no soy falso";
const a4 =
  soyFalso || soyUndefined || soyNull || "ya no soy false de nuevo" || true; //ACA A DIFERENCIA del "&&" imprime el true del string y no del boolean por que esta antes el string
const a5 =
  soyFalso ||
  soyUndefined ||
  regresaTrue() ||
  "ya no soy false de nuevo" ||
  true; //aca regresa "regresaTrue" por que es un valor permitido

console.log({ a1, a2, a3, a4, a5 });

if (regresaFalse() && regresaTrue() && (true || true || true || false)) {
  // Esto es muy engorroso y por eso si queda algo asi  lo mejor seria simplificarlo
  console.log("Hacer algo");
} else {
  console.log("Hacer otra cosa");
}
