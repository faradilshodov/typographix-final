document.addEventListener('DOMContentLoaded', () => {
    // Function to create and observe intersection observers
    function createObserver(selector, observerOptions, toggleClass) {
        const items = document.querySelectorAll(selector);
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(toggleClass);
                } else {
                    entry.target.classList.remove(toggleClass);
                }
            });
        }, observerOptions);

        items.forEach(item => {
            observer.observe(item);
        });
    }

    // Create observers for diffrent sections
    createObserver('#about .phrase', { root: null, threshold: 1 }, 'active');
    createObserver('#gallery .image-box', { root: null, threshold: 1 }, 'active');
    createObserver('#blog .featured-article, #blog .article', { root: null, threshold: 0.3 }, 'fadeInUp');
    createObserver('#contact > div', { root: null, threshold: 0.5 }, 'fadeInUp');
});

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