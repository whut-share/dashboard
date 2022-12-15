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
            <td>mariano112</td>
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
import TutorialCard from "@/components/home-page/TutorialCard.vue";
import { ref } from "vue-demi";

const tab = ref<string>("overview");
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
