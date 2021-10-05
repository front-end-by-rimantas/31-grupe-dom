const formDOM = document.querySelector('form');
const resetDOM = formDOM.querySelector('.reset');
const minusDOM = formDOM.querySelector('.minus');
const plusDOM = formDOM.querySelector('.plus');
const numberDOM = formDOM.querySelector('.number');
const h1DOM = document.querySelector('h1');

const playText = 'Žaidimas progrese!';
const h1DefaultText = h1DOM.innerText;
let counter = 0;

minusDOM.addEventListener('click', function () {
    numberDOM.innerText = --counter;
    h1DOM.innerText = playText;
});

plusDOM.addEventListener('click', function () {
    numberDOM.innerText = ++counter;
    h1DOM.innerText = playText;
});

resetDOM.addEventListener('click', function () {
    counter = 0;
    numberDOM.innerText = counter;
    h1DOM.innerText = h1DefaultText;
});