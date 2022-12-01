<template>
  <v-app>
    <GlobalBg />
    <v-main class="d-flex flex-column">
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.v-application {
  background: #f2f5ff;
}
</style>
