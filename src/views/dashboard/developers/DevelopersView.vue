<template>
  <div class="developers-view pt-6">
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
            icon: 'solid-files-cloud-upload',
            icon_inactive: 'outline-files-cloud-upload',
          },
          {
            title: 'Event Emitters',
            to: '/dsh/developers/event-emitters',
            icon: 'solid-devices-server',
            icon_inactive: 'outline-devices-server',
          },
        ],

        [
          {
            title: 'Minter',
            to: '/dsh/developers/minter',
            icon: 'solid-status-lightning',
            icon_inactive: 'outline-status-lightning',
          },
          {
            title: 'Syncer',
            to: '/dsh/developers/syncer',
            icon: 'solid-interface-cursor',
            icon_inactive: 'outline-interface-cursor',
            disabled: true,
          },
          {
            title: 'Web3 Auth',
            to: '/dsh/developers/wallet-login',
            icon: 'solid-general-wallet',
            icon_inactive: 'outline-general-wallet',
            disabled: true,
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
.developers-view {
  padding-left: 250px;
}
</style>
