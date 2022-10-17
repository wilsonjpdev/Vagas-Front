<template>
  <div>
    <div :class="estiloAlerta" role="alert">
        <slot name="titulo"></slot>
        <slot name="descricao"></slot>
      </div>
  </div>
</template>

<script>
export default {
  name: "MensagemAlerta",
  props: {
    tipo: String
  },
  computed: {
    estiloAlerta() {
      switch(this.tipo) {
        case 'erro': return 'alert alert-danger'
        case 'sucesso': return 'alert alert-success'
        default: return 'alert alert-success'
      }
    }
  }
};
</script>

<style>
</style>