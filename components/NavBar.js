const nav = document.querySelector('#navbar');
var topOfNav = nav.offsetTop;
topOfNav -= 100;

function stickyNav() {
  if (window.scrollY >= topOfNav) {
    nav.classList.add('sticky');
    nav.classList.add('opacity');
  } else {
    nav.classList.remove('sticky');
    nav.classList.remove('opacity');
  }
}

window.addEventListener('scroll', stickyNav);