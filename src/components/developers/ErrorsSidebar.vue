<template>
  <v-card
    class="errors-sidebar d-flex flex-column ui-bordered-light"
    :rounded="0"
  >
    <div class="d-flex flex-column pa-4">
      <div class="text-h5 text-black font-weight-bold mb-4">Recent errors</div>
      <v-text-field
        variant="outlined"
        density="compact"
        prepend-inner-icon="outline-interface-search"
        v-model="search"
        clearable
        hide-details
        clear-icon="outline-interface-close"
        label="Search"
      ></v-text-field>
    </div>

    <v-divider color="accent"></v-divider>

    <div class="d-flex flex-column scroller flex-grow-1">
      <template v-for="n in 4" :key="n">
        <v-divider color="accent" v-if="n !== 1"></v-divider>

        <div class="d-flex pa-2">
          <div class="mr-2">
            <v-icon color="error" size="large"> solid-interface-cancel </v-icon>
          </div>
          <div class="d-flex flex-column">
            <div class="text-caption text-black">
              <code>invalid_request_error</code>
            </div>
            <div class="text-caption text-m-emphasis mt-3">
              <code>POST /v1/folder/payments</code>
            </div>
            <div class="text-caption text-m-emphasis mt-1">
              <code>4 errors - last seen Nov 10, 09:50 AM</code>
            </div>
          </div>
        </div>
      </template>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from "vue-demi";

const search = ref("");
</script>

<style lang="scss" scoped>
.errors-sidebar {
  width: 280px;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  padding-top: 80px;

  border-width: 0 0 0 1px !important;

  .scroller {
    overflow: auto;
  }
}
</style>
