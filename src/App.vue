<template>
  <div>
    <topo-pagina />
    <conteudo-pagina />
  </div>
</template>

<script>
import ConteudoPagina from './components/layouts/ConteudoPagina.vue';
import TopoPagina from './components/layouts/TopoPagina.vue';

export default {
  name: 'App',
  components: {
    TopoPagina,
    ConteudoPagina
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
