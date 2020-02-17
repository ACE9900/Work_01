<template>
  <v-container>
    <v-card>
      <v-form ref="form" v-model="valid">
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
                <div v-if="isComment">
                  <v-card-title 
                  class="d-block pa-2 warning white--text"
                  exact-active-class="green">
                    {{ $t('staff_comment') }}
                  </v-card-title>

                  <v-text-field
                      v-model="app_detail_note"
                      readonly
                      hide-details
                      filled
                    ></v-text-field>
                </div>
                <!-- รายละเอียดผู้เสนอ / ລາຍລະອຽດຂອງຜູ້ສະ ເໜ -->
                <v-card-title
                  class="d-block mt-4 pa-2 grey lighten-1 black--text"
                  exact-active-class="green"
                >{{ $t('company_license_register_page.tab_1.title_1_2.title_1_name') }}</v-card-title>
                <!-- row 1 -->
                <v-row dense class="align-center">
                  <v-col cols="12" xs="12" sm="12" md="4" lg="4">
                    <v-text-field
                      v-model="username"
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
                      v-model="username"
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
                <v-row dense class="align-center mt-4">
                  <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                    <v-select
                      v-model="app_type"
                      :items="item_app_type"
                      :label="$t('company_license_register_page.tab_1.title_3.app_type')"
                      item-text="app_type_name"
                      item-value="id"
                      :rules="[rules.require]"
                      :readonly="isApprove"
                      filled
                    ></v-select>
                  </v-col>
                  <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                    <v-select
                      v-model="app_licence_type"
                      :items="item_app_licence_type"
                      :label="$t('company_license_register_page.tab_1.title_3.license_type')"
                      item-text="app_licence_name"
                      item-value="id"
                      :rules="[rules.require]"
                      :readonly="isApprove"
                      filled
                    ></v-select>
                  </v-col>
                </v-row>
                <!-- row 2 -->
                <v-row dense class="align-center">
                  <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                    <v-select
                      v-model="app_purpose"
                      :items="item_app_purpose"
                      :label="$t('company_license_register_page.tab_1.title_3.app_purpose')"
                      item-text="purpose_name"
                      :rules="[rules.require]"
                      :readonly="isApprove"
                      filled
                    ></v-select>
                  </v-col>
                  <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                    <v-text-field
                      v-model="app_note"
                      :label="$t('company_license_register_page.tab_1.title_3.app_note')"
                      :rules="[rules.require, rules.firstIndex]"
                      :readonly="isApprove"
                      filled
                    ></v-text-field>
                  </v-col>
                </v-row>
                <!-- row 3 -->
                <v-row dense class="align-center">
                  <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                    <v-text-field
                      v-model="app_comment"
                      :label="$t('company_license_register_page.tab_1.title_3.app_comment')"
                      :rules="[rules.require, rules.firstIndex]"
                      :readonly="isApprove"
                      filled
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-card>
            </v-container>
          </v-tab-item>

          <!-- tab 2 -->
          <v-tab-item>
            <v-container>
              <v-card flat>
                <!-- ข้อมูลทั่วไปทางเทคนิค / ຂໍ້ມູນທົ່ວໄປທາງດ້ານເຕັກນິກ -->
                <v-card-title
                  class="d-block pa-2 grey lighten-1 black--text"
                >{{ $t('company_license_register_page.tab_2.title_1.title_name') }}</v-card-title>

                <!-- row 1 -->
                <v-row dense class="align-center">
                  <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                    <v-select
                      v-model="item_car_type"
                      :items="select_car_type"
                      item-text="car_type_name"
                      :label="$t('company_license_register_page.tab_2.title_1.item_car_type')"
                      :rules="[rules.require]"
                      :readonly="isApprove"
                      filled
                    ></v-select>
                  </v-col>

                  <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                    <v-text-field
                      v-model="item_car_brand"
                      :label="$t('company_license_register_page.tab_2.title_1.item_brand')"
                      :rules="[rules.require, rules.space]"
                      :readonly="isApprove"
                      filled
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                    <v-text-field
                      v-model="item_car_gen"
                      :label="$t('company_license_register_page.tab_2.title_1.item_gen')"
                      :rules="[rules.require, rules.firstIndex]"
                      :readonly="isApprove"
                      filled
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                    <v-text-field
                      v-model="item_car_power"
                      :label="$t('company_license_register_page.tab_2.title_1.item_CC')"
                      :rules="[rules.require, rules.number, rules.space]"
                      :readonly="isApprove"
                      filled
                    ></v-text-field>
                  </v-col>
                </v-row>
                <!-- row 2 -->
                <v-row dense class="align-center">
                  <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                    <v-select
                      v-model="item_standard"
                      :items="select_car_standard"
                      item-text="standard_name"
                      :label="$t('company_license_register_page.tab_2.title_1.item_technical_standard')"
                      :rules="[rules.require]"
                      :readonly="isApprove"
                      @input="checkStandard"
                      filled
                    ></v-select>
                  </v-col>
                  <!-- Show this column if approved -->
                  <v-col v-if="isApprove" cols="12" xs="12" sm="12" md="3" lg="3">
                    <v-text-field
                      v-model="item_car_used"
                      :label="$t('company_license_register_page.tab_2.title_1.item_life_time')"
                      readonly
                      filled
                    ></v-text-field>
                  </v-col>
                  <!-- Show this column if don't approve -->
                  <v-col v-else cols="12" xs="12" sm="12" md="3" lg="3">
                    <!-- If standard = 100% dont'fill this field -->
                    <v-text-field
                      v-if="isStandard"
                      disabled
                      v-model="item_car_used"
                      :label="$t('company_license_register_page.tab_2.title_1.item_life_time')"
                      filled
                    ></v-text-field>

                    <v-text-field
                      v-if="isHundred"
                      v-model="item_car_used"
                      :label="$t('company_license_register_page.tab_2.title_1.item_life_time')"
                      :rules="[rules.require, rules.number, rules.space]"
                      filled
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                    <v-select
                      v-model="item_car_steering"
                      :items="select_car_steering"
                      item-text="steering_name"
                      :label="$t('company_license_register_page.tab_2.title_1.item_salvation')"
                      :rules="[rules.require]"
                      :readonly="isApprove"
                      filled
                    ></v-select>
                  </v-col>

                  <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                    <v-text-field
                      v-model="item_car_seat"
                      :label="$t('company_license_register_page.tab_2.title_1.item_seat_number')"
                      :rules="[rules.require, rules.number, rules.space]"
                      :readonly="isApprove"
                      filled
                    ></v-text-field>
                  </v-col>
                </v-row>
                <!-- row 3 -->
                <v-row dense class="align-center">
                  <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                    <v-menu
                      v-if="!isApprove"
                      v-model="manufac_picker"
                      :close-on-content-click="false"
                      :nudge-right="40"
                      transition="scale-transition"
                      offset-y
                      min-width="290px"
                    >
                      <template v-slot:activator="{ on }">
                        <v-text-field
                          v-model="item_car_manufacture"
                          :label="$t('company_license_register_page.tab_2.title_1.item_manufacture_year')"
                          :rules="[rules.require]"
                          readonly
                          filled
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker v-model="item_car_manufacture" @input="manufac_picker = false"></v-date-picker>
                    </v-menu>

                    <v-text-field
                      v-else
                      v-model="item_car_manufacture"
                      :label="$t('company_license_register_page.tab_2.title_1.item_manufacture_year')"
                      readonly
                      filled
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                    <v-text-field
                      v-model="item_car_height"
                      :label="$t('company_license_register_page.tab_2.title_1.item_height')"
                      :rules="[rules.require, rules.number, rules.space]"
                      :readonly="isApprove"
                      filled
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                    <v-text-field
                      v-model="item_car_long"
                      :label="$t('company_license_register_page.tab_2.title_1.item_length')"
                      :rules="[rules.require, rules.number, rules.space]"
                      :readonly="isApprove"
                      filled
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                    <v-text-field
                      v-model="item_car_wide"
                      :label="$t('company_license_register_page.tab_2.title_1.item_wide')"
                      :rules="[rules.require, rules.number, rules.space]"
                      :readonly="isApprove"
                      filled
                    ></v-text-field>
                  </v-col>
                </v-row>
                <!-- row 4 -->
                <v-row dense class="align-center">
                  <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                    <v-text-field
                      v-model="item_car_wheels"
                      :label="$t('company_license_register_page.tab_2.title_1.item_wheel')"
                      :rules="[rules.require, rules.number, rules.space]"
                      :readonly="isApprove"
                      filled
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                    <v-text-field
                      v-model="item_car_axels"
                      :label="$t('company_license_register_page.tab_2.title_1.item_axels')"
                      :rules="[rules.require, rules.number, rules.space]"
                      :readonly="isApprove"
                      filled
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                    <v-text-field
                      v-model="item_car_weight"
                      :label="$t('company_license_register_page.tab_2.title_1.item_weight')"
                      :rules="[rules.require, rules.space, rules.number]"
                      :readonly="isApprove"
                      filled
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                    <v-select
                      v-model="item_car_gas"
                      :items="select_car_gas"
                      item-text="gas_name"
                      :label="$t('company_license_register_page.tab_2.title_1.item_energy')"
                      :rules="[rules.require]"
                      :readonly="isApprove"
                      filled
                    ></v-select>
                  </v-col>
                </v-row>
                <!-- row 5 -->
                <v-row dense class="align-center">
                  <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                    <v-text-field
                      v-model="item_car_total_weight"
                      :label="$t('company_license_register_page.tab_2.title_1.item_total_weight')"
                      :rules="[rules.require, rules.number, rules.space]"
                      :readonly="isApprove"
                      filled
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                    <v-text-field
                      v-model="item_det_unit"
                      :label="$t('company_license_register_page.tab_2.title_1.item_amount')"
                      :rules="[rules.require, rules.number, rules.space]"
                      :readonly="isApprove"
                      filled
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                    <v-text-field
                      v-model="item_det_price"
                      :label="$t('company_license_register_page.tab_2.title_1.item_price')"
                      suffix="$usd"
                      :rules="[rules.require, rules.number, rules.space]"
                      :readonly="isApprove"
                      filled
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-card>
              <!-- ข้อกำหนดทางเทคนิคสำหรับรถยนต์ / ຂໍ້ມູນສະເພາະທາງດ້ານເຕັກນິກສຳລັບລົດ -->
              <v-card-title class="d-block mt-2 pa-2 grey lighten-1 black--text">
                <v-row class="mx-1 justify-space-between">
                  {{ $t('company_license_register_page.tab_2.title_2.title_name') }}
                  <v-btn v-if="!isApprove" text small class="primary" @click="carDialog = !carDialog">
                    <v-icon>mdi-plus-circle-outline</v-icon>
                  </v-btn>
                </v-row>
              </v-card-title>
              <v-card class="mx-auto mt-3">
                <v-data-table
                  v-if="isApprove"
                  :headers="tech_cars"
                  :items="carWithIndex"
                  :items-per-page="10"
                  class="elevation-1">
                </v-data-table>
                
                <v-data-table
                  v-else
                  :headers="tech_cars"
                  :items="carWithIndex"
                  :items-per-page="10"
                  class="elevation-1"
                >
                  <template v-if="!isApprove" v-slot:item.action="{ item }">
                    <v-icon @click="deleteCar(item)">mdi-close</v-icon>
                  </template>

                  <template v-slot:item.engine_number="props">
                    <v-edit-dialog
                      :return-value.sync="props.item.engine_number"
                      large
                      @save="editCar(props.item.engine_number, props.item.index, 'engine_number')"
                    > {{ props.item.engine_number }}
                      <template v-slot:input>
                        <v-text-field
                        class="mx-3"
                        v-model="props.item.engine_number"
                        :rules="[rules.require, rules.space]"
                        :label="$t('company_license_register_page.tab_2.car_dialog.engine_number')"
                        single-line
                        ></v-text-field>
                      </template>
                    </v-edit-dialog>
                  </template>

                  <template v-slot:item.tank_number="props">
                    <v-edit-dialog
                      :return-value.sync="props.item.tank_number"
                      large
                      @save="editCar(props.item.tank_number, props.item.index, 'tank_number')"
                    > {{ props.item.tank_number }}
                      <template v-slot:input>
                        <v-row class="align-center">
                          <v-text-field
                          class="mx-3"
                          v-model="props.item.tank_number"
                          :rules="[rules.require, rules.space]"
                          :label="$t('company_license_register_page.tab_2.car_dialog.tank_number')"
                          single-line
                          ></v-text-field>
                        </v-row>
                      </template>
                    </v-edit-dialog>
                  </template>

                  <template v-slot:item.color="props">
                    <v-edit-dialog
                      :return-value.sync="props.item.color"
                      large
                      @save="editCar(props.item.color, props.item.index, 'color')"
                    > {{ props.item.color }}
                      <template v-slot:input>
                        <v-row class="align-center">
                          <v-select
                          class="mx-3"
                          :items="select_car_color"
                          item-text="color_name"
                          v-model="props.item.color"
                          :rules="[rules.require]"
                          :label="$t('company_license_register_page.tab_2.car_dialog.color')"
                          single-line
                          ></v-select>
                        </v-row>
                      </template>
                    </v-edit-dialog>
                  </template>

                </v-data-table>
              </v-card>
              <!-- เอกสารแนบ / ເອກະສານຄັດຕິດ -->
              <v-card-title class="d-block mt-2 pa-2 grey lighten-1 black--text">
                <v-row class="mx-1 justify-space-between">
                  {{ $t('company_license_register_page.tab_2.title_3.title_name') }}
                  <v-btn v-if="!isApprove" text small class="primary" @click="docDialog = !docDialog">
                    <v-icon>mdi-plus-circle-outline</v-icon>
                  </v-btn>
                </v-row>
              </v-card-title>
              <v-card class="mx-auto mt-3">
                <v-data-table
                  :headers="doc"
                  :items="docWithIndex"
                  :items-per-page="10"
                  class="elevation-1"
                >
                  <template v-if="!isApprove" v-slot:item.action="{ item }">
                    <v-icon @click="deleteFile(item)">mdi-close</v-icon>
                  </template>

                  <template v-slot:item.app_doc_filename="{ item }">
                    <v-row>
                      <v-col class="align-center">
                       <a @click="openFile(item)" class="black--text">{{ showFilename(item) }}</a>
                      </v-col>
                    </v-row>
                  </template>

                  <template v-slot:item.app_doc_type_id="{ item }">
                    <v-row v-for="doc_type in select_doc_type" :key="doc_type.app_doc_type_id">
                      <v-col v-if="item.app_doc_type_id === doc_type.app_doc_type_id">
                        {{ doc_type.app_doc_type_name }}
                      </v-col>
                    </v-row>
                  </template>
                </v-data-table>
              </v-card>
            </v-container>
          </v-tab-item>
        </v-tabs-items>
        <v-row v-if="isApprove" class="mx-2 align-center">
          <v-btn :disabled="!valid" @click="submit" block class="primary mb-2">{{ $t('company_license_register_page.print_btn') }}</v-btn>
        </v-row>
        <v-row v-else class="mx-2 align-center">
          <v-btn :disabled="submit_btn" @click="submit" block class="success mb-2">{{ $t('company_license_register_page.save_btn') }}</v-btn>
        </v-row>
      </v-form>
    </v-card>
    <!-- Add car dialog -->
    <v-dialog v-model="carDialog" persistent max-width="600px">
      <v-card>
        <v-card-title class="headline">{{ $t('company_license_register_page.tab_2.car_dialog.title') }}</v-card-title>
        <v-card-text>
          <v-form ref="form" v-model="carValid" class="px-3 mt-8">
            <v-row dense class="align-center">
              <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                <v-text-field
                  v-model="dialog_engine_number"
                  :label="$t('company_license_register_page.tab_2.car_dialog.engine_number')"
                  :rules="[rules.require, rules.space]"
                  filled
                  dense
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row dense class="align-center">
              <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                <v-text-field
                  v-model="dialog_tank_number"
                  :label="$t('company_license_register_page.tab_2.car_dialog.tank_number')"
                  :rules="[rules.require, rules.space]"
                  filled
                  dense
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row dense class="align-center">
              <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                <v-select
                  v-model="dialog_car_color"
                  :items="select_car_color"
                  item-text="color_name"
                  :label="$t('company_license_register_page.tab_2.car_dialog.color')"
                  :rules="[rules.require]"
                  filled
                  dense
                ></v-select>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" @click="carDialog = !carDialog">{{ $t('company_license_register_page.tab_2.car_dialog.cancel_btn') }}</v-btn>
          <v-btn :disabled="!carValid" color="success" @click="addCar">{{ $t('company_license_register_page.tab_2.car_dialog.add_btn') }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- Add document dialog -->
    <v-dialog v-model="docDialog" persistent max-width="600px">
      <v-card>
        <v-card-title class="headline">{{ $t('company_license_register_page.tab_2.doc_dialog.title') }}</v-card-title>
        <v-card-text>
          <v-form ref="form" v-model="docValid" class="px-3 mt-8">
            <v-row dense class="align-center">
              <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                <v-file-input
                ref="fileUpload"
                :label="$t('company_license_register_page.tab_2.doc_dialog.input_file')"
                @change="previewFile"
                :rules="[rules.file_size, rules.require]"
                show-size
                filled
                ></v-file-input>
              </v-col>
            </v-row>
            <v-row dense class="align-center">
              <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                <v-select
                :items="select_doc_type"
                item-text="app_doc_type_name"
                :label="$t('company_license_register_page.tab_2.doc_dialog.doc_type')"
                :rules="[rules.require_doc_type]"
                v-model="doc_type"
                return-object
                filled
                ></v-select>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" @click="docDialog = !docDialog">{{ $t('company_license_register_page.tab_2.doc_dialog.cancel_btn') }}</v-btn>
          <v-btn :disabled="!docValid" color="success" @click="uploadFile">{{ $t('company_license_register_page.tab_2.doc_dialog.add_btn') }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- Load & Save dialog -->
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
</template>

<script>
import firebase, { firestore } from "firebase"
const axios = require("axios")

export default {
  data() {
    return {
      isComment: false,
      isStandard: false,
      isHundred: false,
      isApprove: false,
      app_id: null,
      app_detail_note: '',
      // Snackbar
      snack: false,
      snackText: '',
      snackColor: '',
      // Rule
      rules: {
        require: value => !!value || "required",
        firstIndex: value => value.substring(0,1) !== ' ' || "First index must not space",
        space: value => (value || "").indexOf(" ") < 0 || "No spaces are allowed",
        number: value => !isNaN(value) || "Must be a number",
        require_doc_type: value => value.app_doc_type_id !== null || "required",
        file_size: value => !value || value.size < 5000000 || 'File size should be less than 5 MB',
      },
      // Car dialog
      carValid: true,
      dialog_engine_number: '',
      dialog_tank_number: '',
      dialog_car_color: '',
      select_car_color: [],
      carDialog: false,
      // Load & Save dialog
      dialog: false,
      dialog_color: '',
      dialog_text: '',
      // Tab header
      tabs_header: [
        { id: 0, name: this.$t("company_license_register_page.tab_header_1")},
        { id: 1, name: this.$t("company_license_register_page.tab_header_2")}
      ],
      tabs: '',
      // Form tab 1
      valid: true,
      username: '',
      tax_number: '',
      country: '',
      province: '',
      district: '',
      village: '',
      email: '',
      tel: '',
      fax: '',
      comp_id: '',
      app_date_req: '',
      app_type: '',
      item_app_type: [],
      app_licence_type: '',
      item_app_licence_type: [],
      app_purpose: '',
      item_app_purpose: [],
      app_number: '',
      app_note: '',
      app_comment: '',
      // Form tab 2
      item_det_id: '',
      item_car_type: '',
      select_car_type: [],
      item_car_brand: '',
      item_car_gen: '',
      item_car_power: '',
      item_standard: '',
      select_car_standard: [],
      life_picker: false,
      item_car_used: '',
      item_car_steering: '',
      select_car_steering: [],
      item_car_seat: '',
      manufac_picker: false,
      item_car_manufacture: '',
      item_car_height: '',
      item_car_long: '',
      item_car_wide: '',
      item_car_wheels: '',
      item_car_axels: '',
      item_car_weight: '',
      item_car_gas: '',
      select_car_gas: [],
      item_car_total_weight: '',
      item_det_unit: '',
      item_det_price: '',
      tech_cars: [
        { 
          text: '',
          align: "right",
          sortable: false,
          value: "action" 
        },
        {
          text: this.$t("company_license_register_page.tab_2.title_2.header_no"),
          align: "left",
          sortable: false,
          value: "index"
        },
        {
          text: this.$t("company_license_register_page.tab_2.title_2.header_engine_number"),
          value: "engine_number"
        },
        {
          text: this.$t("company_license_register_page.tab_2.title_2.header_tank_number"),
          value: "tank_number"
        },
        {
          text: this.$t("company_license_register_page.tab_2.title_2.header_color"),
          value: "color"
        }
      ],
      tech_cars_list: [],
      // Document
      docDialog: false,
      docValid: true,
      doc: [
        {text: ' ', align: "right", sortable: false, value: "action"},
        {text: this.$t("company_license_register_page.tab_2.title_3.header_no"), sortable: false, align: "left", value: "index"},
        {text: this.$t("company_license_register_page.tab_2.title_3.header_file_name"), value: "app_doc_filename"},
        {text: this.$t("company_license_register_page.tab_2.title_3.header_file_type"), value: "app_doc_type_id"},
        {text: this.$t("company_license_register_page.tab_2.title_3.header_file_date_upload"), value: "app_doc_date"}
      ],
      doc_list: [],
      doc_type: {app_doc_type_id: null, app_doc_type_name: ''},
      select_doc_type: [],
      fileData: null,
      fileUpload: null,  
      // upload name
      file_name:"",
      doc_link: null,
      // Check shown save btn
      submit_btn: true
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
        if (localUser.type === "company") {
          this.dialog_text = this.$t('loading')
          this.dialog_color = 'primary'
          this.dialog = true
          const username = localUser.username
          const app_id = this.$route.params.id
          axios
            .get(
              `https://us-central1-laos-single-window.cloudfunctions.net/function/user/licence/detail/${username}/${app_id}`
            )
            .then(async res => {
              await this.setData(res.data)
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
      localStorage.clear();
      this.$router.replace({ name: "Login" })
    }
  },
  watch: {
    doc_list: function () {
      const car_length = this.tech_cars_list.length
      const doc_length = this.doc_list.length
      if (this.valid && car_length > 0 && doc_length > 0) {
        this.submit_btn = false
      } else {
        this.submit_btn = true
      }
    },
    tech_cars_list: function () {
      const car_length = this.tech_cars_list.length
      const doc_length = this.doc_list.length
      if (this.valid && car_length > 0 && doc_length > 0) {
        this.submit_btn = false
      } else {
        this.submit_btn = true
      }
    },
    valid: function () {
      const car_length = this.tech_cars_list.length
      const doc_length = this.doc_list.length
      if (this.valid && car_length > 0 && doc_length > 0) {
        this.submit_btn = false
      } else {
        this.submit_btn = true
      }
    },
    carDialog: function () {
        this.dialog_engine_number = '',
        this.dialog_tank_number = '',
        this.dialog_car_color = ''
    },
    docDialog: function () {
      try {
        this.doc_type = {app_doc_type_id: null, app_doc_type_name: ''}
        this.$refs.fileUpload.reset()
      } catch {
        console.log('Select your file')
      }
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
      if (data.app_data.app_status_id === 1) {
        this.isApprove = true
      } else {
        this.isApprove = false
      }
      if (data.app_detail_data === 'no data' || data.app_data.app_status_id === 1) {
        this.isComment = false 
      } else {
        this.isComment = true
      }
      // Set lookup value
      this.app_id = data.app_data.app_id
      this.username = data.comp_data.comp_id
      this.tax_number = data.comp_data.comp_taxnumber
      this.country = data.comp_data.comp_country
      this.province = data.comp_data.comp_province
      this.district = data.comp_data.comp_district
      this.village = data.comp_data.comp_village
      this.email = data.comp_data.comp_email
      this.tel = data.comp_data.comp_tel
      this.fax = data.comp_data.comp_fax
      this.comp_id = data.comp_data.comp_id
      this.item_app_type = data.app_type_data
      this.item_app_licence_type = data.app_licence_type_data
      this.item_app_purpose = data.purpose_data
      this.select_car_type = data.car_type_data
      this.select_car_standard = data.standard_data
      this.select_car_steering = data.steering_data
      this.select_car_gas = data.gas_data
      this.select_car_color = data.color_data
      this.select_doc_type = data.doc_type_data
      // Set field value
      this.app_detail_note = data.app_detail_data.app_detail_note
      this.app_type = data.app_data.app_type
      this.app_licence_type = data.app_data.app_licence_type
      this.app_purpose = data.app_data.app_purpose
      this.app_note = data.app_data.app_note
      this.app_comment = data.app_data.app_comment
      this.item_car_type = data.item_data.item_car_type
      this.item_car_brand = data.item_data.item_car_brand
      this.item_car_gen = data.item_data.item_car_gen
      this.item_car_power = String(data.item_data.item_car_power)
      this.item_standard = data.item_data.item_standard
      this.checkStandard()
      this.item_car_used = data.item_data.item_car_used
      this.item_car_steering = data.item_data.item_car_steering
      this.item_car_seat = String(data.item_data.item_car_seat)
      this.item_car_manufacture = data.item_data.item_car_manufacture
      this.item_car_height = String(data.item_data.item_car_height)
      this.item_car_long = String(data.item_data.item_car_long)
      this.item_car_wide = String(data.item_data.item_car_wide)
      this.item_car_wheels = String(data.item_data.item_car_wheels)
      this.item_car_axels = String(data.item_data.item_car_axels)
      this.item_car_weight = String(data.item_data.item_car_weight)
      this.item_car_gas = String(data.item_data.item_car_gas)
      this.item_car_total_weight = String(data.item_data.item_car_total_weight)
      this.item_det_unit = String(data.item_data.item_det_unit)
      this.item_det_price = String(data.item_data.item_det_price)
      this.tech_cars_list = data.item_data.item_car_tech
      this.doc_list = data.doc_data
      this.dialog = false
    },
    async submit() {
      this.dialog_text = this.$t('saving')
      this.dialog_color = 'success'
      this.dialog = true
      const data = {
        app_data: {
          comp_id: this.comp_id,
          app_date_req: await this.getTime(),
          app_type: this.app_type,
          app_licence_type: this.app_licence_type,
          app_purpose: this.app_purpose,
          app_number: this.app_id,
          app_note: this.app_note,
          app_comment: this.app_comment,
          app_status_id: 0,
        },
        item_data: {
          item_det_detail: `${this.item_car_brand} ${this.item_car_gen} ${this.item_car_power}cc.`,
          item_det_unit: Number(this.item_det_unit),
          item_det_price: Number(this.item_det_price),
          item_det_total: Number(this.item_det_unit) * Number(this.item_det_price),
          item_car_type: this.item_car_type,
          item_car_brand: this.item_car_brand,
          item_car_gen: this.item_car_gen,
          item_car_power: Number(this.item_car_power),
          item_standard: this.item_standard,
          item_car_used: this.item_car_used,
          item_car_steering: this.item_car_steering,
          item_car_seat: Number(this.item_car_seat),
          item_car_manufacture: this.item_car_manufacture,
          item_car_height: Number(this.item_car_height),
          item_car_long: Number(this.item_car_long),
          item_car_wide: Number(this.item_car_wide),
          item_car_wheels: Number(this.item_car_wheels),
          item_car_axels: Number(this.item_car_axels),
          item_car_weight: Number(this.item_car_weight),
          item_car_gas: this.item_car_gas,
          item_car_total_weight: Number(this.item_car_total_weight),
          item_car_tech: this.tech_cars_list
        }
      }
      await axios
        .post(
          `https://us-central1-laos-single-window.cloudfunctions.net/function/user/licence/update/${this.app_id}`,
          data
        )
        .then(async res => {
          console.log(res)
          this.dialog = false
        })
        .catch(err => {
          console.log(err)
        })
      this.$router.replace( { name: 'User-License-List' } )
    },
    getTime () {
      var months_arr = ['01','02','03','04','05','06','07','08','09','10','11','12'];
      var date = new Date(Date.now())
      var year = date.getFullYear()
      var month = months_arr[date.getMonth()]
      var day = date.getDate()
      var hours = date.getHours()
      var minutes = "0" + date.getMinutes()
      var seconds = "0" + date.getSeconds()
      var dateTime = year + '-' + month + '-' + day +'  ' + hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2)
      
      return dateTime
    },
    async addCar() {
      await this.addCarToArray();
      this.dialog_engine_number = ""
      this.dialog_tank_number = ""
      this.dialog_car_color = ""
      this.carDialog = false
    },
    addCarToArray() {
      let data = {
        engine_number: this.dialog_engine_number,
        tank_number: this.dialog_tank_number,
        color: this.dialog_car_color
      };
      this.tech_cars_list.push(data)
    },
    deleteCar (item) {
      const index = Number(item.index) - 1
      confirm(this.$t('delete_item')) && 
      (
        this.tech_cars_list.splice(index, 1), 
        this.snack = true,
        this.snackText = this.$t("company_license_register_page.snackbar_del"),
        this.snackColor = 'error'
      )
    },
    editCar (value, index, field) {
      if (field === 'engine_number') {
        this.tech_cars_list[index-1].engine_number = value
      } else if (field === 'tank_number') {
        this.tech_cars_list[index-1].tank_number = value
      } else {
        this.tech_cars_list[index-1].color = value
      }
      this.snackText = this.$t("company_license_register_page.snackbar_save"),
      this.snackColor = 'success'
      this.snack = true
    },
    previewFile() {
      try {
        this.fileData = event.target.files[0]
        this.doc_link = null
      } catch {
        console.log('Select your file')
        this.fileData = null
      }
    },
    // upload
    async uploadFile() {
      this.file_name = `${this.app_id}__${this.fileData.name}`
      this.dialog_text = this.$t('saving')
      this.dialog_color = 'success'
      this.dialog = true
      this.doc_link = null
      const storageRef = await firebase.storage().ref(this.file_name).put(this.fileData)
      await storageRef.ref.getDownloadURL().then(async url => {
        this.doc_link = url
        let data = {
          app_doc_id: await this.getCurrentDocId(),
          app_doc_type_id: this.doc_type.app_doc_type_id,
          app_doc_filename: this.file_name,
          app_doc_link: this.doc_link,
          app_doc_date: await this.getTime(),
          app_id: this.app_id
        }
        this.doc_list.push(data)
        await firebase.firestore().collection('Application_document').add(data)
        this.dialog = false
      })
      this.docDialog = false
      
    },
    async getCurrentDocId () {
      let docId = await firebase.firestore().collection('Current_ID').doc('doc_1').get()
      await this.updateDocId()
      return docId.data().app_doc_id + 1
    },
    async updateDocId () {
      await firebase.firestore().collection('Current_ID').doc('doc_1').update({
        app_doc_id: firebase.firestore.FieldValue.increment(1)
      })
    },
    // open file for file_name
    async openFile (item) {
      this.dialog_text = this.$t('loading')
      this.dialog_color = 'primary'
      this.dialog = true
      const fileName = item.app_doc_filename

      await firebase.storage().ref(fileName).getDownloadURL().then(url => {
        window.open(url)
        this.dialog = false
      })
    },
    // Delete document in arr & DB
    async deleteFile (item) {
      confirm(this.$t('delete_item')) && 
      (
        this.dialog_text = this.$t('deleting'),
        this.dialog_color = 'error',
        this.dialog = true,

        await firebase.storage().ref(item.app_doc_filename).delete()
        .then(async url => {
          await this.deleteDocument(item.app_doc_id)
          const index = Number(item.index) - 1
          this.doc_list.splice(index, 1), 
          this.snack = true,
          this.snackText = this.$t("company_license_register_page.snackbar_del"),
          this.snackColor = 'error'
          this.dialog = false
        })
        .catch(err => {
          console.log(err)
        })
      )
    },
    // Delete document in DB
    async deleteDocument (doc_id) {
      await firebase.firestore().collection('Application_document').where('app_doc_id', '==', Number(doc_id)).get()
      .then(snapshot => {
        snapshot.forEach(async docs => {
          await firebase.firestore().collection('Application_document').doc(docs.id).delete()
        })
      })
    },
    checkStandard () {
      if (this.item_standard === '100 %') {
        this.item_car_used = null
        this.isStandard = true
        this.isHundred = false
      } else {
        this.isStandard = false
        this.isHundred = true
      }
    }
  }
}
</script>

<style lang="scss">
  div.btn__content {
    padding: 0px;
  }
</style>