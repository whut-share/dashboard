<template>
  <v-sheet
    color="transparent"
    width="300"
    class="d-flex align-center steps-block"
  >
    <div class="cnt mr-3">
      <v-card
        @click="true"
        bg-color="white"
        :width="size"
        :height="size"
        class="d-flex align-center justify-center"
        elevation="10"
      >
        1
      </v-card>
      <div class="title mt-2 text-caption text-m-emphasis font-weight-bold">
        Payment method
      </div>
    </div>
    <v-divider color="grey-lighten-5"></v-divider>
    <div class="cnt mx-3">
      <v-card
        @click="true"
        bg-color="white"
        :width="size"
        :height="size"
        class="d-flex align-center justify-center"
        elevation="10"
      >
        2
      </v-card>
      <div class="title mt-2 text-caption text-m-emphasis font-weight-bold">
        Payment details
      </div>
    </div>
    <v-divider color="grey-lighten-5"></v-divider>
    <div class="cnt mx-3">
      <v-card
        @click="true"
        bg-color="white"
        :width="size"
        :height="size"
        class="d-flex align-center justify-center"
        elevation="10"
      >
        3
      </v-card>
      <div class="title mt-2 text-caption text-m-emphasis font-weight-bold">
        Complete
      </div>
    </div>
  </v-sheet>
</template>

<script setup lang="ts">
import { ref } from "vue-demi";

const size = ref(40);
</script>

<style scoped lang="scss">
.steps-block {
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(20%);
  user-select: none;

  .cnt {
    position: relative;
  }

  .title {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: auto;
    white-space: nowrap;
  }
}
</style>
