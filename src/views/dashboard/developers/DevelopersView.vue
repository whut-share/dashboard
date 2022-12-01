<template>
  <div class="project-page mt-5">
    <v-container fluid>
      <router-view />
    </v-container>

    <ReusableSidebar
      :nav="[
        [
          {
            title: 'Overview',
            to: '/dsh/developers/overview',
            icon: 'solid-interface-layout',
            icon_inactive: 'outline-interface-layout',
          },
          {
            title: 'Keys',
            to: '/dsh/developers/api-keys',
            icon: 'solid-interface-apps',
            icon_inactive: 'outline-interface-apps',
          },
          {
            title: 'Webhooks',
            to: '/dsh/developers/webhooks',
            icon: 'solid-interface-attach',
            icon_inactive: 'outline-interface-attach',
          },
          {
            title: 'Synchronization',
            to: '/dsh/developers/sync',
            icon: 'solid-interface-sort',
            icon_inactive: 'outline-interface-sort',
          },
        ],

        [
          {
            title: 'dAssets',
            to: '/dsh/developers/dassets',
            icon: 'solid-general-wallet',
            icon_inactive: 'outline-general-wallet',
          },
          {
            title: 'Syncer',
            to: '/dsh/developers/syncer',
            icon: 'solid-status-lightning',
            icon_inactive: 'outline-status-lightning',
          },
          {
            title: 'Wallet Login',
            to: '/dsh/developers/wallet-login',
            icon: 'solid-interface-cursor',
            icon_inactive: 'outline-interface-cursor',
          },
        ],
      ]"
    />
  </div>
</template>

<script setup lang="ts">
import ReusableSidebar from "@/components/common/ReusableSidebar.vue";
</script>

<style lang="scss" scoped>
.project-page {
  padding-left: 250px;
}
</style>
