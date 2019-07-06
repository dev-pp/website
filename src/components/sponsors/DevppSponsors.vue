<template>
  <section class="container sponsors">
    <a id="sponsors" class="anchor"></a>
    <div class="col-xs-12">
      <h3>PARCEIROS</h3>

      <!-- swiper -->
      <swiper :options="swiperOption">
        <swiper-slide>
          <a
            class="item"
            target="_blank"
            href="http://bit.ly/foregon-devpp-website"
            title="Foregon"
          >
            <foregon-logo />
          </a>
        </swiper-slide>
        <swiper-slide>
          <a
            class="item"
            target="_blank"
            href="http://bit.ly/forspace-devpp-website"
            title="Eventou"
          >
            <for-space-logo />
          </a>
        </swiper-slide>
        <swiper-slide>
          <a
            class="item"
            target="_blank"
            href="http://bit.ly/eventou-devpp-website"
            title="Eventou"
          >
            <eventou-logo />
          </a>
        </swiper-slide>
        <swiper-slide>
          <a
            class="item"
            target="_blank"
            href="http://bit.ly/gdg-devpp-website"
            title="GDG Presidente Prudente"
            style="padding: 26px;"
          >
            <g-d-g-prudente-logo />
          </a>
        </swiper-slide>
        <!-- <div class="swiper-pagination" slot="pagination"></div> -->
      </swiper>
      <a href="mailto:contato@devpp.com.br" class="btn btn-lg btn-danger"
        >Seja um parceiro</a
      >
    </div>
  </section>
</template>

<script>
import ForegonLogo from "./ForegonLogo.vue";
import ForSpaceLogo from "./ForSpaceLogo.vue";
import EventouLogo from "./EventouLogo.vue";
import GDGPrudenteLogo from "./GDGPrudenteLogo.vue";

import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";

export default {
  name: "devpp-sponsors",
  components: {
    ForegonLogo,
    EventouLogo,
    ForSpaceLogo,
    GDGPrudenteLogo,
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 6,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.sponsors {
  text-align: center;

  .swiper-container {
    margin-bottom: 20px;

    .swiper-slide {
      border: solid 1px #ccc;
      width: 300px;
      height: 85px;
      display: flex;
      padding-top: 10px;

      a.item {
        align-self: center;
        width: 200px;
        margin: 0 auto;
      }
    }

    .swiper-pagination {
      margin-top: 40px;
    }
  }
}
</style>


