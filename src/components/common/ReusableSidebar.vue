<template>
  <v-sheet
    class="reusable-sidebar d-flex flex-column"
    tile
    height="100%"
    width="250"
    elevation="0"
    color="white"
  >
    <HeaderLogo></HeaderLogo>

    <template v-for="(section, i) in props.nav">
      <v-divider v-if="i > 0" :key="i" class="mx-4"></v-divider>

      <div class="px-4 py-2" v-for="item in section" :key="item.title">
        <v-card
          :to="item.to"
          class="d-flex flex-column pa-4 body-2"
          elevation="0"
          rounded="lg"
        >
          {{ item.title }}
        </v-card>
      </div>
    </template>

    <v-spacer></v-spacer>

    <v-divider class="mx-4"></v-divider>

    <v-card
      @click="logout"
      class="d-flex flex-column pa-4 body-2 mx-4 mt-2 mb-4"
      elevation="0"
      rounded="lg"
    >
      Log out
    </v-card>
  </v-sheet>
</template>

<script setup lang="ts">
import HeaderLogo from "./HeaderLogo.vue";
import { useAuthStore, useSidebarStore } from "@/store";
import { onDeactivated, onMounted, defineProps } from "vue-demi";

const auth_store = useAuthStore();

function logout() {
  auth_store.logoutFullFlow();
}

interface Navigation {
  title: string;
  to: string;
}

const props = defineProps<{ nav: Navigation[][] }>();

const sidebar_store = useSidebarStore();

onMounted(() => {
  sidebar_store.setOpened(true);
});

onDeactivated(() => {
  sidebar_store.setOpened(false);
});
</script>

<style lang="scss" scoped>
.reusable-sidebar {
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: auto;

  border-right: 1px solid rgba(#d2daff, 0.5);
}
</style>
