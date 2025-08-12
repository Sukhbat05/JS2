const listData = [];

const printInputValue = (value) => {
  console.log(value);
  listData.push(value);
  console.log(listData);
};

const render = () => {
  ul.innerHTML = "";
  listData.map((element) => {
    const li = document.createElement("li");
    li.innerText = element;
    ul.appendChild(li);
  });
};
const ul = document.createElement("ul");
const input = document.createElement("input");
const button = document.createElement("button");
const body = document.getElementsByTagName("body")[0];

button.addEventListener("click", () => {
  printInputValue(input.value);
  render();
});

button.innerText = "click me";

body.appendChild(input);
body.appendChild(button);
body.appendChild(ul);
