<template>
  <section class="container meetups">
    <a id="meetups" class="anchor"></a>
    <div class="col-xs-12">
      <div class="content-header-with-options">
        <div>
          <h3>MEETUPS ({{ fetching ? "⌛" : totalExisting }})</h3>
        </div>

        <div class="content-btn-group">
          <div class="btn-group filter">
            <button
              type="button"
              class="btn btn-default"
              style="cursor: default; background-color: transparent; border: none"
            >
              Filtrar por
            </button>

            <button
              :disabled="currentFilter.status === 'upcoming'"
              type="button"
              class="btn btn-default"
              @click="filterByStatus('upcoming')"
            >
              <span>📆</span>
              <span>Agendados</span>
            </button>

            <button
              :disabled="currentFilter.status === 'past'"
              type="button"
              class="btn btn-default"
              @click="filterByStatus('past')"
            >
              <span>✔</span>
              <span>Passados</span>
            </button>
          </div>
        </div>
      </div>

      <div v-if="fetching">
        <meetups-loading />
      </div>

      <template v-else>
        <div v-if="meetups.length === 0" class="output-msg">
          😥 Não tem eventos {{ currentFilter.name }}
        </div>

        <template v-else>
          <div
            v-for="(meetup, i) in meetups"
            :key="i"
            class="content-panel meetup-panel reveal"
          >
            <div class="meetup-header">
              <div class="data">
                <div class="data-info">
                  <span class="day">{{ meetup.day }}</span>
                  <span class="month">{{ meetup.short_month }}</span>
                </div>
              </div>
              <div class="title">
                <div class="small">{{ meetup.long_time }}</div>
                <a class="title" :href="meetup.link" target="_blank">
                  <h4>{{ meetup.name }}</h4>
                </a>
              </div>
            </div>
            <div class="info">
              <div
                class="meetup-description collapsed"
                v-html="meetup.description"
                :ref="`desc-${meetup.id}`"
                @click="expandDesc(meetup.id)"
              ></div>
              <div class="place" v-if="meetup.venue">
                <div>
                  🚩
                </div>
                <div>
                  <h5 class="name">{{ meetup.venue.name }}</h5>
                  <address class="small">
                    {{ meetup.venue.address_1 }} · {{ meetup.venue.city }}
                  </address>
                </div>
              </div>
              <div v-if="meetup.venue" style="margin-top: 15px">
                <iframe
                  width="200px"
                  height="100px"
                  frameborder="0"
                  style="border:0"
                  :src="
                    `https://maps.google.com/maps?q=${meetup.venue.lat},${
                      meetup.venue.lon
                    }&hl=es;z=14&amp;output=embed`
                  "
                ></iframe>
              </div>
              <a
                v-if="meetup.upcomming"
                class="btn btn-md btn-custom pull-right"
                target="_blank"
                href="https://www.meetup.com/dev-pp/events/249677522/"
              >
                RSVP
              </a>
            </div>
          </div>

          <a
            v-if="totalOfpages > page"
            href="#"
            @click.prevent.stop="fetchMore"
            class="btn btn-lg load-more"
          >
            <span v-show="fetchingMore">⌛</span>
            <span v-show="!fetchingMore">
              <span>📥</span
              ><span>Carregar mais {{ page }}/{{ totalOfpages }}</span>
            </span>
          </a>
        </template>
      </template>
    </div>
  </section>
</template>

<script>
import RoomIcon from "./icons.svg?icon-room";
import meetupApi from "../../apis/meetup.api";
import MeetupsLoading from "./loading.vue";
import * as moment from "moment";

const _pageSize = 2;

moment.locale("pt-br");

const _normalizeEvent = x => {
  return Object.assign(x, {
    long_time: moment(x.time).format("dddd, D/M/YYYY, H:mm"),
    day: moment(x.time).format("D"),
    short_month: moment.localeData().monthsShort(moment(x.time)),
    upcomming: new Date(x.time) > new Date(),
    description: x.description.replace(/&amp;gt;/g, "")
  });
};

export default {
  name: "devpp-meetups",
  components: {
    RoomIcon,
    MeetupsLoading
  },
  data() {
    return {
      meetups: [],
      page: 1,
      totalExisting: 0,
      fetching: true,
      fetchingMore: false,
      currentFilter: {
        name: "",
        status: "any"
      }
    };
  },
  computed: {
    totalOfpages() {
      return Math.ceil(this.totalExisting / _pageSize);
    }
  },
  async created() {
    const upcoming = await meetupApi.getEventsByStatus("upcoming", _pageSize);

    const past = await meetupApi.getEventsByStatus(
      "past",
      _pageSize - upcoming.data.data.length
    );

    this.meetups = [
      ...upcoming.data.data.map(_normalizeEvent),
      ...past.data.data.map(_normalizeEvent)
    ];

    this.totalExisting =
      Number(upcoming.data.meta.total_count) +
      Number(past.data.meta.total_count);

    this.fetching = false;
  },
  methods: {
    expandDesc(id) {
      this.$refs[`desc-${id}`][0].classList.remove("collapsed");
    },
    async fetchMore() {
      this.fetchingMore = true;

      let upcoming,
        past = {
          data: {
            data: []
          }
        };

      if (this.currentFilter.status === "upcoming" || "any") {
        upcoming = await meetupApi.getEventsByStatus(
          "upcoming",
          _pageSize * (this.page + 1)
        );
      }

      if (this.currentFilter.status === "past" || "any") {
        past = await meetupApi.getEventsByStatus(
          "past",
          _pageSize * (this.page + 1) - upcoming.data.data.length
        );
      }

      this.page++;

      this.meetups = [
        ...upcoming.data.data.map(_normalizeEvent),
        ...past.data.data.map(_normalizeEvent)
      ];

      this.fetchingMore = false;
    },
    async filterByStatus(status) {
      this.currentFilter.name = status === "past" ? "Passados" : "Agendados";
      this.currentFilter.status = status;
      this.page = 1;
      this.fetching = true;

      const events = await meetupApi.getEventsByStatus(status, _pageSize);

      this.meetups = events.data.data.map(_normalizeEvent);

      this.totalExisting = Number(events.data.meta.total_count);

      this.fetching = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
@import "./icons.scss";
</style>

