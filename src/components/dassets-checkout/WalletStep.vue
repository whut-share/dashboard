<template>
  <div class="wallet-step h-100 d-flex justify-center flex-column">
    <v-sheet
      height="30"
      class="d-flex align-center pl-6"
      v-for="(key, val) in properties"
      :key="key"
      color="transparent"
    >
      <span class="text-m-emphasis">{{ key }}: {{ val }}</span>
    </v-sheet>

    <v-sheet height="30" class="d-flex align-center pl-6" color="transparent">
      <span class="text-m-emphasis">Network:</span>
      <div class="d-flex ml-2">
        <v-btn
          size="x-small"
          @click="selectNetwork(n.name)"
          variant="outlined"
          rounded="md"
          :class="{
            'ml-1': !!i,
          }"
          v-for="(n, i) in networks"
          :key="n"
          :color="selected_network === n.name ? 'primary' : 'black'"
        >
          <v-avatar size="14" class="netimg d-inline">
            <v-img :src="n.image_url"></v-img>
          </v-avatar>
          <span class="text-uppercase">{{ n.name }}</span>
        </v-btn>
      </div>
    </v-sheet>

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
      >
        Pay with Card
      </v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDassetsCheckoutStore } from "@/store";
import { computed, ref } from "vue-demi";

const minter_checkout_store = useDassetsCheckoutStore();

const properties = ref<Record<string, string>>({
  "Skin quality": "Rare Special",
  "Skin grade": "Navy Blue (rare)",
  "Skin properties": "Battle Scarred",
  Owner: "Valve",
});

const session = computed(() => minter_checkout_store.session);

const networks = ref([
  {
    name: "eth",
    image_url:
      "https://www.pngitem.com/pimgs/m/124-1245793_ethereum-eth-icon-ethereum-png-transparent-png.png",
  },
  {
    name: "bsc",
    image_url:
      "https://www.pngitem.com/pimgs/m/124-1245793_ethereum-eth-icon-ethereum-png-transparent-png.png",
  },
]);

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
