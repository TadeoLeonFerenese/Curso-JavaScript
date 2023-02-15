import usersStore from "./strore/users-store";

export const UsersApp = async (element) => {
  element.innerHtml = "Loading...";
  await usersStore.loadNextPage();
};
