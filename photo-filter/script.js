const FULLSCREEN = document.querySelector(".openfullscreen");
const LABELS = document.querySelectorAll(".filters label");
const IMG = document.querySelector(".editor img");
const FILTERS = document.querySelector(".filters");
const RESET = document.querySelector(".btn-reset");
const NEXTPICTURE = document.querySelector(".btn-next");
const FILEINPUT = document.querySelector('input[type="file"]');
const FILEOUTPUT = document.querySelector('.btn-save');
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
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

function drawImage(src, config = "none") {
  IMG.src = src;
  IMG.setAttribute("crossOrigin", "anonymous");
  IMG.onload = function () {
    ratio = IMG.width / IMG.height;
    if (IMG.height > 1200) {
      if (100 * ratio > 100) {
        ratio = 1;
      }
      canvas.style.width = `${100 * ratio}%`;
      canvas.style.margin = "0 auto";
    }
    canvas.width = IMG.width;
    canvas.height = IMG.height;

    ctx.filter = config;
    ctx.drawImage(IMG, 0, 0);
  };
};

function filter(elem) {
    let config = [];
    LABELS.forEach((i) => {
      let input = i.querySelector("input");
      let output = i.querySelector("output");

      if (elem.target.classList.contains("btn-reset")) {
        input.value = 0;
        if (input.name === "saturate") {
          input.value = 100;
        }
        ctx.filter = "blur(0px) invert(0%) sepia(0%) saturate(100%) hue-rotate(0deg)";
        ctx.drawImage(IMG, 0, 0);
      }
      config.push(`${input.name}(${input.value}${input.dataset.sizing})`);
      output.value = input.value;
    });

    drawImage(IMG.src, config.join(" "));
}

if (i === 0) {
  const loacalImg = "./assets/img/img.jpg";
  drawImage(loacalImg);
}

function nextPicture() {
  const BASE = 'https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/';
  const IMAGES = ['01.jpg', '02.jpg', '03.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg'];
  const index = i % IMAGES.length;
  const imageSrc = `${BASE}/${pictureDependOnTheTime()}/${IMAGES[index]}`;
  canvas.width = '';
  canvas.height = '';
  canvas.removeAttribute("style");

  drawImage(imageSrc, ctx.filter);
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
    drawImage(reader.result, ctx.filter);
  }
  reader.readAsDataURL(file);
  FILEINPUT.value = "";
}

function savePicture() {
  let link = document.createElement('a');
  link.download = 'download.png';
  link.href = canvas.toDataURL('image/png');
  link.click();
  link.delete;
}

function ratio(img, canvas) {
  if (img.width < img.height) {
    return img.width / canvas.width
  } else {
    return img.height / canvas.height;
  }
}

FULLSCREEN.addEventListener('click', toggleFullScreen);
FILTERS.addEventListener("input", filter);
RESET.addEventListener('click', (e) => filter(e));
NEXTPICTURE.addEventListener('click', nextPicture);
FILEINPUT.addEventListener('change', loadPicture);
FILEOUTPUT.addEventListener('click', savePicture);