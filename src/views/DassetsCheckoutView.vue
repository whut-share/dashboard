<template>
  <div class="dassets-flow-view flex-grow-1 d-flex flex-column">
    <v-container class="flex-grow-1 d-flex flex-column pt-16">
      <v-row class="flex-grow-1">
        <v-col
          cols="12"
          md="6"
          class="d-flex flex-column align-center justify-center"
        >
          <v-card
            theme="dark"
            rounded="xl"
            width="300"
            height="300"
            class="pa-5 d-flex align-center justify-center text-h3"
            elevation="10"
          >
            <v-img contain :src="session?.asset_info.image_url"></v-img>
          </v-card>
          <div class="text-h4 text-center mt-4 font-weight-bold">
            {{ session?.asset_info.name }}
          </div>
          <div class="body-1 text-center mt-2" style="max-width: 200px">
            {{ session?.asset_info.description }}
          </div>
        </v-col>

        <v-col cols="12" md="6" class="d-flex flex-column justify-center">
          <v-card theme="dark" class="d-flex pa-4 mb-10" rounded="lg">
            <div class="text-h4 font-weight-bold">STEP: {{ step }}</div>
          </v-card>

          <div class="flex-grow-1">
            <div class="text-h5" v-if="is_session_loading">Loading...</div>

            <WalletStep v-else-if="step === 1" />
            <NetworkStep v-else-if="step === 2" />
            <PaymentStep v-else-if="step === 3" />
            <WaitStep v-else-if="step === 4" />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import NetworkStep from "@/components/dassets-checkout/NetworkStep.vue";
import PaymentStep from "@/components/dassets-checkout/PaymentStep.vue";
import WalletStep from "@/components/dassets-checkout/WalletStep.vue";
import WaitStep from "@/components/dassets-checkout/WaitStep.vue";
import { useDassetsCheckoutStore } from "@/store";
import { computed, onMounted, ref } from "vue-demi";
import { useRoute } from "vue-router";

const dassets_checkout_store = useDassetsCheckoutStore();
const route = useRoute();

const step = computed(() => dassets_checkout_store.step);
const session = computed(() => dassets_checkout_store.session);

const is_session_loading = ref(true);

if (typeof route.params.session !== "string") {
  throw new Error("Invalid session id");
}

dassets_checkout_store.sync(route.params.session).finally(async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  dassets_checkout_store.initPage();
  is_session_loading.value = false;
});
</script>
