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