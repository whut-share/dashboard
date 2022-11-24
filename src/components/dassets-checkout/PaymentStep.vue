<template>
  <div class="payment-step flex-grow-1 d-flex flex-column">
    <div class="text-h6">
      You need to pay: ${{ session?.price_estimation?.price }}
    </div>
    <div style="min-height: 200px" class="mb-6">
      <div id="payment-element"></div>
      <v-overlay absolute>
        <v-progress-circular indeterminate size="64"></v-progress-circular>
      </v-overlay>
    </div>
    <v-btn
      :loading="is_payment_loading"
      class="align-self-start"
      size="large"
      append-icon="mdi-check"
      color="success"
      @click="submit"
    >
      Pay
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

const stripe = useStripe();
const is_render_loading = ref(true);
const is_payment_loading = ref(false);

const dassets_flow_store = useDassetsCheckoutStore();
const session = computed(() => dassets_flow_store.session);

let elements: any;

async function render() {
  const session = dassets_flow_store.getSessionOrFail();

  await apollo_client
    .mutate<
      GqlDassetsCheckoutSessionsAttachStripePaymentIntent,
      GqlDassetsCheckoutSessionsAttachStripePaymentIntentVariables
    >({
      mutation: GQL_DASSETS_CHECKOUT_SESSIONS_ATTACH_STRIPE_PAYMENT_INTENT,
      variables: {
        id: session.id,
      },
    })
    .then((res) => {
      dassets_flow_store.setSession(
        res.data.dassetsCheckoutSessionAttachStripePaymentIntent
      );
    });

  if (!session.stripe_pi_client_secret) {
    throw new Error("No stripe pi client secret");
  }

  elements = stripe.elements({
    appearance: {
      theme: "stripe",
    },
    clientSecret: session.stripe_pi_client_secret,
  });

  const paymentElement = elements.create("payment");
  paymentElement.mount("#payment-element");
}

async function submit() {
  is_payment_loading.value = true;

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
