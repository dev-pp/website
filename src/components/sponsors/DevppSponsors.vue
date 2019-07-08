<template>
  <section class="container sponsors">
    <a id="sponsors" class="anchor"></a>
    <div class="col-xs-12">
      <h3>PARCEIROS</h3>

      <!-- swiper -->
      <div class="swipper-sponsors-container">
        <a href="#" @click.prevent.stop="slidePrev" class="slide-prev-btn">
          <chevron-right style="transform: rotate(180deg);" />
        </a>
        <swiper :options="swiperOption" ref="mySwiper">
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
        </swiper>
        <a href="#" @click.prevent.stop="slideNext" class="slide-next-btn">
          <chevron-right />
        </a>
      </div>
      <h4 style="margin: 0">Seja um parceiro</h4>
      <p style="margin: 0">
        Entre em contato conosco:
        <a href="mailto:contato@devpp.com.br?subject=Quero Ser um Parceiro"
          >contato@devpp.com.br</a
        >
      </p>
    </div>
  </section>
</template>

<script>
import ForegonLogo from "./ForegonLogo.vue";
import ForSpaceLogo from "./ForSpaceLogo.vue";
import EventouLogo from "./EventouLogo.vue";
import GDGPrudenteLogo from "./GDGPrudenteLogo.vue";
import ChevronRight from "./ChevronRight.vue";

import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";

let _mySwiper;

export default {
  name: "devpp-sponsors",
  components: {
    ForegonLogo,
    EventouLogo,
    ForSpaceLogo,
    GDGPrudenteLogo,
    swiper,
    swiperSlide,
    ChevronRight
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 16,
        loop: true,
        breakpoints: {
          // when window width is <= 480px
          819: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          // when window width is <= 640px
          991: {
            slidesPerView: 2,
            spaceBetween: 6
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 6
          }
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        }
      }
    };
  },
  mounted() {
    _mySwiper = document.querySelector(".swiper-container").swiper;
  },
  methods: {
    slideNext() {
      _mySwiper.slideNext();
      this.prevEnable = true;
    },
    slidePrev() {
      _mySwiper.slidePrev();
      this.nextEnable = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.sponsors {
  text-align: center;

  // custom container
  .swipper-sponsors-container {
    display: flex;
    height: 95px;

    margin-bottom: 20px;
    width: auto;
    //vue awesome swipper container
    .swiper-container {
      .swiper-slide {
        border: solid 1px #ccc;
        //from 819 to 991px
        // @media (min-width: 819px) and (max-width: 991px) {
        //   max-width: 285px;
        // }

        display: flex;
        padding-top: 10px;

        a.item {
          align-self: center;
          width: 190px;
          margin: 0 auto;
        }
      }
    }

    .slide-next-btn,
    .slide-prev-btn {
      width: 50px;
      display: block;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .slide-next-btn {
      padding-left: 10px;
    }

    .slide-prev-btn {
      padding-right: 10px;
    }

    .swiper-pagination {
      margin-top: 40px;
    }
  }
}
</style>


