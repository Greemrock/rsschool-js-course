const FULLSCREEN = document.querySelector(".openfullscreen");
const INPUTS = document.querySelectorAll(".filters input");
const OUTPUTS = document.querySelectorAll(".filters output");
const IMG = document.querySelector(".editor img");
const FILTERS = document.querySelector(".filters");
const RESET = document.querySelector(".btn-reset");
const NEXTPICTURE = document.querySelector(".btn-next");
const FILEINPUT = document.querySelector('input[type="file"]');
const FILEOUTPUT = document.querySelector('.btn-save');
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
    const BASE = 'https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/';
    const IMAGES = ['01.jpg', '02.jpg', '03.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg'];
    const index = i % IMAGES.length;
    const imageSrc = `${BASE}/${pictureDependOnTheTime()}/${IMAGES[index]}`;

    viewSrcImage(imageSrc);
    i++;
}

function pictureDependOnTheTime() {
    const timesOfDay = ['morning', 'day', 'evening', 'night'];
    let now = new Date();

    if (now.getHours() >= 6 && now.getHours() < 12) {
        console.log(`timesOfDay[0]`, timesOfDay[0])
        return timesOfDay[0];
    }
    if (now.getHours() >= 12 && now.getHours() < 18) {
        console.log(`timesOfDay[1]`, timesOfDay[1])
        return timesOfDay[1];
    }
    if (now.getHours() >= 18 && now.getHours() < 24) {
        console.log(`timesOfDay[2]`, timesOfDay[2])
        return timesOfDay[2];
    }
    if (now.getHours() >= 0 && now.getHours() < 6) {
        console.log(`timesOfDay[3]`, timesOfDay[3])
        return timesOfDay[3];
    }
}

function loadPicture() {
    const file = FILEINPUT.files[0];
    const reader = new FileReader();
    reader.onload = () => {
        IMG.src = reader.result;
    }
    reader.readAsDataURL(file);
}

function savePicture() {
    const canvas = document.createElement('canvas');
    const editor = document.querySelector('.editor')
    const img = new Image();
    // const style = IMG.style.cssText;

    // function style() {
    //     let string = IMG.style.cssText;
    //     return string.split(';').map(item => item.replace(/\D/g, ""));
    // }
    
    img.setAttribute('crossOrigin', 'anonymous'); 
    img.src = IMG.src;
    img.onload = function() {
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        // ctx.filter = `blur(${style()[0]}px) invert(${style()[1]}%) sepia(${style()[2]}%) saturate(${style()[3]}%) hue-rotate(${style()[4]}deg)`;
        ctx.drawImage(img, 0, 0);
        let link = document.createElement('a');
        link.download = 'download.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
        link.delete;
    };
}

FULLSCREEN.addEventListener('click', toggleFullScreen);
INPUTS.forEach(elem => elem.addEventListener('change', handleUpdate));
INPUTS.forEach(elem => elem.addEventListener('mousemove', handleUpdate));
RESET.addEventListener('click', reset);
NEXTPICTURE.addEventListener('click', nextPicture);
FILEINPUT.addEventListener('change', loadPicture);
FILEOUTPUT.addEventListener('click', savePicture);