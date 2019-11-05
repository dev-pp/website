<template>
  <section class="gallery">
    <a id="photos" class="anchor"></a>
    <div class="container">
      <div class="content-header-with-options" ref="content-header">
        <div>
          <h3>FOTOS</h3>
        </div>
        <div
          class="content-btn-group"
          :class="{ 'd-none': fetchingFilters || photos.length === 0 }"
        >
          <div class="btn-group filter" ref="filter">
            <button
              type="button"
              class="btn btn-default"
              style="cursor: default; background-color: transparent; border: none"
            >
              Filtrar
            </button>

            <button
              type="button"
              class="btn btn-default dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              @click="onDropDownFilterOpen"
            >
              {{ currentMeetup.date }} ({{ currentMeetup.totalPhotos }})
              <span class="caret"></span>
            </button>
            <ul class="dropdown-menu bs-dropdow">
              <li>
                <a
                  v-for="(meetup, i) in meetupsFilterDropDown"
                  :key="i"
                  :class="{ active: currentMeetup.id === meetup.id }"
                  @click.prevent.stop="filterByMeetup(meetup.id)"
                  href="#"
                >
                  {{ meetup.date }} ({{
                    meetup.totalPhotos != "" ? meetup.totalPhotos : "..."
                  }})
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div v-if="emptyState" class="empty-state">
      <p>
        Por respeito aos seus dados, vamos carregar as fotos apenas quando você
        clicar no botão abaixo
      </p>
      <button @click="init" class="btn btn-danger btn-lg">
        Carregar fotos
      </button>
    </div>

    <template v-else>
      <div
        class="container output-msg"
        style="padding-top: 0"
        v-if="fetchingPhotos"
      >
        <gallery-loading
          :loadingStep="loadingStep"
          :stepMessage="stepMessage"
        />
      </div>
      <template v-else>
        <div class="container output-msg" v-if="photos.length === 0">
          😭😭 Nenhuma foto encontrada para esse meetup
        </div>

        <template v-else>
          <div class="current-meetup-info">
            <h4>{{ currentMeetup.name }}</h4>
            <p>📆 {{ currentMeetup.date }}</p>
            <p>🚩 {{ currentMeetup.place.name }}</p>
            <p>Total de fotos: {{ photos.length }}</p>
          </div>
          <div class="preview-img-list">
            <img
              class="preview-img-item"
              :key="index"
              v-for="(item, index) in photos"
              :src="item.src"
              @click="$photoswipe.open(index, photos, { shareEl: true })"
            />
          </div>
        </template>
      </template>
    </template>
  </section>
</template>

<script>
import Vue from "vue";
import PhotoSwipe from "vue-simple-photoswipe/dist/vue-simple-photoswipe";
import meetupApi from "../../apis/meetup.api";
import * as moment from "moment";
import GalleryLoading from "./loading.vue";

Vue.use(PhotoSwipe);

const fetchPhotosMsg = [];

fetchPhotosMsg[0] = "recuperando as imagens do servidor...";

fetchPhotosMsg[1] = "carregando as fotos...";

fetchPhotosMsg[20] = "só mais um pouquinho, estamos trabalhando...";

fetchPhotosMsg[40] = "a paciência é a maior virtude do homem...";

fetchPhotosMsg[60] = "sua conexão está um pouco lenta ⌛⌛";

fetchPhotosMsg[80] = "tá demorando né, mas calma que tá quase...";

fetchPhotosMsg[100] =
  "Internet lenta é f@%$, eu sei, mas calma que uma hora vai...";

fetchPhotosMsg[130] =
  "tá aí ainda? Realmente você é paciente, estamos esperando pacientemente também...";

// const _photoaApiBaseUrl = "http://localhost:3000";
const _photoaApiBaseUrl = "https://devpp-website-api.herokuapp.com";
const _googlePhotosAlbumId = "1yhpM4uUCwvbnk35A";

