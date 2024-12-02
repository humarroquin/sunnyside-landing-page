const btn = document.querySelector('.btn-wrapper');
const navbar = document.querySelector('.navbar');

btn.addEventListener('click', () => {
  navbar.classList.toggle('show-menu');
});

// todo ::after element stays on the page if the menu is left active. Reasearch more about pseudo elements.
