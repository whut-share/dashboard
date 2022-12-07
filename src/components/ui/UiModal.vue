<template>
  <v-card elevation="20" rounded="xl" class="pa-7 d-flex flex-column">
    <div class="d-flex align-center mb-5">
      <div v-if="props.title" class="text-h5 font-weight-medium">
        {{ props.title }}
      </div>
      <slot name="title"></slot>
      <v-spacer></v-spacer>
      <v-btn
        @click="modals_store.close(modal)"
        elevation="0"
        icon="-"
        size="small"
      >
        <v-icon size="30px">solid-interface-cross</v-icon>
      </v-btn>
    </div>

    <slot name="default"></slot>
  </v-card>
</template>

<script setup lang="ts">
import { useModalsStore } from "@/store";
import { defineProps } from "vue-demi";

const modals_store = useModalsStore();

const props = defineProps<{
  title?: string;
  modal: string;
}>();
</script>

<style lang="scss" scoped></style>
