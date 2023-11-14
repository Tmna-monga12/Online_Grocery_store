let registrationForm = document.querySelector('.registration-form');

document.querySelector('#signup').onclick = () => {
    registrationForm.classList.toggle('active');
    loginForm.classList.remove('active');

}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
}

let regForm = document.querySelector(".login-form");

document.querySelector("#signin").onclick = () => {
    regForm.classList.toggle("active");
    registrationForm.classList.remove('active');
}