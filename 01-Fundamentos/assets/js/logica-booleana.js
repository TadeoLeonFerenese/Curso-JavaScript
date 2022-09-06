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
