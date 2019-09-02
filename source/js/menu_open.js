var pageHeader = document.querySelector('.page-header');
var pageToggle = document.querySelector('.page-header__toggle');
var pageMenuToggle = document.querySelector('.page-header__menu-toggle');

pageHeader.classList.remove('page-header__menu--nojs');

pageToggle.addEventListener('click', function () {
  if (pageHeader.classList.contains('page-header__menu--closed')) {
    pageHeader.classList.remove('page-header__menu--closed');
    pageHeader.classList.add('page-header__menu--opened');
  }
});

pageMenuToggle.addEventListener('click', function () {
  if (pageHeader.classList.contains('page-header__menu--opened')) {
    pageHeader.classList.remove('page-header__menu--opened');
    pageHeader.classList.add('page-header__menu--closed');
  }
});
