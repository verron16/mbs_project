const burger = document.querySelector('.top-bar-burger');
const menu = document.querySelector('.menu');
const menuLogo = document.querySelector('.menu-logo');


burger.addEventListener('click', openMenu);

function openMenu() {
    burger.classList.toggle('opened');
    menu.classList.add('menu-sm');
    if (burger.classList.contains('opened')) {
        menuLogo.style.display = 'block';
    } else {
        closeMenu();
    }
}

function closeMenu() {
    menu.classList.remove('menu-sm');
}