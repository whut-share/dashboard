<template>
  <v-dialog
    :modelValue="true"
    @update:modelValue="onDialogModelUpdate"
    width="500"
  >
    <ui-modal :modal="modal_name">
      <template #title>
        <div class="d-flex flex-column">
          <div class="text-body-1 font-weight-medium">
            <span class="text-m-emphasis">Date:</span> 10/12/2022
          </div>

          <div class="text-body-2 font-weight-medium">13 events missed</div>
        </div>
      </template>

      <v-btn
        size="large"
        variant="flat"
        color="success"
        class="mt-2 align-self-start"
      >
        Re-emit all events
      </v-btn>

      <div class="d-flex flex-column mt-4">
        <v-card
          v-for="n in 5"
          :key="n"
          variant="flat"
          color="transparent"
          class="d-flex py-4 px-1"
        >
          <div class="text-body-2">
            <code> webhook_interact.created </code>
          </div>
          <v-spacer></v-spacer>
          <div class="text-caption text-black font-weight-medium">
            05:45:15 AM
          </div>
        </v-card>
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

const modals_store = useModalsStore();
const modal_name = computed(() => "event-emitter-instance-scanner");
// const is_modal_opened = computed(() => modals_store.isModalOpened(modal_name.value));

function onDialogModelUpdate(e: boolean) {
  if (!e) {
    modals_store.close(modal_name.value);
  }
}
</script>

<style lang="scss" scoped></style>
