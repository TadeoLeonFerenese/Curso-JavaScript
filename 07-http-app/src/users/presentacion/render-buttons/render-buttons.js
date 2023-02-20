import usersStore from "../../strore/users-store";
import "./render-buttons.css";

/**
 *
 * @param {HTMLDivElement} element
 */
export const renderButtons = (element) => {
  const nextButton = document.createElement("button");
  nextButton.innerText = "Next >";

  const prevButton = document.createElement("button");
  prevButton.innerText = "< Prev";

  const currentPageLable = document.createElement("span");
  currentPageLable.id = "current-page";
  currentPageLable.innerText = usersStore.getCurrentPage();

  element.append(prevButton, currentPageLable, nextButton);
};
