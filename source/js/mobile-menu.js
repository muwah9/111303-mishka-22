const mainNavigation = document.querySelector('.main-navigation');
const navigationToggle = document.querySelector('.main-navigation__toggle');

mainNavigation.classList.remove('main-navigation--no-js');

navigationToggle.addEventListener('click', function() {
  if (mainNavigation.classList.contains('main-navigation--closed')) {
    mainNavigation.classList.remove('main-navigation--closed');
    mainNavigation.classList.add('main-navigation--open');
  } else {
    mainNavigation.classList.add('main-navigation--closed');
    mainNavigation.classList.remove('main-navigation--open');
  }
});
