import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './index.css'

Vue.config.productionTip = false
axios.defaults.baseURL = "https://pokeapi.co/api/v2"

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')