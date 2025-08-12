const p = document.createElement("p");
const button = document.createElement("button");
const body = document.querySelector("body");

button.innerText = "Change to 'Hi There'";
p.innerText = "Hello world";

body.appendChild(p);
body.appendChild(button);

button.addEventListener("click", () => {
  let div1 = "Hi There";

  p.textContent = div1;
});
