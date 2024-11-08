'use strict'

const headerBtn = document.getElementById('header-btn');
const headerTooltip = document.getElementById('header-tooltip');

headerBtn.addEventListener('mouseenter', () => {
    headerTooltip.style.display = 'block';
});

headerBtn.addEventListener('mouseleave', () => {
    headerTooltip.style.display = 'none';
});


// const burgerNav = document.getElementById('burger-nav');
// const burgerTooltip = document.getElementById('burger-sidenav');

// burgerNav.addEventListener('mouseenter', () => {
//     burgerTooltip.style.display = 'block';
// });

// burgerNav.addEventListener('mouseleave', () => {
//     burgerTooltip.style.display = 'none';
// });

const burgerNav = document.getElementById('burger-nav');
const burgerSidenav = document.getElementById('burger-sidenav');
const burgerSidenavClose = document.getElementById('burger-sidenav-close');
console.log(burgerSidenav)
function openNav() {
    // burgerSidenav.classList.add('open');
    burgerSidenav.style.display = 'block';
}

function closeNav() {
    console.log('closeNav');
    //burgerSidenav.classList.remove('open');
    burgerSidenav.style.display = 'none';

}

burgerNav.addEventListener('click', openNav);
burgerSidenavClose.addEventListener('click', closeNav);