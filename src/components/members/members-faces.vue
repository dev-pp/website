<template>
  <div>
    <div class="loading" v-if="members.length == 0">
      <member-item-loading v-for="(item, index) in 5" :key="index" />
    </div>
    <ul class="faces" v-else>
      <li
        v-for="(member, index) in mainMembers"
        :key="index"
        class="member-face"
      >
        <img :src="member.photo.thumb_link" alt="" />
      </li>
      <li>
        <ul class="small-faces">
          <li
            v-for="(member, index) in secondaryMembers"
            :key="index"
            class="member-face-sm"
          >
            <img :src="member.photo.thumb_link" alt="" />
          </li>
          <li class="member-see-all">
            <a href="https://meetup.com/dev-pp/members" target="_blank">
              Veja todos
              <arrow-right-icon class="icon button-arrow-right" />
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import ArrowRightIcon from "./members--icons.svg?icon-keyboard_arrow_right";
import MemberItemLoading from "./member-item-loading.vue";
import api from "../../apis/meetup.api";

export default {
  data() {
    return {
      members: []
    };
  },
  computed: {
    mainMembers() {
      return this.members.filter(x => Boolean(x.photo)).slice(0, 180);
    },
    secondaryMembers() {
      const members = this.members.filter(x => Boolean(x.photo));
      return members.slice(members.length - 5);
    }
  },
  components: {
    ArrowRightIcon,
    MemberItemLoading
  },
  async created() {
    const members = await api.getMembers();
    this.members = members.data.data;
  }
};
</script>

<style lang="scss" scoped>
@import "./members--style.scss";
@import "./members--icons.scss";
</style>
