<template>
  <section class="newsletter reveal">
    <a id="newsletter" class="anchor"></a>
    <div class="container">
      <h3>DEV-PP Newsletter</h3>
      <p style="font-size: 20px">
        Receba uma vez por mês nosso email com conteúdo curados referentes a
        <strong
          >novidades do mercado de TI, desenvolvimento front-end e back-end, UX,
          inovação, oportunidades de trabalho e o que mais der na teia 🖖. </strong
        >Além disso você fica ligado(a) quando acontece os
        <strong>meetups do Dev PP</strong>, do <strong>GDG Prudente</strong> e
        também
        <strong
          >eventos techs em Presidente Prudente e região e os melhores em todo o
          Brasil</strong
        >.
      </p>
      <div class="form-container">
        <div class="messages">
          <div
            class="alert alert-danger"
            v-if="errorMessage && !successMessage"
            transition="fade"
          >
            <b>Erro:</b> {{ errorMessage }}
          </div>
          <div
            style="position: relative"
            class="alert alert-success"
            v-if="successMessage"
            transition="fade"
          >
            <b>👍</b> {{ successMessage }}
            <a
              style="position: absolute; right: 18px"
              href="#"
              @click.prevent.stop="onSuccessBack"
              >✖</a
            >
          </div>
        </div>
        <form
          class="form"
          v-if="!successMessage"
          @submit.prevent="subscribe($event)"
        >
          <div>
            <input
              placeholder="📪 Digite o seu endereço de e-mail..."
              v-model="email"
              name="EMAIL"
              type="text"
              class="form-control input-lg"
              id="email"
            />
          </div>
          <div>
            <!-- Not to be filled up by humans-->
            <div style="position: absolute; left: -5000px;" aria-hidden="true">
              <input
                type="text"
                name="b_aa251961375a2fd4ac20a6132_5718990c28"
                tabindex="-1"
                value=""
              />
            </div>

            <button
              type="submit"
              name="subscribe"
              class="btn btn-lg btn-custom"
            >
              <span>{{ subscribing ? "⌛" : "INSCREVER" }}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import jsonp from "jsonp";

export default {
  name: "devpp-newsletter",
  data: function() {
    return {
      email: "",
      subscribing: false,
      response: {},
      errorMessage: null,
      successMessage: null
    };
  },
  computed: {
    endpoint: function() {
      return "https://tech.us17.list-manage.com/subscribe/post?u=dd95564dc86cde20bf6712519&amp;id=69e305d9aa"
        .replace("/post?", "/post-json?")
        .concat(`&EMAIL=${this.email}`);
    }
  },
  methods: {
    subscribe: function(e) {
      this.subscribing = true;

      jsonp(this.endpoint, { param: "c" }, (err, data) => {
        this.subscribing = false;
        if (data && data.result === "success") {
          this.successMessage =
            "Email cadastrado! Por favor acesse o seu email e confirme sua inscrição.";
        } else {
          if (data && data.msg.indexOf("already subscribed") > -1) {
            this.errorMessage = "Este e-mail já está inscrito.";
          } else if (
            (data && data.msg.indexOf("@") > -1) ||
            data.msg.indexOf("enter a value")
          ) {
            this.errorMessage = "Por favor digite um e-mail válido";
          } else {
            this.errorMessage = "Ocorreu um erro, por favor tente novamente.";
          }

          const _self = this;
          setTimeout(function() {
            _self.errorMessage = null;
          }, 4000);

          if (err) {
            console.log("err", err);
          }
        }
      });
    },
    onSuccessBack(e) {
      this.successMessage = "";
      this.email = "";
    }
  }
};
</script>

<style src="./newsletter--style.scss" lang="scss" scoped></style>


