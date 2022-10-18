<template>
  <div class="row">
      <div class="col">
        <div class="h10 p-5 bg-light border rouded-3">
          <h2>Pesquisar Vagas</h2>
          <div class="row">
            <div class="col">
              <div class="form-group">
                <label for="titulo-vaga">Título da Vaga</label>
                <input v-model="titulo" type="text" name="titulo-vaga" id="titulo-vaga" class="form-control" placeholder="Pesquise por palavras chaves. Ex: php, pleno, analista">
                <small class="form-text text-muted">Informe palavras relacionadas com o titulo da vaga que você procura</small>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <button class="btn btn-outline-dark mt-2" @click="pesquisarVaga()">Buscar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data: () => ({
    titulo: ''
  }),
  methods: {    
    pesquisarVaga() {
      this.emitter.emit('filtrarVagas', {titulo: this.titulo})
    }
  }
}
</script>

<style>

</style>