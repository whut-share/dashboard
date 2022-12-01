<template>
  <div class="home-page mt-5">
    <v-container fluid>
      <v-row>
        <v-col cols="6" class="d-flex flex-column">
          <GettingStarted />
          <NeedHelp />
          <SendFeedback />
        </v-col>

        <v-col cols="6">
          <ProductsCard />
          <TutorialCard />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import GettingStarted from "@/components/home-page/GettingStarted.vue";
import NeedHelp from "@/components/home-page/NeedHelp.vue";
import SendFeedback from "@/components/home-page/SendFeedback.vue";
import ProductsCard from "@/components/home-page/ProductsCard.vue";
import TutorialCard from "@/components/home-page/TutorialCard.vue";
</script>

<style lang="scss" scoped>
.home-page {
}
</style>
