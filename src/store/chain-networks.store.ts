import { GqlChainNetworksSelect, GQL_CHAIN_NETWORKS_SELECT } from "@/graphql";
import { IChainNetwork } from "@/interfaces";
import { apollo_client } from "@/plugins";
import { defineStore } from "pinia";

export const useChainNetworksStore = defineStore("chain-networks", {
  state: () => ({
    chain_networks: [] as IChainNetwork[],
    is_loaded: false,
  }),

  getters: {},

  actions: {
    async sync() {
      const {
        data: { chain_networks },
      } = await apollo_client.query<GqlChainNetworksSelect>({
        query: GQL_CHAIN_NETWORKS_SELECT,
      });

      this.chain_networks = chain_networks;
      this.is_loaded = true;
    },
  },
});
