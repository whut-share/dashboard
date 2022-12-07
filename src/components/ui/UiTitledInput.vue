<template>
  <div class="flex-column">
    <div class="text-caption text-black font-weight-medium pb-1 pl-2">
      {{ props.title }}
    </div>

    <slot name="default"></slot>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue-demi";

const props = defineProps<{
  title: string;
}>();
</script>

<style lang="scss" scoped></style>
