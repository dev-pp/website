<template>
  <section id="members" class="members container">
    <div class="col-xs-12">
      <h3>MEMBROS</h3>

      <div class="content-panel reveal">
        <p>
          Somos <b>386</b> (e contando...) desenvolvedores, programadores,
          engenheiros,
          designers, ux designers, nerds, criadores, transformadores,
          criativos, artistas, inovadores, empreendedores.... E nos reunimos
          periodicamente
          para compartilhar conhecimento, fazer networking e evoluirmos a
          comunidade.
        </p>

        <ul class="faces">
          <li class="member-face">
            <img src="https://secure.meetupstatic.com/photos/member/8/5/b/f/member_273034239.jpeg"
              alt="">
          </li>
          <li class="member-face">
            <img src="https://secure.meetupstatic.com/photos/member/9/0/3/4/highres_273036916.jpeg"
              alt="">
          </li>
          <li class="member-face">
            <img src="https://secure.meetupstatic.com/photos/member/e/4/e/8/member_248818600.jpeg"
              alt="">
          </li>
          <li class="member-face">
            <img src="https://secure.meetupstatic.com/photos/member/2/f/9/3/member_273192179.jpeg"
              alt="">
          </li>
          <li class="member-face">
            <img src="https://secure.meetupstatic.com/photos/member/2/7/a/6/member_273190150.jpeg"
              alt="">
          </li>
          <li class="member-face">
            <img src="https://secure.meetupstatic.com/photos/member/7/1/6/highres_273121814.jpeg"
              alt="">
          </li>
          <li class="member-face">
            <img src="https://secure.meetupstatic.com/photos/member/4/5/a/0/highres_273257824.jpeg"
              alt="">
          </li>
          <li>
            <ul class="small-faces">
              <li class="member-face-sm">
                <img src="https://secure.meetupstatic.com/photos/member/6/a/4/highres_253921700.jpeg"
                  alt="">
              </li>
              <li class="member-face-sm">
                <img src="https://secure.meetupstatic.com/photos/member/8/c/a/6/highres_273036006.jpeg"
                  alt="">
              </li>
              <li class="member-face-sm">
                <img src="https://secure.meetupstatic.com/photos/member/3/d/9/0/highres_273015760.jpeg"
                  alt="">
              </li>
              <li class="member-face-sm">
                <img src="https://secure.meetupstatic.com/photos/member/d/6/0/9/highres_273054793.jpeg"
                  alt="">
              </li>
              <li class="member-face-sm">
                <img src="https://secure.meetupstatic.com/photos/member/d/3/8/1/highres_273174145.jpeg"
                  alt="">
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
    </div>
  </section>
</template>

<script>
import ArrowRightIcon from "./members--icons.svg?icon-keyboard_arrow_right";

export default {
  name: "devpp-members",
  components: {
    ArrowRightIcon
  }
};
</script>

<style lang="scss" scoped>
@import "./members--style.scss";
@import "./members--icons.scss";
</style>



