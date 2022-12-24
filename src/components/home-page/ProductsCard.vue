<template>
  <v-card
    variant="flat"
    rounded="xl"
    style="border: 1px solid rgba(210, 218, 255, 0.5)"
    class="products-card"
  >
    <v-row no-gutters>
      <v-col class="d-flex flex-column pa-10">
        <div class="icon-container mb-4">
          <MinterIcon />
        </div>
        <div class="text-h5 font-weight-medium mb-3 text-black">Minter</div>
        <div class="text-body-2 text-grey font-weight-medium">
          Create, manage and trade in-game assets
        </div>
        <div class="arrow mt-2 mr-2">
          <v-icon size="large" color="primary">
            outline-interface-arrow-right
          </v-icon>
        </div>
      </v-col>
      <v-col
        class="d-flex flex-column pa-10"
        style="border-left: 1px solid rgba(210, 218, 255, 0.5)"
      >
        <div class="icon-container mb-4">
          <SyncerIcon />
        </div>
        <div class="text-h5 font-weight-medium mb-3 text-black">Syncer</div>
        <div class="text-body-2 text-grey font-weight-medium">
          Create, manage and trade in-game assets
        </div>
        <div class="arrow mt-2 mr-2">
          <v-icon size="large" color="primary">
            outline-interface-arrow-right
          </v-icon>
        </div>
      </v-col>
      <v-col
        class="d-flex flex-column pa-10"
        style="border-left: 1px solid rgba(210, 218, 255, 0.5)"
      >
        <div class="icon-container mb-4">
          <WalletLoginIcon />
        </div>
        <div class="text-h5 font-weight-medium mb-3 text-black">Web3 Auth</div>
        <div class="text-body-2 text-grey font-weight-medium">
          Create, manage and trade in-game assets
        </div>
        <div class="arrow mt-2 mr-2">
          <v-icon size="large" color="primary">
            outline-interface-arrow-right
          </v-icon>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup lang="ts">
import MinterIcon from "./MinterIcon.vue";
import SyncerIcon from "./SyncerIcon.vue";
import WalletLoginIcon from "./WalletLoginIcon.vue";
</script>

<style lang="scss" scoped>
.home-page {
  .icon-container {
    width: 100px;
    height: 100px;
    position: relative;

    > * {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      pointer-events: none;
    }
  }

  .arrow {
    position: absolute;
    right: 0;
    top: 0;
    transform: rotate(-45deg);
  }

  .v-col {
    position: relative;
  }
}
</style>
