<template>
  <div class="wallet-login-page d-flex flex-column">
    <div class="d-flex align-center">
      <div class="d-flex flex-column">
        <div class="text-h4 font-weight-medium">Team</div>
      </div>
      <v-spacer></v-spacer>

      <v-btn
        size="large"
        color="primary"
        variant="flat"
        prepend-icon="solid-communication-user"
        disabled
      >
        Invite member
      </v-btn>
    </div>

    <v-card elevation="10" class="d-flex flex-column mt-6">
      <ui-table>
        <template #head>
          <tr>
            <th>user</th>
            <th>role</th>
            <th>online</th>
            <th>actions</th>
          </tr>
        </template>
        <template #body>
          <tr>
            <td>{{ user?.email }}</td>
            <td>Admin</td>
            <td>27/11/2022 11:53 PM</td>
            <td></td>
          </tr>
        </template>
      </ui-table>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "@/store";
import { computed, ref } from "vue-demi";

const auth_store = useAuthStore();
const user = computed(() => auth_store.user);
</script>

<style lang="scss" scoped>
.team-page {
  .arrow {
    position: absolute;
    right: 0;
    top: 0;
    transform: rotate(-45deg);
  }
}
</style>
