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
@import "./parallax.scss";
</style>

