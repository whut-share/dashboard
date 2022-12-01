<template>
  <v-sheet
    tile
    height="80"
    elevation="0"
    class="dashboard-header d-flex align-center px-10 py-5 pl-0"
  >
    <HeaderLogo></HeaderLogo>

    <div class="d-flex ml-10">
      <router-link
        class="mr-10 body-2 font-weight-medium text-black"
        :class="{
          'font-weight-bold primary--text text-accent': isActive(item.to),
        }"
        :to="item.to"
        :key="item.to"
        v-for="item in navigation"
      >
        {{ item.title }}
      </router-link>
    </div>

    <v-spacer></v-spacer>
    <HeaderProjectGroupSelector />
  </v-sheet>
</template>

<script setup lang="ts">
import HeaderLogo from "./HeaderLogo.vue";
import HeaderProjectGroupSelector from "./HeaderProjectGroupSelector.vue";

import { useAuthStore, useProjectsStore } from "@/store";
import { computed } from "vue-demi";
import { useRoute } from "vue-router";

const auth_store = useAuthStore();
const projects_store = useProjectsStore();
const route = useRoute();

const projects = computed(() => projects_store.projects);

function logout() {
  auth_store.logoutFullFlow();
}

const navigation = [
  {
    title: "Home",
    to: "/dsh/home",
  },
  {
    title: "Developers",
    to: "/dsh/developers",
  },
  {
    title: "Products",
    to: "/dsh/products",
  },
  {
    title: "Account",
    to: "/dsh/account",
  },
];

function isActive(to: string): boolean {
  return new RegExp(to).test(route.path);
}
</script>

<style lang="scss" scoped>
.dashboard-header {
  left: 0;
  top: 0;
  position: fixed;
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid rgba(#d2daff, 0.5);
}
</style>
