let timerStatus = false;
let intervalId;

function setTimer(timerValue) {
  const defaultValue = 25;

  if (typeof timerValue != "undefined") {
    document.getElementById("time").innerHTML = timerValue;
  } else {
    document.getElementById("time").innerHTML = defaultValue;
  }
}

function up() {
  let timerValue = document.getElementById("time").innerHTML;
  timerValue++;
  document.getElementById("time").innerHTML = timerValue;
}

function down() {
  let timerValue = document.getElementById("time").innerHTML;
  if (timerValue > 0) {
    timerValue--;
  }
  document.getElementById("time").innerHTML = timerValue;
}

function reset(timerStatus) {
  if (window.timerStatus != true) {
    setTimer(25);
  }
}

function stop(intervalId){
  clearInterval(window.intervalId);
  setTimer();
  let buttonStop = document.getElementById("start");
  buttonStop.setAttribute('onclick','start()');
  buttonStop.innerHTML = "▶";
  window.timerStatus = false;
}


function start(timerStatus, intervalId) {
  let timerValue = document.getElementById("time").innerHTML;
  // let intervalId;

  window.intervalId = setInterval(() => {
    console.log(timerValue);
    window.timerStatus = true;
    timerValue = document.getElementById("time").innerHTML;
    timerValue--;
    document.getElementById("time").innerHTML = timerValue;
    let buttonStop = document.getElementById("start");
    buttonStop.setAttribute('onclick','stop()');
    buttonStop.innerHTML = "■";
    if (timerValue === 0) {
      clearInterval(window.intervalId);
      alert("Done!");
      setTimer();
      window.timerStatus = false;
      buttonStop.setAttribute('onclick','start()');
      buttonStop.innerHTML = "▶";
    }
  }, 1000);
  console.log(intervalId);
}

setTimer(2);
