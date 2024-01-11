export const data = {
  clientCount: 0,
};

let callback = () => {};

setInterval(function () {
  data.clientCount += 1;
  callback();
}, 1000);

export function setCallback(newCallback) {
  callback = newCallback;
}

export function increaseClientsCount() {
  data.clientCount++;
  callback();
}

export function decreaseClientsCount() {
  data.clientCount--;
  callback();
}
