//IF and Else
let a = 5;

if (a >= 10) {
  //undefined, null, una asignacion
  console.log("A es mayor o igual a 10");
} else {
  console.log("A es menor a 10");
}

// console.log("Fin de programa");

const hoy = new Date(); //sirve para crear instancias o nuevos objetos
let dia = hoy.getDay();

console.log({ dia });

if (dia === 0) {
  console.log("Domingo");
} else if (dia === 1) {
  console.log("Lunes");
  //   if (dia === 1) {
  //     console.log("Lunes");
  //   } else {
  //     console.log("No es lunes ni domingo");
  //   }
} else if (dia === 2) {
  console.log("Martes");
} else {
  console.log("No es lunes, martes o domingo...");
}

// PRIMER EJERCICIO TIPO LABORATORIO
// Sin usar if Else, o Switch, unicamente usando objetos

const dias = {
  diasSemana: [
    "lunes",
    "martes",
    "miercoles",
    "jueves",
    "viernes",
    "sabado",
    "domingo",
  ],
};

console.log(dias.diasSemana[2] || "Dia no definido"); // ""||"" esto quiere decir OR
