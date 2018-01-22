<template>
  <section class="gallery" id="photos">
    <div class="container">
      <div class="content-header-with-options">
        <div>
          <h3>FOTOS</h3>
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
      </div>
    </div>

    <div class="preview-img-list">
      <img class="preview-img-item" :key="index" v-for="(item, index) in items" :src="item.src" @click="$photoswipe.open(index, items, { shareEl: true })">
    </div>
  </section>
</template>

<style lang="scss" scoped>
.preview-img-list {
  display: flex;
  flex-wrap: wrap;


  img.preview-img-item {
    height: 200px;
    flex-grow: 1;
    object-fit: cover;
    margin: .5px;
    cursor: pointer;

    &:hover {
      opacity: .8
    }
  }
}
</style>

<script>

export default {
  data() {
    return {
      items: [{
        src: 'http://res.cloudinary.com/dwtuxv53y/image/upload/v1516283055/image_1_1_fuqwom.jpg',
        w: 1024,
        h: 972
      }, {
        src: 'http://res.cloudinary.com/dwtuxv53y/image/upload/v1516283055/image_1_2_bj3r5v.jpg',
        w: 1024,
        h: 576
      }, {
        src: 'http://res.cloudinary.com/dwtuxv53y/image/upload/v1516283055/image_1_3_dtng30.jpg',
        w: 1152,
        h: 864
      }, {
        src: 'http://res.cloudinary.com/dwtuxv53y/image/upload/v1516283055/image_1_4_yihqjb.jpg',
        w: 1024,
        h: 768
      }, {
        src: 'http://res.cloudinary.com/dwtuxv53y/image/upload/v1516283055/image_1_aiy7oc.jpg',
        w: 1024,
        h: 576
      }, {
        src: 'http://res.cloudinary.com/dwtuxv53y/image/upload/v1516283055/image_2_1_ge1tvk.jpg',
        w: 1024,
        h: 1820
      }, {
        src: 'http://res.cloudinary.com/dwtuxv53y/image/upload/v1516283056/image_2_3_xodg7u.jpg',
        w: 1152,
        h: 824
      }, {
        src: 'http://res.cloudinary.com/dwtuxv53y/image/upload/v1516283056/image_2_4_m7febr.jpg',
        w: 1024,
        h: 768
      }, {
        src: 'http://res.cloudinary.com/dwtuxv53y/image/upload/v1516283057/image_2_nxu4dt.jpg',
        w: 1024,
        h: 576
      }, {
        src: 'http://res.cloudinary.com/dwtuxv53y/image/upload/v1516283057/image_3_1_jgisib.jpg',
        w: 1024,
        h: 1103
      }, {
        src: 'http://res.cloudinary.com/dwtuxv53y/image/upload/v1516283056/image_3_4_ohcbaj.jpg',
        w: 1024,
        h: 1070
      }, {
        src: 'http://res.cloudinary.com/dwtuxv53y/image/upload/v1516283056/image_3_mhejhh.jpg',
        w: 1024,
        h: 768
      }, {
        src: 'http://res.cloudinary.com/dwtuxv53y/image/upload/v1516283057/image_4_glyek1.jpg',
        w: 844,
        h: 1500
       }]
    }
  }
}
</script>