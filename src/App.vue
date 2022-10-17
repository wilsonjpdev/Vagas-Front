<template>
  <div>
    <vagas-favoritas></vagas-favoritas>
    <topo-pagina @navegar="componente = $event" />
    <mensagem-alerta v-if="exibirAlerta" :tipo="alerta.tipo">
      <template v-slot:titulo>
        <h5> {{ alerta.titulo }}</h5>
      </template>
      <template v-slot:descricao>
        <p>{{ alerta.descricao }}</p>
      </template>
    </mensagem-alerta>
    <conteudo-pagina :conteudo="componente" />
  </div>
</template>

<script>
import ConteudoPagina from "@/components/layouts/ConteudoPagina.vue";
import TopoPagina from "@/components/layouts/TopoPagina.vue";
import VagasFavoritas from "@/components/comuns/VagasFavoritas.vue";
import MensagemAlerta from "@/components/comuns/MensagemAlerta.vue";

export default {
  name: "App",
  data: () => ({
    componente: "HomePage",
    exibirAlerta: false,
    alerta: {titulo: '', descricao: '', tipo: ''}
  }),
  components: {
    TopoPagina,
    ConteudoPagina,
    VagasFavoritas,
    MensagemAlerta,
  },
  methods: {},
  mounted() {
    this.emitter.on("alerta", (a) => {
      this.alerta = a
      this.exibirAlerta = true;
      setTimeout(() => {
        this.exibirAlerta = false;
      }, 5000);
    });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
