<template>
  <div class="h-100 p5 rounded-3 border bg-dark text-white">
    <p>{{ titulo }}</p>
    <h2> {{ indicador }}</h2>
  </div>
</template>

<script>
export default {
  props: ['titulo', 'indicador']
};
</script>
  
<style>
</style>