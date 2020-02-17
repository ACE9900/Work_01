<template>
    <v-container fluid class="mt-6 white">
      <v-layout class="mx-1">
        <v-data-table
        :headers="headers"
        :items="itemsWithIndex"
        :items-per-page="10"
        class="mx-auto"
        @click:row="getItem"
        ></v-data-table>
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
const axios = require('axios')

export default {
  name: 'Staff-Register-List',

  data: () => ({
    loadDialog: false,
    register_data: [],
    headers: [
        {text: 'No.', aligh: 'left', sortable: true, value: 'index'},
        {text: 'Register Id', aligh: 'left', sortable: true, value: 'com_regi_id'},
        {text: 'Company Id', aligh: 'left', sortable: true, value: 'comp_id'},
        {text: 'Status', aligh: 'left', sortable: false, align: 'center', value: 'com_regi_status_id'}
      ]
  }),
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
          axios.get('https://us-central1-laos-single-window.cloudfunctions.net/function/getCompanyregister')
          .then(res => {
            this.register_data = res.data.data
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
      return this.register_data.map(
        (register_data, index) => ({
          ...register_data,
          index: index + 1
        })
      )
    }
  },
  methods: {
    getItem (value) {
      let params = { comp_id: value.comp_id, com_regi_id: value.com_regi_id }
      this.$router.push(`staff_register_approve/${params.comp_id}`)
    }
  }
}
</script>
