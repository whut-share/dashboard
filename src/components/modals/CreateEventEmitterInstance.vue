<template>
  <v-dialog
    :modelValue="is_modal_opened"
    @update:modelValue="onDialogModelUpdate"
    width="500"
  >
    <ui-modal title="Create new event emitter" :modal="modal_name">
      <div class="d-flex flex-column">
        <ui-titled-input title="Choose type">
          <v-radio-group color="accent" inline v-model="form.is_webhook">
            <v-radio label="Stream" :value="false"></v-radio>
            <v-radio class="ml-3" label="Webhook" :value="true"></v-radio>
          </v-radio-group>
        </ui-titled-input>

        <ui-titled-input title="Webhooks endpoint">
          <v-text-field
            placeholder="Type webhooks URL endpoint"
            :disabled="!form.is_webhook"
            v-model="form.webhooks_endpoint"
            variant="outlined"
          ></v-text-field>
        </ui-titled-input>

        <ui-titled-input title="Select events to listen to">
          <v-select
            prepend-inner-icon="solid-interface-search"
            placeholder="Search events ..."
            v-model="form.events"
            variant="outlined"
            multiple
            :items="['Dassets.Transfer', 'Dassets.NftMinted']"
          ></v-select>
        </ui-titled-input>
      </div>

      <div class="d-flex justify-center mt-8">
        <v-btn
          variant="outlined"
          @click="modals_store.close(modal_name)"
          color="primary"
          size="large"
          class="mr-2"
          >Cancel</v-btn
        >
        <v-btn
          :loading="is_create_loading"
          color="primary"
          @click="create"
          size="large"
          >Create</v-btn
        >
      </div>
    </ui-modal>
  </v-dialog>
</template>

<script setup lang="ts">
import {
  GqlEventEmitterInstancesCreateOne,
  GqlEventEmitterInstancesCreateOneVariables,
  GQL_EVENT_EMITTER_INSTANCES_CREATE_ONE,
} from "@/graphql";
import { apollo_client } from "@/plugins";
import { useModalsStore } from "@/store";
import { computed, reactive, ref } from "vue-demi";

export interface ICreateEventEmitterInstanceModalData {
  syncer_instance_id: string;
  onSuccess: () => any | Promise<any>;
}

const modals_store = useModalsStore();
const modal_name = computed(() => "create-event-emitter-instance");
const modal_data = computed(() =>
  modals_store.getModal<ICreateEventEmitterInstanceModalData>(modal_name.value)
);
const is_modal_opened = computed(() =>
  modals_store.isModalOpened(modal_name.value)
);

const form = reactive({
  is_webhook: false,
  webhooks_endpoint: "",
  events: [],
});

const is_create_loading = ref(false);

async function create() {
  const exec = async () => {
    await apollo_client.mutate<
      GqlEventEmitterInstancesCreateOne,
      GqlEventEmitterInstancesCreateOneVariables
    >({
      mutation: GQL_EVENT_EMITTER_INSTANCES_CREATE_ONE,
      variables: {
        data: {
          webhook_endpoint: form.webhooks_endpoint,
          is_webhook_emitter: form.is_webhook,
          syncer_instance: modal_data.value.syncer_instance_id,
        },
      },
    });

    await modal_data.value.onSuccess();

    modals_store.close(modal_name.value);
  };

  is_create_loading.value = true;
  exec().finally(() => {
    is_create_loading.value = false;
  });
}

function onDialogModelUpdate(e: boolean) {
  if (!e) {
    modals_store.close(modal_name.value);
  }
}
</script>

<style lang="scss" scoped></style>
