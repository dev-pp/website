import './index.scss';
import './icons.svg';

let $body = document.body;

let toggleFixedNavbarPosition = function () {
  let currentScroll = Math.round(document.documentElement.scrollTop);
  let introHeight = document.querySelectorAll('.intro')[0].offsetHeight;

  if (currentScroll > 10) {
    // fix header
    $body.classList.add('fixed-header');
  }

  if (currentScroll < 10) {
    // unfix header
    $body.classList.remove('fixed-header');
  }

  if (currentScroll > (introHeight - 80)) {
    // unfix header
    $body.classList.remove('fixed-header');
  }

  if (currentScroll > introHeight - 80) {
    // fix navbar
    $body.classList.add('fixed-navbar');
  }

  if (currentScroll < introHeight - 80) {
    // unfix navbar
    $body.classList.remove('fixed-navbar');
  }
}


$(window).scroll(function () {
  $('#hero-content').css({ 'opacity': (230 - $(window).scrollTop()) / 100 });
  toggleFixedNavbarPosition();
});

function adjustHeroContentSize() {
  document.getElementById('hero-content-fadein-scroll').style.width = (window.innerWidth - 110) + 'px';
}

window.onresize = (function () {
  adjustHeroContentSize();
});

window.sr = ScrollReveal({reset: true});
sr.reveal('.foo');
sr.reveal('.bar');
sr.reveal('.reveal');
sr.reveal('.reveal-delay-100', { delay: 100 });
sr.reveal('.reveal-delay-200', { delay: 200 });
sr.reveal('.reveal-delay-300', { delay: 300 });
sr.reveal('.reveal-overflow', { distance: '150%', });
sr.reveal('.reveal-distance-70px', { distance: '70px', });
sr.reveal('.reveal-left', { origin: 'left' });
sr.reveal('.reveal-right', { origin: 'right' });
sr.reveal('.reveal-bottom', { origin: 'bottom' });
sr.reveal('.reveal-duration-800', { duration: 800 });

sr.reveal('.content-header-with-options .btn-group.filter', {
  delay: 800,
  origin: 'right',
  easing: 'linear',
});
sr.reveal('.mbr-gallery-item.reveal-sequence', 50);
sr.reveal('.material-item.reveal-sequence', 50);
sr.reveal('.footer .reveal-sequence', 50);
sr.reveal('.sponsor .reveal-sequence', 50);
// sr.reveal('.reveal-no-opacity', { opacity: 1 });
// sr.reveal('.reveal-no-scale', { scale: 1 });

$(document).ready(() => {
  $('.content-box').parallax({
    imageSrc: './components/hero/vista-da-catedral-praa-9-de-julho-presidente-prudente-sp-2000x1500.jpg',
    naturalHeight: '100vh'
  });
});

// var jarallax = new Jarallax()
// jarallax.addAnimation('.jarallax_background',
//   [{ progress: '0%', top: '0' },
//   { progress: '100%', top: '-500px' }])