// Navigation
const nav = document.getElementById('nav')
const menuIcon = document.querySelector('.menu-icon')

function toggleMenu() {
    nav.classList.toggle('active')
    menuIcon.classList.toggle('active')
}

function hideMenu() {
    nav.classList.remove('active')
    menuIcon.classList.remove('active')
}