<template>
      <div class="row mt-5">
      <div class="col">
        <div class="card">
          <div class="card-header bg-dark text-white">{{ titulo }}</div>
          <div class="card-body">
            <p>{{ descricao }}</p>
          </div>
          <div class="card footer">
            <small class="text-muted">Salário: {{ salario }} | Modalidade: {{ modalidade }} | Tipo: {{ tipo }} | Publicação: {{ publicacao }}</small>
          </div>
        </div>
      </div>
    </div>

</template>

<script>
export default {
    props: {
      titulo : {
        type: String,
        required: true
      },
      descricao : {
        type: String,
        default: 'O contratante não especificou o valor padrão para essa vaga'
      },
      salario : {
      },
      modalidade : {
        type: String,
      },
      tipo : {
        type: String,
      },
      publicacao : {
        type: String,
      }
    }
}
</script>

<style>

</style>