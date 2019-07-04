<template>
  <div>
    <div style="margin: 0 auto; width: 340px; height: 80px; text-align: center">
      <div class="lds-ripple">
        <div></div>
        <div></div>
      </div>
      <div style="float: left; margin-top: 16px;">
        Carregando fotos, seja paciente...
      </div>
    </div>
    <div style="margin: 0 auto; width: 340px; text-align: center">
      <span v-if="loadingStep === 1">💻 1/2 buscando fotos no servidor</span>
      <span v-if="loadingStep === 2">📸 2/2 preparando imagens</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "devpp-gallery-item-loading",
  props: {
    loadingStep: Boolean
  }
};
</script>

<style lang="scss" scoped>
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
</style>

