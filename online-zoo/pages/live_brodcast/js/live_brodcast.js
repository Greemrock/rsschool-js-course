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
}

containerBottomVideos.addEventListener('click', (video) => changeLinkVideo(video));