const FULLSCREEN = document.querySelector(".openfullscreen");
const INPUTS = document.querySelectorAll(".filters input");
const OUTPUTS = document.querySelectorAll(".filters output");
const IMG = document.querySelector(".editor img");
const FILTERS = document.querySelector(".filters");

function toggleFullScreen() {
	if (!document.fullscreenElement) {
		document.documentElement.requestFullscreen();
	} else {
		if (document.exitFullscreen) {
			document.exitFullscreen();
		}
	}
}

function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    IMG.style.setProperty(`--${this.name}`, this.value + suffix);
    outputUpdate(this);
}

function outputUpdate(elem) {
    for (let i = 0; i < INPUTS.length; i++) {
        if (elem.name == INPUTS.item(i).name) {
            OUTPUTS.item(i).innerHTML = elem.value;
        }
    }
}

FULLSCREEN.addEventListener('click', toggleFullScreen);
INPUTS.forEach(elem => elem.addEventListener('change', handleUpdate));
INPUTS.forEach(elem => elem.addEventListener('mousemove', handleUpdate));
