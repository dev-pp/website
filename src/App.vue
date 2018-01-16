<template>
  <div id="app">
    <devpp-header />
    <devpp-intro />
    <devpp-navbar />
    <devpp-about />
    <devpp-footer />
  </div>
</template>

<script>
import DevppHeader from './components/header/DevppHeader.vue';
import DevppIntro from './components/intro/DevppIntro.vue';
import DevppNavbar from './components/navbar/DevppNavbar.vue';
import DevppAbout from './components/about/DevppAbout.vue';
import DevppFooter from './components/footer/DevppFooter.vue';

export default {
  name: 'app',
  components: {
    DevppIntro,
    DevppNavbar,
    DevppAbout,
    DevppHeader,
    DevppFooter
  }
}
</script>

<style lang="scss">
@charset "UTF-8";

/* =========================================
 =========================================
 ======== BOOTSTRAP.CSS =======================
 =========================================
 ========================================= */

// Core variables and mixins
@import "~bootstrap-sass/assets/stylesheets/bootstrap/variables";
@import "~bootstrap-sass/assets/stylesheets/bootstrap/mixins";

// Reset and dependencies
@import "~bootstrap-sass/assets/stylesheets/bootstrap/normalize";

// Core CSS
@import "~bootstrap-sass/assets/stylesheets/bootstrap/scaffolding";
@import "~bootstrap-sass/assets/stylesheets/bootstrap/grid";
@import "~bootstrap-sass/assets/stylesheets/bootstrap/forms";
@import "~bootstrap-sass/assets/stylesheets/bootstrap/buttons";

// Components
@import "~bootstrap-sass/assets/stylesheets/bootstrap/component-animations";
@import "~bootstrap-sass/assets/stylesheets/bootstrap/dropdowns";
@import "~bootstrap-sass/assets/stylesheets/bootstrap/button-groups";
@import "~bootstrap-sass/assets/stylesheets/bootstrap/input-groups";
@import "~bootstrap-sass/assets/stylesheets/bootstrap/navs";
@import "~bootstrap-sass/assets/stylesheets/bootstrap/navbar";

// Components w/ JavaScript
@import "~bootstrap-sass/assets/stylesheets/bootstrap/modals";
@import "~bootstrap-sass/assets/stylesheets/bootstrap/carousel";

/* =========================================
 =========================================
 ======== GALLERY.CSS =======================
 =========================================
 ========================================= */
@import "./assets/vendors/mobirise-gallery/mobirise-slider/style.css";
@import "./assets/vendors/mobirise-gallery/style.css";

