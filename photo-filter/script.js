const FULLSCREEN = document.querySelector(".openfullscreen");
const INPUTS = document.querySelectorAll(".filters input");
const OUTPUTS = document.querySelectorAll(".filters output");
const IMG = document.querySelector(".editor img");
const FILTERS = document.querySelector(".filters");
const RESET = document.querySelector(".btn-reset");
const NEXTPICTURE = document.querySelector(".btn-next");
const BASE = 'https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/';
const IMAGES = ['01.jpg', '02.jpg', '03.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg'];
let i = 0;

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

function reset() {
    IMG.removeAttribute('style');
    for (let i = 0; i < INPUTS.length; i++) {
        INPUTS.item(i).value = INPUTS.item(i).defaultValue;
        OUTPUTS.item(i).innerHTML = INPUTS.item(i).defaultValue;
    }
}

function viewSrcImage(src) {  
        const img = new Image();
        img.src = src;
        img.onload = () => {      
            IMG.src = `${src}`;
        }; 
    }

function nextPicture() {
    const index = i % IMAGES.length;
    const imageSrc = BASE + IMAGES[index];

    viewSrcImage(imageSrc);
    i++;
}

FULLSCREEN.addEventListener('click', toggleFullScreen);
INPUTS.forEach(elem => elem.addEventListener('change', handleUpdate));
INPUTS.forEach(elem => elem.addEventListener('mousemove', handleUpdate));
RESET.addEventListener('click', reset);
NEXTPICTURE.addEventListener('click', nextPicture);