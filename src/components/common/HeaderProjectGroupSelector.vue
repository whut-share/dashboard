<template>
  <div class="header-project-group-selector" v-click-outside="closeDropdown">
    <v-card
      @click="toggleDropdown"
      elevation="0"
      class="d-flex align-center px-2 py-1 ui-bordered-light"
      variant="text"
      rounded="lg"
      style="user-select: none"
    >
      <v-avatar size="40px" class="mr-4">
        <v-img
          cover
          :src="`https://source.boringavatars.com/bauhaus/120/${projects_store.selectedProjectGroup?.name}`"
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

    <v-slide-y-reverse-transition>
      <div class="absolute" v-if="is_opened">
        <v-card rounded="lg" elevation="10" class="ui-bordered-light">
          <v-card
            variant="text"
            v-for="n in project_groups"
            :key="n.id"
            class="d-flex px-2 py-1 align-center"
            @click="
              projects_store.selectProjectGroup(n.id);
              closeDropdown();
            "
          >
            <v-avatar size="40px" class="mr-4">
              <v-img
                cover
                :src="`https://source.boringavatars.com/bauhaus/120/${n.name}`"
              />
            </v-avatar>
            <div class="d-flex flex-column mr-4">
              <div class="body-2 text-black font-weight-medium">
                {{ n.name }}
              </div>
              <div class="text-caption text-grey font-weight-medium">
                Development
              </div>
            </div>
          </v-card>
        </v-card>
      </div>
    </v-slide-y-reverse-transition>
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
function closeDropdown() {
  is_opened.value = false;
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
