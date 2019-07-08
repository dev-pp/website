<template>
  <div class="member-loading reveal">
    <header>
      <div class="loading-img linear-background"></div>
    </header>
  </div>
</template>

<script>
export default {
  name: "devpp-member-item-loading"
};
</script>

<style lang="scss" scoped>
@keyframes placeHolderShimmer {
  0% {
    background-position: -290px 0;
  }
  100% {
    background-position: 290px 0;
  }
}

.linear-background {
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: placeHolderShimmer;
  animation-timing-function: linear;
  background: #f6f7f8;
  background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
  background-size: 1000px 104px;
  height: 100px;
  position: relative;
  overflow: hidden;
}

.member-loading {
  header {
    .loading-img {
      border: solid 5px white;
      margin-right: -20px;
      border-radius: 50%;

      width: 55px;
      height: 55px;
      @media (min-width: 458px) {
        width: 75px;
        height: 75px;
      }
    }
  }
}
</style>

