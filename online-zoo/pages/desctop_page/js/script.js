// cange color theme

let checkbox = document.querySelector('.theme__toggle');

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

checkbox.addEventListener('change', changeTheme)

// open burger menu

let navbar = document.querySelector('.navbar');
let burger = document.querySelector('.header__burger');



const toggleBurgerMenu = () => {
  burger.classList.toggle('active');
  navbar.classList.toggle('active');
  document.body.classList.toggle('lock');
}

burger.addEventListener('click', toggleBurgerMenu)

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

const windowCarouseHow = document.getElementById('slider-how');
const slideContentHow = document.querySelector('.slider__list-how');
const rangeHow = document.getElementById('range-how');
const counterHow = document.getElementById('current-how');
let widthStepHow = windowCarouseHow.offsetWidth;
let widthContentHow = slideContentHow.scrollWidth;
let indexHow = 1;

const rangeValueHow = () => {
  const newValue = rangeHow.value;
  let index = newValue - 1;
  counterHow.innerHTML = `0${newValue}`;
  windowCarouseHow.scrollTo((widthStepHow) * index, 0);
}

let autoSlideInterval = setInterval(() => {
  if (widthContentHow - widthStepHow >= windowCarouseHow.scrollLeft + widthStepHow) {
    windowCarouseHow.scrollBy(widthStepHow, 0);
    indexHow++;
    counterHow.innerHTML = `0${indexHow}`;
    rangeHow.value = indexHow;
  }
  if (widthContentHow - widthStepHow < windowCarouseHow.scrollLeft + widthStepHow) {
    windowCarouseHow.scrollBy(-widthContentHow, 0);
    indexHow = 1;
    counterHow.innerHTML = `0${indexHow}`;
    rangeHow.value = indexHow;
  }
}, 3000);

rangeHow.addEventListener("input", rangeValueHow);

window.addEventListener('resize', () => {
  widthStepHow = windowCarouseHow.offsetWidth;
});

// carousel Pets in ZOO

const windowCarouselPets = document.getElementById('slider-pets');
const btnNextSlidePets = document.getElementById('next-pets');
const btnPrevBtnSlidePets = document.getElementById('prev-pets');
const rangePets = document.getElementById('range-pets');
const counterPets = document.getElementById('current-pets');
const margin = 20;
let widthStepPets = windowCarouselPets.offsetWidth + margin;
let indexSlidePets = 0;
const maxSlidePets = 7;

const nextGroupSlidesPets = () => {
  console.log(`widthStepPets`, widthStepPets)
  indexSlidePets += 1;
  if (indexSlidePets > maxSlidePets) {
    indexSlidePets = 0;
  }
  windowCarouselPets.scrollTo((widthStepPets) * indexSlidePets, 0);
  addValueInRange();
}

const prevGroupSlidesPets = () => {
  indexSlidePets -= 1;
  if (indexSlidePets < 0) {
    indexSlidePets = maxSlidePets;
  }
  windowCarouselPets.scrollTo((widthStepPets) * indexSlidePets, 0);
  addValueInRange();
}

const addValueInRange = () => {
  counterPets.innerHTML = `0${indexSlidePets + 1}`;
  rangePets.value = indexSlidePets + 1;
}

const rangeValuePets = () => {
  let newValue = rangePets.value;
  let index = newValue - 1;
  
  indexSlidePets = index;
  counterPets.innerHTML = `0${newValue}`;
  windowCarouselPets.scrollTo((widthStepPets) * index, 0);
}

btnNextSlidePets.addEventListener('click', nextGroupSlidesPets);
btnPrevBtnSlidePets.addEventListener('click', prevGroupSlidesPets);
rangePets.addEventListener("input", rangeValuePets);
window.addEventListener('resize', () => {
  widthStepPets = windowCarouselPets.offsetWidth;
});

//carousel Testimonials

const windowCarouselTestimonials = document.getElementById('slider-testimonials');
const btnNextSlideTestimonials = document.getElementById('next-testimonials');
const btnPrevBtnSlideTestimonials = document.getElementById('prev-testimonials');
const rangeTestimonials = document.getElementById('range-testimonials');
const counterTestimonials = document.getElementById('current-testimonials');
let widthStepTestimonials = windowCarouselTestimonials.offsetWidth;
let indexSlideTestimonials = 0;
const maxSlideTestimonials = 7;

const nextGroupSlidesTestimonials = () => {
  indexSlideTestimonials += 1;
  if (indexSlideTestimonials > maxSlideTestimonials) {
    indexSlideTestimonials = 0;
  }
  windowCarouselTestimonials.scrollTo((widthStepTestimonials) * indexSlideTestimonials, 0);
  addValueInRangeTestimonials();
}

const prevGroupSlides_Testimonials = () => {
  indexSlideTestimonials -= 1;
  if (indexSlideTestimonials < 0) {
    indexSlideTestimonials = maxSlideTestimonials;
  }
  windowCarouselTestimonials.scrollTo((widthStepTestimonials) * indexSlideTestimonials, 0);
  addValueInRangeTestimonials();
}

const addValueInRangeTestimonials = () => {
  counterTestimonials.innerHTML = `0${indexSlideTestimonials + 1}`;
  rangeTestimonials.value = indexSlideTestimonials + 1;
}

const rangeValueTestimonials = () => {
  let newValue = rangeTestimonials.value;
  let index = newValue - 1;

  indexSlideTestimonials = index;
  counterTestimonials.innerHTML = `0${newValue}`;
  windowCarouselTestimonials.scrollTo((widthStepTestimonials) * index, 0);
}

btnNextSlideTestimonials.addEventListener('click', nextGroupSlidesTestimonials);
btnPrevBtnSlideTestimonials.addEventListener('click', prevGroupSlides_Testimonials);
rangeTestimonials.addEventListener("input", rangeValueTestimonials);
window.addEventListener('resize', () => {
  widthStepTestimonials = windowCarouselTestimonials.offsetWidth;
});