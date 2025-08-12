const p = document.createElement("p");
const button = document.createElement("button");
const body = document.querySelector("body");

body.appendChild(p);
body.appendChild(button);

button.innerText = "Sort";

let array = [4, 3, 2, 7, 9];

p.innerText = array;

button.addEventListener("click", () => {
  let sortarray = array.sort((a, b) => a - b);
  p.innerText = sortarray;
});
