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
import { useStripe } from "@/plugins";
import { useDassetsCheckoutStore } from "@/store";
import { computed, onMounted, ref } from "vue";

const stripe = useStripe();
const pi_secret = ref("");
const is_render_loading = ref(true);
const is_payment_loading = ref(false);

const dassets_flow_store = useDassetsCheckoutStore();
const session = computed(() => dassets_flow_store.session);

let elements: any;

async function render() {
  await fetch(
    `${process.env["VUE_APP_API_URL"]}/dassets-checkouts/${session.value?.id}/stripe-pi`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((res) => res.json())
    .then((res) => {
      pi_secret.value = res.client_secret;
    });

  elements = stripe.elements({
    appearance: {
      theme: "stripe",
    },
    clientSecret: pi_secret.value,
  });

  const paymentElement = elements.create("payment");
  paymentElement.mount("#payment-element");
}

async function submit() {
  is_payment_loading.value = true;

  await stripe
    .confirmPayment({
      //`Elements` instance that was used to create the Payment Element
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
