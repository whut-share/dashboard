<template>
  <div class="header-account-dropdown ml-8" v-click-outside="closeDropdown">
    <v-card
      @click="toggleDropdown"
      class="d-flex align-center px-2 py-1"
      variant="text"
      style="user-select: none"
    >
      <v-avatar size="40px" class="mr-4" style="overflow: visible">
        <v-img
          cover
          :src="`https://source.boringavatars.com/beam/120/${user.id}`"
        />
        <v-sheet class="green bg-success rounded-circle"></v-sheet>
      </v-avatar>
      <div class="d-flex flex-column mr-4">
        <div class="body-2 text-black font-weight-medium">scott0091</div>
        <div class="text-caption text-grey font-weight-medium">The Verge</div>
      </div>
      <div class="icon d-flex flex-column justify-center">
        <v-icon size="x-large" color="black">solid-interface-caret-down</v-icon>
      </div>
    </v-card>

    <v-slide-y-reverse-transition>
      <div class="absolute" v-if="is_opened">
        <v-card
          rounded="lg"
          elevation="10"
          class="ui-bordered-light d-flex flex-column"
        >
          <v-btn
            size="large"
            variant="text"
            prepend-icon="outline-interface-settings"
            color="black"
            rounded="0"
            class="d-flex justify-start"
            to="/dsh/account/settings"
            @click="closeDropdown"
          >
            Settings
          </v-btn>
          <v-btn
            size="large"
            variant="text"
            @click="logout"
            prepend-icon="solid-interface-logout"
            color="error"
            rounded="0"
            class="d-flex justify-start"
          >
            Logout
          </v-btn>
        </v-card>
      </div>
    </v-slide-y-reverse-transition>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore, useProjectsStore } from "@/store";
import { computed, ref } from "vue-demi";

const projects_store = useProjectsStore();
const auth_store = useAuthStore();

function logout() {
  auth_store.logoutFullFlow();
}

const user = computed(() => auth_store.user);

const project_groups = computed(() => projects_store.project_groups);

const is_opened = ref(false);
function toggleDropdown() {
  is_opened.value = !is_opened.value;
}
function closeDropdown() {
  is_opened.value = false;
}
</script>

<style lang="scss" scoped>
.header-account-dropdown {
  position: relative;
  .absolute {
    position: absolute;
    top: calc(100% + 8px);
    left: 0;
    width: 100%;
  }

  .green {
    position: absolute;
    top: 15%;
    left: 85%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    border: 1px solid white;
  }
}
</style>
