import '../mobirise/css/custom.scss';
import '../../components/hero/index';

let $body = document.body;

let toggleFixedNavbarPosition = function () {
  let currentScroll = Math.round(document.documentElement.scrollTop);
  let heroHeight = document.querySelectorAll('.mbr-box__magnet')[0].offsetHeight;

  if (currentScroll > (heroHeight - 80)) {
    // hide header navbar
    $body.classList.add('hide-header');
  }

  if (currentScroll < heroHeight - 80) {
    // show header
    $body.classList.remove('hide-header');
  }

  if (currentScroll > heroHeight - 80) {
    // fix navbar
    $body.classList.add('fixed-navbar');
  }

  if (currentScroll < heroHeight - 80) {
    // unfix navbar
    $body.classList.remove('fixed-navbar');
  }
}


    $(window).scroll(function () {
      $('#hero-content').css({ 'opacity': (230 - $(window).scrollTop()) / 100 });
      toggleFixedNavbarPosition();
    })

    window.onresize = (function() {
      document.getElementById('hero-content-wrapper').style.width = (window.innerWidth - 110) + 'px';
    })