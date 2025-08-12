const div = document.createElement("div");
const body = document.querySelector("body");
const button = document.createElement("button");

body.appendChild(div);
body.appendChild(button);
div.innerText = "Hello world";
button.innerText = "Hide";
button.addEventListener("click", () => {
  if (button.innerText == "Show") {
    button.innerText = "Hide";
    div.innerText = "Hello world";
  } else if (button.innerText == "Hide") {
    button.innerText = "Show";
    div.innerText = "";
  }
});
