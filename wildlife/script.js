const searchShow = (btn) =>{
  const search = document.querySelector(btn);
  const body = document.querySelector('body');
  
  search.addEventListener('click', function (e) {
    e.stopPropagation();
    this.classList.add('search--active');
  });
  
  body.addEventListener('click', function () {
    search.classList.remove('search--active');
  });
}

searchShow('.search');