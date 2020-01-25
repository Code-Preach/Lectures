
let logIn = document.getElementById('login');
let signUp = document.getElementById('register');
let slide = document.getElementById('btn');

function register() {
    logIn.style.left = '-400px';
    signUp.style.left = '50px';
    slide.style.left = '110px';
}

function login() {
    logIn.style.left = '50px';
    signUp.style.left = '400px';
    slide.style.left = '0';
}