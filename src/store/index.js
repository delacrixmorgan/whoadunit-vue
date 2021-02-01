import Vue from 'vue'
import Vuex from 'vuex'

import seatModule from '@/store/modules/seats.js'
import memberModule from '@/store/modules/members.js'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    seats: seatModule,
    members: memberModule
  },
  state: {
  },
  mutations: {
  },
  actions: {
  }
})