import { data } from "../../../data/data.js";

export function renderValue() {
  const element = document.createElement("div");
  element.append(data.clientCount);
  return element;
}
