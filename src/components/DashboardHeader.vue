<template>
  <v-sheet
    tile
    height="80"
    elevation="20"
    class="dashboard-header d-flex align-center px-10"
  >
    <div class="text-h4 font-weight-bold">Interact</div>
    <v-spacer></v-spacer>
    <v-btn variant="tonal" @click="logout" color="error">logout</v-btn>
  </v-sheet>
</template>

<script setup lang="ts">
import { useAuthStore } from "@/store";

const auth_store = useAuthStore();

function logout() {
  useAuthStore().logoutFullFlow();
}
</script>

<style></style>
