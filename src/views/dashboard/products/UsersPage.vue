<template>
  <div class="wallet-login-page d-flex flex-column">
    <div class="d-flex align-center">
      <div class="d-flex flex-column">
        <div class="text-h4 font-weight-medium">Users</div>
      </div>
      <v-spacer></v-spacer>

      <v-text-field
        variant="outlined"
        density="comfortable"
        prepend-inner-icon="outline-interface-search"
        clearable
        hide-details
        clear-icon="outline-interface-close"
        label="Search"
        color="m-emphasis"
      ></v-text-field>
    </div>

    <v-card elevation="10" class="d-flex flex-column mt-6">
      <ui-table>
        <template #head>
          <tr>
            <th>username</th>
            <th>address</th>
            <th>chain</th>
            <th>games</th>
            <th>items</th>
            <th>logins</th>
          </tr>
        </template>
        <template #body>
          <tr>
            <td>Mark</td>
            <td>Otto</td>
            <td>
              <ui-address
                address="0x1234567890123456789012345678901234567890"
              ></ui-address>
            </td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>
              <ui-address
                address="0x1234567890123456789012345678901234567890"
              ></ui-address>
            </td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>Larry</td>
            <td>the Bird</td>
            <td>
              <ui-address
                address="0x1234567890123456789012345678901234567890"
              ></ui-address>
            </td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
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
.wallet-login-page {
  .arrow {
    position: absolute;
    right: 0;
    top: 0;
    transform: rotate(-45deg);
  }
}
</style>
