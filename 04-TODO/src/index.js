//Importo la funcion "saludar del archivo  Componentes "
import "./styles.css";

import { Todo, TodoList } from "./classes";
import { crearTodoHtml } from "./js/componentes";

const todoList = new TodoList();

const tarea = new Todo("Aprender Javascript");
todoList.nuevoTodo(tarea);

console.log(todoList);

crearTodoHtml(tarea);

console.log(crearTodoHtml);
