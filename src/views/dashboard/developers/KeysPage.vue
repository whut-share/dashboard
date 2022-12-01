<template>
  <v-container fluid class="d-flex flex-column">
    <div class="d-flex align-center">
      <div class="text-h4 font-weight-medium">API keys</div>
      <v-spacer></v-spacer>
      <v-card
        variant="outlined"
        color="accent"
        class="pa-3 d-flex align-center"
      >
        <v-btn
          class="mr-6"
          rounded="lg"
          style="
            background: linear-gradient(
              174.84deg,
              rgba(125, 66, 251, 0) 74.68%,
              #2ed6e1 160.47%
            );
          "
        >
          All Games
        </v-btn>

        <div class="d-flex">
          <div class="d-flex align-center mr-6" v-for="i in 4" :key="i">
            <svg
              class="mr-2"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="24" height="24" rx="6" fill="#0D0D2F" />
              <path
                d="M9 12C9 15.8508 9.00999 19 9.02332 19C9.04331 19 11.7585 18.5206 12.0916 18.4571L12.2649 18.4254V15.854V13.2857H13.2976H14.3304V12.8159C14.3304 12.5587 14.3404 11.8889 14.3537 11.3238L14.3737 10.3016H13.3209H12.2649V9.1746V8.04762H13.4808C14.1505 8.04762 14.6968 8.04127 14.6968 8.03175C14.6968 7.99683 14.9634 5.28572 14.98 5.14921L15 5H11.9983H9V12Z"
                fill="#FDFDFD"
              />
            </svg>
            <div class="text-black text-body-2 font-weight-bold">Fortnite</div>
          </div>
        </div>
      </v-card>
    </div>

    <v-card elevation="10" variant="flat" class="mt-8">
      <div class="d-flex flex-column pa-6">
        <div class="d-flex align-center">
          <div class="text-h5 font-weight-medium">Standard keys</div>
          <v-spacer></v-spacer>
          <a href="#" class="text-accent font-weight-bold text-body-2"
            >Learn more</a
          >
        </div>

        <div class="text-body-1 mt-2">
          These keys will allow you to authenticate API requests.
        </div>
      </div>

      <v-table class="text-black" style="border-radius: 0 !important">
        <thead class="text-m-emphasis text-uppercase">
          <tr>
            <th class="pl-6">Name</th>
            <th>Token</th>
            <th>Last used</th>
            <th>Created</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody class="font-weight-medium">
          <tr>
            <td class="pl-6">Publishable key</td>
            <td>
              <code>
                333d69ac79cf455abaf1c7eeb76327bb7087d9a779e84df19b06c37202bc285d
              </code>
            </td>
            <td>Sep 12</td>
            <td>Aug 30</td>
            <td class="pr-6"></td>
          </tr>
          <tr>
            <td class="pl-6">Secret key</td>
            <td>
              <code>
                333d69ac79cf455abaf1c7eeb76327bb7087d9a779e84df19b06c37202bc285d
              </code>
            </td>
            <td>Sep 12</td>
            <td>Aug 30</td>
            <td class="pr-6"></td>
          </tr>
        </tbody>
      </v-table>
    </v-card>
  </v-container>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
