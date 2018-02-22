<template>
  <section class="material container" id="material">
    <header class="content-header-with-options">
      <div>
        <h3>MATERIAL</h3>
      </div>

      <div class="content-btn-group">
        <div class="btn-group filter">
          <button type="button" class="btn btn-default" disabled>Filtrar</button>
          <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" disabled>
            <span class="caret"></span>
            <span class="sr-only">Toggle Dropdown</span>
          </button>
          <ul class="dropdown-menu bs-dropdow">
            <li>
              <a class="active" href="#">13/12/2017</a>
            </li>
            <li>
              <a href="#">20/12/2017</a>
            </li>
          </ul>
        </div>
      </div>
    </header>

    <div class="material-wrapper">
      <devpp-material-item v-for="(material, index) in materialList" :key="index" :palestrante="material.palestrante" :palestra="material.palestra" :recursos="material.recursos"></devpp-material-item>
    </div>
  </section>
</template>

<script>
import DevppMaterialItem from './DevppMaterialItem.vue';
import service from './service/material';

export default {
  name: 'devpp-material-list',
  data() {
    return {
      materialList: []
    }
  },
  components: {
    DevppMaterialItem
  },
  methods: {
    listar() {
      service.listar().then(res => {
        if (res.status === 200) {
          res.data.forEach(material => {
            if (material) {
              this.materialList.push(material)
            }
          });
        }
      }).catch(e => console.log(e))
    }
  },
  mounted() {
    this.listar();
    console.log(this.materialList instanceof Array);
  }
}
</script>

<style lang="scss" scoped>
section.material {
  .material-wrapper {
    -moz-column-width: 20em;
    -webkit-column-width: 20em;
    -moz-column-gap: .3em;
    -webkit-column-gap: .3em;
    @media(max-width: 680px) {
      -moz-column-width: 22em;
      -webkit-column-width: 22em;
    }
  }
}
</style>

