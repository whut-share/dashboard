<template>
  <v-card
    elevation="0"
    class="header-project-group-selector d-flex align-center px-2 py-1"
    variant="outlined"
    rounded="lg"
    color="grey-lighten-2"
  >
    <v-avatar size="40px" class="mr-4">
      <v-img
        cover
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Electronic-Arts-Logo.svg/2048px-Electronic-Arts-Logo.svg.png"
      />
    </v-avatar>
    <div class="d-flex flex-column mr-4">
      <div class="body-2 text-black font-weight-medium">
        {{ projects_store.selectedProjectGroup?.name }}
      </div>
      <div class="text-caption text-grey font-weight-medium">Development</div>
    </div>
    <div class="icon d-flex flex-column justify-center">
      <v-icon color="black">solid-interface-caret-up</v-icon>
      <v-icon color="black">solid-interface-caret-down</v-icon>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import { useAuthStore, useProjectsStore } from "@/store";
import { computed } from "vue-demi";

const projects_store = useProjectsStore();

const project_groups = computed(() => projects_store.project_groups);
</script>

<style lang="scss" scoped>
.header-project-group-selector {
}
</style>
