import Vue from 'vue'
import VueLocalStorage from 'vue-localstorage'

Vue.use(VueLocalStorage)

export default {
  namespaced: true,
  state: {
    currentpage: Vue.localStorage.get('currentpage')
  },
  mutations: {
    SET_CURRENTPAGE (state, current_page) {
      Vue.localStorage.set('currentpage', current_page)
      state.currentpage = current_page
    }
  },
  actions: {
    setCurrentPage ({ commit }, current_page) {
      commit('SET_CURRENTPAGE', current_page)
    }
  }
}
