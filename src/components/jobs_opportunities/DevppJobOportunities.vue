<template>
  <section class="container">
    <a class="anchor" id="jobs"></a>
    <div class="col-xs-12">
      <h3 class="">VAGAS</h3>
      <div class="content-panel reveal">
        Nós divulgamos vagas de emprego na área de TI frequentemente em nossos
        eventos e emails.

        <h4>Tem uma vaga na área de TI aberta na sua empresa?</h4>
        Cadastre-a no nosso repositório de vagas ou entre em contato conosco que
        divulgaremos e tentaremos ajudar.

        <h4>
          Tá procurando vagas abertas na área de TI em Presidente Prudente e
          região?
        </h4>
        Fique ligado(a) no nosso repositório de vagas que estamos sempre
        recebendo oportunidades para você_blank

        <p>
          <a
            class="btn-blue-rounded"
            href="https://github.com/dev-pp/vagas/issues"
            target="_blank"
            >Repositório de vagas
          </a>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "devpp-jobs"
};
</script>

<style scoped>
h4 {
  margin: 0;
  margin-top: 20px;
}

.btn-blue-rounded {
  margin-top: 25px;
}
</style>
