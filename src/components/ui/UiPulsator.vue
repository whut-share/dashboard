<template>
  <v-card
    width="10"
    rounded="circle"
    height="10"
    class="ui-pulsator"
    :class="`text-${color}`"
    :color="color"
  ></v-card>
</template>

<script setup lang="ts">
import { useModalsStore } from "@/store";
import { defineProps } from "vue-demi";

const modals_store = useModalsStore();

const props = defineProps<{
  color: string;
}>();
</script>

<style lang="scss" scoped>
@keyframes pulse {
  from {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.4;
  }
  to {
    transform: translate(-50%, -50%) scale(3);
    opacity: 0;
  }
}

.ui-pulsator {
  overflow: visible;

  &::before {
    position: absolute;
    z-index: -1;
    content: "";
    width: 100%;
    height: 100%;
    border-radius: inherit;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: currentColor;
    opacity: 0.2;
    animation: pulse 1.5s infinite;
  }
}
</style>
