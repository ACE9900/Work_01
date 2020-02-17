import Vue from 'vue';
import Vuex from 'vuex';

//Modules
import language from './modules/language';
import currentPage from './modules/currentPage'
import user from './modules/user'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    language,
    currentPage,
    user
  }
});

export default store;
