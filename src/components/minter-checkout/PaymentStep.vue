<template>
  <div class="payment-step d-flex justify-center flex-column">
    <v-card
      color="transparent"
      rounded="lg"
      elevation="0"
      style="overflow: visible"
      min-height="100"
      class="mb-4"
    >
      <div id="payment-element"></div>
      <v-overlay
        contained
        v-model="overlay"
        class="d-flex align-center justify-center"
      >
        <v-progress-circular color="primary" size="32"></v-progress-circular>
      </v-overlay>
    </v-card>
    <ui-titled-input title="Wallet address">
      <v-text-field
        placeholder="0x00...000"
        v-model="wallet_address"
        :validations="[
          (v: string) => !!v || 'Wallet address is required',
          (v: string) => v.length === 42 || 'Wallet address is invalid'
        ]"
      ></v-text-field>
    </ui-titled-input>
    <v-btn
      :loading="is_payment_loading"
      class="mt-8"
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
  GqlMinterCheckoutSessionsAttachStripePaymentIntent,
  GqlMinterCheckoutSessionsAttachStripePaymentIntentVariables,
  GQL_MINTER_CHECKOUT_SESSIONS_ATTACH_STRIPE_PAYMENT_INTENT,
} from "@/graphql";
import { apollo_client, useStripe } from "@/plugins";
import { useMinterCheckoutStore } from "@/store";
import { computed, onMounted, ref } from "vue";

const stripe = useStripe();
const is_render_loading = ref(true);
const is_payment_loading = ref(false);

const minter_checkout_store = useMinterCheckoutStore();
const session = computed(() => minter_checkout_store.session);
const overlay = computed(
  () => is_render_loading.value || is_payment_loading.value
);

let stripe_elements: any;

async function render() {
  await apollo_client
    .mutate<
      GqlMinterCheckoutSessionsAttachStripePaymentIntent,
      GqlMinterCheckoutSessionsAttachStripePaymentIntentVariables
    >({
      mutation: GQL_MINTER_CHECKOUT_SESSIONS_ATTACH_STRIPE_PAYMENT_INTENT,
      variables: {
        id: session.value?.id,
      },
    })
    .then((res) => {
      minter_checkout_store.setSession(
        res.data.minterCheckoutSessionAttachStripePaymentIntent
      );
    });

  if (!session.value?.stripe_pi_client_secret) {
    throw new Error("No stripe pi client secret");
  }

  const elements = stripe.elements({
    locale: "en",
    fonts: [
      {
        family: "Satoshi",
        cssSrc: "https://test-api.interactwith.com/static/satoshi.css",
      },
    ],
    appearance: {
      theme: "stripe",
      variables: {
        fontFamily: "Satoshi",
        colorPrimary: "#7D42FB",
        borderRadius: "12px",
        fontSizeSm: "0.75rem",
        focusBoxShadow: "none",
        colorTextPlaceholder: "#767683",
        spacingGridRow: "16px",
      },
      rules: {
        ".Label": {
          paddingLeft: "8px",
          lineHeight: "1.25rem",
        },
        ".Input": {
          paddingLeft: "16px",
          paddingTop: "12px",
          paddingBottom: "12px",
        },
      },
    },
    clientSecret: session.value?.stripe_pi_client_secret,
  });

  const paymentElement = elements.create("payment", {});
  paymentElement.mount("#payment-element");

  stripe_elements = elements;
}

const wallet_address = ref("");

async function submit() {
  if (!wallet_address.value.length) {
    throw new Error("No address");
  }

  const fire = async () => {
    await minter_checkout_store.updateSessionAndSave({
      address: wallet_address.value,
    });

    await stripe.confirmPayment({
      elements: stripe_elements,
      // confirmParams: {
      //   return_url: window.location.href,
      // },
      redirect: "if_required",
    });

    await startChecks();
  };

  is_payment_loading.value = true;
  await fire().finally(() => {
    is_payment_loading.value = false;
  });

  minter_checkout_store.nextPage();
}

async function startChecks() {
  await minter_checkout_store.sync();
  if (!session.value?.is_payed) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await startChecks();
  }
}

onMounted(() => {
  render().finally(() => {
    is_render_loading.value = false;
  });
});
</script>

<style lang="scss" scoped></style>
