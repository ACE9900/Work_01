<template>
  <div class="pa-12 grey lighten-2" style="height: 100%">
    <v-card outlined max-width="500" class="mx-auto mt-6 white">
      <!-- <v-card-title class="justify-center">
        <h1 class="display-1">Login</h1>
      </v-card-title> -->
      <form @submit.prevent="login" class="px-3 mt-8">
        <v-card-text>
            <v-text-field
              prepend-inner-icon="mdi-account-circle"
              v-model="username"
              :label="$t('login_page.username_field')"
              required
              outlined
              dense></v-text-field>
            <v-text-field
              prepend-inner-icon="mdi-lock"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              v-model="password"
              :label="$t('login_page.password_field')"
              :type="showPassword ? 'text' : 'password'"
              @click:append="showPassword = !showPassword"
              required
              outlined
              dense></v-text-field>

            <v-alert v-if="alert" dense type="error">
             {{ $t('login_page.alert_text') }}
            </v-alert>
        </v-card-text>

        <v-card-actions  class="justify-center px-4">
          <v-btn block dark color="info" type="submit">{{ $t('login_page.login_button') }}</v-btn>
        </v-card-actions>

        <v-card-text>
          <v-row class="justify-space-between px-3">
            <router-link to="/register">{{ $t('login_page.register_text') }}</router-link>
            <!-- <router-link to="/">{{ $t('login_page.forget_password_text') }}</router-link> -->
          </v-row>
        </v-card-text>
      </form>
    </v-card>
    <v-dialog v-model="loadDialog" persistent width="300">
        <v-card color="primary" dark>
          <v-card-text>
            {{ $t('loading') }}
            <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
          </v-card-text>
        </v-card>
      </v-dialog>
  </div>
</template>

<script>
const axios = require('axios')

export default {
  data () {
    return {
      loadDialog: false,
      username: '',
      password: '',
      showPassword: false,
      alert: false,
      inputRules: [
        v => this.isLogin || 'Error'
      ]
    }
  },
  beforeCreate () {
    this.$store.dispatch('currentPage/setCurrentPage', this.$route.name)
  },
  methods: {
    async login () {
      this.loadDialog = true
      await axios.post('https://us-central1-laos-single-window.cloudfunctions.net/function/login', {
        username: this.username,
        password: this.password
      })
      .then(res => {
        if (res.data.loggedIn) {
          let user = res.data.data
          this.$store.dispatch('user/setUser', user)
          this.loadDialog = false
          if (user.type === 'staff') {
            this.$router.replace({ name: 'Staff-Register-List', params: {user}})
          } else {
            this.$router.replace({ name: 'User-License-List', params: {user}})
          }
        } else {
          this.loadDialog = false
          this.alert = true
          this.clearInut()
        }
      })
      .catch(err => {this/
        console.log(err)
      })
    },
    clearInut () {
      this.username = '',
      this.password = ''
    }
  }
}
</script>
