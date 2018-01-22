<template>
  <section id="newsletters" class="newsletters reveal">
    <div class="container">
      <h3>RECEBA AS NOVIDADES</h3>
      <p>
        Receba uma newsletter semanal sobre
        <strong>novas tecnologias, front-end, back-end, inovações, notícias, oportunidades de trabalho, novos meetups da Dev PP e também eventos em Presidente Prudente e região e no Brasil todo</strong>.
      </p>
      <div class="form-container">
        <div class="messages">
          <div class="alert alert-danger" v-if="errorMessage && !successMessage" transition="fade">
            <b>Erro:</b> {{ errorMessage }}</div>
          <div class="alert alert-success" v-if="successMessage" transition="fade">
            <b>Tudo certo:</b> {{ successMessage }}</div>
        </div>
        <form class="form" v-if="!successMessage" @submit.prevent="subscribe($event)">
          <div>
            <input placeholder="Digite o seu endereço de e-mail..." v-model="email" name="EMAIL" type="text" class="form-control input-lg" id="email" />
          </div>
          <div>
            <!-- Not to be filled up by humans-->
            <div style="position: absolute; left: -5000px;" aria-hidden="true">
              <input type="text" name="b_aa251961375a2fd4ac20a6132_5718990c28" tabindex="-1" value="">
            </div>

            <input type="submit" value="INSCREVER" name="subscribe" class="btn btn-lg btn-custom">
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import jsonp from 'jsonp';

export default {
  name: 'devpp-newsletters',
  props: {
    action: {
      required: true,
      type: String
    }
  },
  data: function() {
    return {
      email: '',
      response: {},
      errorMessage: null,
      successMessage: null
    };
  },
  computed: {
    preparedAction: function() {
      return this.action.replace('/post?', '/post-json?').concat(`&EMAIL=${this.email}`)
    }
  },
  methods: {
    subscribe: function(e) {
      jsonp(this.preparedAction, { param: 'c' }, (err, data) => {
        if (data && data.result === 'success') {
          this.successMessage = 'Email cadastrado, por favor acesse o seu email e confirme sua inscrição.';
        } else {
          if (data && data.msg.indexOf('already subscribed') > -1) {
            this.errorMessage = 'Este e-mail já está inscrito.';
          } else if (data && data.msg.indexOf('@') > -1 || data.msg.indexOf('enter a value')) {
            this.errorMessage = 'Por favor digite um e-mail válido';
          } else {
            this.errorMessage = 'Ocorreu um erro, por favor tente novamente.';
          }

          const _self = this;
          setTimeout(function() {
            _self.errorMessage = null;
            console.log('object');
          }, 4000);

          if (err) {
            console.log('err', err);
          }

          console.log(data);
        }
      });
    }
  }
};
</script>

<style src="./newsletters--style.scss" lang="scss" scoped></style>


