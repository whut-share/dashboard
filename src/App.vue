<template>
  <v-app>
    <v-main
      class="d-flex flex-column"
      :class="{
        'big-padding-left': is_sidebar_opened,
      }"
    >
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useSidebarStore } from "./store";

const sidebar_store = useSidebarStore();

const is_sidebar_opened = computed(() => sidebar_store.is_opened);
</script>

<style lang="scss" scoped>
.big-padding-left {
  padding-left: 250px;
}
</style>
