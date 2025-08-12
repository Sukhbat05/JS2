const div = document.createElement("div");

const button = document.createElement("button");
const body = document.querySelector("body");

div.classList.add("box");

button.innerText = "Change Color";

body.appendChild(div);

body.appendChild(button);

button.addEventListener("click", () => {
  div.style.backgroundColor = "red";
});
