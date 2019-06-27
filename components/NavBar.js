// Scroll NavBar 
const nav = document.querySelector('#navbar');
var topOfNav = nav.offsetTop;
topOfNav -= 100;

function stickyNav() {
  if (window.scrollY >= topOfNav) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
}

window.addEventListener('scroll', stickyNav);