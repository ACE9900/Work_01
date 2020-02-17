<template>
  <v-container>
    <v-card class="elevation-10">
      <v-tabs grow v-model="tabs" color="white" background-color="grey" active-class="green">
        <v-tab class="font-weight-bold subtitle-1">
          {{ $t("company_license_register_page.tab_header_1") }}
        </v-tab>
        <v-tab class="font-weight-bold subtitle-1">
          {{ $t("company_license_register_page.tab_header_2") }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tabs">
        <!-- tab 1 -->
        <v-tab-item>
          <v-container>
            <v-card flat>
              <!-- รายละเอียดผู้เสนอ / ລາຍລະອຽດຂອງຜູ້ສະ ເໜ -->
              <v-card-title
                class="d-block pa-2 grey lighten-1 black--text"
                exact-active-class="green"
              >{{ $t('company_license_register_page.tab_1.title_1_2.title_1_name') }}</v-card-title>
              <!-- row 1 -->
              <v-row dense class="align-center">
                <v-col cols="12" xs="12" sm="12" md="4" lg="4">
                  <v-text-field
                    v-model="comp_id"
                    readonly
                    :label="$t('company_license_register_page.tab_1.title_1_2.username_field')"
                    hide-details
                    filled
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="4" lg="4">
                  <v-text-field
                    v-model="tax_number"
                    readonly
                    :label="$t('company_license_register_page.tab_1.title_1_2.tax_number_field')"
                    hide-details
                    filled
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="4" lg="4">
                  <v-text-field
                    v-model="country"
                    readonly
                    :label="$t('company_license_register_page.tab_1.title_1_2.country_field')"
                    hide-details
                    filled
                  ></v-text-field>
                </v-col>
              </v-row>
              <!-- row 2 -->
              <v-row dense class="align-center">
                <v-col cols="12" xs="12" sm="12" md="4" lg="4">
                  <v-text-field
                    v-model="province"
                    readonly
                    :label="$t('company_license_register_page.tab_1.title_1_2.province_field')"
                    hide-details
                    filled
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="4" lg="4">
                  <v-text-field
                    v-model="district"
                    readonly
                    :label="$t('company_license_register_page.tab_1.title_1_2.district_field')"
                    hide-details
                    filled
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="4" lg="4">
                  <v-text-field
                    v-model="village"
                    readonly
                    :label="$t('company_license_register_page.tab_1.title_1_2.village_field')"
                    hide-details
                    filled
                  ></v-text-field>
                </v-col>
              </v-row>
              <!--row 3  -->
              <v-row dense class="align-center">
                <v-col cols="12" xs="12" sm="12" md="4" lg="4">
                  <v-text-field
                    v-model="email"
                    readonly
                    :label="$t('company_license_register_page.tab_1.title_1_2.email_field')"
                    hide-details
                    filled
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="4" lg="4">
                  <v-text-field
                    v-model="tel"
                    readonly
                    :label="$t('company_license_register_page.tab_1.title_1_2.tel_field')"
                    hide-details
                    filled
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="4" lg="4">
                  <v-text-field
                    v-model="fax"
                    readonly
                    :label="$t('company_license_register_page.tab_1.title_1_2.fax_field')"
                    hide-details
                    filled
                  ></v-text-field>
                </v-col>
              </v-row>

              <!-- รายละเอียดผู้นำเข้า / ລາຍລະອຽດຂອງຜູ້ ນຳ ເຂົ້າ -->
              <v-card-title
                class="d-block mt-2 pa-2 grey lighten-1 black--text"
              >{{ $t('company_license_register_page.tab_1.title_1_2.title_2_name') }}</v-card-title>

              <!-- row 1 -->
              <v-row dense class="align-center">
                <v-col cols="12" xs="12" sm="12" md="4" lg="4">
                  <v-text-field
                    v-model="comp_id"
                    readonly
                    :label="$t('company_license_register_page.tab_1.title_1_2.username_field')"
                    hide-details
                    filled
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="4" lg="4">
                  <v-text-field
                    v-model="tax_number"
                    readonly
                    :label="$t('company_license_register_page.tab_1.title_1_2.tax_number_field')"
                    hide-details
                    filled
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="4" lg="4">
                  <v-text-field
                    v-model="country"
                    readonly
                    :label="$t('company_license_register_page.tab_1.title_1_2.country_field')"
                    hide-details
                    filled
                  ></v-text-field>
                </v-col>
              </v-row>
              <!-- row 2 -->
              <v-row dense class="align-center">
                <v-col cols="12" xs="12" sm="12" md="4" lg="4">
                  <v-text-field
                    v-model="province"
                    readonly
                    :label="$t('company_license_register_page.tab_1.title_1_2.province_field')"
                    hide-details
                    filled
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="4" lg="4">
                  <v-text-field
                    v-model="district"
                    readonly
                    :label="$t('company_license_register_page.tab_1.title_1_2.district_field')"
                    hide-details
                    filled
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="4" lg="4">
                  <v-text-field
                    v-model="village"
                    readonly
                    :label="$t('company_license_register_page.tab_1.title_1_2.village_field')"
                    hide-details
                    filled
                  ></v-text-field>
                </v-col>
              </v-row>
              <!--row 3  -->
              <v-row dense class="align-center">
                <v-col cols="12" xs="12" sm="12" md="4" lg="4">
                  <v-text-field
                    v-model="email"
                    readonly
                    :label="$t('company_license_register_page.tab_1.title_1_2.email_field')"
                    hide-details
                    filled
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="4" lg="4">
                  <v-text-field
                    v-model="tel"
                    readonly
                    :label="$t('company_license_register_page.tab_1.title_1_2.tel_field')"
                    hide-details
                    filled
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="4" lg="4">
                  <v-text-field
                    v-model="fax"
                    readonly
                    :label="$t('company_license_register_page.tab_1.title_1_2.fax_field')"
                    hide-details
                    filled
                  ></v-text-field>
                </v-col>
              </v-row>

              <!-- ข้อเสนอทั่วไป / ໃບອະນຸຍາດຫລັກໃບອະນຸຍາດເພີ່ມເຕີມກຸ່ມໃບສະເໜີທົ່ວໄປ -->
              <v-card-title
                class="d-block mt-2 pa-2 grey lighten-1 black--text"
              >{{ $t('company_license_register_page.tab_1.title_3.title_name') }}</v-card-title>
              <!-- row 1 -->
              <v-row dense class="align-center">
                <v-col cols="12" xs="12" sm="12" md="4" lg="4">
                  <v-text-field
                    v-model="comp_id"
                    readonly
                    label="User id"
                    hide-details
                    filled
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="4" lg="4">
                  <v-text-field
                    v-model="app_id"
                    readonly
                    label="Licence id"
                    hide-details
                    filled
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="4" lg="4">
                  <v-text-field
                    v-model="app_date_req"
                    readonly
                    label="Date submit"
                    hide-details
                    filled
                  ></v-text-field>
                </v-col>
              </v-row>
              <!-- row 2 -->
              <v-row dense class="align-center">
                <v-col cols="12" xs="12" sm="12" md="4" lg="4">
                  <v-text-field
                    v-model="app_type"
                    readonly
                    label="App type"
                    hide-details
                    filled
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="4" lg="4">
                  <v-text-field
                    v-model="app_licence_type"
                    readonly
                    label="Licence type"
                    hide-details
                    filled
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="4" lg="4">
                  <v-text-field
                    v-model="app_purpose"
                    readonly
                    label="Purpose"
                    hide-details
                    filled
                  ></v-text-field>
                </v-col>
              </v-row>
              <!-- row 3 -->
              <v-row dense class="align-center">
                <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                  <v-text-field
                    v-model="app_note"
                    readonly
                    :label="$t('company_license_register_page.tab_1.title_3.app_note')"
                    hide-details
                    filled
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                  <v-text-field
                    v-model="app_comment"
                    readonly
                    :label="$t('company_license_register_page.tab_1.title_3.app_comment')"
                    hide-details
                    filled
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-card>
            <!-- รายการสินค้า / ລາຍການສິນຄ້າ -->
            <v-card-title
              class="d-block mt-2 pa-2 grey lighten-1 black--text"
            >{{ $t('company_license_register_page.tab_1.title_4.title_name') }}</v-card-title>
            <v-card class="mx-auto mt-3">
              <v-data-table
                :headers="product"
                :items="product_list"
                :items-per-page="10"
                class="elevation-1"
              ></v-data-table>
            </v-card>
          </v-container>
        </v-tab-item>

        <!-- tab 2 -->
        <v-tab-item>
          <v-container>
            <v-card flat>
              <!-- ข้อมูลทั่วไปทางเทคนิค / ຂໍ້ມູນທົ່ວໄປທາງດ້ານເຕັກນິກ -->
              <v-card-title class="d-block pa-2 grey lighten-1 black--text">
                {{ $t('company_license_register_page.tab_2.title_1.title_name') }}
              </v-card-title>

              <!-- row 1 -->
              <v-row dense class="align-center">
                <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                  <v-text-field
                  v-model="item_det_id"
                  readonly
                  :label="$t('company_license_register_page.tab_2.title_1.item_code')"
                  hide-details
                  filled
                  ></v-text-field>
                </v-col>

                <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                  <v-text-field
                  v-model="item_car_type"
                  readonly
                  :label="$t('company_license_register_page.tab_2.title_1.item_car_type')"
                  hide-details
                  filled
                  ></v-text-field>
                </v-col>

                <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                  <v-text-field
                  v-model="item_car_brand"
                  readonly
                  :label="$t('company_license_register_page.tab_2.title_1.item_brand')"
                  hide-details
                  filled
                  ></v-text-field>
                </v-col>

                <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                  <v-text-field
                  v-model="item_car_gen"
                  readonly
                  :label="$t('company_license_register_page.tab_2.title_1.item_gen')"
                  hide-details
                  filled
                  ></v-text-field>
                </v-col>
              </v-row>
              <!-- row 2 -->
              <v-row dense class="align-center">
                <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                  <v-text-field
                  v-model="item_car_power"
                  readonly
                  :label="$t('company_license_register_page.tab_2.title_1.item_CC')"
                  hide-details
                  filled
                  ></v-text-field>
                </v-col>

                <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                  <v-text-field
                  v-model="item_standard"
                  readonly
                  :label="$t('company_license_register_page.tab_2.title_1.item_technical_standard')"
                  hide-details
                  filled
                  ></v-text-field>
                </v-col>

                <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                  <v-text-field
                  v-model="item_car_used"
                  readonly
                  :label="$t('company_license_register_page.tab_2.title_1.item_life_time')"
                  hide-details
                  filled
                  ></v-text-field>
                </v-col>

                <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                  <v-text-field
                  v-model="item_car_steering"
                  readonly
                  :label="$t('company_license_register_page.tab_2.title_1.item_salvation')"
                  hide-details
                  filled
                  ></v-text-field>
                </v-col>
              </v-row>
              <!-- row 3 -->
              <v-row dense class="align-center">
                <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                  <v-text-field
                  v-model="item_car_seat"
                  readonly
                  :label="$t('company_license_register_page.tab_2.title_1.item_seat_number')"
                  hide-details
                  filled
                  ></v-text-field>
                </v-col>

                <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                  <v-text-field
                  v-model="item_car_manufacture"
                  readonly
                  :label="$t('company_license_register_page.tab_2.title_1.item_manufacture_year')"
                  hide-details
                  filled
                  ></v-text-field>
                </v-col>

                <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                  <v-text-field
                  v-model="item_car_height"
                  readonly
                  :label="$t('company_license_register_page.tab_2.title_1.item_height')"
                  hide-details
                  filled
                  ></v-text-field>
                </v-col>

                <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                  <v-text-field
                  v-model="item_car_long"
                  readonly
                  :label="$t('company_license_register_page.tab_2.title_1.item_length')"
                  hide-details
                  filled
                  ></v-text-field>
                </v-col>
              </v-row>
              <!-- row 4 -->
              <v-row dense class="align-center">
                <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                  <v-text-field
                  v-model="item_car_wide"
                  readonly
                  :label="$t('company_license_register_page.tab_2.title_1.item_wide')"
                  hide-details
                  filled
                  ></v-text-field>
                </v-col>

                <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                  <v-text-field
                  v-model="item_car_wheels"
                  readonly
                  :label="$t('company_license_register_page.tab_2.title_1.item_wheel')"
                  hide-details
                  filled
                  ></v-text-field>
                </v-col>

                <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                  <v-text-field
                  v-model="item_car_axels"
                  readonly
                  :label="$t('company_license_register_page.tab_2.title_1.item_axels')"
                  hide-details
                  filled
                  ></v-text-field>
                </v-col>

                <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                  <v-text-field
                  v-model="item_car_weight"
                  readonly
                  :label="$t('company_license_register_page.tab_2.title_1.item_weight')"
                  hide-details
                  filled
                  ></v-text-field>
                </v-col>
              </v-row>
              <!-- row 5 -->
              <v-row dense class="align-center">
                <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                  <v-text-field
                  v-model="item_car_gas"
                  readonly
                  :label="$t('company_license_register_page.tab_2.title_1.item_energy')"
                  hide-details
                  filled
                  ></v-text-field>
                </v-col>

                <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                  <v-text-field
                  v-model="item_car_total_weight"
                  readonly
                  :label="$t('company_license_register_page.tab_2.title_1.item_total_weight')"
                  hide-details
                  filled
                  ></v-text-field>
                </v-col>

                <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                  <v-text-field
                  v-model="item_det_unit"
                  readonly
                  :label="$t('company_license_register_page.tab_2.title_1.item_amount')"
                  hide-details
                  filled
                  ></v-text-field>
                </v-col>

                <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                  <v-text-field
                  v-model="item_det_price"
                  readonly
                  :label="$t('company_license_register_page.tab_2.title_1.item_price')"
                  suffix="$usd"
                  hide-details
                  filled
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-card>
            <!-- ข้อกำหนดทางเทคนิคสำหรับรถยนต์ / ຂໍ້ມູນສະເພາະທາງດ້ານເຕັກນິກສຳລັບລົດ -->
            <v-card-title class="d-block mt-2 pa-2 grey lighten-1 black--text">
              {{ $t('company_license_register_page.tab_2.title_2.title_name') }}
            </v-card-title>
            <v-card class="mx-auto mt-3">
              <v-data-table
                :headers="tech_cars"
                :items="carWithIndex"
                :items-per-page="10"
                class="elevation-1"
              ></v-data-table>
            </v-card>
            <!-- เอกสารแนบ / ເອກະສານຄັດຕິດ -->
            <v-card-title
              class="d-block mt-2 pa-2 grey lighten-1 black--text"
            >{{ $t('company_license_register_page.tab_2.title_3.title_name') }}</v-card-title>
            <v-card class="mx-auto mt-3">
              <v-data-table
              :headers="doc"
              :items="docWithIndex"
              :items-per-page="10"
              class="elevation-1"
              >
              <template v-slot:item.app_doc_filename="{ item }">
                  <v-row>
                    <v-col class="align-center">
                      <a @click="openFile(item)" class="black--text">{{ showFilename(item) }}</a>
                    </v-col>
                  </v-row>
                </template>

                <template v-slot:item.app_doc_type_id="{ item }">
                  <v-row v-for="doc in doc_type" :key="doc.app_doc_type_id">
                    <v-col v-if="item.app_doc_type_id === doc.app_doc_type_id">
                      {{ doc.app_doc_type_name }}
                    </v-col>
                  </v-row>
                </template>
              </v-data-table>
            </v-card>
          </v-container>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
    <!-- for staff -->
    <v-card class="mt-5 py-4 elevation-10">
      <div class style="width: 100%">
        <v-divider class="black mx-3"></v-divider>
        <div class="title text-center py-2">
          <h3>{{ $t('register_submit_page.staff_title_text') }}</h3>
          
        </div>
        <v-divider class="black mx-3"></v-divider>

        <v-form ref="form" v-model="valid" class="px-3 mt-8">
          <v-flex xs12 sm12 md12 lg12 no-gutters class="mt-4">
            <v-row dense class="align-center mx-4">
              <v-col cols="12" xs="12" sm="12" md="4" lg="4">
                <v-select
                v-model="staff_ministry"
                :label="$t('company_license_register_page.tab_1.title_3.ministry_approve')"
                :items="select_ministry"
                item-text="ministry_name"
                :rules="[rules.require]"
                filled
                ></v-select>
              </v-col>
              <v-col cols="12" xs="12" sm="12" md="4" lg="4">
                <v-select
                v-model="staff_department"
                :label="$t('company_license_register_page.tab_1.title_3.license_department')"
                :items="select_department"
                item-text="department_name"
                :rules="[rules.require]"
                filled
                ></v-select>
              </v-col>
              <v-col cols="12" xs="12" sm="12" md="4" lg="4">
                <v-select
                v-model="staff_taxoffice"
                :label="$t('company_license_register_page.tab_1.title_3.tax_office')"
                :items="select_taxoffice"
                item-text="taxoffice_name"
                item_value="taxoffice_id"
                :rules="[rules.require_taxoffice]"
                return-object
                filled
                ></v-select>
              </v-col>
            </v-row>
          </v-flex>
                
          <v-flex xs12 sm12 md12 lg12 no-gutters>
            <v-row dense class="align-center mx-4">
              <v-col cols="12" xs="12" sm="12" md="4" lg="4">
                <v-select
                v-model="staff_status"
                :label="$t('register_submit_page.staff_status_select')"
                :items="select_status"
                item-text="app_status_name"
                item-value="app_status_id"
                :rules="[rules.require_status]"
                return-object
                filled
                ></v-select>
              </v-col>
              <v-col cols="12" xs="12" sm="12" md="8" lg="8">
                <v-text-field
                v-model="staff_note"
                :label="$t('register_submit_page.staff_note_field')"
                :rules="[rules.require]"
                filled
                ></v-text-field>
              </v-col>
            </v-row>
          </v-flex>
          <v-row class="px-8 justify-end mb-4">
            <v-btn :disabled="!valid" @click="submit" min-width="200" class="success">{{ $t('register_submit_page.submit_button') }}</v-btn>
          </v-row>
        </v-form>

      </div>
    </v-card>

    <v-dialog v-model="loadDialog" persistent width="300">
      <v-card color="primary" dark>
        <v-card-text>
          {{ $t('loading') }}
          <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-dialog v-model="savedDialog" persistent width="300">
      <v-card color="success" dark>
        <v-card-text>
          {{ $t('saving') }}
          <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
const axios = require("axios")
import firebase from "firebase"

export default {
  data() {
    return {
      rules: {
        require: value => !!value || "required",
        require_taxoffice: value => value.taxoffice_id !== null || 'required',
        require_status: value => value.app_status_id !== 0 || 'required'
      },
      valid: true,
      savedDialog: false,
      loadDialog: false,
      tabs_header: [
        this.$t("company_license_register_page.tab_header_1"),
        this.$t("company_license_register_page.tab_header_2")
      ],
      tabs: null,
      tax_number: '',
      country: '',
      province: '',
      district: '',
      village: '',
      email: '',
      tel: '',
      fax: '',
      comp_id: '',
      app_id: '',
      app_date_req: '',
      app_type: '',
      app_licence_type: '',
      app_purpose: '',
      app_note: '',
      app_comment: '',
      item_det_id: '',
      item_car_type: '',
      item_car_brand: '',
      item_car_gen: '',
      item_car_power: '',
      item_standard: '',
      item_car_used: '',
      item_car_steering: '',
      item_car_seat: '',
      item_car_manufacture: '',
      item_car_height: '',
      item_car_long: '',
      item_car_wide: '',
      item_car_wheels: '',
      item_car_axels: '',
      item_car_weight: '',
      item_car_gas: '',
      item_car_total_weight: '',
      item_det_unit: '',
      item_det_price: '',
      product: [
        { text: this.$t('company_license_register_page.tab_1.title_4.header_product_detail'), sortable: false, value: 'item_det_detail' },
        { text: this.$t('company_license_register_page.tab_1.title_4.header_price'), value: 'item_det_price' },
        { text: this.$t('company_license_register_page.tab_1.title_4.header_amount'), value: 'item_det_unit' },
        { text: this.$t('company_license_register_page.tab_1.title_4.header_total'), sortable: false, value: 'item_det_total' }
      ],
      product_list: [],
      tech_cars: [
        { text: this.$t('company_license_register_page.tab_2.title_2.header_no'), align: 'left', value: 'index' },
        { text: this.$t('company_license_register_page.tab_2.title_2.header_engine_number'), value: 'engine_number' },
        { text: this.$t('company_license_register_page.tab_2.title_2.header_tank_number'), value: 'tank_number' },
        { text: this.$t('company_license_register_page.tab_2.title_2.header_color'), value: 'color' }
      ],
      tech_cars_list: [],
      doc: [
        { text: this.$t('company_license_register_page.tab_2.title_3.header_no'), align: 'left', value: 'index' },
        { text: this.$t('company_license_register_page.tab_2.title_3.header_file_name'), value: 'app_doc_filename' },
        { text: this.$t('company_license_register_page.tab_2.title_3.header_file_type'), value: 'app_doc_type_id' },
        {text: this.$t("company_license_register_page.tab_2.title_3.header_file_date_upload"), value: "app_doc_date"}
      ],
      doc_list: [],
      doc_type: [],
      staff_ministry: '',
      select_ministry: [],
      staff_department: '',
      select_department: [],
      staff_taxoffice: {taxoffice_id: null, taxoffice_name: null},
      select_taxoffice: [],
      staff_status: {app_status_id: 0, app_status_name: 'wait'},
      select_status: [],
      staff_note: '',
      app_detail_id: null
    }
  },
  beforeCreate() {
    this.$store.dispatch("currentPage/setCurrentPage", this.$route.name)
  },
  created() {
    let localUser = localStorage.getItem("localUser")
    localUser = JSON.parse(localUser)
    try {
      if (localUser === null || localUser === undefined) {
        this.$router.replace({ name: "Login" })
      } else {
        if (localUser.type === "staff") {
          this.loadDialog = true
          const app_id = this.$route.params.id
          axios.get(`https://us-central1-laos-single-window.cloudfunctions.net/function/staff/licence/${app_id}`)
          .then(async res => {
            console.log(res)
            await this.setData(res.data)
          })
          .catch(err => {
            console.log(err)
          })
        } else {
          localStorage.clear()
          this.$router.replace({ name: "Staff-License-List" })
        }
      }
    } catch {
      localStorage.clear()
      this.$router.replace({ name: "Login" })
    }
  },
  computed: {
    carWithIndex () {
      return this.tech_cars_list.map(
        (tech_cars_list, index) => ({
          ...tech_cars_list,
          index: index + 1
        })
      )
    },
    docWithIndex () {
      return this.doc_list.map(
        (doc_list, index) => ({
          ...doc_list,
          index: index + 1
        })
      )
    }
  },
  methods: {
    showFilename (item) {
      let fileName = item.app_doc_filename
      fileName = fileName.split('__')
      const index = fileName.length - 1
      return fileName[index]
    },
    setData(data) {
      this.comp_id = data.comp_data.comp_id;
      this.tax_number = data.comp_data.comp_taxnumber;
      this.country = data.comp_data.comp_country;
      this.province = data.comp_data.comp_province;
      this.district = data.comp_data.comp_district;
      this.village = data.comp_data.comp_village;
      this.email = data.comp_data.comp_email;
      this.tel = data.comp_data.comp_tel;
      this.fax = data.comp_data.comp_fax;
      this.app_id = data.app_data.app_id
      this.app_date_req = data.app_data.app_date_req
      this.app_type = data.app_data.app_type
      this.app_licence_type = data.app_data.app_licence_type
      this.app_purpose = data.app_data.app_purpose
      this.app_note = data.app_data.app_note
      this.app_comment = data.app_data.app_comment
      this.item_det_id = data.item_data.item_det_id
      this.item_car_type = data.item_data.item_car_type
      this.item_car_brand = data.item_data.item_car_brand
      this.item_car_gen = data.item_data.item_car_gen
      this.item_car_power = data.item_data.item_car_power
      this.item_standard = data.item_data.item_standard
      this.item_car_used = data.item_data.item_car_used
      this.item_car_steering = data.item_data.item_car_steering
      this.item_car_seat = data.item_data.item_car_seat
      this.item_car_manufacture = data.item_data.item_car_manufacture
      this.item_car_height = data.item_data.item_car_height
      this.item_car_long = data.item_data.item_car_long
      this.item_car_wide = data.item_data.item_car_wide
      this.item_car_wheels = data.item_data.item_car_wheels
      this.item_car_axels = data.item_data.item_car_axels
      this.item_car_weight = data.item_data.item_car_weight
      this.item_car_gas = data.item_data.item_car_gas
      this.item_car_total_weight = data.item_data.item_car_total_weight
      this.item_det_unit = data.item_data.item_det_unit
      this.item_det_price = data.item_data.item_det_price
      this.product_list.push(data.item_data)
      this.tech_cars_list = data.item_data.item_car_tech
      this.doc_list = data.doc_data
      this.doc_type = data.doc_type_data
      this.select_ministry = data.ministry_data
      this.select_department = data.department_data
      this.select_taxoffice = data.taxoffice_data
      this.select_status = data.status_data
      this.app_detail_id = data.app_data.app_detail_id
      this.loadDialog = false;
    },
    async submit() {
      this.savedDialog = true;
      const user = JSON.parse(localStorage.getItem('localUser'))
      let time = await this.getTime(0)
      let expire = await this.getTime(31556926000)
      if (this.staff_status.app_status_id === 2) {
        expire = null
      }
      const data = {
        app_data: {
          app_ministry_licence: this.staff_ministry,
          app_taxoffice_id: this.staff_taxoffice.taxoffice_id,
          app_department_licence: this.staff_department,
          app_detail_date_approve: time,
          app_date_expire : expire,
          app_status_id: this.staff_status.app_status_id,
          app_detail_id: this.app_detail_id
        },
        app_detail_data: {
          app_detail_id: this.app_detail_id,
          app_detail_note: this.staff_note,
          app_detail_date_approve: time,
          app_staff_fname: null
        },
        staff: user.username,
        app_id: this.app_id
      }
      await axios.post('https://us-central1-laos-single-window.cloudfunctions.net/function/staff/licence',data)
      .then(async res => {
        this.savedDialog = false
        this.$router.replace( { name: 'Staff-License-List' } )
        // this.$router.go(-1)
      })
      .catch(err => {
        console.log(err)
      })
    },
    getTime (value) {
      var months_arr = ['01','02','03','04','05','06','07','08','09','10','11','12'];
      var date = new Date(Date.now() + value)
      var year = date.getFullYear()
      var month = months_arr[date.getMonth()]
      var day = date.getDate()
      var hours = date.getHours()
      var minutes = "0" + date.getMinutes()
      var seconds = "0" + date.getSeconds()
      var dateTime = year + '-' + month + '-' + day +'  ' + hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2)
      
      return dateTime
    },
    async openFile (item) {
      this.loadDialog = true
      const fileName = item.app_doc_filename

      await firebase.storage().ref(fileName).getDownloadURL().then(url => {
        window.open(url)
        this.loadDialog = false
      })
    }
  }
}
</script>