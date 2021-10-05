const formDOM = document.querySelector('form');
const resetDOM = formDOM.querySelector('.reset');
const minusDOM = formDOM.querySelector('.minus');
const plusDOM = formDOM.querySelector('.plus');
const numberDOM = formDOM.querySelector('.number');

let counter = 0;

minusDOM.addEventListener('click', function () {
    numberDOM.innerText = --counter;
});

plusDOM.addEventListener('click', function () {
    numberDOM.innerText = ++counter;
});

resetDOM.addEventListener('click', function () {
    counter = 0;
    numberDOM.innerText = counter;
});