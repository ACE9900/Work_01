import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import vuetify from './plugins/vuetify'
import store from './store/index'
import { i18n } from './plugins/i18n'
import CountryFlag from 'vue-country-flag'
import * as firebase from 'firebase'

Vue.component('country-flag', CountryFlag)
Vue.config.productionTip = false

// Initialize Firebase
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAqblVkgAeM9YVS3mBb6rznaLxX817RYRE",
  authDomain: "laos-single-window.firebaseapp.com",
  databaseURL: "https://laos-single-window.firebaseio.com",
  projectId: "laos-single-window",
  storageBucket: "laos-single-window.appspot.com",
  messagingSenderId: "750541361457",
  appId: "1:750541361457:web:f91eedcf065e3e74fee010",
  measurementId: "G-VH533VHP9N"
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.analytics()

new Vue({
  i18n,
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
