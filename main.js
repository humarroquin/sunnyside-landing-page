const btn = document.querySelector('.btn-wrapper');
const navbar = document.querySelector('.navbar');

// toggle the .show-menu class
btn.addEventListener('click', () => {
  navbar.classList.toggle('show-menu');
});

// remove the .show-menu class when the screen size is 661px or bigger
const mediaQuery = window.matchMedia('(min-width: 661px)');

function handleMediaQueryChange(e) {
  if (e.matches) {
    navbar.classList.remove('show-menu');
  }
}

mediaQuery.addEventListener('change', handleMediaQueryChange);
