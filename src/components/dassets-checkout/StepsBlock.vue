<template>
  <v-sheet
    color="transparent"
    width="300"
    class="d-flex align-center steps-block"
  >
    <div class="cnt mr-3">
      <v-card
        bg-color="white"
        :width="size"
        :height="size"
        class="d-flex align-center justify-center text-primary"
        elevation="10"
        @click="minter_checkout_store.setPage(1)"
        :class="{ selected: page === 1 }"
        :disabled="max_page === 3"
      >
        <span class="text-black">1</span>
      </v-card>
      <div
        class="title mt-2 text-caption font-weight-bold"
        :class="{
          'text-black': page === 1,
          'text-m-emphasis': page !== 1,
        }"
      >
        Payment method
      </div>
    </div>
    <v-divider color="grey-lighten-5"></v-divider>
    <div class="cnt mx-3">
      <v-card
        @click="minter_checkout_store.setPage(2)"
        bg-color="white"
        :width="size"
        :height="size"
        class="d-flex align-center justify-center text-primary"
        elevation="10"
        :class="{ selected: page === 2 }"
        :disabled="max_page === 3"
      >
        <span class="text-black">2</span>
      </v-card>
      <div
        class="title mt-2 text-caption font-weight-bold"
        :class="{
          'text-black': page === 2,
          'text-m-emphasis': page !== 2,
        }"
      >
        Payment details
      </div>
    </div>
    <v-divider color="grey-lighten-5"></v-divider>
    <div class="cnt mx-3">
      <v-card
        @click="minter_checkout_store.setPage(3)"
        bg-color="white"
        :width="size"
        :height="size"
        class="d-flex align-center justify-center text-primary"
        elevation="10"
        :class="{ selected: page === 3 }"
      >
        <span class="text-black">3</span>
      </v-card>
      <div
        class="title mt-2 text-caption font-weight-bold"
        :class="{
          'text-black': page === 3,
          'text-m-emphasis': page !== 3,
        }"
      >
        Complete
      </div>
    </div>
  </v-sheet>
</template>

<script setup lang="ts">
import { useMinterCheckoutStore } from "@/store";
import { computed, ref } from "vue-demi";

const size = ref(40);
const minter_checkout_store = useMinterCheckoutStore();
const page = computed(() => minter_checkout_store.step);
const max_page = computed(() => minter_checkout_store.maxStep);
</script>

<style scoped lang="scss">
.steps-block {
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(-24%);
  user-select: none;

  .cnt {
    position: relative;
  }

  .title {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: auto;
    white-space: nowrap;
  }

  .selected {
    border: 1px solid rgba(var(--v-theme-primary)) !important;
  }
}
</style>
