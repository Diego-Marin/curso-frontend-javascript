const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamMobile_icon = document.querySelector(".menu");
const menuHamMobile = document.querySelector(".mobile-menu");

menuEmail.addEventListener('click', toogleDesktopMenu)
menuHamMobile_icon.addEventListener('click', toogleMobileMenu)

function toogleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}

function toogleMobileMenu(){
    menuHamMobile.classList.toggle('inactive');
}
