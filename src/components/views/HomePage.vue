<template>
  <div class="container py-4">
    <div class="row">
      <div class="col">
        <pesquisar-vaga />
      </div>
    </div>

    <div class="row mt-2" v-for="(vaga, index) in vagas" :key="index">
      <div class="col">
        <vaga-emprego v-bind="vaga"/>
      </div>
    </div>

    <div class="row mt-5">
      <div class="col-4">
        <indicador-vaga
          titulo="Vagas abertas"
          indicador="25"
          bg="bg-dark"
          color="text-white"
        />
      </div>
      <div class="col-4">
        <indicador-vaga
          titulo="Profissionais cadastrados"
          indicador="125"
          bg="bg-dark"
          color="text-white"
        />
      </div>
      <div class="col-4">
        <indicador-vaga
          titulo="Visitantes online"
          :indicador="usuariosOnline"
          bg="bg-light"
          color="text-dark"
        />
      </div>
    </div>
  </div>
</template>
    
<script>
import PesquisarVaga from "@/components/comuns/PesquisarVaga.vue";
import IndicadorVaga from "@/components/comuns/IndicadorVaga.vue";
import VagaEmprego from "@/components/comuns/VagaEmprego.vue";

export default {
  components: {
    PesquisarVaga,
    IndicadorVaga,
    VagaEmprego,
  },
  data: () => ({
    usuariosOnline: 0,
    vagas: [],
  }),
  methods: {
    getUsuariosOnline() {
      this.usuariosOnline = Math.floor(Math.random() * 101);
    },
  },
  created() {
    setInterval(this.getUsuariosOnline, 1000);
  },
  activated() {
    this.vagas = JSON.parse(localStorage.getItem('vagas'));
  },
  mounted() {
    this.emitter.on('filtrarVagas', vaga => {

      const vagas = JSON.parse(localStorage.getItem('vagas'))
      this.vagas = vagas.filter(reg => reg.titulo.toLowerCase().includes(vaga.titulo.toLowerCase()))
    })
  }
};
</script>
