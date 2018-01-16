<template>
  <section class="intro">
    <div class="content-box">
      <div class="intro-overlay"></div>w
      <div class="parallax-container">
        <div class="parallax">
          <img src="http://res.cloudinary.com/dwtuxv53y/image/upload/v1515629005/vista-da-catedral-praa-9-de-julho-presidente-prudente-sp-2000x1500_dcx9ct.jpg">
        </div>
      </div>
      <div class="hero-content container">
        <div id="hero-content" class="row">
          <div class="col-sm-10 col-sm-offset-1 intro-content">
            <div class="reveal-bottom reveal-distance-70px reveal-duration-800">
              <h1>DEVPP</h1>
              <h2>Comunidade de Desenvolvedores de Presidente Prudente e Região</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="arrow arrow-floating">
        <a href="#about">
          <ArrowDown class="icon icon-arrow-down" />
        </a>
      </div>
    </div>
  </section>
</template>

<script>

import ArrowDown from "./intro--icons.svg?icon-keyboard_arrow_down";

export default {
  name: 'devpp-intro',
  components: {
    ArrowDown
  }
}
</script>

<style lang="scss" scoped>
@import './intro--style.scss';
@import './intro--style-icons.scss'
</style>


