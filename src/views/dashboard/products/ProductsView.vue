<template>
  <div class="products-view pt-6">
    <v-container fluid>
      <router-view />
    </v-container>

    <EventsSidebar />

    <ReusableSidebar
      :nav="[
        [
          {
            title: 'Overview',
            to: '/dsh/products/overview',
            icon: 'solid-interface-layout',
            icon_inactive: 'outline-interface-layout',
          },
          {
            title: 'Minter',
            to: '/dsh/developers/minter',
            icon: 'solid-status-lightning',
            icon_inactive: 'outline-status-lightning',
            disabled: true,
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
            to: '/dsh/products/wallet-login',

            icon: 'solid-general-wallet',
            icon_inactive: 'outline-general-wallet',
          },

          // {
          //   title: 'Logs',
          //   to: '/dsh/developers/wallet-login',
          //   icon: 'solid-devices-binocular',
          //   icon_inactive: 'outline-devices-binocular',
          // },

          // {
          //   title: 'Events',
          //   to: '/dsh/developers/wallet-login',
          //   icon: 'solid-files-document',
          //   icon_inactive: 'outline-files-document',
          // },

          {
            title: 'Users',
            to: '/dsh/products/users',
            icon: 'solid-communication-user',
            icon_inactive: 'outline-communication-user',
          },
        ],
      ]"
    />
  </div>
</template>

<script setup lang="ts">
import ReusableSidebar from "@/components/common/ReusableSidebar.vue";
import EventsSidebar from "@/components/products/EventsSidebar.vue";
</script>

<style lang="scss" scoped>
.products-view {
  padding-left: 250px;
  padding-right: 280px;
}
</style>
