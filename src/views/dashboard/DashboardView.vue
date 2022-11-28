<template>
  <div class="dashboard-view flex-grow-1 d-flex flex-column">
    <v-container>
      <router-view />
    </v-container>

    <DashboardHeader />
  </div>
</template>

<script setup lang="ts">
import DashboardHeader from "@/components/common/DashboardHeader.vue";
</script>

<style lang="scss" scoped>
.dashboard-view {
  padding-top: 80px;
}
</style>
