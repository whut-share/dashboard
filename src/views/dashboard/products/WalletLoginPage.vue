<template>
  <div class="wallet-login-page d-flex flex-column">
    <div class="d-flex align-center">
      <div class="d-flex flex-column">
        <div class="text-h4 font-weight-medium">Web3 Auth</div>
      </div>
      <v-spacer></v-spacer>

      <div class="d-flex">
        <v-btn
          @click="tab = 'overview'"
          rounded="lg"
          color="primary"
          :variant="tab === 'overview' ? 'flat' : 'plain'"
          class="mr-4"
        >
          Overview
        </v-btn>

        <v-btn
          @click="tab = 'analytics'"
          rounded="lg"
          color="primary"
          :variant="tab === 'analytics' ? 'flat' : 'plain'"
        >
          Wallet Analytics
        </v-btn>
      </div>
    </div>

    <template v-if="tab === 'overview'">
      <v-row class="mt-6">
        <v-col cols="6">
          <v-card elevation="10" class="pa-10 d-flex flex-column align-start">
            <div class="text-h5 font-weight-bold">Customize your wallet</div>
            <div class="text-body-2 text-m-emphasis font-weight-medium mt-3">
              Lorem ipsum dolor sit amet consectetur. Dictumst in aenean
              malesuada turpis quisque arcu libero pharetra. Risus arcu in nibh
              sodales lectus pellentesque sed nam.
            </div>

            <v-btn color="primary" size="large" variant="outlined" class="mt-8">
              Learn more
            </v-btn>

            <div class="arrow mt-4 mr-4">
              <v-icon size="large" color="primary">
                outline-interface-arrow-right
              </v-icon>
            </div>
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card elevation="10" class="pa-10 d-flex flex-column align-start">
            <div class="text-h5 font-weight-bold">Wallet Analytics</div>
            <div class="text-body-2 text-m-emphasis font-weight-medium mt-3">
              Lorem ipsum dolor sit amet consectetur. Dictumst in aenean
              malesuada turpis quisque arcu libero pharetra. Risus arcu in nibh
              sodales lectus pellentesque sed nam.
            </div>

            <div class="d-flex mt-8">
              <v-btn
                color="primary"
                size="large"
                variant="outlined"
                class="mr-4"
              >
                View tutorial
              </v-btn>

              <v-btn
                color="primary"
                prepend-icon="solid-files-book"
                size="large"
                variant="text"
              >
                Docs
              </v-btn>
            </div>

            <div class="arrow mt-4 mr-4">
              <v-icon size="large" color="primary">
                outline-interface-arrow-right
              </v-icon>
            </div>
          </v-card>
        </v-col>
      </v-row>

      <TutorialCard class="rounded-md" />
    </template>

    <template v-else>
      <v-row class="mt-6">
        <v-col cols="2">
          <v-card height="100%" elevation="10" class="pa-4 d-flex flex-column">
            <div class="d-flex flex-column">
              <div
                class="text-uppercase font-weight-bold text-caption text-m-emphasis"
              >
                Total users
              </div>
              <div class="text-h6 font-weight-bold text-black">230</div>
            </div>
            <v-spacer></v-spacer>
            <v-img
              width="100%"
              :aspect-ratio="2"
              class="mt-2"
              :src="require('@/assets/images/chart-4.png')"
            ></v-img>
          </v-card>
        </v-col>

        <v-col cols="2">
          <v-card height="100%" elevation="10" class="pa-4 d-flex flex-column">
            <div class="d-flex flex-column">
              <div
                class="text-uppercase font-weight-bold text-caption text-m-emphasis"
              >
                daily active users
              </div>
              <div class="text-h6 font-weight-bold text-black">17</div>
            </div>
            <v-spacer></v-spacer>
            <v-img
              width="100%"
              :aspect-ratio="2"
              class="mt-2"
              :src="require('@/assets/images/chart-4.png')"
            ></v-img>
          </v-card>
        </v-col>

        <v-col cols="2">
          <v-card height="100%" elevation="10" class="pa-4 d-flex flex-column">
            <div class="d-flex flex-column">
              <div
                class="text-uppercase font-weight-bold text-caption text-m-emphasis"
              >
                total repositories
              </div>
              <div class="text-h6 font-weight-bold text-black">48</div>
            </div>
            <v-spacer></v-spacer>
            <v-img
              width="100%"
              :aspect-ratio="2"
              class="mt-2"
              :src="require('@/assets/images/chart-4.png')"
            ></v-img>
          </v-card>
        </v-col>

        <v-col cols="2">
          <v-card height="100%" elevation="10" class="pa-4 d-flex flex-column">
            <div class="d-flex flex-column">
              <div
                class="text-uppercase font-weight-bold text-caption text-m-emphasis"
              >
                total channels
              </div>
              <div class="text-h6 font-weight-bold text-black">20</div>
            </div>
            <v-spacer></v-spacer>
            <v-img
              width="100%"
              :aspect-ratio="2"
              class="mt-2"
              :src="require('@/assets/images/chart-4.png')"
            ></v-img>
          </v-card>
        </v-col>

        <v-col cols="2">
          <v-card height="100%" elevation="10" class="pa-4 d-flex flex-column">
            <div class="d-flex flex-column">
              <div
                class="text-uppercase font-weight-bold text-caption text-m-emphasis"
              >
                Total assets
              </div>
              <div class="text-h6 font-weight-bold text-black">3,892</div>
            </div>
            <v-spacer></v-spacer>
            <v-img
              width="100%"
              :aspect-ratio="2"
              class="mt-2"
              :src="require('@/assets/images/chart-4.png')"
            ></v-img>
          </v-card>
        </v-col>

        <v-col cols="2">
          <v-card height="100%" elevation="10" class="pa-4 d-flex flex-column">
            <div class="d-flex flex-column">
              <div
                class="text-uppercase font-weight-bold text-caption text-m-emphasis"
              >
                Total documents
              </div>
              <div class="text-h6 font-weight-bold text-black">1,083</div>
            </div>
            <v-spacer></v-spacer>
            <v-img
              width="100%"
              :aspect-ratio="2"
              class="mt-2"
              :src="require('@/assets/images/chart-4.png')"
            ></v-img>
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card height="100%" elevation="10" class="pa-6 d-flex flex-column">
            <div class="d-flex flex-column">
              <div
                class="text-uppercase font-weight-bold text-caption text-m-emphasis"
              >
                daily active users (30-day moving average)
              </div>
              <div class="text-h6 font-weight-bold text-black">17</div>
            </div>
            <v-spacer></v-spacer>
            <v-img
              width="100%"
              :aspect-ratio="2"
              class="mt-5"
              :src="require('@/assets/images/chart-7.png')"
            ></v-img>
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card height="100%" elevation="10" class="pa-6 d-flex flex-column">
            <div class="d-flex flex-column">
              <div
                class="text-uppercase font-weight-bold text-caption text-m-emphasis"
              >
                daily new assets (30-day moving average)
              </div>
              <div class="text-h6 font-weight-bold text-black">22</div>
            </div>
            <v-spacer></v-spacer>
            <v-img
              width="100%"
              :aspect-ratio="2"
              class="mt-5"
              :src="require('@/assets/images/chart-6.png')"
            ></v-img>
          </v-card>
        </v-col>
      </v-row>
    </template>
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
