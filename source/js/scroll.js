var testElement = document.querySelector('.page-header');

window.addEventListener('scroll', function (evt) {
  if (window.pageYOffset > 0) {
    testElement.classList.add('page-header__scroll');
  } else {
    testElement.classList.remove('page-header__scroll');
  }
})
