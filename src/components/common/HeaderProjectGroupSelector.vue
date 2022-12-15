<template>
  <div class="header-project-group-selector">
    <v-card
      @click="toggleDropdown"
      elevation="0"
      class="d-flex align-center px-2 py-1"
      variant="outlined"
      rounded="lg"
      color="grey-lighten-2"
      style="user-select: none"
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

    <v-scroll-y-reverse-transition>
      <div class="absolute" v-if="is_opened">
        <v-card
          variant="outlined"
          class="bg-white"
          rounded="lg"
          color="grey-lighten-2"
          elevation="10"
        >
          <div v-for="n in 4" :key="n" class="d-flex px-2 py-1 align-center">
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
              <div class="text-caption text-grey font-weight-medium">
                Production
              </div>
            </div>
          </div>
        </v-card>
      </div>
    </v-scroll-y-reverse-transition>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore, useProjectsStore } from "@/store";
import { computed, ref } from "vue-demi";

const projects_store = useProjectsStore();

const project_groups = computed(() => projects_store.project_groups);

const is_opened = ref(false);
function toggleDropdown() {
  is_opened.value = !is_opened.value;
}
</script>

<style lang="scss" scoped>
.header-project-group-selector {
  position: relative;
  .absolute {
    position: absolute;
    top: calc(100% + 8px);
    left: 0;
    width: 100%;
  }
}
</style>
