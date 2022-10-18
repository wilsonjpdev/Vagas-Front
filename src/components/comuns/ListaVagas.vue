<template>
  <div class="row mt-2" v-for="(vaga, index) in vagas" :key="index">
    <div class="col">
      <vaga-emprego v-bind="vaga" />
    </div>
  </div>
</template>

<script>
import VagaEmprego from "@/components/comuns/VagaEmprego.vue";

export default {
  components: {
    VagaEmprego,
  },
  data: () => ({
    vagas: [],
  }),
  activated() {
    this.vagas = JSON.parse(localStorage.getItem("vagas"));
  },
  mounted() {
    this.emitter.on("filtrarVagas", (vaga) => {
      const vagas = JSON.parse(localStorage.getItem("vagas"));
      this.vagas = vagas.filter((reg) =>
        reg.titulo.toLowerCase().includes(vaga.titulo.toLowerCase())
      );
    });
  },
};
</script>

<style>
</style>