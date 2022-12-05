<template>
  <div class="overview-page d-flex flex-column">
    <div class="d-flex align-center">
      <div class="d-flex flex-column">
        <div class="text-h4 font-weight-medium">Overview</div>
        <div class="text-h5 mt-2">Welcome <b>dev1337</b>,</div>
      </div>
      <v-spacer></v-spacer>
      <ProjectsSelector v-model="project" />
    </div>

    <v-row class="mt-6">
      <v-col cols="6">
        <v-card elevation="10" class="pa-6">
          <div class="d-flex flex-column">
            <div
              class="text-uppercase font-weight-bold text-caption text-m-emphasis"
            >
              Total Interact Players
            </div>
            <div class="text-h6 font-weight-bold text-black">Active: 2779</div>
          </div>
          <v-img
            class="mt-8 mb-4"
            :src="require('@/assets/images/p-overview.png')"
          ></v-img>
        </v-card>
      </v-col>

      <v-col cols="6">
        <v-card elevation="10" class="pa-6">
          <div class="d-flex flex-column">
            <div
              class="text-uppercase font-weight-bold text-caption text-m-emphasis"
            >
              Interacted Items
            </div>
            <div class="text-h6 font-weight-bold text-black">Total: 92,391</div>
          </div>
          <v-img
            class="mt-8 mb-4"
            :src="require('@/assets/images/chart-2.png')"
          ></v-img>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="mt-6">
      <v-col cols="7">
        <v-card
          elevation="10"
          min-height="100%"
          class="pa-6 d-flex flex-column"
        >
          <div class="d-flex flex-column">
            <div
              class="text-uppercase font-weight-bold text-caption text-m-emphasis"
            >
              Royalty
            </div>
            <div class="text-h6 font-weight-bold text-black">
              Earnings: $1,309,2
            </div>
          </div>
          <v-img
            class="mt-8 mb-4"
            :src="require('@/assets/images/chart.png')"
          ></v-img>
        </v-card>
      </v-col>

      <v-col cols="5">
        <v-card elevation="10" class="pa-6">
          <div class="d-flex flex-column">
            <div
              class="text-uppercase font-weight-bold text-caption text-m-emphasis"
            >
              Item Prices
            </div>
            <div class="d-flex">
              <div class="d-flex align-start mr-2">
                <div
                  class="text-caption mr-2 mt-1 text-uppercase font-weight-bold text-m-emphasis"
                >
                  avg
                </div>
                <div class="text-h6 font-weight-bold text-black">$10,9</div>
              </div>
              <v-divider vertical class="my-1"></v-divider>
              <div class="d-flex align-start mx-2">
                <div
                  class="text-caption mr-2 mt-1 text-uppercase font-weight-bold text-m-emphasis"
                >
                  min
                </div>
                <div class="text-h6 font-weight-bold text-black">$10,9</div>
              </div>
              <v-divider vertical class="my-1"></v-divider>
              <div class="d-flex align-start mx-2">
                <div
                  class="text-caption mr-2 mt-1 text-uppercase font-weight-bold text-m-emphasis"
                >
                  max
                </div>
                <div class="text-h6 font-weight-bold text-black">$10,9</div>
              </div>
            </div>
          </div>
          <v-img
            class="mt-8 mb-4"
            :src="require('@/assets/images/chart-3.png')"
          ></v-img>
        </v-card>

        <v-card elevation="10" class="mt-6">
          <div
            class="pa-6 text-uppercase font-weight-bold text-caption text-m-emphasis"
          >
            Items Road
          </div>
          <div class="d-flex flex-column">
            <v-divider color="accent"></v-divider>
            <div class="d-flex px-6 py-4">
              <v-img
                max-width="80"
                :src="require('@/assets/images/binance.png')"
              ></v-img>
              <v-spacer></v-spacer>
              <div class="text-body-2 font-weight-medium">1,293</div>
            </div>

            <v-divider color="accent"></v-divider>
            <div class="d-flex px-6 py-4">
              <v-img
                max-width="80"
                :src="require('@/assets/images/nftrade.png')"
              ></v-img>
              <v-spacer></v-spacer>
              <div class="text-body-2 font-weight-medium">1,293</div>
            </div>

            <v-divider color="accent"></v-divider>
            <div class="d-flex px-6 py-4">
              <v-img
                max-width="80"
                :src="require('@/assets/images/opensea.png')"
              ></v-img>
              <v-spacer></v-spacer>
              <div class="text-body-2 font-weight-medium">1,293</div>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import ProjectsSelector from "@/components/common/ProjectsSelector.vue";
import { ref } from "vue-demi";

const project = ref<string | null>(null);
</script>

<style lang="scss" scoped>
.overview-page {
}
</style>
