<template>
  <div class="d-flex flex-column">
    <div class="d-flex align-center">
      <div class="text-h4 font-weight-medium">Webhooks</div>
      <v-spacer></v-spacer>
      <ProjectsSelector v-model="project" />
    </div>

    <v-card elevation="10" variant="flat" class="mt-8 pb-6">
      <div class="d-flex flex-column pa-6">
        <div class="d-flex align-center">
          <div class="text-h5 font-weight-medium">Hosted endpoints</div>
        </div>

        <div class="text-body-1 mt-2">
          These keys will allow you to authenticate API requests.
        </div>
      </div>

      <v-table class="text-black" style="border-radius: 0 !important">
        <thead class="text-m-emphasis text-uppercase">
          <tr>
            <th class="pl-6">URL</th>
            <th>Last 7d</th>
            <th>Event Emitter</th>
            <th>Error rate</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody class="font-weight-medium">
          <tr v-for="i in 4" :key="i">
            <td class="pl-6">
              https://test-api.interactwith.io/folder/webhook
            </td>
            <td>
              <svg
                width="252"
                height="40"
                viewBox="0 0 252 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.416 30L60.916 18L72.416 27L138.916 14L153.416 27L166.416 20.5L172.416 27L201.916 11.5"
                  stroke="#C73D2A"
                />
                <path
                  d="M25.416 19L44.416 31L61.416 12L90.916 28.5H144.416L176.416 12L195.416 8.5"
                  stroke="#40C72A"
                />
              </svg>
            </td>
            <td>
              <v-btn
                size="small"
                variant="flat"
                color="primary"
                to="/"
                append-icon="solid-interface-arrow-right"
              >
                GREY-DAWN-4FG1
              </v-btn>
            </td>
            <td class="text-error">20%</td>
            <td class="text-success">Active</td>
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
