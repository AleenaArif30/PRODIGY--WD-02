var startTime = 0;
var elapsedTime = 0;
var interval;
var isRunning = false;

function startStopwatch() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        interval = setInterval(updateTime, 1000);
        isRunning = true;
    }
}

function pauseStopwatch() {
    if (isRunning) {
        clearInterval(interval);
        isRunning = false;
    }
}

function resetStopwatch() {
    clearInterval(interval);
    isRunning = false;
    elapsedTime = 0;
    document.getElementById('display').textContent = '00:00:00';
    document.getElementById('laps').innerHTML = ''; // Clear lap records
}

function lapStopwatch() {
    if (isRunning) {
        var lapTime = formatTime(elapsedTime);
        var lapElement = document.createElement('li');
        lapElement.textContent = lapTime;
        document.getElementById('laps').appendChild(lapElement);
        document.getElementById("lap").classList.remove("lap")
    }
}

function updateTime() {
    elapsedTime = Date.now() - startTime;
    document.getElementById('display').textContent = formatTime(elapsedTime);
}

function formatTime(time) {
    var totalSeconds = Math.floor(time / 1000);
    var hours = Math.floor(totalSeconds / 3600);
    var minutes = Math.floor((totalSeconds % 3600) / 60);
    var seconds = totalSeconds % 60;

    return pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
}

function pad(num) {
    return num < 10 ? '0' + num : num;
}