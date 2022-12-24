<template>
  <div class="network-step h-100 d-flex flex-column">
    <div
      class="text-black flex-grow-1 d-flex align-center justify-center"
      v-if="!session?.is_succeeded"
    >
      <div class="text-h6 font-weight-bold mr-4">
        <template v-if="!session?.is_payed"> Payment preceeding </template>
        <template v-else-if="!session?.is_minted">
          Waiting for transaction
        </template>
        <template v-else> Summarizing </template>
      </div>

      <v-progress-circular
        :size="20"
        :width="3"
        :indeterminate="true"
        color="primary"
      ></v-progress-circular>
    </div>
    <div
      class="d-flex flex-column justify-center align-center flex-grow-1"
      v-else
    >
      <span class="font-weight-bold text-m-emphasis text-body-2"
        >Item minted to:</span
      >
      <span
        class="text-black text-body-1 mt-2 text-center"
        style="word-break: break-all"
        >{{ session?.address }}</span
      >
    </div>

    <v-btn
      class="mt-8"
      size="large"
      color="primary"
      rounded="lg"
      :disabled="!session?.is_succeeded"
      href="#"
    >
      Check transaction
    </v-btn>
  </div>
</template>

<script setup lang="ts">
import { useMinterCheckoutStore } from "@/store";
import { computed, onMounted, ref } from "vue";

const minter_checkout_store = useMinterCheckoutStore();

const session = computed(() => minter_checkout_store.session);

async function startChecks() {
  await minter_checkout_store.sync();
  await new Promise((resolve) => setTimeout(resolve, 3000));
  await startChecks();
}

onMounted(() => {
  startChecks();
});
</script>
