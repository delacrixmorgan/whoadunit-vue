import Vue from 'vue'
import Vuex from 'vuex'

import seatModule from '@/store/modules/seats.js'
import personModule from '@/store/modules/persons.js'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    seats: seatModule,
    persons: personModule
  },
  state: {
  },
  mutations: {
  },
  actions: {
  }
})