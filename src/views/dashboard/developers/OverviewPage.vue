<template>
  <div class="d-flex flex-column overview-page">
    <div class="d-flex align-center">
      <div class="d-flex flex-column">
        <div class="text-h4 font-weight-medium">Overview</div>
        <div class="text-body-1 mt-2">Welcome <b>dev1337</b>,</div>
      </div>
      <v-spacer></v-spacer>
      <ProjectsSelector v-model="project" />
    </div>

    <v-row class="mt-6">
      <v-col cols="6">
        <v-card elevation="10" variant="flat">
          <div class="d-flex flex-column pa-6">
            <div
              class="text-body-2 text-uppercase font-weight-bold text-m-emphasis mb-2"
            >
              api requests
            </div>
            <div class="d-flex">
              <div class="flex-column mr-8">
                <div class="text-h5 font-weight-bold text-success">189</div>
                <div class="text-caption text-grey">successful</div>
              </div>

              <div class="flex-column">
                <div class="text-h5 font-weight-bold text-error">99</div>
                <div class="text-caption text-grey">failed</div>
              </div>
            </div>
          </div>

          <v-img :src="require('@/assets/images/chart-1.png')"></v-img>
        </v-card>
      </v-col>

      <v-col cols="6">
        <v-card elevation="10" variant="flat">
          <div class="d-flex flex-column pa-6">
            <div
              class="text-body-2 text-uppercase font-weight-bold text-m-emphasis mb-2"
            >
              api requests
            </div>
            <div class="d-flex">
              <div class="flex-column mr-8">
                <div class="text-h5 font-weight-bold text-success">189</div>
                <div class="text-caption text-grey">successful</div>
              </div>

              <div class="flex-column">
                <div class="text-h5 font-weight-bold text-error">99</div>
                <div class="text-caption text-grey">failed</div>
              </div>
            </div>
          </div>

          <v-img :src="require('@/assets/images/chart-1.png')"></v-img>
        </v-card>
      </v-col>

      <v-col cols="6">
        <v-card elevation="10" variant="flat">
          <div class="d-flex flex-column pa-6">
            <div
              class="text-body-2 text-uppercase font-weight-bold text-m-emphasis mb-2"
            >
              api requests
            </div>
            <div class="d-flex">
              <div class="flex-column mr-8">
                <div class="text-h5 font-weight-bold text-success">189</div>
                <div class="text-caption text-grey">successful</div>
              </div>

              <div class="flex-column">
                <div class="text-h5 font-weight-bold text-error">99</div>
                <div class="text-caption text-grey">failed</div>
              </div>
            </div>
          </div>

          <v-img :src="require('@/assets/images/chart-1.png')"></v-img>
        </v-card>
      </v-col>

      <v-col cols="6">
        <v-card elevation="10" variant="flat">
          <div class="d-flex flex-column pa-6">
            <div
              class="text-body-2 text-uppercase font-weight-bold text-m-emphasis mb-2"
            >
              api requests
            </div>
            <div class="d-flex">
              <div class="flex-column mr-8">
                <div class="text-h5 font-weight-bold text-success">189</div>
                <div class="text-caption text-grey">successful</div>
              </div>

              <div class="flex-column">
                <div class="text-h5 font-weight-bold text-error">99</div>
                <div class="text-caption text-grey">failed</div>
              </div>
            </div>
          </div>

          <v-img :src="require('@/assets/images/chart-1.png')"></v-img>
        </v-card>
      </v-col>
    </v-row>

    <ErrorsSidebar />
  </div>
</template>

<script setup lang="ts">
import ProjectsSelector from "@/components/common/ProjectsSelector.vue";
import ErrorsSidebar from "@/components/developers/ErrorsSidebar.vue";
import { ref } from "vue-demi";

const project = ref<string | null>(null);
</script>

<style lang="scss" scoped>
.overview-page {
  padding-right: 280px;
}
</style>
