<template>
  <v-card class="d-flex pa-10 mt-6" rounded="xl" elevation="10">
    <div class="d-flex flex-column">
      <div class="text-h6 font-weight-bold">Need some help?</div>
      <div class="text-caption text-disabled font-weight-medium">
        Have questions? Feel free to reach out to us.
      </div>
    </div>

    <v-spacer></v-spacer>

    <div class="d-flex align-center">
      <v-btn size="large" variant="outlined" color="accent" class="mr-2">
        View guide
      </v-btn>

      <v-btn
        size="large"
        prepend-icon="solid-communication-comment"
        color="primary"
        variant="text"
      >
        Contact support
      </v-btn>
    </div>
  </v-card>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.home-page {
}
</style>
