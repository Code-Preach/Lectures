const nav = document.querySelector('.nav');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', toggleNav);

function toggleNav() {
    nav.classList.toggle('close_nav');
}