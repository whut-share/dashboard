<template>
  <v-card variant="outlined" color="accent" class="event-emitter-instance pa-6">
    <div class="text-h6 text-black font-weight-bold">#{{ data.name }}</div>
    <v-chip
      size="x-small"
      color="primary"
      class="mt-1 font-weight-bold text-uppercase"
    >
      {{ data.is_webhook_emitter ? "webhook" : "stream" }}
    </v-chip>
    <div class="d-flex flex-column mt-5 text-body-2">
      <div class="d-flex font-weight-medium">
        <div class="text-m-emphasis">Status</div>
        <v-spacer></v-spacer>
        <div class="text-success">
          {{ data.is_stopped ? "Stopped" : "Active" }}
        </div>
      </div>

      <div class="d-flex font-weight-medium mt-2">
        <div class="text-m-emphasis">Events processed</div>
        <v-spacer></v-spacer>
        <div class="text-black">12k</div>
      </div>

      <div class="d-flex font-weight-medium mt-2">
        <div class="text-m-emphasis">Created</div>
        <v-spacer></v-spacer>
        <div class="text-black">
          {{ created }}
        </div>
      </div>

      <div class="d-flex font-weight-medium mt-2">
        <div class="text-m-emphasis">Events per day</div>
        <v-spacer></v-spacer>
        <div class="text-black">100</div>
      </div>
    </div>
    <v-spacer></v-spacer>
    <div class="d-flex mt-5">
      <v-btn
        size="large"
        :to="`/dsh/developers/event-emitters/${data.id}`"
        color="primary"
        >Open</v-btn
      >
      <v-btn
        :disabled="data.is_stopped"
        size="large"
        variant="text"
        color="error"
        class="ml-2"
        >{{ data.is_stopped ? "Stopped" : "Stop" }}</v-btn
      >
    </div>

    <ui-pulsator
      class="status mt-4 mr-4"
      :color="data.is_stopped ? 'error' : 'success'"
    ></ui-pulsator>
  </v-card>
</template>

<script setup lang="ts">
import { IEventEmitterInstance } from "@/interfaces";
import * as Moment from "moment";
import { defineProps } from "vue";

const props = defineProps<{
  data: IEventEmitterInstance;
}>();

const created = Moment(props.data.created_at).format("DD MMM YYYY");
</script>

<style lang="scss" scoped>
.event-emitter-instance {
  background: rgba(210, 218, 255, 0.2) !important;

  .status {
    position: absolute;
    top: 0;
    right: 0;
  }
}
</style>
