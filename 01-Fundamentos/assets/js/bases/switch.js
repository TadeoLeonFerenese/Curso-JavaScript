//Switch //Es parecido a un if la estructura
const dia = 1; // 0: Doomingo

switch (
  dia //
) {
  case 0:
    console.log("Domingo"); //Basicmaente planteo un caso, que se analiza segun el valor que le de a la variable "DIA"
    break; //es necesario utilizar el break para que corte en cada caso sino te imprime todo

  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  default:
    console.log("no es  lunes, martes ni domingo");
}
