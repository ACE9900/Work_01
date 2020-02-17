<template>
    <v-container fluid class="white">
      <v-card class="pt-1 pb-6 mb-5 elevation-10">
        <v-form ref="form" v-model="valid" class="px-3 mt-8">
          <v-layout row wrap align-center class="mx-1">
            <v-flex xs12 sm12 md12 lg12 no-gutters>
              <v-row dense class="px-2 align-center">
                <v-col cols="12" xs="12" sm="12" md="8" lg="8" class="px-3">
                  <v-text-field
                    :label="$t('register_page.contact_name_field')"
                    v-model="contact_name"
                    :rules="[rules.require]"
                    filled
                    ></v-text-field>
                </v-col>
                
                <v-col cols="12" xs="12" sm="12" md="4" lg="4" class="px-3">
                  <v-text-field
                    :label="$t('register_page.contact_tel_field')"
                    v-model="contact_tel"
                    :rules="[rules.require, rules.space, rules.number]"
                    filled
                    ></v-text-field>
                </v-col>
              </v-row>
            </v-flex>

            <v-flex xs12 sm12 md12 lg12 no-gutters>
              <v-row dense class="px-2 align-center">
                <v-col cols="12" xs="12" sm="12" md="8" lg="8" class="px-3">
                  <v-text-field
                    :label="$t('register_page.company_name_field')"
                    v-model="company_name"
                    :rules="[rules.require]"
                    filled
                    ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="4" lg="4" class="px-3">
                  <v-text-field
                    :label="$t('register_page.tax_number_field')"
                    v-model="tax_number"
                    :rules="[rules.require, rules.space, rules.number]"
                    filled
                    ></v-text-field>
                </v-col>
              </v-row>
            </v-flex>

            <v-flex xs12 sm12 md12 lg12 no-gutters>
              <v-row dense class="px-2 align-center">
                <v-col cols="12" xs="12" sm="12" md="4" lg="4" class="px-3">
                  <v-select
                  :label="$t('register_page.country_select')"
                  v-model="country"
                  :rules="[rules.country]"
                  :items="select_country"
                  item-text="co_name"
                  item-value="co_id"
                  persistent-hint
                  return-object
                  single-line
                  filled
                  @input="checkCountry"
                  ></v-select>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="4" lg="4" class="px-3">
                  <v-select
                    :label="$t('register_page.province_select')"
                    :disabled="isCountry"
                    v-model="province"
                    :rules="[rules.province]"
                    :items="select_province"
                    item-text="po_name"
                    item-value="po_id"
                    persistent-hint
                    return-object
                    single-line
                    filled
                    @input="checkprovince"
                    ></v-select>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="4" lg="4" class="px-3">
                  <v-select
                    :label="$t('register_page.district_select')"
                    :disabled="isProvince"
                    v-model="district"
                    :rules="[rules.district]"
                    :items="select_district"
                    item-text="dt_name"
                    item-value="dt_id"
                    persistent-hint
                    return-object
                    single-line
                    filled
                    ></v-select>
                </v-col>
              </v-row>
            </v-flex>

            <v-flex xs12 sm12 md12 lg12 no-gutters>
              <v-row dense class="px-2 align-center">
                <v-col cols="12" xs="12" sm="12" md="4" lg="4" class="px-3">
                  <v-text-field
                    :label="$t('register_page.village_field')"
                    v-model="village"
                    :rules="[rules.require]"
                    filled
                    ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="4" lg="4" class="px-3">
                  <v-text-field
                    :label="$t('register_page.tel_field')"
                    v-model="tel"
                    :rules="[rules.require, rules.space, rules.number]"
                    filled
                    ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="4" lg="4" class="px-3">
                  <v-text-field
                    :label="$t('register_page.fax_field')"
                    v-model="fax"
                    :rules="[rules.require]"
                    filled
                    required
                    ></v-text-field>
                </v-col>
              </v-row>
            </v-flex>

            <v-flex xs12 sm12 md12 lg12 no-gutters>
              <v-row dense class="px-2 align-center">
                <v-col cols="12" xs="12" sm="12" md="4" lg="4" class="px-3">
                  <v-text-field
                    :label="$t('register_page.email_field')"
                    v-model="email"
                    :rules="[rules.require, rules.space, rules.email]"
                    filled
                    ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="4" lg="4" class="px-3">
                  <v-text-field
                    :label="$t('register_page.password_field')"
                    v-model="password"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="showPassword ? 'text' : 'password'"
                    @click:append="showPassword = !showPassword"
                    :rules="[rules.require, rules.space, rules.length]"
                    filled
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="4" lg="4" class="px-3">
                  <v-text-field
                    :label="$t('register_page.confirm_password_field')"
                    v-model="confirm_password"
                    :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="showConfirmPassword ? 'text' : 'password'"
                    @click:append="showConfirmPassword = !showConfirmPassword"
                    :rules="confirmPasswordRule"
                    filled
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-flex>

            <v-dialog v-model="dialog" persistent max-width="290">
              <template v-slot:activator="{ on }">
                <v-row class="px-8 justify-end">
                  <v-btn :disabled="!valid" min-width="200" class="info" v-on="on">{{ $t('register_page.register_button') }}</v-btn>
                </v-row>
              </template>
              <v-card>
                <v-card-title class="headline">{{ $t('register_page.dialog_title_text') }}</v-card-title>
                <v-card-text>{{ $t('register_page.dialog_content_text') }}</v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="red darken-4" text @click="dialog = false">{{ $t('register_page.dialog_button_cancel') }}</v-btn>
                  <v-btn color="green darken-4" text @click="register">{{ $t('register_page.dialog_button_confirm') }}</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-layout>
        </v-form>
      </v-card>

      <v-dialog v-model="statusDialog" persistent width="300">
        <v-card :color="statusDialog_color" dark>
          <v-card-text>
            {{ statusDialog_text }}
            <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
          </v-card-text>
        </v-card>
      </v-dialog>

    </v-container>
