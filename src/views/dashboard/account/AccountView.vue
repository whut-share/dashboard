<template>
  <div class="account-view pt-6">
    <v-container fluid>
      <router-view />
    </v-container>

    <EventsSidebar />

    <ReusableSidebar
      :nav="[
        [
          {
            title: 'Company',
            to: '/dsh/account/company',
            icon: 'solid-general-bag',
            icon_inactive: 'outline-general-bag',
          },
          {
            title: 'Subscription',
            to: '/dsh/account/subscription',

            icon: 'solid-interface-sort',
            icon_inactive: 'outline-interface-sort',
          },
          {
            title: 'Settings',
            to: '/dsh/account/settings',

            icon: 'solid-interface-settings',
            icon_inactive: 'outline-interface-settings',
          },
          {
            title: 'Team',
            to: '/dsh/account/team',

            icon: 'solid-communication-user',
            icon_inactive: 'outline-communication-user',
          },
          {
            title: 'Billing',
            to: '/dsh/account/billing',
            icon: 'solid-files-invoice',
            icon_inactive: 'outline-files-invoice',
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
.account-view {
  padding-left: 250px;
  padding-right: 280px;
}
</style>
