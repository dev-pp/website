<template>
  <section class="gallery">
    <a id="photos" class="anchor"></a>
    <div class="container">
      <div class="content-header-with-options" ref="content-header">
        <div>
          <h3>FOTOS</h3>
        </div>
        <div class="content-btn-group" :class="{ hidden: fetchingFilters }">
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

    <div
      v-if="initialState"
      style="margin: 20px auto; margin-top: -61px; width: 390px; text-align:center"
    >
      <p style="font-size: 18px; margin-bottom: 15px">
        Por respeito aos seus dados, vamos carregar as fotos do último meetup
        disponível apenas quando você clicar no botão abaixo
      </p>
      <button @click="init" class="btn btn-danger btn-lg">
        Carregar fotos
      </button>
    </div>

    <template v-else>
      <div class="container output-msg" v-if="fetchingPhotos">
        <gallery-items-loading :loadingStep="loadingStep" />
      </div>
      <template v-else>
        <div class="container output-msg" v-if="items.length === 0">
          😭😭 Nenhuma foto encontrada para essa data
        </div>

        <div v-else class="preview-img-list">
          <img
            class="preview-img-item"
            :key="index"
            v-for="(item, index) in items"
            :src="item.src"
            @click="$photoswipe.open(index, items, { shareEl: true })"
            :title="item.src"
          />
        </div>
      </template>
    </template>
  </section>
</template>

<script>
import Vue from "vue";
import PhotoSwipe from "vue-simple-photoswipe/dist/vue-simple-photoswipe";
import meetupApi from "../../apis/meetup.api";
import * as moment from "moment";
import GalleryItemsLoading from "./gallery-iItems-loading.vue";

Vue.use(PhotoSwipe);

export default {
  name: "devpp-gallery",
  data() {
    return {
      currentMeetup: {
        id: 0,
        date: "",
        totalPhotos: 0
      },
      initialState: true,
      loadingStep: 0,
      meetupsFilterDropDown: [],
      fetchingFilters: true,
      fetchingPhotos: true,
      items: []
    };
  },
  components: {
    GalleryItemsLoading
  },
  methods: {
    async init() {
      this.initialState = false;
      this.loadingStep = 1;

      // fetch meetups list with meetup id and date to fill up the dropdown filter
      const res = await meetupApi.getEventsByStatus("past");
      const pastMeetups = res.data.data.map(x => ({
        id: x.id,
        time: x.time,
        date: moment(x.time).format("D [de] MMMM [de] YYYY")
      }));

      // fetch photos of each meetup and identify the last one that has photos
      let fetchedMeetupPhotos = 0;

      pastMeetups.forEach(async meetup => {
        let photos = await fetch(
          `https://devpp-website-api.herokuapp.com/photos/Z9ht4QK9B76BCvzRA/${
            meetup.id
          }`
        )
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

      fetch(
        `https://devpp-website-api.herokuapp.com/photos/Z9ht4QK9B76BCvzRA/${meetupId}`
      )
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
          Promise.all(promises)
            .then(result => {
              this.fetchingPhotos = false;
              this.items = result;
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
  .preview-img-list {
    display: flex;
    flex-wrap: wrap;

    img.preview-img-item {
      height: 200px;
      flex-grow: 1;
      object-fit: cover;
      margin: 0.5px;
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }
    }
  }
}
</style>