export default {
  name: "devpp-gallery",
  data() {
    return {
      currentMeetup: {
        id: 0,
        date: "",
        time: 0,
        title: "",
        totalPhotos: 0
      },
      emptyState: true,
      loadingStep: 0,
      stepMessage: "",
      meetupsFilterDropDown: [],
      fetchingFilters: true,
      fetchingPhotos: true,
      photos: []
    };
  },
  components: {
    GalleryLoading
  },
  methods: {
    async init() {
      this.emptyState = false;
      this.loadingStep = 1;
      this.stepMessage =
        "aguarde, buscando os dados do último meetup com fotos...";

      setTimeout(() => {
        if (this.loadingStep === 1) this.stepMessage = fetchPhotosMsg[20];
      }, 20000);

      setTimeout(() => {
        if (this.loadingStep === 1) this.stepMessage = fetchPhotosMsg[40];
      }, 40000);

      setTimeout(() => {
        if (this.loadingStep === 1) this.stepMessage = fetchPhotosMsg[60];
      }, 60000);

      setTimeout(() => {
        if (this.loadingStep === 1) this.stepMessage = fetchPhotosMsg[80];
      }, 80000);

      setTimeout(() => {
        if (this.loadingStep === 1) this.stepMessage = fetchPhotosMsg[100];
      }, 100000);

      setTimeout(() => {
        if (this.loadingStep === 1) this.stepMessage = fetchPhotosMsg[130];
      }, 130000);

      // fetch meetups list with meetup id and date to fill up the dropdown filter
      const res = await meetupApi.getEventsByStatus("past");
      const pastMeetups = res.data.data.map(x => ({
        id: x.id,
        time: x.time,
        date: moment(x.time).format("D [de] MMMM [de] YYYY"),
        name: x.name,
        place: x.venue
      }));

      // fetch photos for each meetup and identify the last one that has photos
      let fetchedMeetupPhotos = 0;

      pastMeetups.forEach(async meetup => {
        const url = `${_photoaApiBaseUrl}/photos/${_googlePhotosAlbumId}/${meetup.id}`;

        let photos = await fetch(url)
          .then(photos => photos.json())
          .then(photos => photos)
          .catch(e => {
            console.log({ e });
            return null;
          });

        if (!photos) {
          photos = [];
        }

        pastMeetups.map(x => {
          if (x.id === meetup.id) {
            x.totalPhotos = photos.length;
          }
        });

        fetchedMeetupPhotos++;

        // when has fetched all meetups photos, filter only the ones that has at least 1 photo
        if (fetchedMeetupPhotos === pastMeetups.length) {
          const withPhotos = pastMeetups.filter(x => x.totalPhotos > 0);
          this.meetupsFilterDropDown = withPhotos.sort(
            (a, b) => b.time - a.time
          );
          this.currentMeetup = this.meetupsFilterDropDown[0];
          this.fetchingFilters = false;
        }
      });
    },

    fetchPhotos(meetupId) {
      this.fetchingPhotos = true;
      this.stepMessage = fetchPhotosMsg[0];

      setTimeout(() => {
        if (this.stepMessage !== fetchPhotosMsg[1])
          this.stepMessage = fetchPhotosMsg[20];
      }, 20000);

      fetch(`${_photoaApiBaseUrl}/photos/${_googlePhotosAlbumId}/${meetupId}`)
        .then(res => res.json())
        .then(res => {
          let promises = [];

          res.forEach(photo => {
            promises.push(
              new Promise(resolve => {
                const img = new Image();
                img.src = photo.src;

                img.onload = () => {
                  resolve({
                    meetup: photo.meetup,
                    src: photo.src,
                    w: img.width,
                    h: img.height
                  });
                };
              })
            );
          });

          return promises;
        })
        .then(promises => {
          if (this.loadingStep === 2) this.stepMessage = fetchPhotosMsg[1];

          setTimeout(() => {
            if (this.loadingStep === 2) this.stepMessage = fetchPhotosMsg[20];
          }, 20000);

          setTimeout(() => {
            if (this.loadingStep === 2) this.stepMessage = fetchPhotosMsg[40];
          }, 40000);

          setTimeout(() => {
            if (this.loadingStep === 2) this.stepMessage = fetchPhotosMsg[60];
          }, 60000);

          setTimeout(() => {
            if (this.loadingStep === 2) this.stepMessage = fetchPhotosMsg[80];
          }, 80000);

          setTimeout(() => {
            if (this.loadingStep === 2) this.stepMessage = fetchPhotosMsg[100];
          }, 100000);

          setTimeout(() => {
            if (this.loadingStep === 2) this.stepMessage = fetchPhotosMsg[130];
          }, 130000);

          Promise.all(promises)
            .then(result => {
              this.fetchingPhotos = false;
              this.photos = result;
            })
            .catch(e => console.log({ e }));
        });
    },

    onDropDownFilterOpen() {
      Array.from(
        document.getElementsByClassName("content-header-with-options")
      ).forEach(el => {
        el.classList.remove("expanded-filter-dropdown");
      });

      this.$refs["content-header"].classList.toggle("expanded-filter-dropdown");
    },
    filterByMeetup(id) {
      if (this.currentMeetup.id === id) {
        return false;
      }

      this.$refs["filter"].classList.remove("open");
      this.$refs["content-header"].classList.remove("expanded-filter-dropdown");

      this.currentMeetup = this.meetupsFilterDropDown.filter(
        x => x.id === id
      )[0];

      this.loadingStep = 1;
      this.stepMessage = "buscando fotos no servidor";

      this.fetchPhotos(id);
    }
  },
  watch: {
    "currentMeetup.id"(value) {
      this.loadingStep = 2;
      this.fetchPhotos(value);
    }
  }
};
</script>

<style lang="scss" scoped>
section.gallery {
  margin-bottom: 30px;

  .empty-state {
    font-size: 18px;
    margin-bottom: 15px;
    text-align: center;
    padding: 30px;
    max-width: 511px;
    margin: 0 auto;
    margin-top: -60px;

    @media (min-width: 620px) {
      margin-top: -27px;
    }
  }

  .current-meetup-info {
    padding: 29px;
    padding-top: 0;
    text-align: center;

    p {
      margin: 3px;
    }
  }

  .preview-img-list {
    display: flex;
    flex-wrap: wrap;

    img.preview-img-item {
      height: 66px;
      @media (min-width: 415px) {
        height: 79px;
      }
      @media (min-width: 494px) {
        height: 105px;
      }
      @media (min-width: 630px) {
        height: 115px;
      }
      @media (min-width: 800px) {
        height: 139px;
      }
      @media (min-width: 1063px) {
        height: 163px;
      }
      @media (min-width: 1190px) {
        height: 200px;
      }
      flex-grow: 1;
      object-fit: cover;
      margin: 0.5px;
      cursor: pointer;
      background-image: url("./ajax-loader.gif");
      background-size: contain;
      background-position: center;

      &:hover {
        opacity: 0.8;
      }
    }
  }
}
</style>