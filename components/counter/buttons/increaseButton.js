import { increaseClientsCount } from "../../../data/data.js";

export function increaseButton() {
  const element = document.createElement("button");
  element.append("+");
  element.addEventListener("click", incrementData);
  element.style = "width: 100px";
  return element;
}

function incrementData() {
  increaseClientsCount();
}
