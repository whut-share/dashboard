<template>
  <div class="settings-page d-flex flex-column">
    <div class="d-flex align-center">
      <div class="d-flex flex-column">
        <div class="text-h4 font-weight-medium">Settings</div>
      </div>
      <v-spacer></v-spacer>

      <v-btn
        v-if="!is_editing"
        size="large"
        color="primary"
        variant="flat"
        prepend-icon="solid-interface-edit"
        @click="turnOnEditing"
      >
        Edit
      </v-btn>

      <v-btn
        v-else
        size="large"
        color="primary"
        variant="flat"
        prepend-icon="solid-interface-edit"
        @click="turnOffEditing"
      >
        Save
      </v-btn>
    </div>

    <v-card class="pa-6 mt-6" elevation="10">
      <template v-for="(row, i) in rows" :key="i">
        <v-divider v-if="i" color="grey-lighten-5" class="mb-6"></v-divider>
        <v-row class="mb-6">
          <v-col cols="6">
            <v-sheet
              height="60"
              class="text-h6 d-flex align-center font-weight-bold"
            >
              {{ row.name }}
            </v-sheet>
          </v-col>
          <v-col cols="3">
            <v-sheet
              height="60"
              class="text-body-2 d-flex align-center"
              v-for="col in row.cols"
              :key="col"
            >
              {{ col }}
            </v-sheet>
          </v-col>
          <v-col cols="3">
            <v-sheet
              height="60"
              class="text-body-2 d-flex align-center text-m-emphasis"
              v-for="(col, j) in row.value_keys"
              :key="col"
            >
              <template v-if="!is_editing">
                {{ settings[col] }}
              </template>
              <v-text-field
                v-else
                :placehodler="row.cols[j]"
                hide-details
                density="compact"
                v-model="settings[col]"
              >
              </v-text-field>
            </v-sheet>
          </v-col>
        </v-row>
      </template>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue-demi";

const settings = ref<Record<string, string>>({
  company_name: "Company name",
  legal_name: "Legal name",
  business_id: "Business ID No.",
  vat: "VAT #",
  tax_form: "Tax form",
  industry: "Industry",
  company_email: "Company email",
  customer_email: "Customer-facing email",
  company_phone: "Company phone",
  website: "Website",
  company_address: "Company address",
  customer_address: "Customer-facing address",
  legal_address: "Legal address",
});

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

const is_editing = ref(false);

function turnOnEditing() {
  is_editing.value = true;
}

function turnOffEditing() {
  is_editing.value = false;
}
</script>

<style lang="scss" scoped>
.settings-page {
}
</style>
