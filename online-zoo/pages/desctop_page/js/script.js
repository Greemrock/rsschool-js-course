let checkbox = document.querySelector('.theme__toggle');
let burger = document.querySelector('.header__burger');
let navbar = document.querySelector('.navbar');

// cange color theme

function changeTheme() {
  if(this.checked) {
    trans()
    document.documentElement.setAttribute('data-theme', 'dark')
  } else {
    trans()
    document.documentElement.setAttribute('data-theme', 'light')
  }
}

let trans = () => {
  document.documentElement.classList.add('transition');
  window.setTimeout(() => {
    document.documentElement.classList.remove('transition')
  }, 1000)
}

// open burger menu

burger.addEventListener('click', (event) => {
  burger.classList.toggle('active');
  navbar.classList.toggle('active');
  document.body.classList.toggle('lock');
})

checkbox.addEventListener('change', changeTheme)

// carousel in main-page

const slides = document.querySelectorAll('.slider__item-mainPage');
const carousel = document.querySelector('.slider__list-mainPage');
const range = document.querySelector('.range__main-size');
const counter = document.querySelector('#current-mainPage');

const nextSlide = (elem, slideNumber) => {

  //next slide

  carousel.classList.remove('step-1', 'step-2', 'step-3', 'step-4', 'step-5', 'step-6', 'step-7', 'step-8');
  carousel.classList.add(`step-${slideNumber}`);

  //active slide

  slides.forEach((e) => e.classList.remove('slider__item-active'));
  if (elem) {
    elem.target.classList.add('slider__item-active');
  } else {
    slides.forEach((e) => {
      if (e.dataset.number == slideNumber) {
        e.classList.add('slider__item-active');
      }
    })
  }

  //unhide slide

  for (let i = 0; i < slideNumber; i++) {
    slides[i].classList.remove('hide');
  }

  //hide slide

  for (let i = 0; i < slideNumber - 2; i++) {
    slides[i].classList.add('hide');
  }
}

const rangeValue = function(range, counter){
  const newValue = range.value;
  counter.innerHTML = `0${newValue}`;
  nextSlide(null, newValue);
}

carousel.addEventListener('click', (slide) => {
  if (slide.target.classList.contains('animal')) {
    return;
  }
  if (slide.target.dataset.number) {
    const slideNumber = slide.target.dataset.number;
    nextSlide(slide, slideNumber);
  }
})

range.addEventListener("input", () => {
  rangeValue(range, counter);
});

// carousel how it worsk

const carouselHow = document.querySelector('.slider__carousel');
const rangeHow = document.querySelector('#range-howItWorks');
const counterHow = document.querySelector('#current-howItWorks');

const rangeValueHow = () => {
  const newValue = rangeHow.value;
  counterHow.innerHTML = `0${newValue}`;
  nextSlideHow(newValue);
}

const nextSlideHow = (counter) => {
  const width = carouselHow.offsetWidth;
  carouselHow.style.cssText = `transform: translateX(-${width * (counter - 1)}px);`
} 

rangeHow.addEventListener("input", rangeValueHow);

// carousel Pets in ZOO

const windowCarouselPets = document.getElementById('slider-pets');
const btnNextSlidePets = document.getElementById('next-pets');
const btnPrevBtnSlidePets = document.getElementById('prev-pets');
const rangePets = document.getElementById('range-pets');
const counterPets = document.getElementById('current-pets');
const margin = 29;
const widthPets = windowCarouselPets.offsetWidth + margin;
let counterSlidePets = 0;
const maxSlidePets = 7;

const nextGroupSlidesPets = () => {
  counterSlidePets += 1;
  if (counterSlidePets > maxSlidePets) {
    counterSlidePets = 0;
  }
  windowCarouselPets.scrollTo((widthPets) * counterSlidePets, 0);
  addValueInRange();
}

const prevGroupSlidesPets = () => {
  counterSlidePets -= 1;
  if (counterSlidePets < 0) {
    counterSlidePets = maxSlidePets;
  }
  windowCarouselPets.scrollTo((widthPets) * counterSlidePets, 0);
  addValueInRange();
}

const addValueInRange = () => {
  counterPets.innerHTML = `0${counterSlidePets + 1}`;
  rangePets.value = counterSlidePets + 1;
}

const rangeValuePets = () => {
  let newValue = rangePets.value;
  let index = newValue - 1;

  counterPets.innerHTML = `0${newValue}`;
  windowCarouselPets.scrollTo((widthPets) * index, 0);
}

btnNextSlidePets.addEventListener('click', nextGroupSlidesPets);
btnPrevBtnSlidePets.addEventListener('click', prevGroupSlidesPets);
rangePets.addEventListener("input", rangeValuePets);