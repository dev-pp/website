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

module.exports = toggleFixedNavbar;