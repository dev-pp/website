<template>
  <div class="material-item-wrapper">
    <div class="material-item content-panel">
      <div class="palestrante">
        <div class="foto">
          <img :src="this.foto" alt="" class="pull-left">
        </div>
        <div class="info">
          <div>
            <mic-icon class="icon mic" />
            <span v-if="!palestrante.link">{{ palestrante.nome }}</span>
            <span v-else>
              <a :href="palestrante.link" target="_blank">
                {{ palestrante.nome }}
              </a>
            </span>
          </div>
          <div>
            <calendar-icon class="icon" />
            <span>{{ date }}</span>
          </div>
        </div>
      </div>
      <div class="caption">
        <h4>{{ palestra.titulo }}</h4>
        <p>{{ palestra.desc }}</p>
        <p>
          <a :href="recursos.slides" :disabled="!recursos.slides" class="btn btn-default" role="button" target="_blank">
            <presentation-icon class="icon" /> Slides
          </a>
          <a :href="recursos.codigofonte" :disabled="!recursos.codigofonte" class="btn btn-default" role="button" target="_blank">
            <github-icon class="icon" /> Fonte
          </a>
          <a :href="recursos.video" :disabled="!recursos.video" class="btn btn-default" role="button" target="_blank">
            <youtube-icon class="icon youtube" /> Vídeo
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import CalendarIcon from "./material--icons.svg?icon-calendar";
import MicIcon from "./material--icons.svg?icon-mic";
import GithubIcon from "./material--icons.svg?icon-github";
import PresentationIcon from "./material--icons.svg?icon-presentation";
import YoutubeIcon from "./material--icons.svg?icon-youtube";

export default {
  name: 'devpp-material-item',
  props: {
    date: '',
    palestrante: '',
    palestra: '',
    recursos: ''
  },
  computed: {
    foto() {
      const nophoto = "http://res.cloudinary.com/dwtuxv53y/image/upload/v1519940593/avatar_operqm.gif";
      return !this.palestrante.foto ? nophoto : this.palestrante.foto
    }
  },
  components: {
    CalendarIcon,
    MicIcon,
    GithubIcon,
    PresentationIcon,
    YoutubeIcon
  }
}
</script>

<style lang="scss" scoped>
@import './material-item--icons.scss';

.material-item-wrapper {
  display: inline-flex;
  padding: 0.3rem;
  background: #efefef;
  width: 100%;

  .material-item {
    width: 100%;

    .palestrante {
      display: flex;
      overflow: hidden;
      padding: 10px;

      img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        border: solid 3px white;
        position: relative;
        z-index: 2;

        @media(max-width: 305px) {
          display: none;
        }
      }

      .info {
        padding: 8px 0 8px 70px;
        flex: 2;
        margin-left: -60px;
        position: relative;
        z-index: 1;
        font-size: 14px;
        height: 70px;
        top: 7px;

        div {
          span {
            position: relative;
            top: -2px;
            left: 4px;
          }
        }
        @media(max-width: 305px) {
          padding: 8px 8px 8px 16px;
          font-size: 12px;
          height: 40px;
          border-top-left-radius: 25px;
          border-bottom-left-radius: 25px;
          margin-left: 0;

          img {
            display: none;
          }

          div {
            float: left;

            span {
              position: inherit;
              top: 0;
              left: 0;
            }
          }

          div:nth-child(1) {
            margin-right: 3px;
          }
        }
      }
    }

    .btn[disabled] {
      opacity: .2;
    }
  }
}
</style>

