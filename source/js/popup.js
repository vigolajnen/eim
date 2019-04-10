
var popup = document.querySelector('.popup');
var popupOverlay = document.querySelector('.popup-overlay');
var popupBtnClose = document.querySelector('.popup-close');
var wrapper = document.querySelector('.wrapper');
var popupOpen = document.querySelector('[data-id=js-popup-btn]');

// var popupForm = popup.querySelector('form');
var inputName = popup.querySelector('[id=name]');
// var inputPhone = popup.querySelector('[id=phone]');
// var inputEmail = popup.querySelector('[id=email]');

popupOpen.addEventListener('click', function (evt) {
  popupOverlay.classList.add('popup-show');
  document.querySelector('body').classList.add('overlay');
  inputName.focus();
});

popupBtnClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  popupOverlay.classList.remove('popup-show');
  document.querySelector('body').classList.remove('overlay');
});



