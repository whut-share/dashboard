<template>
  <div class="dassets-flow-view flex-grow-1 d-flex flex-column">
    <v-container>
      <v-row>
        <v-col cols="12" md="6" class="d-flex flex-column">
          <v-card
            rounded="circle"
            width="300"
            height="300"
            class="d-flex align-center justify-center text-h3"
          >
            D
          </v-card>
        </v-col>

        <v-col cols="12" md="6" class="d-flex flex-column">
          step: {{ step }} <br />
          session: {{ session }} <br />
          <div class="text-h5" v-if="session_loading">Loading...</div>
          <template v-else>
            <WalletStep v-if="step === 1" />
            <NetworkStep v-else-if="step === 2" />
            <PaymentStep v-else-if="step === 3" />
          </template>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import NetworkStep from "@/components/dassets-flow/NetworkStep.vue";
import PaymentStep from "@/components/dassets-flow/PaymentStep.vue";
import WalletStep from "@/components/dassets-flow/WalletStep.vue";
import { useDassetsFlowStore } from "@/store";
import { computed, ref } from "vue-demi";
import { useRoute } from "vue-router";

const dassets_flow_store = useDassetsFlowStore();
const route = useRoute();

const step = computed(() => dassets_flow_store.step);
const session = computed(() => dassets_flow_store.session);

const session_loading = ref(true);

if (typeof route.params.session !== "string") {
  throw new Error("Invalid session id");
}

dassets_flow_store.sync(route.params.session).finally(() => {
  session_loading.value = false;
});
</script>
