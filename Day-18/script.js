let hours= 00;
let minutes= 00;
let seconds= 00;
let milliseconds= 00;
let interval;

const hoursContainer = document.getElementById("hours");
const minutesContainer = document.getElementById("minutes");
const secondsContainer = document.getElementById("seconds");
const millisecondsContainer = document.getElementById("milliseconds");

const start = document.getElementById("start");
const stop = document.getElementById("stop");
const restart = document.getElementById("restart");

const startTimer = () => {
    clearInterval(interval);
    interval = setInterval(startWatch, 10);
}

const stopTimer = () => {
    clearInterval(interval);
}

const resetTimer = () => {
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;

    millisecondsContainer.innerHTML = "00";
    secondsContainer.innerHTML = "00";
    minutesContainer.innerHTML = "00";
    hoursContainer.innerHTML = "00";
    clearInterval();
}

function startWatch(){
    milliseconds++;
    if(milliseconds < 9){
        millisecondsContainer.innerHTML = `0${milliseconds}`;
    }
    else if(milliseconds > 99){
        milliseconds = 0;
        millisecondsContainer.innerHTML = "00"
        seconds++;
    }
    else{
        millisecondsContainer.innerHTML = milliseconds;
    }

    if(seconds < 10){
        secondsContainer.innerHTML = `0${seconds}`;
    }
    else if(seconds > 59){
        minutes++;
        seconds = 0;
        secondsContainer.innerHTML = "00";
    }
    else{
        secondsContainerinnerHTML = seconds;
    }

    if(minutes < 10){
        minutesContainer.innerHTML = `0${minutes}`;
    }
    else if(minutes > 59){
        hours++;
        minutes = 0;
        minutesContainer.innerHTML = minutes;
    }
    else{
        minutesContainer.innerHTML = minutes;
    }

    if(hours < 10){
        hoursContainer.innerHTML = `0${hours}`;
    }
    else{
        hoursContainer.innerHTML = hours;
    }
}

start.addEventListener("click", startTimer);
stop.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);