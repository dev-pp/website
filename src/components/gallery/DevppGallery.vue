<template>
  <section class="gallery">
    <a id="photos" class="anchor"></a>
    <div class="container">
      <div class="content-header-with-options" ref="content-header">
        <div>
          <h3>FOTOS</h3>
        </div>

        <div class="content-btn-group">
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
              <span v-if="fetchingFilters">⌛ ...</span>
              <span v-else
                >{{ currentMeetup.date }} ({{
                  currentMeetup.totalPhotos
                }})</span
              >
              <span class="caret"></span>
            </button>
            <ul class="dropdown-menu bs-dropdow">
              <li
                v-if="fetchingFilters"
                style="text-align: center; padding: 5px"
              >
                ⌛
              </li>
              <li v-else>
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

    <div class="container output-msg" v-if="fetchingPhotos">
      <h4>⌛ Carregando fotos...</h4>
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
  </section>
</template>

<script>
import Vue from "vue";
import PhotoSwipe from "vue-simple-photoswipe/dist/vue-simple-photoswipe";
import meetupApi from "../../apis/meetup.api";
import * as moment from "moment";

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
      meetupsFilterDropDown: [],
      fetchingFilters: true,
      fetchingPhotos: true,
      items: []
    };
  },
  async created() {
    // fetch meetups list with meetup id and date to fill up the dropdown filter
    const pastMeetups = await meetupApi.getEventsByStatus("past");
    this.meetupsFilterDropDown = pastMeetups.data.data.map(x => ({
      id: x.id,
      date: moment(x.time).format("D [de] MMMM [de] YYYY")
    }));

    let fetchedFilters = 0;

    // fetch photos of each meetup and identify the last one that has photos
    this.meetupsFilterDropDown.forEach(async (x, i) => {
      const photos = await fetch(
        `http://localhost:5000/photos/Z9ht4QK9B76BCvzRA/${x.id}`
      )
        .then(photos => photos.json())
        .then(photos => photos)
        .catch(e => {
          console.log({ e });
        });

      if (photos) {
        this.meetupsFilterDropDown.map(item => {
          if (item.id === x.id) {
            item.totalPhotos = photos.length;
          }
        });

        fetchedFilters++;

        if (fetchedFilters === this.meetupsFilterDropDown.length) {
          this.meetupsFilterDropDown = this.meetupsFilterDropDown.filter(
            x => x.totalPhotos > 0
          );
          this.fetchingFilters = false;
        }

        if (photos.length > 0 && !this.currentMeetup.id) {
          // this will trigger the currentMeetup property whatcher to fetch the photos
          this.currentMeetup.id = x.id;
          this.currentMeetup.date = x.date;
          this.currentMeetup.totalPhotos = photos.length;
        }
      }
    });
  },
  methods: {
    fetchPhotos(meetupId) {
      this.fetchingPhotos = true;

      fetch(`http://localhost:5000/photos/Z9ht4QK9B76BCvzRA/${meetupId}`)
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
          Promise.all(promises).then(result => {
            this.fetchingPhotos = false;
            this.items = result;
          });
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

      this.currentMeetup.id = id;
      this.currentMeetup = this.meetupsFilterDropDown.filter(
        x => x.id === id
      )[0];

      this.fetchPhotos(id);
    }
  },
  watch: {
    "currentMeetup.id"(value) {
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