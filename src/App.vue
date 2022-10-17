<template>
  <div>  
    <vagas-favoritas></vagas-favoritas>  
    <topo-pagina @navegar="(componente = $event)" />
    <conteudo-pagina :conteudo="componente" />
  </div>
</template>

<script>
import ConteudoPagina from '@/components/layouts/ConteudoPagina.vue';
import TopoPagina from '@/components/layouts/TopoPagina.vue';
import VagasFavoritas from '@/components/comuns/VagasFavoritas.vue';

export default {
  name: 'App',
  data: () => ({    
    componente: 'HomePage'
  }),
  components: {
    TopoPagina,
    ConteudoPagina,
    VagasFavoritas
  },
  methods: {
    
  }
}
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
