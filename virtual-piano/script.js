const PIANO = document.querySelector(".piano");
const KEYS = document.querySelectorAll(".piano-key");
const btnContainer = document.querySelector(".btn-container");
const BTNS = document.querySelectorAll('.btn');
const FULLSCREEN = document.querySelector(".fullscreen")

function playAudio(src) {
    const audio = new Audio();

    audio.src = src;
    audio.currentTime = 0;
    audio.play();
}

function clickAudio(event) {
	if(event.target.classList.contains('piano-key')) {
		const note = event.target.dataset.note;
		const src = `assets/audio/${note}.mp3`;
		playAudio(src);
		event.target.classList.add('piano-key-active', 'piano-key-active-pseudo');
		event.target.classList.remove('piano-key-remove-mouse');
    }   
}

function mouseOut(event) {
	event.target.classList.remove('piano-key-active-pseudo','piano-key-active');
}

function mouseOver(event) {
	clickAudio(event);
}

function startCorrespondOver(event) {
	clickAudio(event);

	KEYS.forEach((elem) => {
		elem.addEventListener('mouseout', mouseOut)
		elem.addEventListener('mouseover', mouseOver)
	})
}

function stopCorrespondOver() {
	KEYS.forEach((elem) => {
		elem.classList.add("piano-key-remove-mouse");
		elem.classList.remove('piano-key-active', 'piano-key-active-pseudo');
		elem.removeEventListener('mouseout', mouseOut);
		elem.removeEventListener('mouseover', mouseOver);
	})
}

PIANO.addEventListener('mousedown', startCorrespondOver, false);
window.addEventListener('mouseup', stopCorrespondOver);

function pressKey(event) {
	var allowed = true;
	if (event.repeat != undefined) {
		allowed = !event.repeat;
	}
	if (!allowed) return;
	
	KEYS.forEach(elem => {
		if (`Key${elem.dataset.letter}` === event.code) {
			const note = elem.dataset.note;
			const src = `assets/audio/${note}.mp3`;
			elem.classList.add('piano-key-active','piano-key-active-pseudo');
			elem.classList.remove('piano-key-remove-mouse');
			playAudio(src);
		}
	});
}

function keyUp(event) {
	KEYS.forEach(pianoKey => {
		if (`Key${pianoKey.dataset.letter}` === event.code) {
			pianoKey.classList.add('piano-key-remove-mouse');
			pianoKey.classList.remove('piano-key-active','piano-key-active-pseudo');
		}
	})
}

window.addEventListener('keydown', pressKey);
window.addEventListener('keyup', keyUp);

function toggleBtn(clickBtn) {
	if (clickBtn.target.classList.contains('btn-notes')) {
		btnActive(BTNS, clickBtn);
		KEYS.forEach(pianoKey => pianoKey.classList.remove('piano-key-letter'));
	} else if (clickBtn.target.classList.contains('btn-letters')) {
		btnActive(BTNS, clickBtn);
		KEYS.forEach(pianoKey => pianoKey.classList.add('piano-key-letter'));
	}
}

btnContainer.addEventListener('click', toggleBtn);

function btnActive(btns, clickBtn) {
	btns.forEach(btn => {
		if (btn.classList.contains('btn-active')) {
			btn.classList.remove('btn-active');
		}
	})
	clickBtn.target.classList.add('btn-active');
}

function toggleFullScreen() {
	if (!document.fullscreenElement) {
		document.documentElement.requestFullscreen();
	} else {
		if (document.exitFullscreen) {
			document.exitFullscreen();
		}
	}
}

FULLSCREEN.addEventListener("click", toggleFullScreen, false);