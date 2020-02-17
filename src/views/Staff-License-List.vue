<template>
    <v-container fluid class="mt-6 white">
      <v-layout class="mx-1">
        <v-data-table
        :headers="headers"
        :items="itemsWithIndex"
        :items-per-page="10"
        class="mx-auto"
        @click:row="getItem"
        >
          <template v-slot:item.app_status_id="{ item }">
            <v-row v-for="doc in app_status" :key="doc.app_status_id">
              <v-col v-if="item.app_status_id === doc.app_status_id">
                {{ doc.app_status_name }}
              </v-col>
            </v-row>
          </template>
        </v-data-table>
      </v-layout>

      <v-dialog v-model="loadDialog" persistent width="300">
        <v-card color="primary" dark>
          <v-card-text>
            {{ $t('loading') }}
            <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
          </v-card-text>
        </v-card>
      </v-dialog>

    </v-container>
</template>

<script>
const axios = require("axios")

export default {
  data() {
    return {
      loadDialog: false,
      search: '',
      headers: [
        {
          text:  this.$t('staff_licence_list.table_header.license_no'),
          sortable: false,
          value: 'index'
        },
        {
          text:  this.$t('staff_licence_list.table_header.license_number'),
          sortable: false,
          value: 'app_id'
        },
        {
          text: this.$t('staff_licence_list.table_header.request_date'),
          sortable: false,
          value: 'app_date_req'
        },
        { text: this.$t('staff_licence_list.table_header.licence_type'),
        sortable: false,
          value: 'app_licence_type' 
        },
        {
          text: this.$t('staff_licence_list.table_header.company_id'),
          sortable: false,
          value: 'comp_id'
        },
        { text: this.$t('staff_licence_list.table_header.status'),
          align: 'center',
          sortable: false,
          value: 'app_status_id' 
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
        this.$router.replace({ name: "Login" })
      } else {
        if (localUser.type === 'staff') {
          this.loadDialog = true
          axios.get('https://us-central1-laos-single-window.cloudfunctions.net/function/staff/licence')
          .then(res => {
            this.license_list = res.data.licence_data
            this.app_status = res.data.status_data
            this.loadDialog = false
          })
          .catch(err => {
            console.log(err)
          })
        } else {
          localStorage.clear()
          this.$router.replace({ name: "Login" })
        }
      }
    } catch {
      localStorage.clear()
      this.$router.replace({ name: "Login" })
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
    async getItem (value) {
      this.$router.push(`/staff-license-approve/${value.app_id}`)
    }
  }
}
</script>