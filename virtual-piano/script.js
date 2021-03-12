const piano = document.querySelector('.piano');
const pianoKeys = document.querySelectorAll('.piano-key');

function playAudio(src) {
    const audio = new Audio();
    audio.src = src;
    audio.currentTime = 0;
    audio.play();
}

function clickAudio(pianoKey) {
	if(pianoKey.target.classList.contains('piano-key')) {
		const note = pianoKey.target.dataset.note;
		const src = `assets/audio/${note}.mp3`;
		pianoKey.target.classList.add('piano-key-active','piano-key-active-pseudo');
		pianoKey.target.classList.remove('piano-key-remove-mouse');
		playAudio(src);
    }   
}

piano.addEventListener('mousedown', (event) => clickAudio(event));

piano.addEventListener('mouseup', (event) => {
	event.target.classList.add('piano-key-remove-mouse');
	event.target.classList.remove('piano-key-active','piano-key-active-pseudo');
});

window.addEventListener('keydown', (e) => {
	pianoKeys.forEach(pianoKey => {
		if (`Key${pianoKey.dataset.letter}` === e.code) {
			const note = pianoKey.dataset.note;
			const src = `assets/audio/${note}.mp3`;
			pianoKey.classList.add('piano-key-active','piano-key-active-pseudo');
			pianoKey.classList.remove('piano-key-remove-mouse');
			playAudio(src);
		}
	});
});

window.addEventListener('keyup', (e) => {
	pianoKeys.forEach(pianoKey => {
		if (`Key${pianoKey.dataset.letter}` === e.code) {
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
			pianoKeys.forEach(pianoKey => pianoKey.classList.remove('piano-key-letter'));
		} else if (clickBtn.target.classList.contains('btn-letters')) {
			btnActive(btns, clickBtn);
			pianoKeys.forEach(pianoKey => pianoKey.classList.add('piano-key-letter'));
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
