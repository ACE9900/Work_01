<template>
  <v-form>
    <v-container>
      <v-card :search="search">
        <v-card-title class="d-block pa-2 grey lighten-2 black--text" align="center">License List</v-card-title>
        <v-card-title>
          <v-row>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                v-model="search"
                append-icon="mdi-search"
                label="ค้นหา / ຄົ້ນຫາ"
                single-line
                hide-details
                filled
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="1">
              <v-btn class="grey darken-1 white--text">
                <v-icon>mdi-magnify</v-icon>
              </v-btn>
            </v-col>

            <v-col cols="12" sm="6" md="4">
              <v-btn class="grey darken-1 white--text" @click="showdetail=!showdetail">
                advanced search
                <v-icon right>mdi-chevron-down</v-icon>
              </v-btn>
            </v-col>
          </v-row>

          <v-row v-if="showdetail">
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                append-icon="mdi-search"
                label="หมายเลขประจำตัวผู้เสียภาษี / ບັດປະ ຈຳ ຕົວພາສີ"
                hide-details
                filled
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="4">
              <v-select label="ประเภทใบอนุญาต / ປະເພດໃບອະນຸຍາດ" hide-details filled></v-select>
            </v-col>

            <v-col cols="12" sm="6" md="4">
              <v-select label="กระทรวงที่ออกใบอนุญาต / ກະຊວງທີ່ອອກໃບອະນຸຍາດ" hide-details filled></v-select>
            </v-col>

            <v-col cols="12" sm="6" md="4">
              <v-text-field
                append-icon="mdi-search"
                label="ID ของผู้รับใบอนุญาต / ID ຂອງຜູ້ສະເໜີຂໍໃບອະນຸຍາດ"
                hide-details
                filled
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="4">
              <v-select label="กรมที่ออกใบอนุญาต / ກົມທີ່ອອກໃບອະນຸຍາດ" hide-details filled></v-select>
            </v-col>

            <v-col cols="12" sm="6" md="4">
              <v-select label="ประเภทใบเสนอ / ປະເພດໃບສະເໜີ" hide-details filled></v-select>
            </v-col>
          </v-row>
        </v-card-title>

        <v-card-subtitle>
          <v-row>
            <v-col cols="12" sm="6" md="1">
              <v-btn class="grey lighten-1 black--text">
                <v-icon>mdi-plus-circle-outline</v-icon>
              </v-btn>
            </v-col>

            <v-col cols="12" sm="6" md="4">
              <v-btn class="grey lighten-1 black--text">
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
            </v-col>
          </v-row>
          <!-- เอกสารแนบ / ເອກະສານຄັດຕິດ -->
          <v-card max-width="1000" :elevation="5">
            <v-data-table :headers="doc" :items="doc_list" :items-per-page="5" class="elevation-1"></v-data-table>
          </v-card>
        </v-card-subtitle>
      </v-card>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      showdetail: false,
      doc: [
        {
          text: "หมายเลขใบอนุญาต / ເລກໃບອະນຸຍາດ",
          align: "left",
          sortable: false,
          value: "name"
        },
        {
          text:
            "หมายเลขประจำตัวผู้เสียภาษีของผู้สมัคร / ເລກປະ ຈຳ ຕົວອາກອນຂອງຜູ້ສະ ໝັກ",
          value: "calories"
        },
        { text: "สถานะ / ສະຖານະພາບ", value: "fat" },
        {
          text: "หมายเลขใบอนุญาตนำเข้า / ໝາຍ ເລກໃບອະນຸຍາດ ນຳ ເຂົ້າ",
          value: "carbs"
        },
        { text: "วันหมดอาย / ວັນ ໝົດ ອາຍุຸ", value: "carbs" }
      ],
      doc_list: [
        {
          name: "1",
          calories: 159,
          fat: 6.0,
          carbs: 24
        }
      ]
    };
  }
};
</script>