<template>
  <div class="wallet-step flex-grow-1 d-flex flex-column">
    <div class="body-1 mb-4">
      Choose the wallet you want to receive the NFT on.
    </div>
    <v-btn
      :loading="is_save_loading"
      class="mb-2"
      size="large"
      color="orange"
      append-icon="mdi-arrow-right"
      @click="loginWithMetamask"
    >
      metamask
    </v-btn>
    <v-btn class="mb-2" size="large" disabled> trust wallet </v-btn>
    <v-btn class="mb-2" size="large" disabled> coinbase </v-btn>
  </div>
</template>

<script setup lang="ts">
import { useDassetsCheckoutStore } from "@/store";
import * as Ethers from "ethers";
import { ref } from "vue-demi";

const { updateSessionAndSave, nextPage } = useDassetsCheckoutStore();

const is_save_loading = ref(false);

async function loginWithMetamask() {
  const pop = async () => {
    const provider = new Ethers.providers.Web3Provider(
      (window as any).ethereum,
      "any"
    );
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const your_address = await signer.getAddress();

    await updateSessionAndSave({
      address: your_address,
    });
  };

  is_save_loading.value = true;
  pop().finally(() => {
    is_save_loading.value = false;

    nextPage();
  });
}
</script>
