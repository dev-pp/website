const $body = document.body;

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

module.exports = toggleFixedHeader;
