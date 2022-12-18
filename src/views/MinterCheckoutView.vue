<template>
  <div class="dassets-flow-view flex-grow-1 d-flex flex-column">
    <svg
      width="288"
      class="w-100"
      height="99"
      viewBox="0 0 288 99"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M428.113 -251.671L428.113 96.8153C428.113 96.8153 336.816 75.9362 156.119 75.9365C-24.5777 75.9367 -121 98.144 -121 98.144V-253C-121 -253 -24.5777 -230.793 156.119 -230.793C336.816 -230.792 428.113 -251.671 428.113 -251.671Z"
        fill="url(#paint0_radial_2143_8890)"
        fill-opacity="0.5"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M428.113 10.2702L428.113 84.1053C428.113 84.1053 336.816 63.2262 156.119 63.2265C-24.5777 63.2267 -121 85.434 -121 85.434V8.94154C-121 8.94154 -24.5777 -10.4192 156.119 -10.4189C336.816 -10.4187 428.113 10.2702 428.113 10.2702Z"
        fill="url(#paint1_linear_2143_8890)"
        fill-opacity="0.4"
      />
      <defs>
        <radialGradient
          id="paint0_radial_2143_8890"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(114.551 -65.3766) rotate(-117.039) scale(517.728 581.423)"
        >
          <stop stop-color="#BAC4CE" stop-opacity="0" />
          <stop offset="1" stop-color="#A9D2F7" />
        </radialGradient>
        <linearGradient
          id="paint1_linear_2143_8890"
          x1="169.216"
          y1="37.6024"
          x2="169.696"
          y2="81.063"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#BAC4CE" stop-opacity="0" />
          <stop offset="1" stop-color="#A9D2F7" />
        </linearGradient>
      </defs>
    </svg>

    <div class="d-flex flex-column flex-grow-1" style="position: relative">
      <GlobalBg style="position: absolute" />
      <div class="grad"></div>
      <StepsBlock />

      <v-container
        class="flex-grow-1 d-flex flex-column pt-16"
        style="position: relative"
      >
        <v-row class="flex-grow-1">
          <v-col
            cols="12"
            md="6"
            class="d-flex flex-column align-center justify-center"
          >
            <v-card
              rounded="xl"
              width="500"
              class="pa-5 d-flex align-center justify-center text-h3"
              variant="text"
            >
              <v-img contain :src="session?.asset_info?.image_url"></v-img>
            </v-card>
            <div class="text-h4 text-center mt-4 font-weight-bold">
              {{ session?.asset_info?.name }}
            </div>
            <div
              class="text-body-2 text-m-emphasis text-center mt-2"
              style="max-width: 200px"
            >
              {{ session?.asset_info?.description }}
            </div>
          </v-col>

          <v-col cols="12" md="6" class="d-flex flex-column justify-center">
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
  </div>
</template>

<script setup lang="ts">
import NetworkStep from "@/components/dassets-checkout/NetworkStep.vue";
import PaymentStep from "@/components/dassets-checkout/PaymentStep.vue";
import WalletStep from "@/components/dassets-checkout/WalletStep.vue";
import WaitStep from "@/components/dassets-checkout/WaitStep.vue";
import GlobalBg from "@/components/common/GlobalBg.vue";
import { useDassetsCheckoutStore } from "@/store";
import { computed, onMounted, ref } from "vue-demi";
import { useRoute } from "vue-router";
import StepsBlock from "@/components/dassets-checkout/StepsBlock.vue";

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

<style lang="scss" scoped>
.grad {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 20%;
  background: linear-gradient(
    180deg,
    rgba(#f2f5ff, 1) 0%,
    rgba(#f2f5ff, 0) 100%
  );
}
</style>
