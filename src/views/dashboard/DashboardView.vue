<template>
  <div class="dashboard-view flex-grow-1 d-flex flex-column">
    <GlobalBg />

    <router-view style="position: relative" />

    <DashboardHeader />

    <CreateEventEmitterInstance />
    <EventEmitterInstanceScannerModal />
  </div>
</template>

<script setup lang="ts">
import DashboardHeader from "@/components/common/DashboardHeader.vue";
import GlobalBg from "@/components/common/GlobalBg.vue";
import CreateEventEmitterInstance from "@/components/modals/CreateEventEmitterInstance.vue";
import EventEmitterInstanceScannerModal from "@/components/modals/EventEmitterInstanceScannerModal.vue";
</script>

<style lang="scss" scoped>
.dashboard-view {
  padding-top: 80px;
}
</style>
