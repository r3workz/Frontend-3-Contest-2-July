let timers = [];
let lastUpdateTime;
let timersContainer;

function formatTime(time) {
	const precision = 2;

	if (Math.abs(time) < 10 ** precision) {
		time = Math.round(time);
	} else {
		time = Math.round(time * 10 ** precision) / 10 ** precision;
	}

	return time.toString().padStart(2, "0");
}


function displayTimer() {
	timersContainer.innerHTML = "";
	timers.forEach((timer, index) => {
		const timerElement = document.createElement("div");
		timerElement.className = "timerBox";
		timerElement.innerHTML = `
        <div class="timerPreText">Time Left: </div>
        <div class="timer" id="timer${index}">
          ${formatTime(timer.hours)}:${formatTime(timer.minutes)}:${formatTime(timer.seconds)}
        </div>
        <button class="timerBtn" onclick="deleteTimer(${index})">Delete</button>
      `;
		timersContainer.appendChild(timerElement);
	});
}

function deleteTimer(index) {
	timers.splice(index, 1);
	displayTimer();
}

function updateTimers() {
	let now = Date.now();
	timers.forEach((timer, index) => {
		const timerElement = document.getElementById(`timer${index}`);
		let totalSeconds = timer.hours * 3600 + timer.minutes * 60 + timer.seconds;
		if (totalSeconds > 0) {
			totalSeconds -= ((now - lastUpdateTime) / 1000);
			timer.hours = Math.round(totalSeconds / 3600);
			totalSeconds -= timer.hours * 3600;
			timer.minutes = Math.round(totalSeconds / 60);
			totalSeconds -= timer.minutes * 60;
			timer.seconds = totalSeconds;
			timerElement.textContent = `${formatTime(timer.hours)}:${formatTime(timer.minutes)}:${formatTime(timer.seconds)}`;

		} else {
			timers.splice(index, 1);
			displayTimer();
		}
	});
	lastUpdateTime = now;
}

document.addEventListener("DOMContentLoaded", function () {
	timersContainer = document.getElementById("viewTimers");
	const timerSetButton = document.getElementById("timerSet");
	const noTimersMessage = document.getElementById("noTimers");

	lastUpdateTime = Date.now();

	timerSetButton.addEventListener("click", function () {
		const hh = parseInt(document.getElementById("hh").value, 10) || 0;
		const mm = parseInt(document.getElementById("mm").value, 10) || 0;
		const ss = parseInt(document.getElementById("ss").value, 10) || 0;

		if (hh >= 0 && hh <= 23 && mm >= 0 && mm <= 59 && ss >= 0 && ss <= 59) {
			timers.push({ hours: hh, minutes: mm, seconds: ss });
			displayTimer();
		} else {
			alert("Invalid time. Please enter a valid time.");
		}
	});

	// Update timers every second
	setInterval(updateTimers, 1000);
});
