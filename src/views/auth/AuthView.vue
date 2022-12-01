<template>
  <div class="auth-view flex-grow-1 pb-10 d-flex flex-column">
    <GlobalBg />
    <router-view style="position: relative" />
    <AuthHeader />
  </div>
</template>

<script setup lang="ts">
import GlobalBg from "@/components/common/GlobalBg.vue";
import AuthHeader from "@/components/common/AuthHeader.vue";
</script>

<style lang="scss" scoped>
.auth-view {
  padding-top: 100px;
}
</style>
