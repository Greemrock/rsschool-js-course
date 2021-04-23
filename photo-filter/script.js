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
let blur = 0;
let invert = 0;
let sepia = 0;
let saturate = 100;
let hue = 0;
let styleForCanvas = "";

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
  IMG.style.filter = filter(this.name, this.value);
  outputUpdate(this);
}

function filter(name, value) {
  if (name == 'blur') blur = value;
  if (name == 'invert') invert = value;
  if (name == 'sepia') sepia = value;
  if (name == 'saturate') saturate = value;
  if (name == 'hue') hue = value;
  styleForCanvas = `blur(${blur}px) invert(${invert}%) sepia(${sepia}%) saturate(${saturate}%) hue-rotate(${hue}deg)`;
  return styleForCanvas;
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
  styleForCanvas = ""
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
    return timesOfDay[0];
  }
  if (now.getHours() >= 12 && now.getHours() < 18) {
    return timesOfDay[1];
  }
  if (now.getHours() >= 18 && now.getHours() < 24) {
    return timesOfDay[2];
  }
  if (now.getHours() >= 0 && now.getHours() < 6) {
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
  FILEINPUT.value = "";
}

function savePicture() {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext("2d");
  const img = new Image();
  img.setAttribute('crossOrigin', 'anonymous'); 
  img.src = IMG.src;
  img.onload = function() {
    const index = ratio(img, canvas);
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.filter = `blur(${blur * index}px) invert(${invert}%) sepia(${sepia}%) saturate(${saturate}%) hue-rotate(${hue}deg)`;
    ctx.drawImage(img, 0, 0);
    let link = document.createElement('a');
    link.download = 'download.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
    link.delete;
  };
}

function ratio(img, canvas) {
  if (img.width < img.height) {
    return img.width / canvas.width
  } else {
    return img.height / canvas.height;
  }
}

FULLSCREEN.addEventListener('click', toggleFullScreen);
INPUTS.forEach(elem => elem.addEventListener('change', handleUpdate));
INPUTS.forEach(elem => elem.addEventListener('mousemove', handleUpdate));
RESET.addEventListener('click', reset);
NEXTPICTURE.addEventListener('click', nextPicture);
FILEINPUT.addEventListener('change', loadPicture);
FILEOUTPUT.addEventListener('click', savePicture);