let timerStatus = false;
let intervalId;
let steps = {
  FOCUS: 'Focus',
  SHORTBREAK: 'Short Break',
  LONGBREAK: 'Long Break',
}

let stepsPeriod = {
  FOCUS: 1500,
  SHORTBREAK: 300,
  LONGBREAK: 900,
}


function getKeysByValue(obj, value) {
  return Object.keys(obj).filter(key => obj[key] === value);
}

function formatNumber(number) {
  return (number < 10) ? `0${number}` : number;
}

function setTimer(timerValue) {
  const defaultValue = 1500;
  let defaultMin = formatNumber(Math.floor(defaultValue/60));
  let defaultSec = formatNumber(defaultValue%60);

  let valueMin = formatNumber(Math.floor(timerValue/60));
  let valueSec = formatNumber(timerValue%60);
  
  if (typeof timerValue != "undefined") {
    document.getElementById("time").innerHTML = valueMin;
    document.getElementById("timeSec").innerHTML = valueSec;
  } else {
    document.getElementById("time").innerHTML = defaultMin;
    document.getElementById("timeSec").innerHTML = defaultSec;
  }
}

function setStep(step){
  document.getElementById('changeSteps').innerHTML = step;
}

setStep(steps.FOCUS);

function changeSteps(){
  let defaultStep = steps.FOCUS;
  let currentlyStep = document.getElementById('changeSteps').innerHTML;
   if (window.timerStatus == false){
    if (currentlyStep == steps.FOCUS) {
      setStep(steps.SHORTBREAK);
      setTimer(stepsPeriod.SHORTBREAK);
    } else if (currentlyStep == steps.SHORTBREAK) {
      setStep(steps.LONGBREAK);
      setTimer(stepsPeriod.LONGBREAK);
    } else if (currentlyStep == steps.LONGBREAK) {
      setStep(steps.FOCUS);
      setTimer(stepsPeriod.FOCUS);
    }
  }
}

//TODO: сделать через setTimer()
function up() {
  let timerValue = document.getElementById("time").innerHTML;
  if (timerValue < 60) {
    timerValue++;
  } else {
    alert('This goes beyond The Pomodoro technique');
  }
  
  document.getElementById("time").innerHTML = timerValue;
}

function down() {
  let timerValue = document.getElementById("time").innerHTML;
  if (timerValue > 1) {
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

setTimer(1500);

let tg = window.Telegram.WebApp.initData.id;
console.log(tg);
