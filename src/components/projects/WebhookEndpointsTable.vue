<template>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">Key</th>
        <th class="text-left">Url</th>
        <th class="text-left">Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <v-text-field v-model="new_webhook_endpoint_form.key"></v-text-field>
        </td>
        <td>
          <v-text-field v-model="new_webhook_endpoint_form.url"></v-text-field>
        </td>
        <td>
          <v-btn @click="create">Create</v-btn>
        </td>
      </tr>
      <tr v-for="we in webhook_endpoints" :key="we.id">
        <td>{{ we.key }}</td>
        <td>{{ we.url }}</td>
        <td>Active</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script setup lang="ts">
import {
  GqlWebhookEndpointsCreateOne,
  GqlWebhookEndpointsCreateOneVariables,
  GqlWebhookEndpointsSelect,
  GQL_WEBHOOK_ENDPOINTS_CREATE_ONE,
  GQL_WEBHOOK_ENDPOINTS_SELECT,
} from "@/graphql";
import { IWebhookEndpoint } from "@/interfaces";
import { apollo_client } from "@/plugins";
import { onMounted, ref, defineProps } from "vue";

const webhook_endpoints = ref([] as IWebhookEndpoint[]);
const new_webhook_endpoint_form = ref({
  key: "",
  url: "",
});

const is_webhooks_loading = ref(true);

const props = defineProps<{
  project: string;
}>();

async function create() {
  await apollo_client.mutate<
    GqlWebhookEndpointsCreateOne,
    GqlWebhookEndpointsCreateOneVariables
  >({
    mutation: GQL_WEBHOOK_ENDPOINTS_CREATE_ONE,
    variables: {
      data: {
        ...new_webhook_endpoint_form.value,
        project: props.project,
      },
    },
  });

  await sync();
}

async function sync() {
  const we = await apollo_client
    .query<GqlWebhookEndpointsSelect>({
      query: GQL_WEBHOOK_ENDPOINTS_SELECT,
    })
    .then((res) => res.data.webhook_endpoints);

  webhook_endpoints.value = we;
}

onMounted(() => {
  is_webhooks_loading.value = true;
  sync().then(() => {
    is_webhooks_loading.value = false;
  });
});
</script>

<style></style>
