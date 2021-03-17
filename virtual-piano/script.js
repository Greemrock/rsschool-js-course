const PIANO = document.querySelector('.piano');
const KEYS = document.querySelectorAll('.piano-key');

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

window.addEventListener('keydown', (event) => {
	KEYS.forEach(pianoKey => {
		if (`Key${pianoKey.dataset.letter}` === event.code) {
			const note = pianoKey.dataset.note;
			const src = `assets/audio/${note}.mp3`;
			pianoKey.classList.add('piano-key-active','piano-key-active-pseudo');
			pianoKey.classList.remove('piano-key-remove-mouse');
			playAudio(src);
		}
	});
})

window.addEventListener('keyup', (event) => {
	KEYS.forEach(pianoKey => {
		if (`Key${pianoKey.dataset.letter}` === event.code) {
			pianoKey.classList.add('piano-key-remove-mouse');
			pianoKey.classList.remove('piano-key-active','piano-key-active-pseudo');
		}
	})
});

function toggleBtn() {
	const btnContainer = document.querySelector('.btn-container');

	btnContainer.addEventListener('click', (clickBtn) => {
		const btns = document.querySelectorAll('.btn');
		
		if (clickBtn.target.classList.contains('btn-notes')) {
			btnActive(btns, clickBtn);
			KEYS.forEach(pianoKey => pianoKey.classList.remove('piano-key-letter'));
		} else if (clickBtn.target.classList.contains('btn-letters')) {
			btnActive(btns, clickBtn);
			KEYS.forEach(pianoKey => pianoKey.classList.add('piano-key-letter'));
		}
	})
}

function btnActive(btns, clickBtn) {
	btns.forEach(btn => {
		if (btn.classList.contains('btn-active')) {
			btn.classList.remove('btn-active');
		}
	})
	clickBtn.target.classList.add('btn-active');
}

toggleBtn();
