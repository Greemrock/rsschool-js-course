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

// slider in main-page

const carousel = document.querySelectorAll('.slider__item-mainPage');

carousel.forEach((slide) => {
  slide.addEventListener('click', () => {
    hideSlide(carousel, slide.dataset.number);

    //first slide
    if (slide.dataset.number == -1) {
      carousel.forEach((e) => {
        e.classList.add('step-prew');
        e.classList.remove('step-zero', 'step-one', 'step-two', 'step-three', 'step-foure', 'step-five', 'step-six', 'slider__item-active', 'hide');
      })
      slide.classList.add('slider__item-active');
    }

    //second slide
    if (slide.dataset.number == 0) {
      carousel.forEach((e) => {
        e.classList.add('step-zero');
        e.classList.remove('step-prew', 'step-one', 'step-two', 'step-three', 'step-foure', 'step-five', 'step-six', 'slider__item-active', 'hide');
      })
      slide.classList.add('slider__item-active');
    }

    //third slide
    if (slide.dataset.number == 1) {
      carousel.forEach((e) => {
        e.classList.add('step-one');
        e.classList.remove('step-prew', 'step-zero', 'step-two', 'step-three', 'step-foure', 'step-five', 'step-six', 'slider__item-active');
      })
      slide.classList.add('slider__item-active');
      carousel[1].classList.remove('hide');
    }

    //fourth slide
    if (slide.dataset.number == 2) {
      carousel.forEach((e) => {
        e.classList.add('step-two');
        e.classList.remove('step-prew', 'step-zero', 'step-one', 'step-three', 'step-foure', 'step-five', 'step-six', 'slider__item-active');
      })
      slide.classList.add('slider__item-active');
      carousel[2].classList.remove('hide');
    }

    //fifth slide
    if (slide.dataset.number == 3) {
      carousel.forEach((e) => {
        e.classList.add('step-three');
        e.classList.remove('step-prew', 'step-zero', 'step-one', 'step-two', 'step-foure', 'step-five', 'step-six', 'slider__item-active');
      })
      slide.classList.add('slider__item-active');
      carousel[3].classList.remove('hide');
    }

    //sixth slide
    if (slide.dataset.number == 4) {
      carousel.forEach((e) => {
        e.classList.add('step-foure');
        e.classList.remove('step-prew', 'step-zero', 'step-one', 'step-two', 'step-three', 'step-five', 'step-six', 'slider__item-active');
      })
      slide.classList.add('slider__item-active');
      carousel[4].classList.remove('hide');
    }

    //seventh slide
    if (slide.dataset.number == 5) {
      carousel.forEach((e) => {
        e.classList.add('step-five');
        e.classList.remove('step-prew', 'step-zero', 'step-one', 'step-two', 'step-three', 'step-foure', 'step-six', 'slider__item-active');
      }) 
      slide.classList.add('slider__item-active');
      carousel[5].classList.remove('hide');
    }

    //eighth slide
    if (slide.dataset.number == 6) {
      carousel.forEach((e) => {
        e.classList.add('step-six');
        e.classList.remove('step-prew', 'step-zero', 'step-one', 'step-two', 'step-three', 'step-foure', 'step-five', 'slider__item-active');
      })
      slide.classList.add('slider__item-active');
    }
  })

})

const hideSlide = (nodeList, amount) => {
  for (let i = 0; i < amount; i++) {
    nodeList[i].classList.add('hide');
  }
}