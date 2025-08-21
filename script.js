// Mobile nav toggle
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
burger?.addEventListener('click', () => nav.classList.toggle('show'));

// Dynamic year
document.getElementById('year').textContent = new Date().getFullYear();
