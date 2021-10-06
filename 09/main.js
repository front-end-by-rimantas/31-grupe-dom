const formDOM = document.querySelector('form');
const resetDOM = formDOM.querySelector('.reset');
const minusDOM = formDOM.querySelector('.minus');
const plusDOM = formDOM.querySelector('.plus');
const numberDOM = formDOM.querySelector('.number');
const h1DOM = document.querySelector('h1');
const ulDOM = document.querySelector('ul');

const h1DefaultText = h1DOM.innerText;
let counter = 0;

ulDOM.innerHTML = '<li>Tu pasileidai zaidima - sekmes!</li>';

function contentUpdate(btnType, h1Text = 'Žaidimas progrese!') {
    numberDOM.innerText = counter;
    h1DOM.innerText = h1Text;
    ulDOM.innerHTML += `<li>Paspaudei ${btnType} ir dabartinis rezultatas yra ${counter}.</li>`;
}

minusDOM.addEventListener('click', function () {
    --counter;
    contentUpdate('minusa');
});

plusDOM.addEventListener('click', function () {
    ++counter;
    contentUpdate('pliusa');
});

resetDOM.addEventListener('click', function () {
    counter = 0;
    contentUpdate('reset', h1DefaultText);
});