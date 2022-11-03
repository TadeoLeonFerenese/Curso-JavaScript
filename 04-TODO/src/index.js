//Importo la funcion "saludar del archivo  Componentes "
import "./styles.css";

import { Todo, TodoList } from "./classes";

const todoList = new TodoList();

const tarea = new Todo("Aprender ");
const tarea2 = new Todo("Comprar un Fernet ");

todoList.nuevoTodo(tarea);
todoList.nuevoTodo(tarea2);

console.log(todoList);
