menu = document.querySelector('.menu');
navbar = document.querySelector('.navbar');
nav_logo = document.querySelector('.nav-logo');
// nav_address = document.querySelector('.nav-address');
nav_search = document.querySelector('.nav-search');
nav_signin = document.querySelector('.nav-signin');
nav_return = document.querySelector('.nav-return');
nav_cart = document.querySelector('.nav-cart');





menu.addEventListener('click', () => {
    nav_logo.classList.toggle('v-class-resp');
    // nav_address.classList.toggle('v-class-resp');
    nav_search.classList.toggle('v-class-resp');
    nav_signin.classList.toggle('v-class-resp');
    nav_return.classList.toggle('v-class-resp');
    nav_cart.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})