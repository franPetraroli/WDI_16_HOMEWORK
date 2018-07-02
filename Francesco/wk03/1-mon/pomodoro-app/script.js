const timer = document.querySelector("#timer");
const btnStart = document.querySelector("#start");
const btnPause = document.querySelector("#pause");
const btnStop = document.querySelector("#stop");
const prg = document.querySelector("#progress");

let counter = 0;
let defaultWorkTime = 1500;
let defaultBreakTime = 300;
let defaultBigBreak = 900;
let smallBreak = 0;
let workTime;
let stop = false;
let isSmallBreak = false;

var mainInterval = null;
var id = null;

function interval(time) {
  mainInterval = setInterval(timeIt.bind(null, time), 1000);
}

function timeIt(time) {
  counter++;

  if (counter > time) {
    isSmallBreak = !isSmallBreak;
    reset();
    // clearIntervall(mainInterval);
    counter = 0;
    if (isSmallBreak === true && smallBreak > 2) {
      prg.style.width = "0px";
      time = defaultBigBreak;
      smallBreak = 0;
      progress(500 / time, "green");
      console.log("Big Break");
    } else if (isSmallBreak === true) {
      prg.style.width = "0px";
      time = defaultBreakTime;
      smallBreak++;
      progress(500 / time, "green");
      console.log(smallBreak);
      console.log("Small Break");
    } else {
      prg.style.width = "0px";
      time = defaultWorkTime;
      progress(500 / time, "#ff554f");
      console.log("Work");
    }
    interval(time);
  }
  timer.textContent = convertSeconds(time - counter);
}

document.addEventListener("click", e => {
  if (e.target.id == "start") {
    startTimer();
  }
  if (e.target.id == "pause") {
    reset();
  }
  if (e.target.id == "stop") {
    stopTimer();
  }
});

function startTimer() {
  clearInterval(mainInterval);
  clearInterval(id);
  time = defaultWorkTime;
  interval(time);
  progress(500 / time, "#ff554f");
}

function reset() {
  clearInterval(mainInterval);
  clearInterval(id);
}

function stopTimer() {
  clearInterval(mainInterval);
  clearInterval(id);
  prg.style.width = 0 + "px";
  counter = 0;
  smallBreak = 0;
  timer.textContent = convertSeconds(counter);
}

function convertSeconds(s) {
  let min = Math.floor(s / 60);
  let sec = s % 60;
  return `${min} : ${sec}`;
}

function progress(increment, color) {
  clearInterval(id);
  let progress = 0;
  id = setInterval(paint, 1000);

  function paint() {
    if (progress >= 500) {
      clearInterval(id);
    } else {
      progress += increment;
      prg.style.width = progress + "px";
      prg.style.backgroundColor = color;
    }
  }
}
