let timerStatus = false;
let intervalId;

function formatNumber(number) {
  return (number < 10) ? `0${number}` : number;
}

function setTimer(timerValue) {
  const defaultValue = 1500;
  let defaultMin = Math.floor(defaultValue/60);
  let defaultSec = formatNumber(defaultValue%60);

  let valueMin = Math.floor(timerValue/60);
  let valueSec = formatNumber(timerValue%60);
  
  if (typeof timerValue != "undefined") {
    document.getElementById("time").innerHTML = valueMin;
    document.getElementById("timeSec").innerHTML = valueSec;
  } else {
    document.getElementById("time").innerHTML = defaultMin;
    document.getElementById("timeSec").innerHTML = defaultSec;
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
  let buttonStop = document.getElementById("start_btn");
  buttonStop.setAttribute('onclick','start()');
  buttonStop.setAttribute('src', './resources/play_btn.png')
  window.timerStatus = false;
}


function start(timerStatus, intervalId) {
  let timerValue = document.getElementById("time").innerHTML;
  timerValue = timerValue*60;

  window.intervalId = setInterval(() => {
    console.log(timerValue);
    window.timerStatus = true;
    // timerValue = document.getElementById("time").innerHTML;
    timerValue--;
    let valueMin = Math.floor(timerValue/60);
    let valueSec = formatNumber(timerValue%60);
    document.getElementById("time").innerHTML = valueMin;
    document.getElementById("timeSec").innerHTML = valueSec;

    let buttonStop = document.getElementById("start_btn");
    buttonStop.setAttribute('onclick','stop()');
    buttonStop.setAttribute('src', './resources/stop_btn.png')

    if (timerValue === 0) {
      clearInterval(window.intervalId);
      alert("Done!");
      setTimer();
      window.timerStatus = false;
      buttonStop.setAttribute('onclick','start()');
      buttonStop.setAttribute('src', './resources/play_btn.png')
    }

  }, 1000);

  console.log(intervalId);
}

setTimer(60);
