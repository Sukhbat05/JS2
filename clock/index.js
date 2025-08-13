let min = 0;
let seconds = 0;
let hours = 0;

let interval;

const timer = document.getElementById("timer");

const addSeconds = () => {
  if (seconds < 60) {
    seconds++;
  } else {
    seconds = 0;
    min++;
  }
  timer.innerText = `${hours}:${min}:${seconds}`;
};

function start() {
  clearInterval(interval);
  interval = setInterval(addSeconds, 1000);
}

function stop() {
  clearInterval(interval);
}

function reset() {
  stop();
  seconds = 0;
  min = 0;
  hours = 0;
}

start();
