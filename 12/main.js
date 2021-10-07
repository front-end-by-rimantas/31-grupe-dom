const nameDOM = document.getElementById('customer');
const sriubaDOM = document.getElementById('sriuba');
const patiekalasDOM = document.getElementById('patiekalas');
const desertasDOM = document.getElementById('desertas');
const gerimaiDOM = document.querySelectorAll('input[name="gerimas"]');
const submitDOM = document.querySelector('button[type="submit"]');
const orderDOM = document.querySelector('.order');

function arNori(DOM) {
    return DOM.checked ? 'nori' : 'nenori';
}

function optionFromRadioList(listDOM) {
    for (const itemDOM of listDOM) {
        if (itemDOM.checked) {
            return itemDOM.value;
        }
    }
    return false;
}

submitDOM.addEventListener('click', function (e) {
    e.preventDefault();

    const name = nameDOM.value.trim();
    const sakinioPradzia = name === '' ? 'nenurodes vardo' : `vardu ${name}`;

    let pasirinktasGerimas = optionFromRadioList(gerimaiDOM);
    const sakinioPabaiga = pasirinktasGerimas ? `${pasirinktasGerimas} yra pasirinktas gerimas` : 'gerimo nepasirinko';

    orderDOM.innerText = `Uzsakovas ${sakinioPradzia} ${arNori(sriubaDOM)} sriubos, ${arNori(patiekalasDOM)} pagrindinio patiekalo, ${arNori(desertasDOM)} deserto ir ${sakinioPabaiga}.`;
})