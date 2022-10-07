<template>
  <div class="container py-4">
    <pesquisar-vaga />
    <div class="row mt-5">
      <div class="col-4">
        <indicador-vaga titulo="Vagas abertas" indicador="25" bg="bg-dark" color="text-white" />
      </div>
      <div class="col-4">
        <indicador-vaga titulo="Profissionais cadastrados" indicador="125" bg="bg-dark" color="text-white" />
      </div>
      <div class="col-4">
        <indicador-vaga titulo="Visitantes online" :indicador="usuariosOnline" bg="bg-light" color="text-dark" />
      </div>
    </div>
  </div>
</template>
    
<script>
  import PesquisarVaga from '@/components/comuns/PesquisarVaga.vue';
  import IndicadorVaga from '@/components/comuns/IndicadorVaga.vue';

    export default {
      components: {
        PesquisarVaga,
        IndicadorVaga
      },
      data: () => ({
        usuariosOnline: 0
      }),
      methods: {
        getUsuariosOnline() {
          this.usuariosOnline = Math.floor(Math.random() * 101)
        }
      },
      created() {
        setInterval(this.getUsuariosOnline, 1000)
      }
    }
</script>
