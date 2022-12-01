<template>
  <v-sheet
    tile
    height="80"
    elevation="0"
    class="auth-header d-flex align-center px-10 py-5 pl-0"
  >
    <HeaderLogo></HeaderLogo>
  </v-sheet>
</template>

<script setup lang="ts">
import HeaderLogo from "./HeaderLogo.vue";
</script>

<style lang="scss" scoped>
.auth-header {
  left: 0;
  top: 0;
  position: fixed;
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid rgba(#d2daff, 0.5);
}
</style>
