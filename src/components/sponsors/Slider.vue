<template>
  <div>
    <section
      class="slider-wrapper"
      @scroll="onScroll"
      ref="sliderWrapper"
      :style="{ height: `${height}px`, width }"
      v-touch:swipe.left="hideRightArrowOnSwipeLeft"
      v-touch:swipe.right="showRightArrowOnSlideRightIfStartPosition"
    >
      <div class="slider-container">
        <div class="content">
          <div style="display: flex; overflow: hidden">
            <slot />
            <div ref="lastItemGap" class="last-item-gap"></div>
          </div>
        </div>
      </div>
    </section>

    <div class="scroll-indicator-wrapper">
      <a
        ref="indicatorLeft"
        href="#"
        @click.prevent.stop="scrollABitOnArrowClick('right')"
        class="scroll-indicator indicator-left text-muted"
      >
        <i class="fa fa-angle-left"></i>
      </a>

      <a
        ref="indicatorRight"
        href="#"
        @click.prevent.stop="scrollABitOnArrowClick('left')"
        class="scroll-indicator indicator-right text-muted"
      >
        <i class="fa fa-angle-right"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "NmSlider",
  data() {
    return {
      width: ""
    };
  },
  props: {
    height: {
      type: Number
    },
    minViewportWidthToFullWidth: {
      type: Number,
      default: 0,
      description:
        "The minimal viewport width to set the slider to be full width"
    }
  },
  mounted() {
    this.activeSlider();

    window.addEventListener("resize", () => {
      setTimeout(() => {
        this.activeSlider();
      }, 300);
    });
  },
  methods: {
    getAvailableSpace(_sliderWrapper) {
      const screenWidth =
        window.innerWidth > 0 ? window.innerWidth : screen.width;
      let available = Math.min(getScreenWidth(), _sliderWrapper.clientWidth);
      return available;
    },
    activeSlider() {
      try {
        const $sliderWrapper = this.$refs.sliderWrapper;

        const lastItemLeft =
          this.$refs.lastItemGap.getBoundingClientRect().left -
          $sliderWrapper.getBoundingClientRect().left;

        const availableSpace = this.getAvailableSpace($sliderWrapper);

        if (lastItemLeft > availableSpace) {
          $sliderWrapper.classList.add("slider-active");

          if ($sliderWrapper.clientWidth == availableSpace) {
            this.width++;
          }

          if (this.minViewportWidthToFullWidth) {
            const screenWidth = getScreenWidth();

            if (screenWidth > this.minViewportWidthToFullWidth) {
              this.width = "";
            } else {
              this.width = `${screenWidth}px !important`;
            }
          }
        } else {
          $sliderWrapper.classList.remove("slider-active");
        }
      } catch (e) {}
    },
    onScroll() {
      this.$nextTick(() => {
        setTimeout(() => {
          const $sliderWrapper = this.$refs.sliderWrapper;
          const $rightArrow = this.$refs.indicatorRight;

          const lastItemLeft =
            this.$refs.lastItemGap.getBoundingClientRect().left -
            $sliderWrapper.getBoundingClientRect().left;

          const wrapperWidth = this.getAvailableSpace($sliderWrapper);

          if (lastItemLeft <= wrapperWidth) {
            $rightArrow.style.display = "none";
          } else {
            $rightArrow.style.display = "block";
          }
        }, 100);
      });
    },
    hideRightArrowOnSwipeLeft() {
      this.$nextTick(() => {
        this.$refs.indicatorRight.style.display = "none";
      });
    },
    showRightArrowOnSlideRightIfStartPosition(direction) {
      this.$nextTick(() => {
        if (this.$refs.sliderWrapper.scrollLeft <= 300) {
          setTimeout(() => {
            this.$refs.indicatorRight.style.display = "block";
          }, 500);
        }
      });
    },
    sideScroll(element, direction, speed, distance, step) {
      let scrollAmount = 0;

      let slideTimer = setInterval(() => {
        if (direction == "right") {
          element.scrollLeft -= step;
        } else {
          element.scrollLeft += step;
        }

        scrollAmount += step;

        if (scrollAmount >= distance) {
          window.clearInterval(slideTimer);
        }
      }, speed);
    },
    scrollABitOnArrowClick(direction) {
      this.$nextTick(() => {
        const $sliderWrapper = this.$refs.sliderWrapper;
        const $leftArrow = this.$refs.indicatorLeft;

        this.sideScroll($sliderWrapper, direction, 1, 253, 10);

        setTimeout(() => {
          if ($sliderWrapper.scrollLeft == 0) {
            $leftArrow.style.display = "none";
          } else {
            $leftArrow.style.display = "block";
          }
        }, 100);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
i.fa {
  display: inline-block;
  border: solid 3px #333;
  height: 40px;
  width: 40px;
}
.slider-container {
  border: solid 3px firebrick;

  .content {
    border: solid 4px green;
    display: flex;

    .last-item-gap {
      border: solid 3px goldenrod;
      width: 100px !important;
      min-width: initial !important;
    }
  }
}

.scroll-indicator-wrapper {
  display: none;
}

.slider-wrapper {
  border: solid 2px hotpink;

  &.slider-active {
    position: relative;
    z-index: 1;
    padding-left: 0 !important;
    overflow-x: auto;

    &::-webkit-scrollbar {
      display: none;
    }

    .slider-container {
      margin-left: initial !important;
    }

    .row {
      justify-content: start !important;
      padding-left: 15px;
    }
  }
}

.slider-active {
  & ~ .scroll-indicator-wrapper {
    position: relative;
    display: block;
    height: 30px;

    .scroll-indicator {
      position: absolute;
      padding: 10px 20px;
      font-size: 24px;
      z-index: 99;
      top: -102px;
      background: rgba(255, 255, 255, 0.8);
      border: solid 0.2px #fff;

      &.indicator-left {
        left: 12px;
        display: none;

        animation: bounce-left 1s infinite alternate;
        -webkit-animation: bounce-left 1s infinite alternate;
      }

      &.indicator-right {
        right: 0;
        animation: bounce-right 1s infinite alternate;
        -webkit-animation: bounce-right 1s infinite alternate;
      }
    }
  }
}

keyframes bounce-right {
  from {
    transform: translateX(0px);
  }
  to {
    transform: translateX(-15px);
  }
}
@-webkit-keyframes bounce-right {
  from {
    transform: translateX(0px);
  }
  to {
    transform: translateX(-15px);
  }
}

keyframes bounce-left {
  from {
    transform: translateX(-15px);
  }
  to {
    transform: translateX(0px);
  }
}
@-webkit-keyframes bounce-left {
  from {
    transform: translateX(-15px);
  }
  to {
    transform: translateX(0px);
  }
}
</style>
