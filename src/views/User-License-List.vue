<template>
  <v-form>
    <v-container>
      <v-card>
        <v-card-title class="d-block pa-2 grey lighten-2 black--text" align="center">License List</v-card-title>
        <v-card-title>
          <v-row class="justify-space-around mx-1">
            <v-text-field
              class="mr-2"
              v-model="search"
              append-icon="mdi-search"
              :label="$t('company_license_list_page.search_text')"
              single-line
              dense
              filled
            ></v-text-field>
            
            
            <v-btn class="primary" @click="toLicenceRegis">
              <v-icon>mdi-plus-circle-outline</v-icon>
            </v-btn>
            
            <!-- <v-col cols="12" sm="6" md="1">
              <v-btn class="grey darken-1 white--text">
                <v-icon>mdi-magnify</v-icon>
              </v-btn>
            </v-col>

            <v-col cols="12" sm="6" md="4">
              <v-btn class="grey darken-1 white--text" @click="showdetail=!showdetail">
                {{  $t('company_license_list_page.advance_search') }}
                <v-icon right>mdi-chevron-down</v-icon>
              </v-btn>
            </v-col>
          </v-row>

          <v-row v-if="showdetail">
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                append-icon="mdi-search"
                :label="$t('company_license_list_page.tax_id_card_text')"
                hide-details
                filled
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="4">
              <v-select :label="$t('company_license_list_page.license_type_select')" hide-details filled></v-select>
            </v-col>

            <v-col cols="12" sm="6" md="4">
              <v-select :label="$t('company_license_list_page.ministry_accept_select')" hide-details filled></v-select>
            </v-col>

            <v-col cols="12" sm="6" md="4">
              <v-text-field
                append-icon="mdi-search"
                :label="$t('company_license_list_page.license_id_text')"
                hide-details
                filled
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="4">
              <v-select :label="$t('company_license_list_page.license_department_select')" hide-details filled></v-select>
            </v-col>

            <v-col cols="12" sm="6" md="4">
              <v-select :label="$t('company_license_list_page.app_type_select')" hide-details filled></v-select>
            </v-col> -->
          </v-row>
        </v-card-title>

        <v-card-subtitle>
          <!-- เอกสารแนบ / ເອກະສານຄັດຕິດ -->
          <v-card max-width="1000" :elevation="5">
            <v-data-table 
            :headers="headers" 
            :items="itemsWithIndex" 
            :items-per-page="10" 
            :search="search"
            class="elevation-1"
            >

            <template v-slot:item.app_status_id="{ item }">
              <v-row v-for="list in app_status" :key="list.app_status_id">
                <v-col v-if="item.app_status_id === list.app_status_id">
                  {{ list.app_status_name }}
                </v-col>
              </v-row>
            </template>

            <template v-slot:item.action="{ item }">
              <v-icon @click="toLicenceDetail(item)" color="primary"
              v-if="item.app_status_id === 1">
                mdi-eye
              </v-icon>

              <v-icon @click="toLicenceDetail(item)" color="success" 
              v-if="item.app_status_id === 0 || item.app_status_id === 2">
                mdi-pencil
              </v-icon>

              <v-icon @click="deleteApp(item)" color="error" 
              v-if="item.app_status_id === 0 || item.app_status_id === 2">
                mdi-delete
              </v-icon>
            </template>

            </v-data-table>
          </v-card>
        </v-card-subtitle>
      </v-card>

      <v-dialog v-model="dialog" persistent width="300">
      <v-card :color="dialog_color" dark>
        <v-card-text>
          {{ dialog_text }}
          <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
    <!-- Snackbar -->
    <v-snackbar v-model="snack" :timeout="2000" :color="snackColor">
      {{ snackText }}
      <v-btn icon @click="snack = false"><v-icon color="white">mdi-close</v-icon></v-btn>
    </v-snackbar>

    </v-container>
  </v-form>
</template>

<script>
const axios = require("axios")

export default {
  data() {
    return {
      snack: false,
      snackColor: '',
      snackText: '',
      dialog: false,
      search: "",
      showdetail: false,
      headers: [
        {
          text:  this.$t('company_license_list_page.table_header.license_no'),
          align: 'left',
          sortable: false,
          value: 'index'
        },
        {
          text:  this.$t('company_license_list_page.table_header.license_number'),
          sortable: false,
          align: 'left',
          value: 'app_id'
        },
        {
          text: this.$t('company_license_list_page.table_header.request_date'),
          sortable: false,
          align: 'center',
          value: 'app_date_req'
        },
        { 
          text: this.$t('company_license_list_page.table_header.status'),
          sortable: false,
          align: 'center',
          value: 'app_status_id' 
        },
        {
          text: this.$t('company_license_list_page.table_header.approve_date'),
          sortable: false,
          align: 'center',
          value: 'app_detail_date_approve'
        },
        { 
          text: this.$t('company_license_list_page.table_header.expire_date'),
          sortable: false,
          value: 'app_date_expire' 
        },
        { 
          text: '',
          sortable: false,
          value: 'action' 
        }
      ],
      license_list: [],
      app_status: []
    };
  },
  beforeCreate () {
    this.$store.dispatch('currentPage/setCurrentPage', this.$route.name)
  },
  created () {
    let localUser = localStorage.getItem('localUser')
    localUser = JSON.parse(localUser)
    try {
      if (localUser === null || localUser === undefined) {
        this.$router.replace({ name: 'Login' })
      } else {
        let username = localUser.username
        if (localUser.type === 'company') {
          this.dialog_text = this.$t('loading'),
          this.dialog_color = 'primary',
          this.dialog = true,
          axios.get(`https://us-central1-laos-single-window.cloudfunctions.net/function/user/licence/${username}`)
          .then(res => {
            this.license_list = res.data.licence_data
            this.app_status = res.data.status_data
            this.dialog = false
          })
          .catch(err => {
            console.log(err)
          })
        } else {
          localStorage.clear()
          this.$router.replace({ name: 'Login' })
        }
      }
    } catch {
      localStorage.clear()
      this.$router.replace({ name: 'Login' })
    }
  },
  computed: {
    itemsWithIndex() {
      return this.license_list.map(
        (license_list, index) => ({
          ...license_list,
          index: index + 1
        })
      )
    }
  },
  methods: {
    async getItem () {

    },
    toLicenceRegis () {
      this.$router.push( { name: 'User-License-Register' } )
    },
    toLicenceDetail (item) {
      this.$router.push(`/license_detail/${item.app_id}`)
    },
    async deleteApp (item) {
      const app_id = item.app_id
     
      confirm(this.$t('delete_item')) && 
      (
        this.dialog_text = this.$t('deleting'),
        this.dialog_color = 'error',
        this.dialog = true,
        await axios.post(`https://us-central1-laos-single-window.cloudfunctions.net/function/user/licence/delete/${app_id}`)
        .then(async res => {
          const index = Number(item.index) - 1
          this.license_list.splice(index, 1)
          this.snack = true
          this.snackText = this.$t("company_license_register_page.snackbar_del"),
          this.snackColor = 'error'
          this.dialog = false
        })
        .catch(err => {
          console.log(err)
        })
      )
    }
  }
}
</script>