<template>
  <div class="network-step flex-grow-1 d-flex flex-column">
    <div class="body-1 mb-4">Choose network for your NFT.</div>

    <v-btn
      color="primary"
      :loading="is_save_loading"
      class="mb-2"
      size="large"
      @click="save('local')"
    >
      Local
    </v-btn>
    <v-btn
      color="primary"
      :loading="is_save_loading"
      class="mb-2"
      size="large"
      @click="save('goerli')"
    >
      Goerli
    </v-btn>
    <v-btn disabled class="mb-2" size="large" @click="save('ethereum')">
      Ethereum
    </v-btn>
    <v-btn disabled class="mb-2" size="large" @click="save('bnb')">
      BNB Smart Chain
    </v-btn>
  </div>
</template>

<script setup lang="ts">
import { useDassetsCheckoutStore } from "@/store";
import { ref } from "vue";

const { session, updateSessionAndSave, nextPage } = useDassetsCheckoutStore();

const is_save_loading = ref(false);

async function save(network: string) {
  is_save_loading.value = true;
  updateSessionAndSave({ network }).finally(() => {
    is_save_loading.value = false;

    nextPage();
  });
}
</script>
