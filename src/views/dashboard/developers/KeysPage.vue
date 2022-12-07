<template>
  <div class="d-flex flex-column">
    <div class="d-flex align-center">
      <div class="text-h4 font-weight-medium">API keys</div>
      <v-spacer></v-spacer>
      <ProjectsSelector v-model="project" />
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
  </div>
</template>

<script setup lang="ts">
import ProjectsSelector from "@/components/common/ProjectsSelector.vue";
import { ref } from "vue-demi";

const project = ref<string | null>(null);
</script>

<style lang="scss" scoped></style>
