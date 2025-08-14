const body = document.querySelector("body");
const startBtn = document.querySelector("button");

const quizStart = () => {
  startBtn.remove();
  const question = document.createElement("h2");
  body.appendChild(question);
  new Array(4).fill(0).forEach(() => {
    const btn = document.createElement("button");
    body.appendChild(btn);

    const drawQuestion = () => {
      const answerBtns = document.querySelectorAll("button");
      question.innerText = "hello"
    }
   
  });
};

startBtn.addEventListener("click", quizStart);
