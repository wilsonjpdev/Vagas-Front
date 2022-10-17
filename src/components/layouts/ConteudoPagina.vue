<template>
  <div>
     <h1>Componente Conteudo</h1>
     <keep-alive>
      
      <component :is="conteudo" />
    </keep-alive>
  </div>
</template>
  
<script>
  import HomePage from '@/components/views/HomePage.vue';
  import PublicarVaga from '@/components/views/PublicarVaga.vue';

  export default {
    components: {
      HomePage,
      PublicarVaga
    },
    props: {
      conteudo: {
        type: String,
        required: true
      }
    },

  }
</script>
  
<style>
    
</style>