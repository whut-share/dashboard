<template>
  <v-card
    class="events-sidebar d-flex flex-column"
    color="primary"
    :rounded="0"
  >
    <div class="d-flex flex-column pa-4">
      <div class="text-h5 text-white font-weight-bold mb-4">Recent events</div>
      <v-text-field
        variant="outlined"
        density="compact"
        prepend-inner-icon="outline-interface-search"
        v-model="search"
        clearable
        hide-details
        clear-icon="outline-interface-close"
        label="Search"
      ></v-text-field>
    </div>

    <v-divider color="accent"></v-divider>

    <div class="d-flex flex-column scroller flex-grow-1">
      <template v-for="n in 4" :key="n">
        <v-divider color="accent" v-if="n !== 1"></v-divider>

        <div class="d-flex flex-column py-2 px-4">
          <div class="d-flex align-center">
            <v-avatar size="30">
              <v-img
                cover
                src="https://avatars.githubusercontent.com/u/6504915?s=80&u=1aa18e49fa6212304054f10ea4d3ab1a7c7a8527&v=4"
              ></v-img>
            </v-avatar>
            <v-spacer></v-spacer>
            <div class="text-caption font-weight-medium">
              Oct 31, 2022 6:30PM
            </div>
          </div>

          <div class="text-body-2 mt-4">
            Alexey just sold Super <b>Magical Sword Item 893</b>.
          </div>

          <div class="d-flex align-center mt-2">
            <span class="font-weight-medium text-body-2">View details</span>
            <v-icon size="default">outline-interface-caret-down</v-icon>
          </div>
        </div>
      </template>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from "vue-demi";

const search = ref("");
</script>

<style lang="scss" scoped>
.events-sidebar {
  width: 280px;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  padding-top: 80px;

  border-width: 0 0 0 1px !important;
  border-color: rgba(#fff, 0.25);

  .scroller {
    overflow: auto;
  }

  .v-divider {
    border-color: rgba(#fff, 0.25) !important;
    background: none !important;
  }

  .v-text-field {
    &::v-deep {
      .v-field__outline {
        --v-field-border-opacity: 0.25;
      }

      .v-input__control {
        background: rgba(251, 251, 255, 0.2);
      }
    }
  }
}
</style>
