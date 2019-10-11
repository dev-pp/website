<template>
  <div class="loading-wrapper">
    <div class="lds-ripple">
      <div></div>
      <div></div>
    </div>
    <div class="loading-text">
      <b>Carregando fotos, seja paciente...</b>
      <div>
        <span v-if="loadingStep === 1"> 💻 {{ stepMessage }} </span>
        <span v-if="loadingStep === 2"> 📸 {{ stepMessage }} </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "devpp-gallery-item-loading",
  props: {
    loadingStep: Number,
    stepMessage: ""
  }
};
</script>

<style lang="scss" scoped>
.loading-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (min-width: 620px) {
    flex-direction: row;
  }

  .loading-text {
    text-align: center;

    @media (min-width: 620px) {
      text-align: left;
    }
  }

  .lds-ripple {
    display: inline-block;
    position: relative;
    float: left;
    width: 64px;
    height: 64px;
  }
  .lds-ripple div {
    position: absolute;
    border: 4px solid #e81035;
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  .lds-ripple div:nth-child(2) {
    animation-delay: -0.5s;
  }
  @keyframes lds-ripple {
    0% {
      top: 28px;
      left: 28px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: -1px;
      left: -1px;
      width: 58px;
      height: 58px;
      opacity: 0;
    }
  }
}
</style>

