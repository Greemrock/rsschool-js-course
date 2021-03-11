const piano = document.querySelector('.piano');
const pianoKey = document.querySelectorAll('.piano-key');
function playAudio(src) {
    const audio = new Audio();
    audio.src = src;
    audio.currentTime = 0;
    audio.play();
}

piano.addEventListener('mousedown', (e) => {
    if(e.target.classList.contains('piano-key')) {
		const note = e.target.dataset.note;
		const src = `assets/audio/${note}.mp3`;
		e.target.classList.add('piano-key-active','piano-key-active-pseudo');
		e.target.classList.remove('piano-key-remove-mouse');
		playAudio(src);
    }   
});

piano.addEventListener('mouseup', (e) => {
	e.target.classList.add('piano-key-remove-mouse');
	e.target.classList.remove('piano-key-active','piano-key-active-pseudo');
});