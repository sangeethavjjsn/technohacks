let timer;
let timeLeft;
let isRunning = false;

function startCountdown() {
    if (!isRunning) {
        let minutes = document.getElementById('minutes').value;
        if (minutes === '' || isNaN(minutes)) {
            alert('Please enter a valid number of minutes.');
            return;
        }
        timeLeft = minutes * 60;
        isRunning = true;
        timer = setInterval(updateCountdown, 1000);
    }
}

function stopCountdown() {
    clearInterval(timer);
    isRunning = false;
}

function resetCountdown() {
    clearInterval(timer);
    isRunning = false;
    document.getElementById('minutes').value = '';
    document.getElementById('countdown').innerText = '00:00:00';
}

function updateCountdown() {
    if (timeLeft > 0) {
        let hours = Math.floor(timeLeft / 3600);
        let minutes = Math.floor((timeLeft % 3600) / 60);
        let seconds = timeLeft % 60;
        document.getElementById('countdown').innerText = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        timeLeft--;
    } else {
        document.getElementById('countdown').innerText = '00:00:00';
        stopCountdown();
        alert('Time\'s up!');
    }
}

