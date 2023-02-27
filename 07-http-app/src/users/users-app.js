import { renderAddButton } from "./presentation/render-add-buton/render-add-button";
import { renderButtons } from "./presentation/render-buttons/render-buttons";
import { renderModal } from "./presentation/render-modal/render-modal";
import { renderTable } from "./presentation/render-table/render-table";
import usersStore from "./strore/users-store";

export const UsersApp = async (element) => {
  element.innerHtml = "Loading...";
  await usersStore.loadNextPage();
  element.innerHtml = ""; //! aca va a ir la data

  renderTable(element);
  renderButtons(element);
  renderAddButton(element);
  renderModal(element);
};
