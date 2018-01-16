<template>
  <section class="footer dark-bg" id="contact">
    <div class="container">
      <div class="reveal-sequence">
        <p>
          <span class="logo-rodape">DEV PP - Comunidade de Desenvolvedores de Presidente Prudente e Região</span>
        </p>
        <p>
          <strong>ENDEREÇO</strong><br> Rua Nicolau Cacciatori, 489<br> Presidente Prudente- SP
        </p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3695.6302787405098!2d-51.40932405065853!3d-22.140067985335364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9493f45f0110115d%3A0xf1609421dc209826!2sR.+Nicolau+Cacciatori%2C+489+-+Jardim+dos+Pioneiros%2C+Pres.+Prudente+-+SP%2C+19050-340!5e0!3m2!1sen!2sbr!4v1515196116965" width="250" height="150" frameborder="0" style="border:0" allowfullscreen></iframe>
      </div>
      <div class="reveal-sequence">
        <p>
          <strong>CONTATO</strong>
          <br>Email: contato@devpp.com.br
          <br>Telefone: +1 (0) 000 0000 001
          <br>Whatsapp: +1 (0) 000 0000 002
          <div class="social-icons">
            <strong>SOCIAL</strong>
            <br>
            <a class="sicon facebook" title="Facebook" target="_blank" href="#">
              <svg class="icon">
                <use xlink:href="./assets/icons/icons.svg#icon-facebook"></use>
              </svg>
            </a>
            <a class="sicon youtube" title="YouTube" target="_blank" href="#">
              <svg class="icon">
                <use xlink:href="./assets/icons/icons.svg#icon-youtube"></use>
              </svg>
            </a>
            <a class="sicon instagram" title="Instagram" target="_blank" href="#">
              <svg class="icon">
                <use xlink:href="./assets/icons/icons.svg#icon-instagram"></use>
              </svg>
            </a>
            <a class="sicon meetup" title="meetup" target="_blank" href="https://www.meetup.com/dev-pp/">
              <svg class="icon">
                <use xlink:href="./assets/icons/icons.svg#icon-meetup"></use>
              </svg>
            </a>
          </div>
        </p>
      </div>
      <div class="reveal-sequence">
        <p>
          <strong>LINKS</strong>
          <ul>
            <li>
              <a target="_blank" href="http://www.inovaprudente.com.br/">Inova Prudente</a>
            </li>
            <li>
              <a target="_blank" href="http://www.presidenteprudente.sp.gov.br/site/index.xhtml">Prefeitura de Presidente Prudente</a>
            </li>
            <li>
              <a target="_blank" href="http://www.forspace.com.br/">For Space Coworking</a>
            </li>
          </ul>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'devpp-footer',
}
</script>

<style lang="scss" scoped>
@import './footer--style.scss';
</style>