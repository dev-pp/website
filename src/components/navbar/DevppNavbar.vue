<template>
  <section id="navbar" class="custom-navbar">
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
          </div>
          <div class="collapse navbar-collapse custom-navbar-nav" id="myNavbar">
            <ul class="nav navbar-nav">
              <li><a href="#about">Sobre</a></li>
              <li><a href="#members">Membros</a></li>
              <li><a href="#meetups">Meetups</a></li>
              <li><a href="#photos">Fotos</a></li>
              <li><a href="#material">Material</a></li>
              <li><a href="#contact">Contato</a></li>
            </ul>
            <a class="btn btn-md btn-custom pull-right" href="https://meetup.com/dev-pp">JUNTE-SE A NÓS</a>
          </div>
        </div>
      </nav>
    </section>
</template>

<script>

export default {
  name: 'devpp-navbar',
}
</script>

<style src="./navbar--style.scss" lang="scss" scoped></style>