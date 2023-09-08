const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-mobile__links');
const allNavItems = document.querySelectorAll('.nav-mobile__links-link');
const body = document.querySelector('body');
const html = document.querySelector('html');
const nav = document.querySelector('.nav');
const footerSpan = document.querySelector('.footer p span');

const activeHamburger = () => {
	hamburger.classList.toggle('is-active');
	navLinks.classList.toggle('nav-mobile__links--active');
	if (navLinks.classList.contains('nav-mobile__links--active')) {
		body.style.overflow = 'hidden';
		html.style.overflow = 'hidden';
	} else {
		body.style.overflow = 'visible';
		html.style.overflow = 'visible';
	}
};
allNavItems.forEach((item) =>
	item.addEventListener('click', () => {
		navLinks.classList.remove('nav-mobile__links--active');
		hamburger.classList.remove('is-active');
		body.style.overflow = 'visible';
		html.style.overflow = 'visible';
	})
);

footerSpan.innerText = new Date().getFullYear();

const addBorderNav = () => {
	if (window.scrollY > 200) {
		nav.style.boxShadow = '1px 0 8px #a5a6a8';
	} else {
		nav.style.boxShadow = '0px 0 0px #a5a6a8';
	}
};

window.addEventListener('scroll', addBorderNav);
hamburger.addEventListener('click', activeHamburger);
