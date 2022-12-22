<template>
  <div>
    <v-btn :loading="is_loading" @click="create">Create</v-btn>
  </div>
</template>

<script setup lang="ts">
import {
  GqlMinterCheckoutSessionsCreateOne,
  GqlMinterCheckoutSessionsCreateOneVariables,
  GqlMinterCheckoutSessionsGetVariables,
  GqlWebhookEndpointsCreateOne,
  GqlWebhookEndpointsCreateOneVariables,
  GqlWebhookEndpointsSelect,
  GQL_MINTER_CHECKOUT_SESSIONS_CREATE_ONE,
  GQL_WEBHOOK_ENDPOINTS_CREATE_ONE,
  GQL_WEBHOOK_ENDPOINTS_SELECT,
} from "@/graphql";
import { IWebhookEndpoint } from "@/interfaces";
import { apollo_client } from "@/plugins";
import { onMounted, ref, defineProps } from "vue";

const is_loading = ref(false);

const props = defineProps<{
  project: string;
}>();

async function create() {
  is_loading.value = true;
  await apollo_client
    .mutate<
      GqlMinterCheckoutSessionsCreateOne,
      GqlMinterCheckoutSessionsCreateOneVariables
    >({
      mutation: GQL_MINTER_CHECKOUT_SESSIONS_CREATE_ONE,
      variables: {
        data: {
          project: props.project,
          asset_info: {
            name: "Basic reel",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image_url:
              "https://ik.imagekit.io/iz0kxobkj/item-collections/353/render_376c9acabc2064b34dec12575725fb51f3bd2ac4.png",
            id: "itm_23442",
          },
        },
      },
    })
    .finally(() => {
      is_loading.value = false;
    });
}
</script>

<style></style>
