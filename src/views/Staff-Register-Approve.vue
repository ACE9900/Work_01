<template>
  <v-container fluid class="white">
    <v-card class="pt-1 elevation-10">
      <v-form ref="form" v-model="valid" class="px-3 mt-8">
        <v-layout row wrap align-center class="mx-1">

          <v-flex xs12 sm12 md12 lg12 no-gutters>
            <v-row dense class="px-2 align-center">
              <v-col cols="12" xs="12" sm="12" md="8" lg="8" class="px-3">
                <v-text-field
                  v-model="contact_name"
                  :label="$t('register_submit_page.contact_name_field')"
                  filled
                  readonly
                ></v-text-field>
              </v-col>
              <v-col cols="12" xs="12" sm="12" md="4" lg="4" class="px-3">
                <v-text-field
                  v-model="contact_tel"
                  :label="$t('register_submit_page.contact_tel_field')"
                  filled
                  readonly
                ></v-text-field>
              </v-col>
            </v-row>
          </v-flex>

          <v-flex xs12 sm12 md12 lg12 no-gutters>
            <v-row dense class="px-2 align-center">
              <v-col cols="12" xs="12" sm="12" md="8" lg="8" class="px-3">
                <v-text-field
                  v-model="company_name"
                  :label="$t('register_submit_page.company_name_field')"
                  filled
                  readonly
                ></v-text-field>
              </v-col>
              <v-col cols="12" xs="12" sm="12" md="4" lg="4" class="px-3">
                <v-text-field
                  v-model="company_code"
                  :label="$t('register_submit_page.company_code_field')"
                  filled
                  readonly
                ></v-text-field>
              </v-col>
            </v-row>
          </v-flex>

          <v-flex xs12 sm12 md12 lg12 no-gutters>
            <v-row dense class="px-2 align-center">
              <v-col cols="12" xs="12" sm="12" md="8" lg="8" class="px-3">
                <v-text-field
                  v-model="tax_number"
                  :label="$t('register_submit_page.tax_number_field')"
                  filled
                  readonly
                ></v-text-field>
              </v-col>
              <v-col cols="12" xs="12" sm="12" md="4" lg="4" class="px-3">
                <v-text-field
                  v-model="country"
                  :label="$t('register_submit_page.country_select')"
                  filled
                  readonly
                ></v-text-field>
              </v-col>
            </v-row>
          </v-flex>

          <v-flex xs12 sm12 md12 lg12 no-gutters>
            <v-row dense class="px-2 align-center">
              <v-col cols="12" xs="12" sm="12" md="4" lg="4" class="px-3">
                <v-text-field
                  v-model="province"
                  :label="$t('register_submit_page.province_field')"
                  filled
                  readonly
                ></v-text-field>
              </v-col>
              <v-col cols="12" xs="12" sm="12" md="4" lg="4" class="px-3">
                <v-text-field
                  v-model="district"
                  :label="$t('register_submit_page.district_field')"
                  filled
                  readonly
                ></v-text-field>
              </v-col>
              <v-col cols="12" xs="12" sm="12" md="4" lg="4" class="px-3">
                <v-text-field
                  v-model="village"
                  :label="$t('register_submit_page.village_field')"
                  filled
                  readonly
                ></v-text-field>
              </v-col>
            </v-row>
          </v-flex>

          <v-flex xs12 sm12 md12 lg12 no-gutters>
            <v-row dense class="px-2 align-center">
              <v-col cols="12" xs="12" sm="12" md="4" lg="4" class="px-3">
                <v-text-field
                  v-model="tel"
                  :label="$t('register_submit_page.tel_field')"
                  filled
                  readonly
                ></v-text-field>
              </v-col>
              <v-col cols="12" xs="12" sm="12" md="4" lg="4" class="px-3">
                <v-text-field
                  v-model="fax"
                  :label="$t('register_submit_page.fax_field')"
                  filled
                  readonly
                ></v-text-field>
              </v-col>
              <v-col cols="12" xs="12" sm="12" md="4" lg="4" class="px-3">
                <v-text-field
                  v-model="email"
                  :label="$t('register_submit_page.email_field')"
                  filled
                  readonly
                ></v-text-field>
              </v-col>
            </v-row>
          </v-flex>

          <div class style="width: 100%">
            <v-divider class="black"></v-divider>
            <div class="title text-center py-2">
              <h3>{{ $t('register_submit_page.staff_title_text') }}</h3>
            </div>
            <v-divider class="black"></v-divider>

            <v-flex xs12 sm12 md12 lg12 no-gutters class="mt-4">
              <v-row dense class="px-2 align-center">
                <v-col cols="12" xs="12" sm="12" md="4" lg="4" class="px-3">
                  <v-select 
                  :label="$t('register_submit_page.staff_status_select')"
                  v-model="status_select"
                  :rules="[rules.status]"
                  :items="status"
                  item-text="com_regi_status_name"
                  item-value="status_id"
                  persistent-hint
                  return-object
                  single-line 
                  filled></v-select>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="8" lg="8" class="px-3">
                  <v-text-field
                    :label="$t('register_submit_page.staff_note_field')"
                    :rules="[rules.require]"
                    v-model="note"
                    filled
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-flex>
            <v-row class="px-8 justify-end mb-4">
              <v-btn @click="submit" :disabled="!valid" min-width="200" class="success">{{ $t('register_submit_page.submit_button') }}</v-btn>
            </v-row>
          </div>
        </v-layout>
      </v-form>
    </v-card>
    
    <v-dialog
      v-model="dialog"
      hide-overlay
      persistent
      width="300"
    >
      <v-card color="primary" dark>
        <v-card-text> 
          {{ $t('loading') }}
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
const axios = require("axios")

