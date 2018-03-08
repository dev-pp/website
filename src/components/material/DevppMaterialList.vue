<template>
  <section class="material container" id="material">
    <header class="content-header-with-options">
      <div>
        <h3>MATERIAL</h3>
      </div>

      <div class="content-btn-group">
        <div class="btn-group filter">
          <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {{ activeDate }}
            <span class="caret"></span>
          </button>
          <ul class="dropdown-menu bs-dropdow">
            <li>
              <a v-for="(dateObj, index) in dates" :key="index" :class="{ activated: dateObj.date === activeDate }" @click.prevent="listByDate(dateObj.date)">{{ dateObj.date }}</a>
            </li>
          </ul>
        </div>
      </div>
    </header>

    <div class="grid reveal">
      <div class="loading" v-if="loading">
        <devpp-material-item-loading class="loading--grid-item"></devpp-material-item-loading>
        <devpp-material-item-loading class="loading--grid-item"></devpp-material-item-loading>
        <devpp-material-item-loading class="loading--grid-item"></devpp-material-item-loading>
        <devpp-material-item-loading class="loading--grid-item"></devpp-material-item-loading>
      </div>

      <div v-masonry transition-duration="0.3s" item-selector=".grid-item">
        <devpp-material-item v-masonry-tile class="grid-item" v-for="(material, index) in materialList" :key="index" :date="activeDate" :palestrante="material.palestrante" :palestra="material.palestra" :recursos="material.recursos"></devpp-material-item>
      </div>
    </div>
  </section>
</template>

<script>
import DevppMaterialItem from './DevppMaterialItem.vue';
import DevppMaterialItemLoading from './DevppMaterialItemLoading.vue';
import service from './service/material';
import Masonry from 'masonry-layout'

export default {
  name: 'devpp-material-list',
  data() {
    return {
      dates: [],
      activeDate: '',
      materialList: [],
      loading: true
    }
  },
  components: {
    DevppMaterialItem,
    DevppMaterialItemLoading
  },
  methods: {
    getDateList() {
      return new Promise((resolve, reject) => {
        service.listar()
          .then(res => {
            if (res.status === 200) {
              resolve(Object.keys(res.data));
            }
          }).catch(e => {
            console.log(e);
            reject(e);
          })
      })
    },
    toDescSortedDateList(dateList) {
      let reversedDates,
        numericDates,
        descSortedNumbericDates;

      reversedDates = dateList
        .map(date => {
          if (date) {
            return date.split('-').reverse().join('-');
          }
        });

      numericDates = reversedDates
        .map(date => {
          return {
            date: date.split('-').reverse().join('/'),
            number: Number(date.replace(/-/g, ''))
          }
        });

      descSortedNumbericDates = numericDates
        .sort((a, b) => {
          return a.number > b.number ? -1 : 1;
        })

      return descSortedNumbericDates;
    },
    listByDate(date) {
      this.loading = true;
      this.materialList = [];

      service.listarPorData(date.replace(/\//g, '-'))
        .then(res => {
          if (res.status === 200) {
            res.data.forEach(material => {
              if (material) {
                this.materialList.push(material)
              }
            });

            this.activeDate = date;
            this.loading = false;
          }
        }).catch(e => console.log(e))
    },
  },
  mounted() {
    // pegar a lista de datas que contem material cadastrado
    this.getDateList()
      .then(dateList => {
        // ordenar lista decrescentemente
        const descSortedDates = this.toDescSortedDateList(dateList);
        this.dates = descSortedDates;

        const lastDate = descSortedDates[0].date;

        // listar materiais pela ultima data
        this.listByDate(lastDate);
      }).catch(e => console.log(e));
  }
}
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

