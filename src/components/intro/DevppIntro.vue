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
                    </div>

                    <div class="buttons-sm">
                      <a
                        class="ver-agenda"
                        href="#"
                        @click.prevent="toggleSchedule"
                        >VER AGENDA</a
                      >
                      <a
                        class="inscrevase"
                        href="#"
                        @click.prevent="toggleSchedule"
                        >INSCREVA-SE</a
                      >
                    </div>
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

                  <div class="buttons-lg">
                    <a
                      class="ver-agenda"
                      href="#"
                      @click.prevent="toggleSchedule"
                      >VER AGENDA</a
                    >
                    <a
                      class="inscrevase"
                      href="#"
                      @click.prevent="toggleSchedule"
                      >INSCREVA-SE</a
                    >
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

    <!-- Modal -->
    <div class="modal-agenda" v-show="schedule">
      <header>
        <span>AGENDA</span><a href="#" @click="toggleSchedule">X</a>
      </header>
      <article>
        <div class="schedule">
          <div class="line">
            <div class="column">🕝 18h30</div>
            <div class="column"></div>
            <div class="column">
              Check-in Cafeínado ☕☕🧁<br /><small
                >Recepção do pessoal com uma mesa de comes e bêbes e muito
                café</small
              >
            </div>
          </div>
          <div class="line">
            <div class="column">🕝 19h00</div>
            <div class="column"></div>
            <div class="column">
              🎙 Stand-up: Arquitetando seus sistemas de forma (IN)coerente<br />
              <small>Rodrigo PokemaoBR</small>
            </div>
          </div>
          <div class="line">
            <div class="column">🕝 19h15</div>
            <div class="column"></div>
            <div class="column">Abertura Oficial</div>
          </div>
          <div class="line">
            <div class="column">🕝 19h25</div>
            <div class="column"></div>
            <div class="column">
              🎤⚡ Lightining - Prepare-se para a LGPD<br />
              <small>Marcela Maciel</small>
            </div>
          </div>
          <div class="line">
            <div class="column">🕝 19h40</div>
            <div class="column"></div>
            <div class="column">
              🎤 Porquê você deveria estar usando GraphQL?<br />
              <small>Leonardo Dias</small>
            </div>
          </div>
          <div class="line">
            <div class="column">🕝 20h10</div>
            <div class="column"></div>
            <div class="column">
              ⚡ Lightining - Monitoramento de serviços com Zabbix + Grafana +
              Python<br />
              <small>Marcelo Santoro</small>
            </div>
          </div>
          <div class="line">
            <div class="column">🕝 20h30</div>
            <div class="column"></div>
            <div class="column">
              🎤 Desenvolvendo chatbots mesmo sem saber codar!<br />
              <small>Rodrigo PokemaoBR</small>
            </div>
          </div>
          <div class="line">
            <div class="column">🕝 21h05</div>
            <div class="column"></div>
            <div class="column">Sorteios de Brindes com Node.js🎁</div>
          </div>
          <div class="line">
            <div class="column">🕝 21h10</div>
            <div class="column"></div>
            <div class="column">
              Happy Hour! 🎉<br />
              <small>Food Truck 🍔 - Choop 🍻 - Networking 💗</small>
            </div>
          </div>
        </div>

        <div class="galera" style="padding: 30px; text-align: center; flex-direction: column">
          <div>
            <h5 style="margin-bottom: 15px">
              <b>A galera que tá fazendo isso acontecer:</b>
            </h5>
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
      </article>
    </div>
  </section>
</template>

<script>
import { EventBus } from "../../event-bus.js";

import ArrowDownIcon from "./intro--icons.svg?icon-keyboard_arrow_down";

export default {
  name: "devpp-intro",
  components: {
    ArrowDownIcon
  },
  data() {
    return {
      schedule: false
    };
  },
  methods: {
    toggleSchedule() {
      this.schedule = !this.schedule;
      EventBus.$emit("toggleSchedule", this.schedule);

      if (this.schedule) document.body.style.overflow = "hidden";
      else document.body.style.overflow = "initial";
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./intro--style.scss";
@import "./intro--style-icons.scss";

.modal-agenda {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 90%;
  height: 95%;
  z-index: 9;
  transform: translate(-50%, -50%);
  background: #fff;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

  header {
    height: 60px;
    width: 100%;
    padding: 10px;
    text-align: right;
    background: #e81035;
    padding: 8px;
    color: #fff;
    font-size: 24px;
    display: flex;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;

    span {
      flex: auto;
      display: flex;
      text-align: left;
      align-items: center;
      padding-left: 19px;
    }

    a {
      display: block;
      text-align: center;
      width: 44px;
      font-size: 30px;

      &:hover,
      &:active,
      &:visited {
        color: #fff;
      }
    }
  }

  article {
    overflow-y: scroll;
    overflow-x: hidden;
    padding: 19px;
    height: calc(100% - 60px);
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;

    .schedule {
      background: #fafafa;
      display: flex;
      margin: 0 auto;
      width: 100%;
      max-width: 800px;
      flex-direction: column;
      border: solid 1px #ccc;
      border-radius: 7px;
      margin: 20px auto;
      padding: 20px 0;
      border-bottom-left-radius: 8px;

      .line {
        display: flex;

        .column {
          padding: 13px;

          &:first-child() {
            justify-content: flex-end;
            margin-right: 7px;

            display: flex;
            align-items: center;
            min-width: 90px;
            max-width: 90px;

            @media (min-width: 580px) {
              min-width: 126px;
              max-width: 126px;
            }
          }

          &:nth-child(2) {
            min-width: 35px;
            max-width: 35px;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: inset 11px 0 0 #fafafa,
              inset 23px 0px 0px rgba(0, 0, 0, 0.1), inset 22px 0vh 0px #fafafa;

            &::after {
              content: "";
              display: block;
              width: 30px;
              height: 30px;
              background: #267ddd;
              border-radius: 50%;
            }
          }

          &:last-child() {
            font-size: medium;
            margin-left: 10px;

            flex: auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
        }
      }
    }
  }
}


</style>


