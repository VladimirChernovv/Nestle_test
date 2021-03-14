let headerList = document.querySelector('.header__list');
let closeButton = document.querySelector('.header__close-btn');
let button = document.querySelector('.header__menu');

button.addEventListener('click', showMobileMenu);
closeButton.addEventListener('click', closeMobileMenu);

function showMobileMenu(event) {
  headerList.style.display = 'block';
  closeButton.style.display = 'block';
};

function closeMobileMenu(event) {
  headerList.style.display = 'none';
  closeButton.style.display = 'none';
}