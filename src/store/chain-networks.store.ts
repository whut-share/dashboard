import {} from "@/graphql";
import { apollo_client } from "@/plugins";
import { defineStore } from "pinia";

export const useChainNetworksStore = defineStore("chain-networks", {
  state: () => ({
    chain_networks: [],
    is_loaded: false,
  }),

  getters: {},

  actions: {},
});
