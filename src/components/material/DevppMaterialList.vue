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
      dates: [],
      activeDate: '',
      materialList: []
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

