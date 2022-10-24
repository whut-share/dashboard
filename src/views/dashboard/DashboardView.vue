<template>
  <div class="auth-view flex-grow-1 d-flex flex-column">
    <DashboardHeader />
    <v-container>
      <router-view />
    </v-container>
  </div>
</template>

<script setup lang="ts">
import DashboardHeader from "@/components/DashboardHeader.vue";
</script>
