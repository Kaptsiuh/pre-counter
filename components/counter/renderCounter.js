import { renderHeader } from "./header/renderHeader.js";
import { increaseButton } from "./buttons/increaseButton.js";
import { renderValue } from "./value/renderValue.js";
import { decreaseButton } from "./buttons/decreaseButton.js";

export function renderCounter() {
  document.body.innerHTML = "";
  document.body.append(renderHeader());
  document.body.append(renderValue());
  document.body.append(increaseButton());
  document.body.append(decreaseButton());
}
