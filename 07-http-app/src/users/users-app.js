import usersStore from "./strore/users-store";
import { renderTable } from "./presentation/render-table/render-table";
import { renderButtons } from "./presentation/render-buttons/render-buttons";
import { renderAddButton } from "./presentation/render-add-buton/render-add-button";
import { renderModal } from "./presentation/render-modal/render-modal";

import { saveUser } from "./use-cases/save-user";

/**
 *
 * @param {HTMLDivElement} element
 */
export const UsersApp = async (element) => {
  element.innerHTML = "Loading...";
  await usersStore.loadNextPage();
  element.innerHTML = ""; //! aca va a ir la data

  renderTable(element);
  renderButtons(element);
  renderAddButton(element);
  renderModal(element, async (userLike) => {
    const user = await saveUser(userLike);
    usersStore.onUserChanged(user);
    renderTable();
  });
};
