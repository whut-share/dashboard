<template>
  <div class="settings-page d-flex flex-column">
    <div class="d-flex align-center">
      <div class="d-flex flex-column">
        <div class="text-h4 font-weight-medium">Company</div>
      </div>
      <v-spacer></v-spacer>

      <v-btn
        size="large"
        color="primary"
        variant="flat"
        prepend-icon="solid-interface-edit"
      >
        Edit
      </v-btn>
    </div>

    <v-card class="pa-6 mt-6" elevation="10">
      <template v-for="(row, i) in rows" :key="i">
        <v-divider v-if="i" color="grey-lighten-5" class="mb-6"></v-divider>
        <v-row class="mb-6">
          <v-col cols="6">
            <v-sheet
              height="40"
              class="text-h6 d-flex align-center font-weight-bold"
            >
              {{ row.name }}
            </v-sheet>
          </v-col>
          <v-col cols="3">
            <v-sheet
              height="40"
              class="text-body-2 d-flex align-center"
              v-for="col in row.cols"
              :key="col"
            >
              {{ col }}
            </v-sheet>
          </v-col>
          <v-col cols="3">
            <v-sheet
              height="40"
              class="text-body-2 d-flex align-center text-m-emphasis"
              v-for="col in row.value_keys"
              :key="col"
            >
              {{ col }}
            </v-sheet>
          </v-col>
        </v-row>
      </template>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue-demi";

const rows = ref([
  {
    name: "General",
    cols: ["Company name", "Legal name", "Business ID No.", "VAT #"],
    value_keys: ["company_name", "legal_name", "business_id", "vat"],
  },

  {
    name: "Company type",
    cols: ["Tax form", "Industry"],
    value_keys: ["tax_form", "industry"],
  },

  {
    name: "Contact Info",
    cols: [
      "Company email",
      "Customer-facing email",
      "Company phone",
      "Website",
    ],
    value_keys: ["company_email", "customer_email", "company_phone", "website"],
  },

  {
    name: "Address",
    cols: ["Company address", "Customer-facing address", "Legal address"],
    value_keys: ["company_address", "customer_address", "legal_address"],
  },
]);
</script>

<style lang="scss" scoped>
.settings-page {
}
</style>
