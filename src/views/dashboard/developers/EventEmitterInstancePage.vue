<template>
  <div class="d-flex flex-column">
    <div class="d-flex align-center">
      <v-btn
        @click="goBack"
        size="large"
        color="black"
        variant="text"
        prepend-icon="solid-interface-arrow-left"
      >
        Go Back
      </v-btn>
      <v-spacer></v-spacer>
    </div>

    <v-card v-if="eei" elevation="10" variant="flat" class="mt-4">
      <div class="d-flex flex-column pa-6">
        <div class="d-flex align-center">
          <div class="flex-column">
            <div class="text-h6 font-weight-bold">#{{ eei.name }}</div>
            <div class="d-flex mt-1">
              <v-chip
                size="x-small"
                color="primary"
                class="font-weight-bold text-uppercase mr-2"
              >
                {{ eei.is_webhook_emitter ? "webhook" : "stream" }}
              </v-chip>
              <v-chip
                size="x-small"
                color="accent"
                v-if="is_minter"
                class="font-weight-bold text-uppercase"
              >
                Minter
              </v-chip>
            </div>
          </div>

          <v-spacer></v-spacer>

          <div class="d-flex text-warning align-center mr-8">
            <ui-pulsator color="warning" class="mr-3"></ui-pulsator>
            <div class="d-flex font-weight-bold text-body-1">Out of sync</div>
          </div>

          <div class="d-flex">
            <v-btn
              color="error"
              :disabled="eei.is_stopped"
              variant="text"
              size="large"
            >
              {{ eei.is_stopped ? "Stopped" : "Stop" }}
            </v-btn>
          </div>
        </div>

        <div class="d-flex flex-column mt-10">
          <div class="d-flex mb-3 align-center">
            <div class="text-h5 font-weight-medium">Events graph</div>
            <v-spacer></v-spacer>
            <v-btn variant="flat" color="success"> Re-emit all events </v-btn>
          </div>
          <div class="d-flex">
            <v-tooltip
              transition="scroll-y-reverse-transition"
              :open-delay="200"
              v-for="(n, i) in 60"
              :key="n"
              location="top"
            >
              <template v-slot:activator="{ props }">
                <v-card
                  variant="flat"
                  width="1.5%"
                  height="140"
                  class="day-stripe d-flex flex-column"
                  color="success"
                  rounded="xs"
                  :style="{
                    marginLeft: !i ? '0' : '0.1694915254237288%',
                  }"
                  v-bind="props"
                  @click="openGraphModal"
                >
                </v-card>
              </template>

              <div class="text-body-2 text-white font-weight-medium">
                <span class="text-grey">Date:</span> 21-09-2022 <br />
                <span class="text-grey">Events:</span> 0
              </div>
            </v-tooltip>
          </div>

          <div class="d-flex mt-2">
            <div class="text-caption text-grey">21-09</div>

            <v-spacer></v-spacer>

            <div class="text-caption text-grey">21-17</div>

            <v-spacer></v-spacer>

            <div class="text-caption text-grey">21-25</div>

            <v-spacer></v-spacer>

            <div class="text-caption text-grey">22-01</div>
          </div>
        </div>
      </div>

      <WebhookLogs />
    </v-card>
  </div>
</template>

<script setup lang="ts">
import WebhookLogs from "@/components/developers/WebhookLogs.vue";
import { useEeiPageStore, useModalsStore, useProjectsStore } from "@/store";
import { computed, onMounted, ref } from "vue-demi";
import { useRoute, useRouter } from "vue-router";

const eei_page_store = useEeiPageStore();
const projects_store = useProjectsStore();
const modals_store = useModalsStore();
const route = useRoute();
const router = useRouter();

const eei = computed(() => eei_page_store.data);
const is_minter = computed(() => {
  const syncer_instance_id = eei.value?.syncer_instance;

  if (syncer_instance_id) {
    const project_with_same_minter_syncer_instance =
      projects_store.projects.find((project) => {
        return project.minter_syncer_instance.id === syncer_instance_id;
      });

    if (project_with_same_minter_syncer_instance) {
      return true;
    } else {
      return false;
    }
  }

  return false;
});

const is_sync_loading = ref(false);
onMounted(() => {
  const eei_id = route.params.eei as string;

  is_sync_loading.value = true;
  eei_page_store.sync(eei_id).finally(() => {
    is_sync_loading.value = false;
  });
});

function goBack() {
  router.back();
}

function openGraphModal() {
  modals_store.open("event-emitter-instance-scanner");
}
</script>

<style lang="scss" scoped>
.day-stripe {
}
</style>