</template>

<script>
import firebase from 'firebase'
const axios = require('axios')
let province = []
let district = []

export default {
  name: 'User-Register',

  data: () => ({
    statusDialog: false,
    statusDialog_color: '',
    statusDialog_text: '',
    valid: true,
    contact_name: '',
    contact_tel: '',
    showPassword: false,
    showConfirmPassword: false,
    dialog: false,
    isCountry: true,
    isProvince: true,
    password: '',
    confirm_password: '',
    company_name: '',
    company_code: '',
    tax_number: '',
    country: { co_id: '', co_name: '' },
    province: { po_id: '', po_eng_name: '', po_laos_name: '', co_id: '' },
    district: { dt_id: '', dt_eng_name: '', dt_laos_name: '', po_id: '' },
    village: '',
    tel: '',
    fax: '',
    email: '',
    select_country: [],
    select_province: [],
    select_district: [],
    rules: {
      require: value => !!value || 'required',
      space: value => (value || '').indexOf(' ') < 0 || 'No spaces are allowed',
      length: value => value.length >= 8 || 'Min 8 characters',
      email: value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(value) || 'Invalid e-mail.'
      },
      number: value => !isNaN(value) || 'Must bu a number',
      country: value => value.co_id !== '' || 'required',
      province: value => value.po_id !== '' || 'required',
      district: value => value.dt_id !== '' || 'required'
    }
  }),
  computed: {
    confirmPasswordRule () {
      const rules = []
      //check null
      if (this.confirm_password) {
        const rule = value => value.length >= 0 || 'Name is required'
        rules.push(rule)
      }
      //check password and confirm password match
      if (this.password) {
        const rule = value => (!!value && value) === this.password || 'Password and Confirm Password do not match'
        rules.push(rule)
      }
      //check space
      if (this.confirm_password) {
        const rule = value => (value || '').indexOf(' ') < 0 || 'No spaces are allowed'
        rules.push(rule)
      }
      //check length
      if (this.confirm_password) {
        const rule = value => value.length >= 8 || 'Min 8 characters'
        rules.push(rule)
      }
      return rules
    }
  },
  mounted: function () {
    this.$store.dispatch('currentPage/setCurrentPage', this.$route.name)
    this.getAddress()
  },
  methods: {
    async register () {
      this.statusDialog_color = 'success'
      this.statusDialog_text = this.$t('saving')
      this.statusDialog = true
      const data = {
        comp_contact_name: this.contact_name,
        comp_contact_tel: this.contact_tel,
        comp_password: this.password,
        comp_name: this.company_name,
        comp_taxnumber: this.tax_number,
        comp_country: this.country.co_name,
        comp_province: this.province.po_name,
        comp_district: this.district.dt_name,
        comp_village: this.village,
        comp_tel: this.tel,
        comp_fax: this.fax,
        comp_email: this.email
      }
      axios.post('https://us-central1-laos-single-window.cloudfunctions.net/function/register', data)
      .then(res => {
        console.log(res)
        this.statusDialog = false
        this.dialog = false
        this.$router.replace({ name: 'Login' })
      })
      .catch(err => {
        console.log(err)
      })
    },
    async getAddress () {
      this.statusDialog_color = 'primary'
      this.statusDialog_text = this.$t('loading')
      this.statusDialog = true
      let response = await axios.get('https://us-central1-laos-single-window.cloudfunctions.net/function/getAddress')
      response = response.data
      for (let row = 0; row < response.length; row++) {
        for (let column = 0; column < response[row].length; column++) {
          if (row === 0) {
            this.select_country.push(response[row][column])
          } else if (row === 1) {
            province.push(response[row][column])
          } else {
            district.push(response[row][column])
          }
        }
      }
      this.statusDialog = false
    },
    checkCountry () {
      this.isCountry = false
      let data = []
      for (let index = 0; index < province.length; index++) {
        if (province[index].co_id === this.country.co_id) {
          data.push(province[index])
        }
      }
      this.select_province = data
    },
    checkprovince () {
      this.isProvince = false
      let data = []
      for (let index = 0; index < district.length; index++) {
        if (district[index].po_id === this.province.po_id) {
          data.push(district[index])
        }
      }
      this.select_district = data
    }
  }
}
</script>
