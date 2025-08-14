const startButton = document.getElementById("start-btn");
const body = document.querySelector("body");
const questioncontainer = document.getElementById("question-container");
const removestart = document.getElementById("removestart");
startButton.classList.add("bton");

startButton.addEventListener("click", () => {
  removestart.classList.add("hide");
  questioncontainer.classList.remove("hide");
});
