<template>
  <section class="material container">
    <a id="material" class="anchor"></a>
    <header class="content-header-with-options" ref="content-header">
      <div>
        <h3>MATERIAL</h3>
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
            <span v-else>
              {{ currentMeetup.date }} ({{ currentMeetup.totalResources }})
            </span>
            <span class="caret"></span>
          </button>
          <ul class="dropdown-menu bs-dropdow">
            <li v-if="fetchingFilters" style="text-align: center; padding: 5px">
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
                  meetup.totalResources != "" ? meetup.totalResources : "..."
                }})
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>

    <div class="grid reveal">
      <div class="loading" v-if="fetchingResources">
        <material-item-loading class="loading--grid-item" />
        <material-item-loading class="loading--grid-item" />
        <material-item-loading class="loading--grid-item" />
        <material-item-loading class="loading--grid-item" />
      </div>

      <div
        v-else
        v-masonry
        transition-duration="0.3s"
        item-selector=".grid-item"
      >
        <material-item
          v-masonry-tile
          class="grid-item"
          v-for="(material, index) in items"
          :key="index"
          :date="currentMeetup.date"
          :palestrante="material.palestrante"
          :palestra="material.palestra"
          :recursos="material.recursos"
        />
      </div>
    </div>
  </section>
</template>

<script>
import MaterialItem from "./material-item.vue";
import MaterialItemLoading from "./material-iItem-loading.vue";
import _resourcesService from "./service/material";
import Masonry from "masonry-layout";
import meetupApi from "../../apis/meetup.api";
import * as moment from "moment";

export default {
  name: "devpp-material-list",
  data() {
    return {
      currentMeetup: {
        id: 0,
        date: "",
        totalResources: 0
      },
      meetupsFilterDropDown: [],
      fetchingFilters: true,
      fetchingResources: true,
      items: []
    };
  },
  components: {
    MaterialItem,
    MaterialItemLoading
  },
  async created() {
    // fetch meetups list with id and date to fill up the dropdown filter
    const res = await meetupApi.getEventsByStatus("past");
    const pastMeetups = res.data.data.map(x => ({
      id: x.id,
      time: x.time,
      date: moment(x.time).format("D [de] MMMM [de] YYYY")
    }));

    // fetch resources of each meetup and identify the last one that has resources
    let fetchedMeetupResources = 0;

    pastMeetups.forEach(async meetup => {
      let meetupResources = await _resourcesService.fetchByMeetupId(meetup.id);

      if (!meetupResources.fields) {
        meetupResources.fields = {};
      }

      pastMeetups.map(x => {
        if (x.id === meetup.id) {
          x.totalResources = Object.keys(meetupResources.fields).filter(
            fieldName => Number.isInteger(Number(fieldName))
          ).length;
        }
      });

      fetchedMeetupResources++;

      // when has fetched all meetups resources, filter only the ones that has at least 1 resoruce
      if (fetchedMeetupResources === pastMeetups.length) {
        const withResources = pastMeetups.filter(x => x.totalResources > 0);
        this.meetupsFilterDropDown = withResources.sort(
          (a, b) => b.time - a.time
        );
        this.currentMeetup = this.meetupsFilterDropDown[0];
        this.fetchingFilters = false;
      }
    });
  },
  methods: {
    async fetchResources(meetupId) {
      this.fetchingResources = true;
      let items = [];

      const response = await _resourcesService.fetchByMeetupId(meetupId);
      Object.keys(response.fields).forEach(field => {
        if (Number.isInteger(Number(field))) {
          items.push(response.fields[field]);
        }
      });

      this.items = items;

      this.fetchingResources = false;
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

      this.fetchResources(id);
    }
  },
  watch: {
    "currentMeetup.id"(value) {
      this.fetchResources(value);
    }
  }
};
</script>

<style lang="scss" scoped>
section.material {
  .loading {
    .loading--grid-item {
      float: left;

      @media (min-width: 780px) {
        width: 50%;
      }

      &:nth-last-child(3),
      &:nth-last-child(2),
      &:nth-last-child(1) {
        display: none;

        @media (min-width: 780px) {
          display: block;
        }
      }
    }
  }

  .g-item {
    min-height: 300px;
    border: solid 3px goldenrod;
  }

  .grid {
    .grid-item {
      width: 100%;

      @media (min-width: 780px) {
        width: 50%;
      }
    }
  }
}

.content-btn-group {
  a {
    text-decoration: none;
    cursor: pointer;

    &.activated {
      color: #999;
      pointer-events: none;
    }
  }

  .btn-active {
    pointer-events: none;
  }
}
</style>

