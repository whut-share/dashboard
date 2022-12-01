<template>
  <v-card
    theme="dark"
    class="pa-10 getting-started flex-grow-1 d-flex flex-column justify-center"
    rounded="xl"
  >
    <v-img cover :src="require('@/assets/images/getting-started.jpg')"></v-img>
    <div class="d-flex flex-column" style="position: relative">
      <div class="text-body-1 mb-2">Welcome <b>scott0091</b>,</div>
      <div class="text-h3 font-weight-bold mb-4">Get started</div>
      <div class="text-body-2 mb-10">
        InteractWith is a free to use, plug and play service, empowering your
        app with web3 capabilities. We harness powerful APIs, SDKs and
        innovative tools to enable your users to InteractWith any blockchain.
      </div>
      <div class="d-flex">
        <v-btn size="large" color="primary" class="mr-4">
          Watch tutorial
        </v-btn>

        <v-btn size="large" variant="outlined"> View API docs </v-btn>
      </div>
    </div>
  </v-card>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.getting-started {
  > .v-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
