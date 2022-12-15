<template>
  <v-card
    @click="true"
    class="d-inline-flex align-center pa-2"
    style="user-select: none"
    elevation="0"
  >
    {{ address.substring(0, 4) }}...{{ address.substring(address.length - 4) }}
    <v-icon class="ml-1"> outline-files-copy </v-icon>
  </v-card>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
  address: string;
}>();
</script>

<style lang="scss" scoped></style>
