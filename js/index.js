'use strict'

const headerBtn = document.getElementById('header-btn');
const headerTooltip = document.getElementById('header-tooltip');
const destinationSidenavBtn = document.getElementById('destinations-sidenav-btn');
const listCountrySideNav = document.getElementById('list-country-sidenav');

destinationSidenavBtn.addEventListener('click', () => {  
    if (listCountrySideNav.style.display === 'none') {
        listCountrySideNav.style.display = 'flex';  
    } else {
        listCountrySideNav.style.display = 'none'
    }   
});

headerBtn.addEventListener('mouseenter', () => {  
    headerTooltip.style.display = 'block';
});

headerBtn.addEventListener('mouseleave', () => {
    headerTooltip.style.display = 'none';
});

const burgerBtn = document.getElementById('burger-nav');
const burgerSidenav = document.getElementById('burger-sidenav');
const burgerSidenavClose = document.getElementById('burger-sidenav-close');

function openNav() {
    burgerSidenav.classList.add('open'); 
    console.log(111);
}

function closeNav() {
    burgerSidenav.classList.remove('open');
}

burgerBtn.addEventListener('click', openNav);
burgerSidenavClose.addEventListener('click', closeNav);