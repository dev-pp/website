<template>
  <section
    class="footer"
    id="footer"
  >
    <div class="container">
      <div class="reveal-sequence">
        <p>
          <span class="logo-rodape">DEV PP - Comunidade de Desenvolvedores de
            Presidente Prudente e Região</span>
        </p>
        <p>
          <strong class="title address">ENDEREÇO</strong><br><b>For Space Coworking</b><br> Rua Nicolau
          Cacciatori, 489<br> Presidente Prudente- SP
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3695.6302787405098!2d-51.40932405065853!3d-22.140067985335364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9493f45f0110115d%3A0xf1609421dc209826!2sR.+Nicolau+Cacciatori%2C+489+-+Jardim+dos+Pioneiros%2C+Pres.+Prudente+-+SP%2C+19050-340!5e0!3m2!1sen!2sbr!4v1515196116965"
          width="250"
          height="150"
          frameborder="0"
          style="border:0"
          allowfullscreen
        ></iframe>
      </div>
      <div class="reveal-sequence">
        <p>
          <strong class="title contact">CONTATO</strong>
          <br>contato@devpp.com.br
          <div class="social-icons">
            <strong class="title social">SOCIAL</strong>
            <br>
            <a
              class="s-icon facebook"
              title="Facebook"
              target="_blank"
              href="https://www.facebook.com/groups/770159453169235/"
            >
              <facebook-icon class="icon" />
            </a>
            <a
              class="s-icon youtube"
              title="YouTube"
              target="_blank"
              href="https://www.youtube.com/channel/UC9QAZYQ0fHLERa6PLN4GWyw"
            >
              <youtube-icon class="icon" />
            </a>
            <a
              class="s-icon instagram"
              title="Instagram"
              target="_blank"
              href="https://www.instagram.com/devpp.com.br/"
            >
              <instagram-icon class="icon" />
            </a>
            <a
              class="s-icon meetup"
              title="meetup"
              target="_blank"
              href="https://www.meetup.com/dev-pp/"
            >
              <meetup-icon class="icon" />
            </a>
            <a
              class="s-icon github"
              title="github"
              target="_blank"
              href="https://github.com/dev-pp/meetup"
            >
              <github-icon class="icon" />
            </a>
          </div>
        </p>
      </div>
      <div class="reveal-sequence links-wrapper">
        <p>
          <strong class="title links">LINKS</strong>
          <ul>
            <li>
              <a
                target="_blank"
                href="http://www.inovaprudente.com.br/"
              >Inova Prudente</a>
            </li>
            <li>
              <a
                target="_blank"
                href="http://www.presidenteprudente.sp.gov.br/site/index.xhtml"
              >Prefeitura de Presidente Prudente</a>
            </li>
            <li>
              <a
                target="_blank"
                href="http://www.forspace.com.br/"
              >For Space Coworking</a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://eventou.com.br/"
              >Eventou</a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.meetup.com/GDG-Presidente-Prudente/"
              >GDG Prudente</a>
            </li>
          </ul>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import FacebookIcon from "./social-icons.svg?icon-facebook";
import YoutubeIcon from "./social-icons.svg?icon-youtube";
import InstagramIcon from "./social-icons.svg?icon-instagram";
import MeetupIcon from "./social-icons.svg?icon-meetup";
import GithubIcon from "./social-icons.svg?icon-github";

export default {
  name: "devpp-footer",
  components: {
    FacebookIcon,
    YoutubeIcon,
    InstagramIcon,
    MeetupIcon,
    GithubIcon
  }
};
</script>

<style lang="scss" scoped>
@import "./social-icons.scss";
@import "./style.scss";
</style>