<template>
  <v-table>
    <thead class="text-uppercase text-m-emphasis">
      <slot name="head"></slot>
    </thead>

    <tbody class="text-block">
      <slot name="body"></slot>
    </tbody>
  </v-table>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
