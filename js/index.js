'use strict'

const headerBtn = document.getElementById('header-btn');
const headerTooltip = document.getElementById('header-tooltip');

headerBtn.addEventListener('mouseenter', () => {
    headerTooltip.style.display = 'block';
});

headerBtn.addEventListener('mouseleave', () => {
    headerTooltip.style.display = 'none';
});