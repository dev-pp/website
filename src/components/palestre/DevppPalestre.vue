<template>
  <section class="palestre">
    <a id="palestre" class="anchor"></a>
    <div class="parallax-container">
      <div class="parallax parallax-palestre">
        <img
          src="http://res.cloudinary.com/dwtuxv53y/image/upload/v1516286379/mbr-1620x1080_t4ookj.jpg"
        />
      </div>
    </div>
    <div class="palestre-content-wrapper">
      <div class="palestre-content white-text">
        <div class="reveal">
          <h3>SEJA UM(A) PALESTRANTE!</h3>
          <a
            class="typeform-share button btn-blue-rounded"
            href="https://felipeblini.typeform.com/to/D2eCgg"
            data-mode="popup"
            target="_blank"
            >Call4Papers
          </a>
          <!-- <a href="https://goo.gl/forms/2yzsoYC7DyUqYosh2" target="_blank" class="btn btn-lg btn-custom">Aplicar palestra</a> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
(function() {
  var qs,
    js,
    q,
    s,
    d = document,
    gi = d.getElementById,
    ce = d.createElement,
    gt = d.getElementsByTagName,
    id = "typef_orm_share",
    b = "https://embed.typeform.com/";
  if (!gi.call(d, id)) {
    js = ce.call(d, "script");
    js.id = id;
    js.src = b + "embed.js";
    q = gt.call(d, "script")[0];
    q.parentNode.insertBefore(js, q);
  }
})();

export default {
  name: "devpp-palestre"
};
</script>

<style lang="scss" scoped>
@charset "UTF-8";

/* =========================================
 =========================================
 ======== MATERIALIZE PARALLAX ===========
 =========================================
 ========================================= */

@import "~materialize-css/sass/components/color";
@import "~materialize-css/sass/components/variables";
@import "~materialize-css/sass/components/global";
@import "~materialize-css/sass/components/typography";

$palestre-width: 218px;

section.palestre {
  margin-top: 30px;
  text-align: center;

  .parallax-container {
    height: $palestre-width;
    position: absolute;
    width: 100%;
    z-index: 1;

    .parallax {
      img {
        width: 150%;
        @media (min-width: 555px) {
          width: 100%;
        }
      }
    }
  }

  .palestre-content-wrapper {
    height: $palestre-width;
    display: flex;
    justify-content: center;
    position: relative;
    z-index: 1;

    .palestre-content {
      display: flex;
      flex-direction: column;
      align-content: center;
      justify-content: center;
      padding: 0 20px;

      h3 {
        text-shadow: 3px 3px 3px #000;
        margin: 0 0 20px;
      }
    }
  }
}
</style>

