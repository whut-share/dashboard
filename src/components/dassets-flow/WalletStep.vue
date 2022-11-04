<template>
  <div class="wallet-step flex-grow-1 d-flex flex-column">
    <v-btn @click="loginWithMetamask">metamask</v-btn>
  </div>
</template>

<script setup lang="ts">
import { useDassetsFlowStore } from "@/store";
import * as Ethers from "ethers";

async function loginWithMetamask() {
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
}

const { updateSessionAndSave } = useDassetsFlowStore();
</script>
