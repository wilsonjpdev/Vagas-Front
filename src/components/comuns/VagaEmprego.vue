<template>
  <div class="row mt-5">
    <div class="col">
      <div class="card">
        <div class="card-header bg-dark text-white">
          <div class="row">
            <div class="col d-flex justify-content-between">
              <div>{{ titulo }}</div>
              <div>
                <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" v-model="favoritada" />
                  <label class="form-check-label">Favoritar</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-body">
          <p>{{ descricao }}</p>
        </div>
        <div class="card footer">
          <small class="text-muted"
            >Salário: {{ salario }} | Modalidade: {{ getModalidade }} | Tipo:
            {{ getTipo }} | Publicação: {{ getPublicacao }}</small
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    favoritada: false
  }),
  props: {
    titulo: {
      type: String,
      required: true,
    },
    descricao: {
      type: String,
      default: "O contratante não especificou o valor padrão para essa vaga",
    },
    salario: {},
    modalidade: {
      type: String,
    },
    tipo: {
      type: String,
    },
    publicacao: {
      type: String,
    },
  },
  computed: {
    getModalidade() {
      switch (this.modalidade) {
        case "1":
          return "Home Office";
        case "2":
          return "Presencial";
      }
      return "";
    },
    getTipo() {
      switch (this.tipo) {
        case "1":
          return "CLT";
        case "2":
          return "PJ";
      }
      return "";
    },
    getPublicacao() {
      let dataPublicacao = new Date(this.publicacao);
      return dataPublicacao.toLocaleDateString("pt-BR");
    },
  },
  methods: {

  },
  watch: {
    favoritada(valor) {
      if(valor) {
        this.emitter.emit('favoritarVaga', this.titulo)
      }else {
        this.emitter.emit('desFavoritarVaga', this.titulo)
      }
    }
  }
};
</script>

<style>
</style>