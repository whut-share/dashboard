<template>
  <div class="event-logs d-flex flex-column">
    <div class="d-flex flex-column pa-6">
      <div class="d-flex mb-3 align-center">
        <div class="text-h5 font-weight-medium">Logs</div>
      </div>

      <div class="d-flex">
        <v-btn variant="flat" class="mr-3" rounded="lg" color="primary">
          All
        </v-btn>

        <v-btn variant="text" class="mr-3" rounded="lg" color="m-emphasis">
          Succeeded
        </v-btn>

        <v-btn variant="text" class="mr-3" rounded="lg" color="m-emphasis">
          Failed
        </v-btn>
      </div>
    </div>

    <v-card variant="outlined" class="table" rounded="0" color="accent">
      <v-row class="text-black" no-gutters>
        <v-col cols="6" class="d-flex flex-column">
          <div
            class="text-caption pl-6 py-2 text-uppercase font-weight-bold text-m-emphasis"
          >
            yesterday
          </div>
          <v-divider color="accent"></v-divider>
          <div class="d-flex flex-column">
            <div v-for="n in 5" :key="n" class="d-flex align-center py-4 px-6">
              <svg
                class="mr-3"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="20"
                  height="20"
                  rx="10"
                  fill="#40C72A"
                  fill-opacity="0.15"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.0246 6.64131C15.2687 6.88539 15.2687 7.28112 15.0246 7.52519L9.19129 13.3585C8.94721 13.6026 8.55148 13.6026 8.30741 13.3585L4.97407 10.0252C4.73 9.78112 4.73 9.38539 4.97407 9.14131C5.21815 8.89723 5.61388 8.89723 5.85796 9.14131L8.74935 12.0327L14.1407 6.64131C14.3848 6.39723 14.7805 6.39723 15.0246 6.64131Z"
                  fill="#40C72A"
                />
              </svg>

              <div class="text-body-2 text-black">
                <code> webhook_interact.created </code>
              </div>
              <v-spacer></v-spacer>
              <div class="text-caption text-black font-weight-medium">
                05:45:15 AM
              </div>
            </div>
          </div>
        </v-col>
        <v-col cols="6" class="d-flex">
          <v-divider vertical class="h-100" color="accent"></v-divider>
          <div class="d-flex flex-column py-3">
            <div class="text-body-1 font-weight-bold text-black px-6">
              <code> webhook_interact.created </code>
            </div>

            <div class="d-flex flex-column mt-6 px-6">
              <div class="text-h5 font-weight-medium">Response</div>
              <div class="d-flex align-center text-h6 text-success">
                200 OK
                <svg
                  class="ml-3"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="20"
                    height="20"
                    rx="10"
                    fill="#40C72A"
                    fill-opacity="0.15"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.0246 6.64131C15.2687 6.88539 15.2687 7.28112 15.0246 7.52519L9.19129 13.3585C8.94721 13.6026 8.55148 13.6026 8.30741 13.3585L4.97407 10.0252C4.73 9.78112 4.73 9.38539 4.97407 9.14131C5.21815 8.89723 5.61388 8.89723 5.85796 9.14131L8.74935 12.0327L14.1407 6.64131C14.3848 6.39723 14.7805 6.39723 15.0246 6.64131Z"
                    fill="#40C72A"
                  />
                </svg>
              </div>
            </div>

            <div class="py-6 text-caption px-6">
              <code>
                { "lastUpdateId": 2213985103103, "E": 1669750749604, "T":
                1669750749599, "bids": [ [ "16413.0", "18.133" ], [ "16412.9",
                "1.115" ] ], "asks": [ [ "16413.1", "8.292" ] ] }
              </code>
            </div>

            <v-divider color="accent"></v-divider>

            <div class="px-6 py-3 d-flex flex-column">
              <div class="text-h5 font-weight-medium">Request</div>

              <div class="py-6 text-caption">
                <code>
                  { "lastUpdateId": 2213985103103, "E": 1669750749604, "T":
                  1669750749599, "bids": [ [ "16413.0", "18.133" ], [ "16412.9",
                  "1.115" ] ], "asks": [ [ "16413.1", "8.292" ] ] }
                </code>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue-demi";

const search = ref("");
</script>

<style lang="scss" scoped>
.table {
  border-left-width: 0 !important;
  border-bottom-width: 0 !important;
  border-right-width: 0 !important;
}
</style>
