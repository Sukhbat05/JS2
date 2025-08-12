const button = document.createElement("button");
const body = document.querySelector("body");
const span = document.createElement("span");

body.appendChild(button);

let count = 0;
let dis = document.getElementById("display");
button.innerText = "Click Me";

// button.innerText = "Click Me";
// button.onclick = function () {
//   count++;
//   dis.innerHTML = count;
// };

button.addEventListener("click", () => {
  count++;
  dis.innerHTML = count;
});
