const adjustHeroContentOpacity = function() {
  // const newOpacity = (230 - $(window).scrollTop()) / 100;
  // document.querySelectorAll('.intro .hero-content')[0].style.opacity = newOpacity;
};

const adjustHeroContentSize = function() {
  document.querySelectorAll(".intro .hero-content")[0].style.width =
    window.innerWidth - 110 + "px";
};

module.exports = {
  adjustIntroHeroOnScroll: adjustHeroContentOpacity,
  adjustIntroHeroOnResize: adjustHeroContentSize
};
