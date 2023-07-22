let timers = [];
let lastUpdateTime;
let timersContainer;

const hh = document.getElementById("hh");
const mm = document.getElementById("mm");
const ss = document.getElementById("ss");

hh.addEventListener("input", function () {
	const value = hh.value;
if(value.length ===0) {
		hh.value = "";
		return false;
	}
if (!isNaN(value) && value >= 0 && value <= 23) {
		return true;
	} else {
		hh.value = "";
		return false;
	}
});

mm.addEventListener("input", function () {
	const value = mm.value;
	if(value.length ===0) {
		mm.value = "";
		return false;
	}
	if (!isNaN(value) && value >= 0 && value <= 59) {
		return true;
	} else {
		mm.value = "";
		return false;
	}
});

ss.addEventListener("input", function () {
	const value = ss.value;
	if(value.length ===0) {
		ss.value = "";
		return false;
	}
	if (!isNaN(value) && value >= 0 && value <= 59) {
		return true;
	} else {
		ss.value = "";
		return false;
	}
});

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
	if (timers.length === 0) {
		timersContainer.innerHTML = `
    <p id = "noTimers">You have no timers currently!</p>
  `;
	} else {
	timers.forEach((timer, index) => {
		const timerElement = document.createElement("div");
		timerElement.className = "timerBox";
		timerElement.id = `timerBox${index}`;
		timerElement.innerHTML = `
        <div class="timerPreText" id="timerPText${index}">Time Left: </div>
        <div class="timer" id="timer${index}">
          ${formatTime(timer.hours)}:${formatTime(timer.minutes)}:${formatTime(timer.seconds)}
        </div>
        <button class="timerBtn" id ="deleteBtn${index}" onclick="deleteTimer(${index})">Delete</button>
      `;
		timersContainer.appendChild(timerElement);
	});
	}
}

function deleteTimer(index) {
	timers.splice(index, 1);
	displayTimer();
}
function play() {
	//! "an audio alert of your choice" was mentioned so... :P
	const audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
	audio.play();

}

function updateTimers() {
	let now = Date.now();
	timers.forEach((timer, index) => {
		const  timerBox = document.getElementById(`timerBox${index}`)
		const  timerPText = document.getElementById(`timerPText${index}`)
		const timerElement = document.getElementById(`timer${index}`);
		const  delBtn = document.getElementById(`deleteBtn${index}`)
		let totalSeconds = timer.hours * 3600 + timer.minutes * 60 + timer.seconds;
		if (totalSeconds > 0) {
			totalSeconds -= ((now - lastUpdateTime) / 1000);
			timer.hours = Math.floor(totalSeconds / 3600);
			totalSeconds -= timer.hours * 3600;
			if (totalSeconds <= 0) {
				timer.seconds = 59;
			} else {
				timer.seconds = totalSeconds % 60;
			}
			timer.minutes = Math.floor(totalSeconds / 60);
			if(timer.hours<0){
				timer.hours = 0;
				timer.minutes=0;
				timer.seconds=0;
			}
			timerElement.textContent = `${formatTime(timer.hours)}:${formatTime(timer.minutes)}:${formatTime(timer.seconds)}`;

		} else {
			timerBox.style.backgroundColor = "#F0F757";
			timerBox.style.color = "#1D1D23";
			timerPText.innerHTML = `&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp`;
			timerElement.textContent = `Timer Is Up`;
			delBtn.style.backgroundColor = "#39393E";
			delBtn.style.color = "#ffffff";
			delBtn.textContent ='Stop';
			play(); //! "an audio alert of your choice" was mentioned so... :P
			// timers.splice(index, 1);
			// displayTimer();
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

document.getElementById('currentTimersBtn').addEventListener("click", function () {
	document.getElementById("viewTimers").toggleAttribute('hidden');
});