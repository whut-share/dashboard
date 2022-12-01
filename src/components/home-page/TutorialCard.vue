<template>
  <v-card rounded="xl" elevation="10" class="mt-6 tutorial-card">
    <v-img
      :aspect-ratio="16 / 9"
      :src="require('@/assets/images/tutorial-bg.jpg')"
    ></v-img>
    <div class="overlay"></div>
  </v-card>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.tutorial-card {
  position: relative;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
