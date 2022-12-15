<template>
  <v-app>
    <v-main class="d-flex flex-column">
      <router-view />
    </v-main>

    <CreateEventEmitterInstance />
    <EventEmitterInstanceScannerModal />

    <v-progress-linear
      color="primary"
      indeterminate
      width="100%"
      height="3"
      v-if="is_view_loading"
    ></v-progress-linear>
  </v-app>
</template>

<script setup lang="ts">
import { computed } from "vue-demi";
import CreateEventEmitterInstance from "./components/modals/CreateEventEmitterInstance.vue";
import EventEmitterInstanceScannerModal from "./components/modals/EventEmitterInstanceScannerModal.vue";
import { usePreloadStore } from "./store";

const preload_store = usePreloadStore();
const is_view_loading = computed(() => preload_store.is_view_loading);
</script>

<style lang="scss" scoped>
.v-application {
  background: #f2f5ff;

  .v-progress-linear {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
  }
}
</style>
