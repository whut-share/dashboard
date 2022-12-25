<template>
  <v-card
    variant="outlined"
    height="100%"
    color="accent"
    min-height="200"
    class="new-event-emitter-instance d-flex flex-column align-center justify-center pa-6"
  >
    <v-icon color="primary" class="mb-3" size="30px"
      >solid-interface-plus</v-icon
    >
    <v-btn size="large" style="pointer-events: none" color="primary">
      Create
    </v-btn>
  </v-card>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.new-event-emitter-instance {
}
</style>
