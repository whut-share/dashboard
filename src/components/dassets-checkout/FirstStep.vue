<template>
  <div class="first-step d-flex justify-center flex-column">
    <v-row>
      <v-col cols="6">
        <v-card
          rounded="xl"
          width="100%"
          class="pa-5 d-flex align-center justify-center text-h3"
          variant="text"
        >
          <v-img contain :src="session?.asset_info?.image_url"></v-img>
        </v-card>
      </v-col>

      <v-col cols="6" class="d-flex flex-column justify-center">
        <div class="text-h5 mt-4 font-weight-bold">
          {{ session?.asset_info?.name }}
        </div>
        <div class="text-body-2 text-m-emphasis mt-2" style="max-width: 200px">
          {{ session?.asset_info?.description }}
        </div>
      </v-col>
    </v-row>

    <div class="d-flex flex-column pt-8 pl-6">
      <v-sheet
        height="30"
        class="d-flex align-center"
        v-for="(key, val) in properties"
        :key="key"
        color="transparent"
      >
        <span class="text-m-emphasis">{{ key }}: {{ val }}</span>
      </v-sheet>

      <v-sheet height="30" class="d-flex align-center" color="transparent">
        <span class="text-m-emphasis">Network:</span>
        <div class="d-flex ml-2">
          <v-btn
            size="x-small"
            @click="selectNetwork(n.id)"
            variant="outlined"
            rounded="md"
            :class="{
              'ml-1': !!i,
            }"
            v-for="(n, i) in chain_networks"
            :key="n"
            :color="selected_network === n.id ? 'primary' : 'black'"
          >
            <v-avatar size="14" class="netimg d-inline">
              <v-img :src="n.icon_url"></v-img>
            </v-avatar>
            <span class="text-uppercase">{{ n.id }}</span>
          </v-btn>
        </div>
      </v-sheet>
    </div>

    <div class="d-flex flex-column mt-10">
      <v-btn
        :loading="is_save_loading"
        disabled
        size="large"
        rounded="lg"
        color="grey"
      >
        Pay with Crypto
      </v-btn>

      <v-btn
        :loading="is_save_loading"
        color="primary"
        rounded="lg"
        size="large"
        class="mt-4"
        @click="nextPage"
        :disabled="!selected_network"
      >
        Pay with Card
      </v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useChainNetworksStore, useDassetsCheckoutStore } from "@/store";
import { computed, ref } from "vue-demi";

const minter_checkout_store = useDassetsCheckoutStore();
const chain_networks_store = useChainNetworksStore();

const properties = ref<Record<string, string>>({
  "Skin quality": "Rare Special",
  "Skin grade": "Navy Blue (rare)",
  "Skin properties": "Battle Scarred",
  Owner: "Valve",
});

const session = computed(() => minter_checkout_store.session);

const chain_networks = computed(() => chain_networks_store.chain_networks);

const selected_network = ref(session.value?.network);
function selectNetwork(network: string) {
  selected_network.value = network;
}

const is_save_loading = ref(false);
function nextPage() {
  if (!selected_network.value) {
    throw new Error("Network is not selected");
  }

  is_save_loading.value = true;
  minter_checkout_store
    .updateSessionAndSave({ network: selected_network.value })
    .finally(() => {
      is_save_loading.value = false;

      minter_checkout_store.nextPage();
    });
}
</script>

<style lang="scss" scoped>
.netimg {
  margin-left: -4px;
  margin-right: 2px;
}
</style>