export default {
  name: "Staff-Register-submit",

  data () {
    return {
      dialog: false,
      valid: false,
      contact_name: '',
      contact_tel: '',
      company_name: '',
      company_code: '',
      tax_number: '',
      country: '',
      province: '',
      district: '',
      village: '',
      tel: '',
      fax: '',
      email: '',
      status: [],
      status_select: {com_regi_status_id: 0, com_regi_status_name: 'wait'},
      note: '',
      rules: {
        require: value => !!value || 'required',
        status: value => value.com_regi_status_id !== 0 || 'required'
      }
    }
  },
  beforeCreate() {
    this.$store.dispatch("currentPage/setCurrentPage", this.$route.name)
  },
  created() {
    let localUser = localStorage.getItem('localUser')
    localUser = JSON.parse(localUser)
    try {
      if (localUser === null || localUser === undefined) {
        this.$router.replace({ name: "Login" })
      } else {
        if (localUser.type === 'staff') {
          this.dialog = true
          let comp_id = this.$route.params.id
          axios.get(`https://us-central1-laos-single-window.cloudfunctions.net/function/getCompanyregister/${comp_id}`)
          .then(res => {
            console.log(res)
            this.setData(res.data)
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
  methods: {
    setData (data) {
      this.contact_name = data.comp_data.comp_contact_name
      this.contact_tel = data.comp_data.comp_contact_tel
      this.company_name = data.comp_data.comp_name
      this.company_code = data.comp_data.comp_code
      this.tax_number = data.comp_data.comp_taxnumber
      this.country = data.comp_data.comp_country
      this.province = data.comp_data.comp_province
      this.district = data.comp_data.comp_district
      this.village = data.comp_data.comp_village
      this.tel = data.comp_data.comp_tel
      this.fax = data.comp_data.comp_fax
      this.email = data.comp_data.comp_email
      this.status = data.status_data
      this.dialog = false
    },
    async submit () {
      this.dialog = true
      const localUser = JSON.parse(localStorage.getItem('localUser'))
      let comp_id = this.$route.params.id
      await axios.post('https://us-central1-laos-single-window.cloudfunctions.net/function/updateCompany', {
        comp_id: comp_id,
        staff: localUser.username,
        note: this.note
      })
      .then(res => {
        this.$router.replace( { name: 'Staff-Register-List' } )
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
};
</script>
