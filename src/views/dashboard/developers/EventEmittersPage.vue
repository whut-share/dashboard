<template>
  <div>
    <div class="d-flex align-center">
      <div class="text-h4 font-weight-medium">Event Emitters</div>
      <v-spacer></v-spacer>
      <ProjectsSelector v-model="selected_project_id" />
    </div>

    <v-card
      v-if="selected_project_id"
      elevation="10"
      class="d-flex flex-column pa-6 mt-8"
    >
      <div class="d-flex w-50">
        <v-text-field
          v-model="search_form.search"
          label="Search"
          prepend-inner-icon="solid-interface-search"
          hide-details
          class="w-50"
          @input="onFormUpdate(false)"
        ></v-text-field>

        <v-select
          v-model="search_form.type"
          :items="types"
          item-title="text"
          item-value="value"
          class="ml-4 w-25"
          label="Type"
          menu-icon="solid-interface-caret-down"
          hide-details
          @update:modelValue="onFormUpdate(true)"
        ></v-select>
      </div>
      <v-fade-transition mode="out-in">
        <v-row v-if="!is_event_emitter_instances_loading" class="mt-4">
          <template v-if="event_emitter_instances.length">
            <v-col v-for="n in event_emitter_instances" :key="n.id" cols="3">
              <EventEmitterInstance :data="n" />
            </v-col>
          </template>
          <template v-else>
            <v-card
              variant="text"
              width="100%"
              height="200"
              class="mt-4 d-flex align-center justify-center"
            >
              <div class="text-h5 font-weight-bold text-m-emphasis">
                No event emitters found
              </div>
            </v-card>
          </template>
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
import {
  GqlEventEmitterInstancesSelect,
  GqlEventEmitterInstancesSelectVariables,
  GQL_EVENT_EMITTER_INSTANCES_SELECT,
} from "@/graphql";
import { IEventEmitterInstance } from "@/interfaces";
import { apollo_client } from "@/plugins";
import { onMounted, onUnmounted, ref } from "vue-demi";
import EventEmitterInstance from "@/components/common/EventEmitterInstance.vue";
import ProjectsSelector from "@/components/common/ProjectsSelector.vue";

const search_form = ref<Record<string, any>>({
  search: "",
  type: "*",
});
const types = ref([
  {
    value: "webhook",
    text: "Webhook",
  },
  {
    value: "stream",
    text: "Stream",
  },
  {
    value: "*",
    text: "All",
  },
]);
onUnmounted(() => {
  search_form.value = {
    search: "",
    type: "*",
  };
});
const timeout = ref<any>(null);
function onFormUpdate(immidiate = false) {
  if (timeout.value) {
    clearTimeout(timeout.value);
  }
  if (immidiate) {
    syncEventEmitterInstances();
  } else {
    timeout.value = setTimeout(() => {
      syncEventEmitterInstances();
    }, 500);
  }
}

const selected_project_id = ref<string | null>(null);

const event_emitter_instances = ref<IEventEmitterInstance[]>([]);
const is_event_emitter_instances_loading = ref(true);
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
          ...search_form.value,
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
</script>

<style lang="scss" scoped></style>
