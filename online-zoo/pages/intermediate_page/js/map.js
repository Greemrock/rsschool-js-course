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

// carousel pets

const allSlides = document.querySelectorAll('.aside-slider__slide');
const activeSlide = document.querySelector('.aside-slider__slide_active');
const windowCarousel = document.querySelector('.aside-slider__container');
const contentCarousel = document.querySelector('.aside-slider__wrapper');
const btnNextSlide = document.querySelector('.aside-slider__button_right');
const btnPrevSlide = document.querySelector('.aside-slider__button_left');
const mapLabels = document.querySelectorAll('.map__wrapper');
const range = document.getElementById('range');
const counter = document.getElementById('current');
const btnWatchOnline = document.getElementById('btn-watch');
let margin = 18;
let widthStep = activeSlide.offsetWidth - margin;
let widthContent = contentCarousel.scrollWidth;
let widthWindowScrollLeft = windowCarousel.scrollLeft;
let index = 1;

allSlides.forEach((slide) => {
  slide.addEventListener('click', () => {
    allSlides.forEach((slide) => slide.classList.remove('aside-slider__slide_active'));
    slide.classList.add('aside-slider__slide_active');
    index = slide.dataset.number;
    getRange();
    addClassActiveLabel();
  });
});

mapLabels.forEach(label => {
  label.addEventListener('click', () => {
      index = label.dataset.number;
      addClassActive(mapLabels, index, 'active-label');
      getRange();
      addClassActive(allSlides, index, 'aside-slider__slide_active');
      windowCarousel.scrollTo(-widthContent, 0);
  });
});

const nextActiveSlide = () => {
  index++;
  if (index >= allSlides.length) {
    index = 0;
    windowCarousel.scrollTo(-widthContent, 0);
  }
  scrollContentCarousel();
  addClassActive(allSlides, index, 'aside-slider__slide_active');
  getRange();
  addClassActiveLabel();
};

const prevActiveSlide = () => {
  index--;
  if (index < 0) {
    index = allSlides.length - 1;
    windowCarousel.scrollTo(widthContent, 0);
  } 
  scrollContentCarousel();
  addClassActive(allSlides, index, 'aside-slider__slide_active');
  getRange();
  addClassActiveLabel();
};

const rangeValue = () => {
  let newValue = range.value;
  let valueRange = newValue - 1;
  
  index = valueRange;
  counter.innerHTML = `0${newValue}`;
  if (index < 3) {
    windowCarousel.scrollTo(-widthContent, 0);
  }
  scrollContentCarousel();
  addClassActive(allSlides, valueRange, 'aside-slider__slide_active');
  addClassActiveLabel();
};

const getRange = () => {
  let valueRange = +index + 1;
  range.value = valueRange;
  counter.innerHTML = `0${valueRange}`;
};

const scrollContentCarousel = () => {
  if (index > 3 && widthContent - widthStep >= widthWindowScrollLeft + widthStep) {
    windowCarousel.scrollTo(widthStep * (index - 4), 0);
  }
};

const addClassActive = (NodeList, indexItem, addClass) => {
  NodeList.forEach((slide) => slide.classList.remove(addClass));
  NodeList.item(indexItem).classList.add(addClass);
};

const addClassActiveLabel = () => {
  if (index >= mapLabels.length) {
    mapLabels.forEach((slide) => slide.classList.remove('active-label'));
    return;
  } else {
    addClassActive(mapLabels, index, 'active-label');
  }
};

btnNextSlide.addEventListener('click', nextActiveSlide);
btnPrevSlide.addEventListener('click', prevActiveSlide);
range.addEventListener('input', rangeValue);