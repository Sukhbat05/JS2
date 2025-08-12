const p = document.createElement("p");
const button = document.createElement("button");
const body = document.querySelector("body");
body.appendChild(p);
body.appendChild(button);

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

p.innerText = array; // Number[] -> "[1, 2, 3]"
button.innerText = "Show Numbers >5";

button.addEventListener("click", () => {
  const filteredarray = array.filter((arr) => {
    return arr > 5;
  });
  p.innerText = filteredarray;
});
