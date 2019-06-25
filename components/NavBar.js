const nav = document.querySelector('#navbar');
var topOfNav = nav.offsetTop;

function stickyNav() {
  if (window.scrollY >= topOfNav) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
}

window.addEventListener('scroll', stickyNav);