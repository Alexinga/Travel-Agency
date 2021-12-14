'use strict'
const hamburger = document.querySelector('.hamburger');
const header = document.querySelector('#home');
const navbar = document.querySelector('.navbar');
const navUl = document.querySelector('.navbar-links');
const navA = document.querySelectorAll('.navbar-link');
const imgs = document.querySelectorAll('img');
const controlBtn = document.querySelectorAll('.control-btn');

/* Hamburger Toggle */
hamburger.addEventListener('click', openNav);
navA.forEach(a => a.addEventListener('click', closeNav));
function openNav() {
    navUl.classList.toggle('active');
    hamburger.classList.toggle('active');
}
function closeNav() {
    navUl.classList.remove('active');
    hamburger.classList.remove('active');
}
/* Hamburger Toggle */

/* Smooth Scrolling */
navUl.addEventListener('click', smoothScroll)
function smoothScroll(e) {
    e.preventDefault();
    if(e.target.classList.contains('navbar-link')) {
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({behavior: 'smooth'});
    }
}
/* Smooth Scrolling */

/* StickyNav Scrolling */
function stickyNav(entries) {
    const [entry] = entries;
    if(!entry.isIntersecting) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
};
let options = {
    root: null,
    threshold: 0,
}
const headObserver = new IntersectionObserver(stickyNav, options);
headObserver.observe(header);
/* StickyNav Scrolling */

/*slider*/ 
controlBtn.forEach(btn => {
    btn.onclick = () => {
        let src = btn.getAttribute('data-src');
        document.querySelector('video').src = src;
    }
});
/*slider*/ 

/*Lazy Loading*/
function loadImg(entries, observer) {
    const [entry] = entries;
    if(!entry.isIntersecting) {
        return;
    } else {
        entry.target.classList.remove('lazy')
    }
    observer.unobserve(entry.target);
}
const imgObserver = new IntersectionObserver(loadImg, options);
imgs.forEach(i => imgObserver.observe(i));
/*Lazy Loading*/