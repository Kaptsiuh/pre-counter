import { decreaseClientsCount } from "../../../data/data.js";

export function decreaseButton() {
  const element = document.createElement("button");
  element.append("-");
  element.addEventListener("click", decrementData);
  element.style = "width: 100px";
  return element;
}

function decrementData() {
  decreaseClientsCount();
}
