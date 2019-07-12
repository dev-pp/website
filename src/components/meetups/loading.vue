<template>
  <div class="meetup-loading">
    <header>
      <div class="loading-img linear-background"></div>
      <div class="loading-info">
        <div class="linear-background"></div>
        <div class="linear-background"></div>
      </div>
    </header>
    <div class="loading-content">
      <div class="linear-background"></div>
      <div class="linear-background"></div>
      <div class="linear-background"></div>
      <div class="linear-background"></div>
    </div>
    <footer>
      <div class="loading-info">
        <div class="linear-background"></div>
        <div class="linear-background"></div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "devpp-meetup-item-loading"
};
</script>

<style lang="scss" scoped>
@keyframes placeHolderShimmer {
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
}

.linear-background {
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: placeHolderShimmer;
  animation-timing-function: linear;
  background: #f6f7f8;
  background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
  background-size: 1000px 104px;
  height: 200px;
  position: relative;
  overflow: hidden;
}

.meetup-loading {
  border: solid 1px #ebebeb;
  width: 100%;
  height: 330px;
  padding: 20px;
  border-radius: 6px;

  header,
  footer {
    .loading-img {
      width: 80px;
      height: 80px;
      border-radius: 15px;
      float: left;
    }

    .loading-info {
      height: 80px;
      width: 300px;

      div {
        &:nth-child(1) {
          height: 22px;
          margin-bottom: 5px;
        }

        &:nth-child(2) {
          height: 22px;
          width: 30%;
        }
      }
    }
  }

  header {
    .loading-info {
      margin-left: 95px;
    }
  }

  footer {
    .loading-info {
      margin-top: 35px;
    }
  }

  .loading-content {
    margin-top: 10px;

    div {
      height: 22px;
      margin-bottom: 5px;

      &:nth-child(4) {
        width: 30%;
      }
    }
  }
}
</style>

