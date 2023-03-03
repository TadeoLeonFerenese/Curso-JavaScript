import usersStore from "../../strore/users-store";
import { showModal } from "../render-modal/render-modal";
import "./render-table.css";

let table;

// Todo este codigo es para crear una tabla en HTML
const createTable = () => {
  const table = document.createElement("table");
  const tableHeders = document.createElement("thead");
  tableHeders.innerHTML = `
    <tr>
       <th>#ID</th>
       <th>Balance</th>
       <th>FirstName</th>
       <th>LastName</th>
       <th>Active</th>
       <th>Actions</th>
    </tr>
    `;

  const tableBody = document.createElement("tbody");
  table.append(tableHeders, tableBody);
  return table;
};
/**
 *
 * @param {MouseEvent} event
 */
const tableSelectListener = (event) => {
  const element = event.target.closest(".select-user");
  if (!element) return;

  const id = element.getAttribute("data-id");
  showModal(id);
};

/**
 *
 * @param {HTMLDivElement} element
 */
export const renderTable = (element) => {
  const users = usersStore.getUsers();

  if (!table) {
    table = createTable();
    element.append(table);

    // TODO: listeners a la talbe
    table.addEventListener("click", tableSelectListener);
  }

  let tableHtml = "";
  users.forEach((user) => {
    tableHtml += `
    <tr>
       <td>${user.id}</td>
       <td>${user.balance}</td>
       <td>${user.firstName}</td>
       <td>${user.lastName}</td>
       <td>${user.isActive}</td>
       <td>
       <a href="#/" class="select-user" data-id="${user.id}"> Select </a>

       <a href="#/" class="select-user" data-id="${user.id}"> Delete </a>
       </td>
    </tr>
    `;
  });

  table.querySelector("tbody").innerHTML = tableHtml;
};
