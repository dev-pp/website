<template>
  <section class="members container">
    <a id="members" class="anchor"></a>
    <div class="col-xs-12">
      <h3>MEMBROS</h3>

      <div class="content-panel reveal">
        <p>
          Somos <b v-if="totalOfMembers">{{ totalOfMembers }}</b>
          <b v-else>...</b> (e contando...) desenvolvedores, programadores,
          engenheiros, designers, ux designers, nerds, criadores,
          transformadores,criativos, artistas, inovadores, empreendedores.... E
          nos reunimos periodicamente para compartilhar conhecimento, fazer
          networking e evoluirmos a comunidade.
        </p>

        <members-faces />
      </div>
    </div>
  </section>
</template>

<script>
import MembersFaces from "./members-faces.vue";
import api from "../../apis/meetup.api";

export default {
  name: "devpp-members",
  components: {
    MembersFaces
  },
  data() {
    return {
      totalOfMembers: 0
    };
  },
  async created() {
    const result = await api.getMembers();
    this.totalOfMembers = result.data.meta.total_count;
  }
};
</script>
