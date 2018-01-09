import jQuery from 'jquery/src/jquery';

import ScrollReveal from 'scrollreveal';
import { dropdown, collapse, modal, carousel } from 'bootstrap';
import { parallax } from 'materialize-css';

import './components/hero/index';
import './assets/styles/custom.scss';

// exporting jquery for external libraries to use it
window.$ = window.jQuery = jQuery;

const $body = document.body;

const toggleFixedNavbar = function () {
  const currentScroll = Math.round(document.documentElement.scrollTop);
  const introHeight = document.querySelectorAll('.intro')[0].offsetHeight;

  if (currentScroll > introHeight - 80) {
    // fix navbar
    $body.classList.add('fixed-navbar');
  }

  if (currentScroll < introHeight - 80) {
    // unfix navbar
    $body.classList.remove('fixed-navbar');
  }
};

const toggleFixedHeader = function() {
  const currentScroll = Math.round(document.documentElement.scrollTop);
  const introHeight = document.querySelectorAll('.intro')[0].offsetHeight;

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
}

const adjustHeroContentOpacity = function() {
  const newOpacity = (230 - $(window).scrollTop()) / 100;
  document.querySelectorAll('.hero-content')[0].style.opacity = newOpacity;
};

const adjustHeroContentSize = function () {
  document.querySelectorAll('.hero-content')[0].style.width = (window.innerWidth - 110) + 'px';
}

window.onscroll = function () {
  adjustHeroContentOpacity();
  toggleFixedNavbar();
  toggleFixedHeader();
};

window.onresize = (function () {
  adjustHeroContentSize();
});

window.sr = ScrollReveal({reset: true});
sr.reveal('.reveal');
sr.reveal('.reveal-overflow', { distance: '150%' });
sr.reveal('.reveal-distance-70px', { distance: '70px' });
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
sr.reveal('.sponsor .reveal-sequence', 50);
sr.reveal('.footer .reveal-sequence', 15);

// Materialize Parallax
$(document).ready(function(){
  $('.parallax').parallax();
});