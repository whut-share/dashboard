<template>
  <v-sheet
    class="reusable-sidebar d-flex flex-column"
    tile
    height="100%"
    width="251"
    elevation="0"
    color="white"
  >
    <HeaderLogo></HeaderLogo>

    <template v-for="(section, i) in props.nav">
      <v-divider v-if="i > 0" :key="i" class="mx-4"></v-divider>

      <div class="px-4 py-2" v-for="item in section" :key="item.title">
        <v-card
          :to="item.to"
          class="d-flex align-center pa-4 body-2"
          :class="{}"
          elevation="0"
          rounded="lg"
          :color="isTabActive(item.to) ? 'primary' : '#A1B0FF'"
          :variant="isTabActive(item.to) ? 'flat' : 'text'"
        >
          <v-icon v-if="isTabActive(item.to)" start>{{ item.icon }}</v-icon>
          <v-icon v-else start>{{ item.icon_inactive }}</v-icon>

          <span class="font-weight-bold text-body-1">{{ item.title }}</span>
        </v-card>
      </div>
    </template>

    <v-spacer></v-spacer>

    <div>
      <v-divider class="mx-4"></v-divider>

      <v-card
        @click="logout"
        class="d-flex align-center pa-4 body-2 mx-4 mt-2 mb-4"
        elevation="0"
        rounded="lg"
      >
        <v-icon start color="error">outline-interface-logout</v-icon>

        <span class="font-weight-bold text-error">Log out</span>
      </v-card>
    </div>
  </v-sheet>
</template>

<script setup lang="ts">
import HeaderLogo from "./HeaderLogo.vue";
import { useAuthStore, useSidebarStore } from "@/store";
import { onMounted, defineProps, onUnmounted } from "vue-demi";
import { useRoute } from "vue-router";

const auth_store = useAuthStore();

function logout() {
  auth_store.logoutFullFlow();
}

interface Navigation {
  title: string;
  to: string;
  icon: string;
  icon_inactive: string;
}

const props = defineProps<{ nav: Navigation[][] }>();

const sidebar_store = useSidebarStore();

const route = useRoute();

function isTabActive(to: string): boolean {
  return route.path === to;
}

onMounted(() => {
  sidebar_store.setOpened(true);
});

onUnmounted(() => {
  sidebar_store.setOpened(false);
});
</script>

<style lang="scss" scoped>
.reusable-sidebar {
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: auto;
  z-index: 1;
  border-right: 1px solid rgba(#d2daff, 0.5);
}
</style>
