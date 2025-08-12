const listdata = [];
const li = document.createElement("li");
const body = document.querySelector("body");
const button = document.createElement("button");
const ul = document.createElement("ul");

body.appendChild(li);
body.appendChild(button);
body.appendChild(ul);

li.innerText = "Apple";
button.innerText = "'Add Banana'";

button.addEventListener("click", () => {
  let plus = document.createElement("li");
  plus.innerText = "Banana";
  ul.appendChild(plus);
});
