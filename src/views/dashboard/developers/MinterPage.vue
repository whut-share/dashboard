<template>
  <div class="minter-page">
    <div class="d-flex align-center">
      <div class="text-h4 font-weight-medium">Minter</div>
      <v-spacer></v-spacer>
      <ProjectsSelector v-model="selected_project_id" />
    </div>

    <v-card elevation="10" class="d-flex align-start flex-column pa-6 mt-8">
      <div class="text-h5 font-weight-bold text-black">
        Settings

        <v-btn
          :loading="is_test_loading"
          rounded="lg"
          class="ml-2"
          prepend-icon="solid-files-book-mark"
          color="black"
          @click="testCreateMinChSess"
        >
          Testing Checkout Session
        </v-btn>
      </div>

      <v-row class="w-100 mt-2">
        <v-col cols="6">
          <div class="d-flex mt-6 w-100">
            <ui-titled-input class="w-100" title="Token URI">
              <v-text-field
                placeholder="https://api.example.com/{token}"
                variant="outlined"
              >
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
            </ui-titled-input>
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
          variant="text"
          width="100%"
          height="200"
          v-else
          class="mt-4 d-flex align-center justify-center"
        >
          <v-progress-circular
            v-model="is_event_emitter_instances_loading"
            contained
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
  GqlMinterCheckoutSessionsCreateOne,
  GqlMinterCheckoutSessionsCreateOneVariables,
  GQL_EVENT_EMITTER_INSTANCES_CREATE_ONE,
  GQL_EVENT_EMITTER_INSTANCES_SELECT,
  GQL_EVENT_EMITTER_INSTANCES_UPDATE_ONE,
  GQL_MINTER_CHECKOUT_SESSIONS_CREATE_ONE,
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
  )?.minter_syncer_instance?.id;
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
    .then(() => new Promise((resolve) => setTimeout(resolve, 1000)))
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

const is_event_emitter_instances_loading = ref(true);

const is_test_loading = ref(false);

async function testCreateMinChSess() {
  is_test_loading.value = true;
  const {
    data: { minterCheckoutSessionCreate },
  } = await apollo_client
    .query<
      GqlMinterCheckoutSessionsCreateOne,
      GqlMinterCheckoutSessionsCreateOneVariables
    >({
      query: GQL_MINTER_CHECKOUT_SESSIONS_CREATE_ONE,
      variables: {
        data: {
          project: selected_project_id.value,
          asset_info: {
            id: "ITEM_ID_IN_YOUR_BACKEND",
            name: "Coopol 34454",
            description: "Some gaming rifle, very rare",
            image_url: "http://pngimg.com/uploads/ak47/ak47_PNG15453.png",
          },
        },
      },
    })
    .finally(() => {
      is_test_loading.value = false;
    });

  (window as any).open(minterCheckoutSessionCreate.url, "_blank").focus();
}
</script>

<style lang="scss" scoped></style>
