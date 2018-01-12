import Vue from 'vue'
import App from './App.vue'

import jQuery from 'jquery/src/jquery';
import * as SmoothScroll from 'smooth-scroll';

import ScrollReveal from 'scrollreveal';
import { dropdown, collapse, modal, carousel } from 'bootstrap';

// Parallax
import 'materialize-css';

import './favicons/favicons';

// exporting jquery for external libraries to use it
window.$ = window.jQuery = jQuery;

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('SW registered: ', registration);
      }).catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

var modernBrowser = (
  'fetch' in window &&
  'assign' in Object
);

if (!modernBrowser) {
  var hash = '';
  var scripts = document.getElementsByTagName('script');

  var scriptLength = scripts.length;
  for (var i = scriptLength - 1; i >= 0; i--) {
    if (scripts[i].src && scripts[i].src.indexOf('bundle') > -1) {
      var srcArray = scripts[i].src.split('.');
      hash = srcArray[srcArray.length - 2];
    }
  }
  var scriptElement = document.createElement('script');

  scriptElement.async = false;
  scriptElement.src = '/polyfills.bundle.' + hash + 'js';
  document.head.appendChild(scriptElement);
  console.log(scriptElement);
}

var scroll = new SmoothScroll('a[href*="#"]', {
  offset: 50,
  easing: 'easeInOutQuart',
});

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

const toggleFixedHeader = function () {
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

const adjustHeroContentOpacity = function () {
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

window.sr = ScrollReveal({ reset: true });
sr.reveal('.reveal');
sr.reveal('.reveal-overflow', { distance: '150%' });
sr.reveal('.reveal-distance-70px', { distance: '70px' });
sr.reveal('.reveal-delay', { delay: 100 });
sr.reveal('.reveal-left', { origin: 'left' });
sr.reveal('.reveal-right', { origin: 'right' });
sr.reveal('.reveal-bottom', { origin: 'bottom' });
sr.reveal('.reveal-duration-800', { duration: 800 });
sr.reveal('.reveal-no-opacity', { opacity: 1 });
sr.reveal('.reveal-no-scale', { scale: 1 });

sr.reveal('.content-header-with-options .btn-group.filter', {
  delay: 200,
  origin: 'bottom',
  easing: 'linear',
  opacity: 0,
  scale: 1,
  distance: '150%',
});

sr.reveal('.mbr-gallery-item.reveal-sequence', 50);
sr.reveal('.material-item.reveal-sequence', 50);
sr.reveal('.sponsor .reveal-sequence', 50);
sr.reveal('.footer .reveal-sequence', 15);

// Materialize Parallax
$(document).ready(function () {
  $('.parallax').parallax();

  $('.navbar-collapse ul li a:not(.dropdown-toggle)')
    .bind('click touchstart', () => {
      $('.navbar-toggle:visible').click();
    });
});

new Vue({
  el: '#app',
  render: h => h(App)
})