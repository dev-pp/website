<template>
  <section id="meetups" class="container meetups">
    <div class="col-xs-12">
      <div class="content-header-with-options">
        <div>
          <h3>MEETUPS</h3>
        </div>

        <div class="content-btn-group">
          <div class="btn-group filter">
            <button type="button" class="btn btn-default">Filtrar</button>
            <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span class="caret"></span>
              <span class="sr-only">Toggle Dropdown</span>
            </button>
            <ul class="dropdown-menu bs-dropdow">
              <li>
                <a class="active" href="#">Agendados</a>
              </li>
              <li>
                <a href="#">Passados</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="content-panel meetup-panel reveal">
        <div class="data">
          <div class="data-info">
            <span class="day">20</span>
            <span class="month">Dez</span>
          </div>
        </div>
        <div class="info">
          <div class="small">20 de Dezembro de 2017, 19:45</div>
          <h4>Bate Papo Sobre Tecnologia 2</h4>
          <p>
            Segundo encontro da comunidade de desenvolvedores de Presidente Prudente e região. Na For Space! Não percam mais essa oportunidade de aprendizado e networking.
          </p>
          <div class="place">
            <div>
              <room-icon class="icon icon-room" />
              <!-- <svg class="icon icon-room">
                <use xlink:href="./assets/icons-temp/icons.svg#icon-room"></use>
              </svg> -->
            </div>
            <div>
              <h4 class="name">For Space</h4>
              <address class="small">Rua Nicolau Cacciatori, 489 · Presidente Prudente</address>
            </div>
          </div>
          <a class="btn btn-md btn-custom pull-right" href="https://www.meetup.com/dev-pp/events/245829094/">RSVP</a>
        </div>
      </div>

      <div class="content-panel meetup-panel reveal">
        <div class="data">
          <div class="data-info">
            <span class="day">20</span>
            <span class="month">Dez</span>
          </div>
        </div>
        <div class="info">
          <div class="small">20 de Dezembro de 2017, 19:45</div>
          <h4>Bate Papo Sobre Tecnologia 2</h4>
          <p>
            Segundo encontro da comunidade de desenvolvedores de Presidente Prudente e região. Na For Space! Não percam mais essa oportunidade de aprendizado e networking.
          </p>
          <div class="place">
            <div>
              <room-icon class="icon icon-room" />
              <!-- <svg class="icon icon-room">
                <use xlink:href="./assets/icons/icons.svg#icon-room"></use>
              </svg> -->
            </div>
            <div>
              <h4 class="name">For Space</h4>
              <address class="small">Rua Nicolau Cacciatori, 489 · Presidente Prudente</address>
            </div>
          </div>
          <a class="btn btn-md btn-custom pull-right" href="https://www.meetup.com/dev-pp/events/245829094/">RSVP</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import RoomIcon from "./meetups--icons.svg?icon-room";

export default {
  name: 'devpp-meetups',
  components: {
    RoomIcon,
  }
}
</script>

<style lang="scss" scoped>
@import './meetups--icons.scss';
@import './meetups--style.scss';
</style>

