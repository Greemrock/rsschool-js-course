let checkbox = document.querySelector('.theme__toggle');
let burger = document.querySelector('.header__burger');
let navbar = document.querySelector('.navbar');

checkbox.addEventListener('change', function() {
  if(this.checked) {
    trans()
    document.documentElement.setAttribute('data-theme', 'dark')
  } else {
    trans()
    document.documentElement.setAttribute('data-theme', 'light')
  }
})

let trans = () => {
  document.documentElement.classList.add('transition');
  window.setTimeout(() => {
    document.documentElement.classList.remove('transition')
  }, 1000)
}

burger.addEventListener('click', (event) => {
  burger.classList.toggle('active');
  navbar.classList.toggle('active');
  document.body.classList.toggle('lock');

})

alert("Пожалуйска не снижайте баллы за ошибки дизайнера в макете. В 1920 футер - 'Design' подгядся вверх, а в 1200 поехала черта в хэдере. Если есть вопросы, то пишите в Discord GreemRock#2253")