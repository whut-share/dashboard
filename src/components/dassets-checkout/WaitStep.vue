<template>
  <div class="network-step flex-grow-1 d-flex flex-column">
    <div class="text-h6 font-weight-bold mb-4">Wait for payment...</div>

    <div v-if="session?.is_payed" class="text-success">- Payed!</div>
    <div v-if="session?.is_minted" class="text-success">
      - Minted! Transaction hash: <b>{{ session?.mint_tx }}</b>
    </div>
    <div v-if="session?.is_succeeded" class="text-success">
      - Success! Token ID: <b>{{ session?.mint_token_id }}</b>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDassetsCheckoutStore } from "@/store";
import { computed, onMounted, ref } from "vue";

const dassets_checkout_store = useDassetsCheckoutStore();

const session = computed(() => dassets_checkout_store.session);

async function startChecks() {
  await dassets_checkout_store.sync();
  await new Promise((resolve) => setTimeout(resolve, 1000));
  await startChecks();
}

onMounted(() => {
  startChecks();
});
</script>
