// Ciclo For

const heroes = ["Batman", "Superman", "Mujer Maravilla", "Aquaman"];

console.warn("For tradicional");
// el for esta construido por "for(inicio de variable; condicion; condicion de incremento)""
for (let i = 0; i < heroes.lenght; i++) {
  console.log(heroes[i]);
}

//For in trabaja en un rango, se ejecuta siempre que sea true e imprime en este caso todo lo que este dentro del array
console.warn("For in");

for (let i in heroes) {
  console.log(heroes[i]);
}

//Se utilizan para obtener valores de objetos o arreglos de una manera sencilla
console.warn("For of");

for (let heroe of heroes) {
  console.log(heroe);
}
