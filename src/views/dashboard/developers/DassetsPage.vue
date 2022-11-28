<template>
  <div class="dassets-page">
    <v-card class="pa-5 mb-3">
      <v-text-field
        :disabled="!new_event_emitter_instance.is_webhook_emitter"
        v-model="new_event_emitter_instance.webhook_endpoint"
        label="Webhook endpoint"
      ></v-text-field>

      <v-checkbox
        v-model="new_event_emitter_instance.is_webhook_emitter"
        label="Webhook emitter?"
      ></v-checkbox>

      <v-btn color="success" @click="create">Create</v-btn>
    </v-card>

    <v-card class="pa-5 mb-3" v-for="n in event_emitter_instances" :key="n.id">
      <div class="body-1 font-weight-bold mb-3">ID: {{ n.id }}</div>

      <v-text-field
        :disabled="!n.is_webhook_emitter"
        v-model="n.webhook_endpoint"
        label="Webhook endpoint"
      ></v-text-field>

      <v-btn color="primary" @click="save">Save</v-btn>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import {
  GqlEventEmitterInstancesCreateOne,
  GqlEventEmitterInstancesCreateOneVariables,
  GqlEventEmitterInstancesSelect,
  GqlEventEmitterInstancesSelectVariables,
  GqlEventEmitterInstancesUpdateOne,
  GqlEventEmitterInstancesUpdateOneVariables,
  GQL_EVENT_EMITTER_INSTANCES_CREATE_ONE,
  GQL_EVENT_EMITTER_INSTANCES_SELECT,
  GQL_EVENT_EMITTER_INSTANCES_UPDATE_ONE,
} from "@/graphql";
import { IEventEmitterInstance } from "@/interfaces";
import { apollo_client } from "@/plugins";
import { useProjectsStore } from "@/store";
import { onMounted, reactive, ref } from "vue-demi";

const new_event_emitter_instance = reactive({
  is_webhook_emitter: true,
  webhook_endpoint: "",
});

const event_emitter_instances = ref<IEventEmitterInstance[]>([]);

async function loadEventEmitterInstances() {
  const projects_store = useProjectsStore();

  const { data } = await apollo_client.query<
    GqlEventEmitterInstancesSelect,
    GqlEventEmitterInstancesSelectVariables
  >({
    query: GQL_EVENT_EMITTER_INSTANCES_SELECT,
    variables: {
      filter: {
        syncer_instance:
          projects_store.selectedProject?.dassets_syncer_instance.id,
      },
    },
  });

  event_emitter_instances.value = data.event_emitter_instances;
}

onMounted(loadEventEmitterInstances);

async function save(eei: IEventEmitterInstance) {
  await apollo_client.mutate<
    GqlEventEmitterInstancesUpdateOne,
    GqlEventEmitterInstancesUpdateOneVariables
  >({
    mutation: GQL_EVENT_EMITTER_INSTANCES_UPDATE_ONE,
    variables: {
      id: eei.id,
      data: {
        webhook_endpoint: eei.webhook_endpoint,
      },
    },
  });
}

async function create() {
  const projects_store = useProjectsStore();

  await apollo_client.mutate<
    GqlEventEmitterInstancesCreateOne,
    GqlEventEmitterInstancesCreateOneVariables
  >({
    mutation: GQL_EVENT_EMITTER_INSTANCES_CREATE_ONE,
    variables: {
      data: {
        webhook_endpoint: new_event_emitter_instance.webhook_endpoint,
        is_webhook_emitter: new_event_emitter_instance.is_webhook_emitter,
        syncer_instance:
          projects_store.selectedProject?.dassets_syncer_instance.id,
      },
    },
  });
}
</script>

<style lang="scss" scoped></style>
