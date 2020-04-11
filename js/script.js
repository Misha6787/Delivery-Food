const cartButton = document.querySelector('#cart-button');
const close = document.querySelector('.close');
const modal = document.querySelector('.modal');

cartButton.addEventListener('click', toggleModal);
close.addEventListener('click', toggleModal);

function toggleModal() {
    modal.classList.toggle('is-open');
};
new WOW().init();