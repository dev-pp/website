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

    <div class="grid-material-wrapper reveal">
      <div class="material-loading" v-if="loading">
        <header>
          <div class="loading-img linear-background"></div>
          <div class="loading-info">
            <div class="linear-background"></div>
            <div class="linear-background"></div>
          </div>
        </header>
        <div class="loading-content">
          <div class="linear-background"></div>
          <div class="linear-background"></div>
          <div class="linear-background"></div>
          <div class="linear-background"></div>
        </div>
        <footer>
          <div class="linear-background"></div>
          <div class="linear-background"></div>
          <div class="linear-background"></div>
        </footer>
      </div>
      <devpp-material-item class="grid-material-item" v-for="(material, index) in materialList" :key="index" :palestrante="material.palestrante" :palestra="material.palestra" :recursos="material.recursos"></devpp-material-item>
    </div>
  </section>
</template>

<script>
import DevppMaterialItem from './DevppMaterialItem.vue';
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
    DevppMaterialItem
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

    var msnry = new Masonry('.grid');
  }
}
</script>

<style lang="scss" scoped>
@keyframes placeHolderShimmer {
  0% {
    background-position: -468px 0
  }
  100% {
    background-position: 468px 0
  }
}

.linear-background {
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: placeHolderShimmer;
  animation-timing-function: linear;
  background: #f6f7f8;
  background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
  background-size: 1000px 104px;
  height: 200px;
  position: relative;
  overflow: hidden;
}

section.material {
  .material-loading {
    border: solid 1px #EBEBEB;
    width: 100%;
    height: 300px;
    padding: 20px;
    border-radius: 6px;

    @media (min-width: 780px) {
      width: 50%;
    }

    @media (min-width: 1200px) {
      width: 33%;
    }

    header {
      .loading-img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        float: left;
      }

      .loading-info {
        height: 80px;
        margin-left: 95px;
        padding: 10px;

        div {
          &:nth-child(1) {
            height: 22px;
            margin-bottom: 5px;
          }

          &:nth-child(2) {
            height: 22px;
            width: 30%;
          }
        }
      }
    }

    .loading-content {
      margin-top: 10px;

      div {
        height: 22px;
        margin-bottom: 5px;

        &:nth-child(4) {
          width: 30%;
        }
      }
    }

    footer {
      margin-top: 20px;

      div {
        height: 30px;
        width: 80px;
        float: left;
        margin-left: 5px;
      }
    }
  }

  .grid-material-wrapper {
    min-height: 300px;

    .grid-material-item {
      @media (min-width: 780px) {
        width: 50%;
      }

      @media (min-width: 1200px) {
        width: 33%;
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

