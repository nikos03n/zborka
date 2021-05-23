import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import ads from './ads'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    ads, user
  }
})
