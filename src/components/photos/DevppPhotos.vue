<template>
  <section id="photos" class="photos">
    <div class="container">
      <div class="col-xs-12">
        <div class="content-header-with-options">
          <div>
            <h3>FOTOS</h3>
          </div>

          <div class="content-btn-group">
            <div class="btn-group filter">
              <button type="button" class="btn btn-default">Filtrar</button>
              <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="caret"></span>
                <span class="sr-only">Toggle Dropdown</span>
              </button>
              <ul class="dropdown-menu bs-dropdow">
                <li>
                  <a class="active" href="#">13/12/2017</a>
                </li>
                <li>
                  <a href="#">20/12/2017</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mbr-gallery mbr-section--no-padding">
      <div class="gallery-container">
        <div class="row mbr-gallery-row no-gutter">
          <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 mbr-gallery-item reveal-sequence">
            <a href="#lb-gallery1-w" data-slide-to="0" data-toggle="modal">
              <img src="http://res.cloudinary.com/dwtuxv53y/image/upload/v1515629002/slide8-small_h0t1xq.jpg" alt="">
              <span class="icon">
                <loupe-icon class="icon-gallery" />
                <!-- <svg class="icon-gallery">
                  <use xlink:href="./assets/icons/icons.svg#icon-loupe"></use>
                </svg> -->
              </span>
            </a>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 mbr-gallery-item reveal-sequence">
            <a href="#lb-gallery1-w" data-slide-to="1" data-toggle="modal">
              <img src="http://res.cloudinary.com/dwtuxv53y/image/upload/v1515628999/slide7-small_sfbvie.jpg" alt="">
              <span class="icon">
                <loupe-icon class="icon-gallery" />
                <!-- <svg class="icon-gallery">
                  <use xlink:href="./assets/icons/icons.svg#icon-loupe"></use>
                </svg> -->
              </span>
            </a>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 mbr-gallery-item reveal-sequence">
            <a href="#lb-gallery1-w" data-slide-to="2" data-toggle="modal">
              <img src="http://res.cloudinary.com/dwtuxv53y/image/upload/v1515628999/slide7-small_sfbvie.jpg" alt="">
              <span class="icon">
                <loupe-icon class="icon-gallery" />
                <!-- <svg class="icon-gallery">
                  <use xlink:href="./assets/icons/icons.svg#icon-loupe"></use>
                </svg> -->
              </span>
            </a>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 mbr-gallery-item reveal-sequence">
            <a href="#lb-gallery1-w" data-slide-to="3" data-toggle="modal">
              <img src="http://res.cloudinary.com/dwtuxv53y/image/upload/v1515628999/slide7-small_sfbvie.jpg" alt="">
              <span class="icon">
                <loupe-icon class="icon-gallery" />
                <!-- <svg class="icon-gallery">
                  <use xlink:href="./assets/icons/icons.svg#icon-loupe"></use>
                </svg> -->
              </span>
            </a>
          </div>
        </div>
        <div class="clearfix"></div>
      </div>

      <div data-app-prevent-settings="" class="mbr-slider modal fade carousel slide" tabindex="-1" data-keyboard="true" data-interval="false" id="lb-gallery1-w">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-body">
              <ol class="carousel-indicators">
                <li data-app-prevent-settings="" data-target="#lb-gallery1-w" class=" active" data-slide-to="0"></li>
                <li data-app-prevent-settings="" data-target="#lb-gallery1-w" data-slide-to="1"></li>
                <li data-app-prevent-settings="" data-target="#lb-gallery1-w" data-slide-to="2"></li>
                <li data-app-prevent-settings="" data-target="#lb-gallery1-w" data-slide-to="3"></li>
              </ol>
              <div class="carousel-inner">
                <div class="item active">
                  <img src="http://res.cloudinary.com/dwtuxv53y/image/upload/v1515629005/slide7_fgv0xf.jpg" alt="">
                </div>
                <div class="item">
                  <img src="http://res.cloudinary.com/dwtuxv53y/image/upload/v1515629005/slide7_fgv0xf.jpg" alt="">
                </div>
                <div class="item">
                  <img src="http://res.cloudinary.com/dwtuxv53y/image/upload/v1515629005/slide7_fgv0xf.jpg" alt="">
                </div>
                <div class="item">
                  <img src="http://res.cloudinary.com/dwtuxv53y/image/upload/v1515629005/slide7_fgv0xf.jpg" alt="">
                </div>
              </div>
              <a class="left carousel-control" role="button" data-slide="prev" href="#lb-gallery1-w">
                <span class="icon" aria-hidden="true">
                  <arrow-left-icon class="icon-gallery arrow" />
                  <!-- <svg class="icon-gallery arrow">
                    <use xlink:href="./assets/icons/icons.svg#icon-keyboard_arrow_left"></use>
                  </svg> -->
                </span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="right carousel-control" role="button" data-slide="next" href="#lb-gallery1-w">
                <span class="icon" aria-hidden="true">
                  <arrow-right-icon class="icon-gallery arrow"/>
                  <!-- <svg class="icon-gallery arrow">
                    <use xlink:href="./assets/icons/icons.svg#icon-keyboard_arrow_right"></use>
                  </svg> -->
                </span>
                <span class="sr-only">Next</span>
              </a>

              <a class="close" href="#" role="button" data-dismiss="modal">
                <span class="icon" aria-hidden="true">
                  <cancel-icon class="icon-gallery cancel" />
                  <!-- <svg class="icon-gallery cancel">
                    <use xlink:href="./assets/icons/icons.svg#icon-cancel"></use>
                  </svg> -->
                </span>
                <span class="sr-only">Close</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import LoupeIcon from "./photos--icons.svg?icon-loupe";
import ArrowRightIcon from "./photos--icons.svg?icon-keyboard_arrow_right";
import ArrowLeftIcon from "./photos--icons.svg?icon-keyboard_arrow_left";
import CancelIcon from "./photos--icons.svg?icon-cancel";

export default {
  name: 'devpp-photos',
  components: {
    LoupeIcon,
    ArrowRightIcon,
    ArrowLeftIcon,
    CancelIcon,
  }
}
</script>

<style lang="scss" scoped>
@import "./vendors/mobirise-gallery/mobirise-slider/style.css";
@import "./vendors/mobirise-gallery/style.css";
@import './photos--icons.scss';
@import './photos--style.scss';
</style>


