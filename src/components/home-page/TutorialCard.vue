<template>
  <v-card rounded="xl" elevation="10" class="mt-6 tutorial-card">
    <v-img
      :aspect-ratio="16 / 9"
      :src="require('@/assets/images/tutorial-bg.jpg')"
    ></v-img>
    <div class="overlay"></div>
    <div class="upper py-4 px-5 font-weight-medium text-m-emphasis">
      Tutorial: How to get started
    </div>

    <svg
      width="86"
      height="86"
      viewBox="0 0 86 86"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="43" cy="43" r="43" fill="#7D42FB" fill-opacity="0.05" />
      <path
        d="M61 39.5359C63.6667 41.0755 63.6667 44.9245 61 46.4641L37 60.3205C34.3333 61.8601 31 59.9356 31 56.8564L31 29.1436C31 26.0644 34.3333 24.1399 37 25.6795L61 39.5359Z"
        fill="#2BABCC"
      />
    </svg>
  </v-card>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.tutorial-card {
  position: relative;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .upper {
    position: absolute;
    background: linear-gradient(
      92.11deg,
      rgba(125, 66, 251, 0.07) 17.32%,
      rgba(125, 66, 251, 0) 81.32%
    );
    top: 0;
    left: 0;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
