import Vue from 'vue'
import VueLocalStorage from 'vue-localstorage'
import { stat } from 'fs'

Vue.use(VueLocalStorage)

export default {
  namespaced: true,
  state: {
    user: {},
    localUser: Vue.localStorage.get('localUser')

  },
  mutations: {
    SET_USER (state, user) {
      let usr = JSON.stringify(user)
      // Vue.localStorage.remove('localUser')
      // Vue.localStorage.set('localUser', usr)

      localStorage.setItem('localUser', usr)

      state.user = user
    },
    REMOVE_USER (state, user) {
      console.log('re')
      Vue.localStorage.remove(user)
    }
  },
  actions: {
    setUser ({ commit }, user) {
      commit('SET_USER', user)
    },
    removeUser ({ commit }, user) {
      commit('REMOVE_USER', user)
    }
  }
}
