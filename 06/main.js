const logoDOM = document.querySelector('.logo');
const hamburgerDOM = document.querySelector('.hamburger');

hamburgerDOM.addEventListener('click', function () {
    logoDOM.classList.toggle('big');
});
