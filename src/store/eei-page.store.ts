import { defineStore } from "pinia";
import { IEventEmitterInstance, IUser } from "@/interfaces";
import { apollo_client } from "@/plugins";
import {
  GqlEventEmitterInstancesGet,
  GqlEventEmitterInstancesGetVariables,
  GQL_EVENT_EMITTER_INSTANCES_GET,
} from "@/graphql";

export const useEeiPageStore = defineStore("eei-page", {
  state: () => ({
    is_loading: false,
    data: null as null | IEventEmitterInstance,
  }),

  getters: {},

  actions: {
    async sync(id?: string): Promise<void> {
      if (!id) {
        if (!this.data?.id) {
          throw new Error("No id provided");
        }

        id = this.data.id;
      }

      this.is_loading = true;
      return apollo_client
        .query<
          GqlEventEmitterInstancesGet,
          GqlEventEmitterInstancesGetVariables
        >({
          query: GQL_EVENT_EMITTER_INSTANCES_GET,
          variables: {
            id: id,
          },
        })
        .then((res) => {
          this.data = res.data.event_emitter_instance;
        })
        .finally(() => {
          this.is_loading = false;
        });
    },
  },
});
