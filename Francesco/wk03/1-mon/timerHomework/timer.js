var timer = {
  reset: document.querySelector("#reset"),
  start: document.querySelector("#start"),
  pause: document.querySelector("#pause"),

  title: document.querySelector("#timer"),
  intervall: null,
  seconds: 0,
  timerId: () => {
    intervall = setInterval(timer.updateTime, 1000);
  },
  updateTime: () => {
    timer.seconds++;
    timer.title.textContent = timer.seconds;
  },
  event: document.addEventListener("click", e => {
    if (e.target.id === "reset") {
      clearInterval(this.intervall);
      timer.seconds = 0;
      timer.title.textContent = "Stop Watch";
      console.log("reset");
    }
    if (e.target.id === "start") {
      timer.timerId();
      console.log("start");
    }
    if (e.target.id === "pause") {
      clearInterval(this.intervall);
      console.log("pause");
    }
  })
};

//It does not work if i change this to timer and vice versa