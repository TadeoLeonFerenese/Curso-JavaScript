import modalHtml from "./render-modal.html?raw";
import { User } from "../../models/user";
import { getUserById } from "../../use-cases/get-user-by-id";
import "./render-modal.css";

let modal, form;
let loadedUser;

/**
 *
 * @param {String|Number} id
 */
export const showModal = async (id) => {
  modal?.classList.remove("hide-modal");
  loadedUser = {};

  if (!id) return;
  const user = await getUserById(id);
  setFormValue(user);
};

export const hideModal = () => {
  modal?.classList.add("hide-modal");
  form?.reset();
};

const setFormValue = (user) => {
  form.querySelector('[name="firstName"]').value = user.firstName;
  form.querySelector('[name="lastName"]').value = user.lastName;
  form.querySelector('[name="balance"]').value = user.balance;
  form.querySelector('[name="isActive"]').value = user.isActive;
  loadedUser = user;
};

/**
 *
 * @param {Sting|User} user
 */

/**
 *
 * @param {HTMLDivElement} element
 * @param {(userLike)=> Promise<void>} Callback
 */
export const renderModal = (element, callback) => {
  if (modal) return;
  modal = document.createElement("div");
  modal.innerHTML = modalHtml;
  modal.className = "modal-container hide-modal";
  form = modal.querySelector("form");

  modal.addEventListener("click", (event) => {
    if (event.target.className === "modal-container") {
      hideModal();
    }
  });

  form.addEventListener("submit", async (event) => {
    //para prevenir que el formulario se postee directo se realiza esto para enviarlo al backend
    event.preventDefault();

    const formData = new FormData(form);
    const userLike = { ...loadedUser };

    for (const [key, value] of formData) {
      if (key === "balance") {
        userLike[key] = +value;
        continue;
      }
      if (key === "isActive") {
        userLike[key] = value === "on" ? true : false;
      }

      userLike[key] = value;
    }
    console.log(userLike);
    await callback(userLike);
    hideModal();
  });

  element.append(modal);
};
