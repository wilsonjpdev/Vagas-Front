import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'

//criação da instancia do mitt
const emitter = mitt()

//inicialização da instancia do vue com base no componente
const app = createApp(App)

//configuracao da instancia do mitt como uma propriedade global
//com isso podendo ser acessado em qualquer componente da aplicacao
app.config.globalProperties.emitter = emitter

//associando a intancia do vue com o elemento html #app
app.mount('#app')
