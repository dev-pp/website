<template>
  <section class="intro">
    <div class="content-box">
      <div class="intro-overlay"></div>
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
          <svg class="icon icon-arrow-down">
            <use xlink:href="./components/hero/arrow.svg#icon-keyboard_arrow_down"></use>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'intro',
}
</script>


<style lang="sass" scoped>
  @charset "UTF-8";

  // Materialize Parallax
  @import "~materialize-css/sass/components/color";
  @import "~materialize-css/sass/components/variables";
  @import "~materialize-css/sass/components/global";
  @import "~materialize-css/sass/components/typography";

  section.intro {
    display: table;
    width: 100%;
    -webkit-perspective: 1px;
    perspective: 1px;

    .content-box {
      display: table-cell;
      float: none;
      height: 100vh;
      margin: 0;
      text-align: center;
      vertical-align: middle;
      padding: 41px 0;

      .parallax-container {
        height: 100vh;
        position: absolute;
        top: 0;
        width: 100%;
      }

      .hero-content {
        position: relative;
        z-index: 7;
      }

      h1 {
        width: 500px;
        height: 170px;
        text-indent: -9999px;
        background-image: url('./logo-hero.png');
        background-size: cover;
        margin: -60px auto 0;
      }

      h2 {
        color: #fff;
        font-size: 26px;
      }
      @media(max-width: 670px) {
        h1 {
          width: 400px;
          height: 136px;
        }

        h2 {
          font-size: 20px;
        }
      }
      @media(max-width: 550px) {
        h1 {
          background-image: url('./logo-hero-m.png');

          width: 300px;
          height: 102px;
        }

        h2 {
          font-size: 20px;
        }
      }
      @media(max-width: 443px) {
        h1 {
          width: 200px;
          height: 68px;
        }

        h2 {
          font-size: 18px;
        }
      }
      @media(max-width: 328px) {
        h1 {
          background-image: url('./logo-hero-m.png');

          width: 100px;
          height: 34px;
        }

        h2 {
          font-size: 14px;
        }
      }

      .intro-overlay {
        background: rgba(34, 34, 34, .4);
        position: absolute;
        z-index: 1;
        height: 100vh;
        width: 100%;
        top: 0;
      }

      .arrow {
        bottom: 71px;
        left: 0;
        line-height: 1px;
        padding: 0 20px;
        position: absolute;
        width: 100%;
        z-index: 3;

        .icon-arrow-down {
          fill: #fff;
          width: 66px;
          height: 66px;
        }

        &.arrow-floating a {
          display: block;
          -webkit-animation: floating-arrow 1.6s infinite ease-in-out 0s;
          -o-animation: floating-arrow 1.6s infinite ease-in-out 0s;
          animation: floating-arrow 1.6s infinite ease-in-out 0s;
        }
        @-webkit-keyframes floating-arrow {
          from {
            -webkit-transform: translateY(0);
            transform: translateY(0);
          }

          65% {
            -webkit-transform: translateY(11px);
            transform: translateY(11px);
          }

          to {
            -webkit-transform: translateY(0);
            transform: translateY(0);
          }
        }
        @-o-keyframes floating-arrow {
          from {
            -webkit-transform: translateY(0);
            transform: translateY(0);
          }

          65% {
            -webkit-transform: translateY(11px);
            transform: translateY(11px);
          }

          to {
            -webkit-transform: translateY(0);
            transform: translateY(0);
          }
        }
        @keyframes floating-arrow {
          from {
            -webkit-transform: translateY(0);
            transform: translateY(0);
          }

          65% {
            -webkit-transform: translateY(11px);
            transform: translateY(11px);
          }

          to {
            -webkit-transform: translateY(0);
            transform: translateY(0);
          }
        }
      }
    }
  }

  .mobile {
    section.intro {
      &.content-box {
        background-attachment: scroll !important;
      }
    }
  }
</style>

