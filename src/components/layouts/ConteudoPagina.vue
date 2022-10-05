<template>
  <div>
     <h1>Componente Conteudo</h1>
     <button @click="conteudo = 'home-page'">Home</button>
     <button @click="conteudo = 'publicar-vaga'">Publicar Vaga</button>
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
    data: () => ({
      conteudo: 'home-page'
    })
  }
</script>
  
<style>
    
</style>