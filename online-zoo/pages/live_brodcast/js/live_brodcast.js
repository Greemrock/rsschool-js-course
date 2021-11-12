"use strict";
// cange color theme

let checkbox = document.querySelector('.theme__toggle');

function changeTheme() {
  if(this.checked) {
    trans();
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    trans();
    document.documentElement.setAttribute('data-theme', 'light');
  }
}

let trans = () => {
  document.documentElement.classList.add('transition');
  window.setTimeout(() => {
    document.documentElement.classList.remove('transition');
  }, 1000);
};

checkbox.addEventListener('change', changeTheme);

// open burger menu

let navbar = document.querySelector('.navbar');
let burger = document.querySelector('.header__burger');

const toggleBurgerMenu = () => {
  burger.classList.toggle('active');
  navbar.classList.toggle('active');
  document.body.classList.toggle('lock');
};

burger.addEventListener('click', toggleBurgerMenu);

//change video-link

const mainVideo = document.getElementById('main-video');
const containerBottomVideos = document.querySelector('.zoo__thumbs');

const changeLinkVideo = (video) => {
  const srcMainVideo = mainVideo.src;
  const srcBottomVideo = video.target.previousElementSibling.src;

  if (video.target.classList.contains('zoo__cover')) {
    mainVideo.src = srcBottomVideo;
    video.target.previousElementSibling.src = srcMainVideo;
  }
};

//carousel bottom video

const containerDots = document.querySelector('.zoo__dots');
const allDots = containerDots.querySelectorAll('.zoo__dot');
const zooThumbs = document.querySelectorAll('.zoo__thumb');
let index = 0;

const nextGroupVideo = (dot) => {
  if (dot.target.classList.contains('zoo__dot')) {
    allDots.forEach((dot) => {
      dot.classList.remove('zoo__dot-active');
    });
    dot.target.classList.add('zoo__dot-active');

    if (dot.target.classList.contains('first-dot')) {
      zooThumbs.forEach((video) => {
        video.classList.add('hidden');
        if (index >= 0 & index < 3) {
          video.classList.remove('hidden');
          index++;
        }
      });
      index = 0;
    }
    if (dot.target.classList.contains('second-dot')) {
      zooThumbs.forEach((video) => {
        if (index >= 0 & index < 4) {
          video.classList.add('hidden');
          index++;
        }
        if (index >= 4 & index < 8) {
          video.classList.remove('hidden');
          index++;
        }
        if (index >= 8) {
          video.classList.add('hidden');
          index++;
        }
      });
      index = 0;
    }
    if (dot.target.classList.contains('third-dot')) {
      zooThumbs.forEach((video) => {
        video.classList.add('hidden');
        index++;
        if (index > 6) {
          video.classList.remove('hidden');
          index++;
        }
      });
      index = 0;
    }
  }
};

containerDots.addEventListener('click', (dot) => nextGroupVideo(dot));
containerBottomVideos.addEventListener('click', (video) => changeLinkVideo(video));