/* =========================================
=========================================
======== APP.CSS =======================
=========================================
=========================================*/
@import "./assets/icons/icons.css";
@import url(https://fonts.googleapis.com/css?family=Roboto:400,300,700);

body {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  background-color: #F6F7F8;
}

::selection {
  background: #dba1a0;
}

::-moz-selection {
  background: #dba1a0;
}

.dark-bg {
  background-color: rgb(60, 60, 60);
}

.pull-right {
  float: right;
}

.white-text {
  color: #fff;
}

h3,
h4 {
  font-weight: bold;
  line-height: 1.5em;
  margin: 0;
}

h3 {
  font-size: 2.5rem !important;
  letter-spacing: 6px;
  margin: 40px 0 20px;
}
@media(max-width: 410px) {
  h3 {
    font-size: 1.5rem !important;
  }
}

h4 {
  font-size: 1.8rem;
  letter-spacing: 1px;
}

.btn.btn-custom {
  color: white !important;
  border-color: #E81035 !important;
  background: #E81035 !important;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
}

.btn,
.form-control {
  border-radius: 0;
}

.btn.btn-custom:hover {
  background: #D9534F !important;
  color: #fff !important;
  border-color: #D9534F !important;
  background: rgba(0, 0, 0, .3);
}

section.custom-navbar {
  -webkit-transition: all .2s ease-in-out 0s;
  -o-transition: all .2s ease-in-out 0s;
  transition: all .2s ease-in-out 0s;

  width: 100%;
  z-index: 4;

  .navbar {
    .btn {
      opacity: 0;
      position: relative;
      top: 10px;
    }

    &.navbar-default {
      margin: 0;
      border-radius: 0;
      border-right: none;
      border-left: none;
      border-top: none;
      @media(max-width: 768px) {
        .navbar-collapse {
          overflow: hidden;

          ul {
            display: flex;
            flex-direction: column;
            width: 100%;

            li {
              display: flex;
              justify-content: center;
            }
          }

          .btn {
            width: 100%;
            margin-bottom: 10px;
          }
        }
      }
    }

    .nav > li > a {
      font-weight: bold;
      line-height: 160%;
    }

    .nav > li > a:after {
      content: "";
      display: block;
      width: 100%;

      -webkit-transform: scale(0, 1);
      -ms-transform: scale(0, 1);
      -o-transform: scale(0, 1);
      transform: scale(0, 1);
      -webkit-transform-origin: center center 0;
      -moz-transform-origin: center center 0;
      -ms-transform-origin: center center 0;
      transform-origin: center center 0;
      -webkit-transition: all .15s ease-out 0s;
      -o-transition: all .15s ease-out 0s;
      transition: all .15s ease-out 0s;
      border-bottom: 2px solid;
    }

    .nav > li > a:focus:after,
    .nav > li > a:hover:after {
      -webkit-transform: scale(1, 1);
      -ms-transform: scale(1, 1);
      -o-transform: scale(1, 1);
      transform: scale(1, 1);
    }

    .navbar-nav a {
      text-decoration: none;
    }
  }

  .custom-navbar-nav {
    padding: 13px !important;
  }
}

.fixed-navbar {
  section.custom-navbar {
    position: fixed;
    top: 0;

    .navbar {
      .btn {
        opacity: 1;
      }
    }
  }

  section.about {
    padding-top: 30px;
  }
}

.icon.button-arrow-right {
  width: 16px;
  height: 12px;
  margin-left: -5px;
  margin-bottom: -2.8px;
  fill: #337AB7;
}

a.btn-see-more:hover .icon.button-arrow-right {
  fill: #335E85;
}

.faca-parte {
  padding-top: 80px;
  padding-bottom: 80px;
  margin: 30px 0;
}

.faca-parte img {
  border-radius: 6px;
}

.faca-parte p {
  margin-top: 35px;
}

.faca-parte a.btn {
  width: 100%;
}
@media(min-width: 861px) {
  .faca-parte p {
    margin-top: 0;
  }

  .faca-parte a.btn {
    width: auto;
  }
}

.members ul.faces {
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.members ul.faces li {
  list-style: none;
}

.members ul.faces li.member-face img {
  width: 65px;
  height: 65px;
  border-radius: 50%;
  border: solid 3px white;
  margin-right: -15px;
}
@media(max-width: 611px) {
  .members ul.faces li.member-face img {
    width: 55px;
    height: 55px;
  }
}
@media(max-width: 537px) {
  .members ul.faces li.member-face img {
    width: 45px;
    height: 45px;
  }
}
@media(max-width: 458px) {
  .members ul.faces li.member-face img {
    width: 35px;
    height: 35px;
  }
}

.members ul.faces > li:nth-last-child(1) {
  width: 87px;
  height: 75px;
  margin-left: 25px;
}

.members ul.faces li:nth-last-child(1) ul {
  margin-top: 4px;
  padding: 0;
}

.members ul.faces li:nth-last-child(1) ul li.member-see-all {
  margin-top: 8px;
}

.members ul.faces li:nth-last-child(1) ul li.member-face-sm {
  float: left;
}

.members ul.faces li:nth-last-child(1) ul li.member-face-sm:nth-child(1) {
  margin-left: 12px;
}

.members ul.faces li:nth-last-child(1) ul li.member-face-sm img {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 0 0 0 -6px;
  border: solid 2px white;

  -webkit-transition: all .2s ease-in-out 0s;
  -o-transition: all .2s ease-in-out 0s;
  transition: all .2s ease-in-out 0s;
}

.members ul.faces li:nth-last-child(1) li.member-see-all a {
  width: 106px;
  display: block;
  border: solid 1px #efefef;
  border-radius: 5px;
  font-size: 12px;
  line-height: 33px;
  text-align: center;
  background-color: #f8f8f8;
  margin: 0 0 0 -5px;
  text-decoration: none;
}

.members ul.faces li:nth-last-child(1) li.member-see-all a:hover {
  background-color: #efefef;
}

.content-header-with-options {
  display: flex;
  align-items: center;

  .dropdown-menu {
    position: relative;

    &.bs-dropdow {
      // left: -71px;
      // top: 31px;
      position: absolute;
      position: absolute;
    left: -74px;
    }
  }

  > div:nth-last-child(1) {
    flex: 2;
    text-align: right;
    z-index: 3;
  }

  .content-btn-group {

    a {
      text-decoration: none;
    }

    a.active {
      background-color: #efefef;
    }
  }
}

.container {
  color: #777;
  font-size: 17px;
  line-height: 27px;
}

.content-panel {
  border: solid 1px #efefef;
  padding: 20px;
  border-radius: 6px;
  background-color: #fff;
  position: relative;

  -webkit-transition: box-shadow .25s;
  transition: box-shadow .25s;
}

.content-panel:hover {
  -webkit-box-shadow: 1px 1px 22px -1px rgba(0,0,0,0.1);
  -moz-box-shadow: 1px 1px 22px -1px rgba(0,0,0,0.1);
  box-shadow: 1px 1px 22px -1px rgba(0,0,0,0.1);
  top: -1px;
}

.meetup-panel {
  display: flex;
  margin-bottom: 30px;
}

.meetup-panel .data {
  margin-right: 10px;
}

.meetup-panel .data .data-info {
  padding: 5px 15px;
  border-radius: 6px;
  background-color: #F6F7F8;
  border: solid 1px #DEE1E3;
  display: inline-block;
  text-align: center;
  font-weight: 700;
  float: left;
}

.meetup-panel .data .data-info .day {
  color: #E81035;
  font-size: 20px;
  display: block;
  text-align: center;
  margin-bottom: -12px;
}

.meetup-panel .data .data-info .month {
  text-transform: uppercase;
  font-size: 13px;
}

.meetup-panel .small {
  color: #A8AEB3;
  font-size: 14px;
}

.meetup-panel .info .place {
  display: flex;
}

.meetup-panel .info .place div:nth-child(1) {
  margin-right: 10px;
}

.meetup-panel .info .place h4 {
  margin: 0;
  font-size: 16px;
  color: #666;
}

.mbr-gallery {
  margin-bottom: 30px;
  clear: both;
}

.mbr-gallery-layout-default {
  background-color: rgb(76, 105, 114);
}

.icon-gallery {
  fill: #fff;
  width: 30px;
  height: 30px;
}

.icon-gallery.arrow {
  width: 43px;
  height: 52px;
  margin-left: -12px;
}

.icon-gallery.cancel {
  width: 30px;
  height: 30px;
  margin-left: -5px;
  margin-top: 11px;
}

section.material {
  .material-item-wrapper {
    margin-top: -35px;

    .material-item {
      margin-top: 35px;

      .palestrante {
        display: flex;
        overflow: hidden;
        padding: 10px;

        .overflow {
          width: 47px;
          position: absolute;
          height: 80px;
          left: 19px;
          background: #fff;
          z-index: 2;
          @media(max-width: 305px) {
            display: none;
          }
        }

        img {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          border: solid 3px white;
          position: relative;
          z-index: 2;
          @media(max-width: 305px) {
            display: none;
          }
        }

        .info {
          border-top-right-radius: 25px;
          border-bottom-right-radius: 25px;
          padding: 8px 0 8px 70px;
          flex: 2;
          margin-left: -60px;
          position: relative;
          z-index: 1;
          font-size: 14px;
          height: 70px;
          top: 7px;
          background-color: #efefef;

          div {
            span {
              position: relative;
              top: -2px;
              left: 4px;
            }
          }
          @media(max-width: 305px) {
            padding: 8px 8px 8px 16px;
            font-size: 12px;
            height: 40px;
            border-top-left-radius: 25px;
            border-bottom-left-radius: 25px;
            margin-left: 0;

            img {
              display: none;
            }

            div {
              float: left;

              span {
                position: inherit;
                top: 0;
                left: 0;
              }
            }

            div:nth-child(1) {
              margin-right: 3px;
            }
          }
        }
      }

      a {
        .icon {
          height: 10px;
        }
      }
    }
  }
}

$palestre-width: 218px;

section.palestre {
  margin-top: 30px;
  text-align: center;
  text-shadow: 3px 3px 3px #000;

  .parallax-container {
    height: $palestre-width;
    position: absolute;
    width: 100%;
    z-index: 1;

    .parallax {
      img {
        width: 150%;
        @media(min-width:555px) {
          width: 100%;
        }
      }
    }
  }

  .palestre-content-wrapper {
    height: $palestre-width;
    display: flex;
    justify-content: center;
    position: relative;
    z-index: 1;

    .palestre-content {
      display: flex;
      flex-direction: column;
      align-content: center;
      justify-content: center;
      padding: 0 20px;

      h3 {
        margin: 0 0 20px;
      }
    }
  }
}

section.newsletters {
  text-align: center;
  padding: 20px 0;
  background: #fff;

  .form {
    max-width: 700px;
    margin: 30px auto 0;
    display: flex;
    flex-direction: column;

    button,
    input {
      margin-bottom: 10px;
    }

    input::placeholder {
      color: #bcbaba;
      font-size: 15px;
    }

    div:nth-last-child(1) button {
      width: 100%;
    }
    @media(min-width: 550px) {

      flex-direction: row;

      div:nth-child(1) {
        flex: 2;
      }

      div:nth-last-child(1) {
        width: auto;
        padding-left: 7px;
      }
    }
  }
}

.sponsor {
  text-align: center;

  ul {
    padding: 0;

    li {
      list-style: none;

      img {
        border: solid 1px #ccc;
        padding: 5px;
        width: 150px;
      }

    }
  }
}

.sponsor img {
  border: solid 1px #ccc;
  padding: 5px;
  width: 150px;
  background: #fff;
}



.gallery-container {
  background-color: #000;
}
</style>
