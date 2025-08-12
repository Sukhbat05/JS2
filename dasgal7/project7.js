const div = document.createElement("div");
const button = document.createElement("button");
const body = document.querySelector("body");
const namedColors = [
  "red",
  "green",
  "blue",
  "yellow",
  "magenta",
  "cyan",
  "white",
  "black",
];

let count = 0;

div.classList.add("box");

body.appendChild(div);
body.appendChild(button);

button.innerText = "Change Color";

button.addEventListener("click", () => {
  div.style.backgroundColor = namedColors[Math.floor(Math.random() * 10)];
  if (count > namedColors.lenght - 1) count = 0;
  count++;
});
