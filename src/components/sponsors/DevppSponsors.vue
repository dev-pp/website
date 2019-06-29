<template>
  <section class="container sponsors">
    <a id="sponsors" class="anchor"></a>
    <div class="col-xs-12">
      <h3>PARCEIROS</h3>
      <ul>
        <!-- For Space -->
        <li class="reveal-sequence">
          <a
            target="_blank"
            href="http://forspace.com.br"
            title="For Space Coworking"
          >
            <img
              src="https://res.cloudinary.com/dwtuxv53y/image/upload/v1559922998/forspace-partner_tsrcdh.png"
              alt=""
            />
          </a>
        </li>

        <!-- Foregon -->
        <li class="reveal-sequence foregon">
          <ForegonLogo />
        </li>

        <!-- GDG Prudente -->
        <li class="reveal-sequence">
          <a
            target="_blank"
            href="https://www.meetup.com/GDG-Presidente-Prudente/"
            title="GDG Prudente"
          >
            <img
              src="https://res.cloudinary.com/dwtuxv53y/image/upload/v1559922784/gdg-partner_oiigo1.jpg"
              alt=""
            />
          </a>
        </li>

        <!-- Eventou -->
        <li class="reveal-sequence eventou">
          <EventouLogo />
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import ForegonLogo from "./ForegonLogo.vue";
import EventouLogo from "./EventouLogo.vue";

export default {
  name: "devpp-sponsors",
  components: {
    ForegonLogo,
    EventouLogo
  }
};
</script>

<style lang="scss" scoped>
@import "./sponsors--style.scss";
</style>


