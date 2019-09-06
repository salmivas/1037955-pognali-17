var pageHeader = document.querySelector('.page-header');
var pageToggle = document.querySelector('.page-header__toggle');
var pageMenuToggle = document.querySelector('.page-header__menu-toggle');

pageHeader.classList.remove('page-header--nojs');

pageToggle.addEventListener('click', function () {
  if (pageHeader.classList.contains('page-header--closed')) {
    pageHeader.classList.remove('page-header--closed');
    pageHeader.classList.add('page-header--opened');
  }
});

pageMenuToggle.addEventListener('click', function () {
  if (pageHeader.classList.contains('page-header--opened')) {
    pageHeader.classList.remove('page-header--opened');
    pageHeader.classList.add('page-header--closed');
  }
});
