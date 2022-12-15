<template>
  <div class="dassets-page">
    <div class="d-flex align-center">
      <div class="text-h4 font-weight-medium">Minter</div>
      <v-spacer></v-spacer>
      <ProjectsSelector v-model="selected_project_id" />
    </div>

    <v-card elevation="10" class="d-flex align-start flex-column pa-6 mt-8">
      <div class="text-h5 font-weight-bold text-black">Settings</div>

      <v-row class="w-100 mt-2">
        <v-col cols="6">
          <div class="d-flex mt-6 w-100">
            <v-text-field label="Token URI" variant="outlined">
              <template #append-inner>
                <v-btn
                  :disabled="true"
                  color="success"
                  size="small"
                  variant="flat"
                  prepend-icon="solid-interface-save"
                  >Save</v-btn
                >
              </template>
            </v-text-field>
          </div>
        </v-col>
      </v-row>
    </v-card>

    <v-card
      v-if="selected_project_id"
      elevation="10"
      class="d-flex flex-column pa-6 mt-8"
    >
      <div class="text-h5 font-weight-bold text-black">Event Emitters</div>
      <v-fade-transition mode="out-in">
        <v-row v-if="!is_event_emitter_instances_loading" class="mt-4">
          <v-col v-for="n in event_emitter_instances" :key="n.id" cols="3">
            <EventEmitterInstance :data="n" />
          </v-col>
          <v-col cols="3">
            <NewEventEmitterInstance @click="openModal" />
          </v-col>
        </v-row>
        <v-card
          variant="outlined"
          color="accent"
          width="100%"
          height="200"
          v-else
          class="mt-4 d-flex align-center justify-center"
        >
          <v-progress-circular
            color="primary"
            indeterminate
          ></v-progress-circular>
        </v-card>
      </v-fade-transition>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import EventEmitterInstance from "@/components/common/EventEmitterInstance.vue";
import NewEventEmitterInstance from "@/components/common/NewEventEmitterInstance.vue";
import ProjectsSelector from "@/components/common/ProjectsSelector.vue";
import { ICreateEventEmitterInstanceModalData } from "@/components/modals/CreateEventEmitterInstance.vue";

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
import { useModalsStore, useProjectsStore } from "@/store";
import { computed, onMounted, reactive, ref } from "vue-demi";

const event_emitter_instances = ref<IEventEmitterInstance[]>([]);

const projects_store = useProjectsStore();
const syncer_instance_id = computed(() => {
  return projects_store.selectedProjectGroupProjects.find(
    (n) => n.id === selected_project_id.value
  )?.dassets_syncer_instance.id;
});
const selected_project_id = ref<string | null>(null);

async function syncEventEmitterInstances() {
  is_event_emitter_instances_loading.value = true;
  await apollo_client
    .query<
      GqlEventEmitterInstancesSelect,
      GqlEventEmitterInstancesSelectVariables
    >({
      query: GQL_EVENT_EMITTER_INSTANCES_SELECT,
      variables: {
        filter: {
          syncer_instance: syncer_instance_id.value,
        },
      },
    })
    .then((res) => {
      event_emitter_instances.value = res.data.event_emitter_instances;
    })
    .finally(() => {
      is_event_emitter_instances_loading.value = false;
    });
}

onMounted(syncEventEmitterInstances);

const modals_store = useModalsStore();
function openModal() {
  modals_store.open("create-event-emitter-instance", {
    async onSuccess() {
      await syncEventEmitterInstances();
    },
    syncer_instance_id: syncer_instance_id.value,
  } as ICreateEventEmitterInstanceModalData);
}

const is_event_emitter_instances_loading = ref(false);
</script>

<style lang="scss" scoped></style>
