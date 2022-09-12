//While / Do-While
//este es un Ciclo y sirven para evitar reescribir codigo
console.warn("While");

const autos = ["honda", "Ford", "mazda", "toyota"];
// para imprimir estos elementos del array usamos while

let i = 0;

// while (i < autos.length) {
//   //este se va a ejecutar siempre y cuando la condicion sea verdadera
//   console.log(autos[i]);
//   //   i = i + 1;
//   i++;
// }

//undefined
//null
// false

while (autos[i]) {
  //este se va a ejecutar siempre y cuando la condicion sea verdadera
  if (i === 1) {
    // break;
    i++;
    continue;
  }
  console.log(autos[i]);
  //   i = i + 1;
  i++;
}

//Do-while
//la diferencia entre while y do-while es que este ejecuta el bloque interno una vez
console.warn("Do while");

let j = 0;

do {
  //el ciclo se repite siempre y cuando la condicion sea true
  console.log(autos[j]);
  j++;
} while (autos[j]);
