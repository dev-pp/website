<template>
  <section class="intro">
    <div class="content-box">
      <div class="intro-overlay"></div>
      <div class="parallax-container">
        <div class="parallax parallax-intro">
          <img
            src="http://res.cloudinary.com/dwtuxv53y/image/upload/v1515629005/vista-da-catedral-praa-9-de-julho-presidente-prudente-sp-2000x1500_dcx9ct.jpg"
          />
        </div>
      </div>
      <div class="hero-content container">
        <div id="hero-content" class="row">
          <div>
            <h1>DevPP #15 The Conference</h1>
            <div class="event-date-place">
              <div class="date">
                <img
                  class="icon"
                  src="./evento-devpp-the-conference/icones/calendar.png"
                />
                <span>15 DE OUTUBRO</span>
              </div>
              <div class="place">
                <img
                  class="icon"
                  src="./evento-devpp-the-conference/icones/map-marker.png"
                />
                <span>AUDITÓRIO DO INOVA PRUDENTE</span>
              </div>
            </div>
            <div class="event-info">
              <div class="event-row row-1">
                <div class="palestrantes">
                  <div class="palestrante-destaque">
                    <div class="foto"></div>
                    <div class="info">
                      <h1>Rodrigo PokemaoBR</h1>
                      <span>
                        Stand-Up: Arquitetando seus sistemas de forma
                        (IN)coerente
                      </span>
                      <span>
                        Palestra: Desenvolvendo chatbots mesmo sem saber codar!
                      </span>
                    </div>
                  </div>
                  <div class="demais-palestrantes">
                    <h6>Demais palestrantes:</h6>
                    <div class="lista">
                      <div class="palestrante">
                        <div class="foto p1"></div>
                        <div class="nome">Marcela Maciel</div>
                      </div>
                      <div class="palestrante">
                        <div class="foto p2"></div>
                        <div class="nome">Leonardo Dias</div>
                      </div>
                      <div class="palestrante">
                        <div class="foto p3"></div>
                        <div class="nome">Marcelo Santoro</div>
                      </div>
                      <a class="ver-agenda in" href="#">VER AGENDA</a>
                    </div>
                    <a class="ver-agenda out" href="#">VER AGENDA</a>
                  </div>
                </div>

                <div class="buttons">
                  <div class="apoio">
                    <h6>APOIO:</h6>
                    <div class="lista">
                      <div class="logo foregon" />
                      <div class="logo forspace" />
                      <div class="logo cobmais" />
                      <div class="logo inova-prudente" />
                      <div class="logo sicoob" />
                      <div class="logo sw" />
                    </div>
                  </div>

                  <div class="btn-inscrevase">
                    <a href="http://bit.ly/cta-site" class="btn">INSCREVA-SE</a>
                  </div>
                </div>
              </div>
              <!-- </row-1 -->

              <div class="event-row row-2">
                <div class="event-row galera">
                  <div>
                    <h6>
                      A galera que tá fazendo isso acontecer:
                    </h6>
                  </div>
                  <div class="fotos-wrapper">
                    <div class="foto calistro" />
                    <div class="foto felipealmeida" />
                    <div class="foto blini" />
                    <div class="foto marquini" />
                    <div class="foto phillipe" />
                    <div class="foto marcelo" />
                    <div class="foto wesley" />
                    <div class="foto carneiro" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="arrow arrow-floating">
        <a href="#about">
          <ArrowDownIcon class="icon" />
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import ArrowDownIcon from "./intro--icons.svg?icon-keyboard_arrow_down";

export default {
  name: "devpp-intro",
  components: {
    ArrowDownIcon
  }
};
</script>

<style lang="scss" scoped>
@import "./intro--style.scss";
@import "./intro--style-icons.scss";
</style>


