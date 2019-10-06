<template>
  <section class="header" v-show="!sheduleOpened">
    <a class="logo" href="#"
      >DEVPP - Comunidade de Desenvolvedores de Presidente Prudente e Região</a
    >
    <!-- <a
      class="btn btn-lg btn-custom pull-right"
      target="_blank"
      href="https://meetup.com/dev-pp"
      >JUNTE-SE A NÓS</a
    > -->
  </section>
</template>

<script>
import { EventBus } from "../../event-bus.js";

export default {
  name: "devpp-header",
  data() {
    return {
      sheduleOpened: false
    };
  },
  created() {
    EventBus.$on("toggleSchedule", opened => {
      this.sheduleOpened = opened;
    });
  }
};
</script>

<style lang="scss" scoped>
@import "./header--style.scss";
</style>