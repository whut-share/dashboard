<template>
  <div class="payment-step flex-grow-1 d-flex flex-column">
    <div id="payment-element"></div>
    <v-btn @click="submit"> Pay </v-btn>
  </div>
</template>

<script setup lang="ts">
import { useStripe } from "@/plugins";
import { useDassetsFlowStore } from "@/store";
import { computed, onMounted, ref } from "vue";

const stripe = useStripe();
const pi_secret = ref("");

const dassets_flow_store = useDassetsFlowStore();
const session = computed(() => dassets_flow_store.session);

let elements: any;

async function render() {
  await fetch(
    `${process.env["VUE_APP_API_URL"]}/dassets/session/${session.value?.id}/stripe-pi`,
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
  const { error } = await stripe.confirmPayment({
    //`Elements` instance that was used to create the Payment Element
    elements,
    confirmParams: {
      return_url: "https://example.com/order/123/complete",
    },
  });
}

onMounted(() => {
  render();
});
</script>
