<template>
  <div class="payment-step flex-grow-1 d-flex flex-column">
    <div style="min-height: 200px" class="mb-6">
      <div id="payment-element"></div>
      <v-overlay absolute>
        <v-progress-circular indeterminate size="64"></v-progress-circular>
      </v-overlay>
    </div>
    <ui-titled-input title="Wallet address">
      <v-text-field
        placeholder="0x00...000"
        v-model="wallet_address"
      ></v-text-field>
    </ui-titled-input>
    <v-btn
      :loading="is_payment_loading"
      class="align-self-start"
      size="large"
      color="primary"
      rounded="lg"
      @click="submit"
    >
      Pay ${{ session?.price_estimation?.price?.toFixed(2) }}
    </v-btn>
  </div>
</template>

<script setup lang="ts">
import {
  GqlDassetsCheckoutSessionsAttachStripePaymentIntent,
  GqlDassetsCheckoutSessionsAttachStripePaymentIntentVariables,
  GQL_DASSETS_CHECKOUT_SESSIONS_ATTACH_STRIPE_PAYMENT_INTENT,
} from "@/graphql";
import { apollo_client, useStripe } from "@/plugins";
import { useDassetsCheckoutStore } from "@/store";
import { computed, onMounted, ref } from "vue";
import { satoshi_base64 } from "./satoshi-base64";

const stripe = useStripe();
const is_render_loading = ref(true);
const is_payment_loading = ref(false);

const dassets_flow_store = useDassetsCheckoutStore();
const session = computed(() => dassets_flow_store.session);

let elements: any;

async function render() {
  await apollo_client
    .mutate<
      GqlDassetsCheckoutSessionsAttachStripePaymentIntent,
      GqlDassetsCheckoutSessionsAttachStripePaymentIntentVariables
    >({
      mutation: GQL_DASSETS_CHECKOUT_SESSIONS_ATTACH_STRIPE_PAYMENT_INTENT,
      variables: {
        id: session.value?.id,
      },
    })
    .then((res) => {
      dassets_flow_store.setSession(
        res.data.dassetsCheckoutSessionAttachStripePaymentIntent
      );
    });

  if (!session.value?.stripe_pi_client_secret) {
    throw new Error("No stripe pi client secret");
  }

  elements = stripe.elements({
    locale: "en",
    fonts: [
      {
        family: "Satoshi",
        cssSrc: "https://test-api.interactwith.com/satoshi.css",
      },
    ],
    appearance: {
      theme: "stripe",
      variables: {
        fontFamily: "Satoshi",
        colorPrimary: "#7D42FB",
        borderRadius: "12px",
      },
    },
    clientSecret: session.value?.stripe_pi_client_secret,
  });

  const paymentElement = elements.create("payment", {});
  paymentElement.mount("#payment-element");
}

const wallet_address = ref("");

async function submit() {
  is_payment_loading.value = true;

  if (!session.value?.address) {
    throw new Error("No address");
  }

  await stripe
    .confirmPayment({
      elements,
      confirmParams: {
        return_url: window.location.href,
      },
    })
    .finally(() => {
      is_payment_loading.value = false;
    });
}

onMounted(() => {
  render().finally(() => {
    is_render_loading.value = false;
  });
});
</script>
