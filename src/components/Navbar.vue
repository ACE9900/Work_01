<template>
    <nav>
        <v-app-bar 
          app
          dark
          flat
          :prominent="prominent"
          v-model="appbar"
          src="../assets/css-background-effects-thumb.jpg" 
          class="align-center"
        >
          <v-btn
            v-if="drawerButton"
            icon
            @click="drawer = !drawer"
          >
            <v-icon>mdi-view-list</v-icon>
          </v-btn>

          <v-spacer></v-spacer>

          <v-menu select origin="center center" transition="scale-transition" inline>
            <template v-slot:activator="{ on }">
              <v-btn text v-on="on">
                <country-flag class="mr-1" :country="$t('flag')"/>
                {{ $t('flag') }}
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(lang, index) in languages"
                :key="index"
                @click="changeLanguage(lang)"
              >
              <v-list-item-icon>
                <country-flag :country='lang.value'/>
              </v-list-item-icon>
              <v-list-item-title>{{ lang.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <!-- Show user login -->
          <div v-if="isLogin" class="mr-3">
            <v-row v-if="loggedIn" class="align-center">
              <v-icon class="mx-2">mdi-account-circle</v-icon>
              <h5> :  {{ user }}</h5>
            </v-row>
          </div>
        </v-app-bar>

        <v-navigation-drawer 
          app
          v-model="drawer"
          floating
          mobile-break-point="991"
          width="240"
          class="grey darken-2"
        >
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                <v-row class="justify-center align-center" style="height: 40px">
                  <h2 class="white--text">Menu</h2>
                </v-row>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider class="white mx-3" />

          <v-list
            nav
            v-if="isStaff"
          >
            <v-list-item
              v-for="item in staff"
              :key="item.title"
              :to="item.link"
              color="white"
              active-class="green"
              dark
            >
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <v-list
            nav
            v-if="isCompany"
          >
            <v-list-item
              v-for="item in company"
              :key="item.title"
              :to="item.link"
              color="white"
              active-class="green"
              dark
            >
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          
          <template v-slot:append>
            <v-divider class="white mx-3" />
            <div class="pa-2">
              <v-btn text block color="white" @click="signOut">
                <v-icon left>mdi-out</v-icon>
                Logout
              </v-btn>
            </div>
          </template>
        </v-navigation-drawer>
    </nav>
</template>

<script>
export default {
  data () {
    return {
      loggedIn: false,
      user: '',
      appbar: true,
      drawer: false,
      prominent: true,
      permanent: false,
      drawerButton: false,
      staff: [
        {title: 'Register List', icon: 'mdi-account', link: '/staff_register_list'},
        {title: 'License List', icon: 'mdi-file-document', link: '/staff_license_list'}
      ],
      company: [
        {title: 'License List', icon: 'mdi-file-document', link: '/user_license_list'}
      ],
      languages: [
        {
          title: this.$t('languages.english'),
          value: 'us'
        },
        {
          title: this.$t('languages.laos'),
          value: 'la'
        }
      ]
    }
  },
  computed: {
    isLogin: function () {
      const user = JSON.parse(localStorage.getItem('localUser'))
      const page = this.$store.state.currentPage.currentpage

      if (page === 'Login' || page === 'Register') {
        this.loggedIn = false
        return false
      } else {
        this.loggedIn = true
        this.user = user.username
        return true
      }
    },
    isCompany: function () {
      const page = this.$store.state.currentPage.currentpage
      if (page === 'Login' || page === 'Register') {
        this.drawer = false
        this.prominent = true
        return false
      } else {
        this.drawer = true
        this.prominent = false
        const type = JSON.parse(localStorage.getItem('localUser'))
        if (type.type === 'company') {
          return true
        } else {
          return false
        }
      }
    },
    isStaff: function () {
      const page = this.$store.state.currentPage.currentpage
      if (page === 'Login' || page === 'Register') {
        this.drawer = false
        this.prominent = true
        return false
      } else {
        this.drawer = true
        this.prominent = false
        const type = JSON.parse(localStorage.getItem('localUser'))
        if (type.type === 'staff') {
          return true
        } else {
          return false
        }
      }
    }
  },
  created () {
    window.addEventListener("resize", this.onScreenChange);
  },
  destroyed () {
    window.removeEventListener("resize", this.onScreenChange);
  },
  methods: {
    changeLanguage (lang) {
      this.$i18n.locale = lang.value
      this.$store.dispatch('language/setLanguage', lang.value)
    },
    signOut () {
      localStorage.clear()
      this.$router.replace( { name: 'Login' } )
    },
    onScreenChange() {
      if (this.$route.name === 'Login' || this.$route.name === 'Register') {
        this.drawer = false
      } else {
        if (window.innerWidth < 991) {
          console.log(window.innerWidth)
          if (this.$route.name === 'Login' || this.$route.name === 'Register') {
            this.drawer = false
            this.drawerButton = false
          } else {
            this.drawerButton = true
          }
        } else {
          this.drawerButton = false
        }
      }
    }
  }
}
</script>
