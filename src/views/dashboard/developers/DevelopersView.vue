<template>
  <div class="project-page mt-10">
    <router-view />

    <ReusableSidebar
      :nav="[
        [
          {
            title: 'Overview',
            to: '/dsh/developers/overview',
          },
          {
            title: 'Keys',
            to: '/dsh/developers/api-keys',
          },
          {
            title: 'Webhooks',
            to: '/dsh/developers/webhooks',
          },
          {
            title: 'Synchronization',
            to: '/dsh/developers/sync',
          },
        ],

        [
          {
            title: 'dAssets',
            to: '/dsh/developers/dassets',
          },
          {
            title: 'Syncer',
            to: '/dsh/developers/syncer',
          },
          {
            title: 'Wallet Login',
            to: '/dsh/developers/wallet-login',
          },
        ],
      ]"
    />
  </div>
</template>

<script setup lang="ts">
import ReusableSidebar from "@/components/common/ReusableSidebar.vue";
</script>
