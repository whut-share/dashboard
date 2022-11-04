<template>
  <div class="network-step flex-grow-1 d-flex flex-column">
    <v-btn @click="updateSessionAndSave({ network: 'local' })">Local</v-btn>
  </div>
</template>

<script setup lang="ts">
import { useDassetsFlowStore } from "@/store";

const { session, updateSessionAndSave } = useDassetsFlowStore();
</script>
