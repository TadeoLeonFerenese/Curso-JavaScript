export class Todo {
  constructor(tarea) {
    this.tarea = tarea;

    this.id = new Date().getTime; //Utilizo la hs actual para que me de siempre un numero diferente y ese numero sea un id
    this.completado = false;
    this.creado = new Date();
  }
}
