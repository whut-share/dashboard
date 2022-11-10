import {
  GqlDassetsCheckoutSessionsGet,
  GqlDassetsCheckoutSessionsGetVariables,
  GqlDassetsCheckoutSessionsUpdateOne,
  GqlDassetsCheckoutSessionsUpdateOneVariables,
  GQL_DASSETS_CHECKOUT_SESSIONS_GET,
  GQL_DASSETS_CHECKOUT_SESSIONS_UPDATE_ONE,
  GQL_USERS_GET_ME,
} from "@/graphql";
import { defineStore } from "pinia";
import { IDassetsCheckoutSession, IUser } from "@/interfaces";
import { apollo_client } from "@/plugins/apollo";
import { merge } from "lodash";

interface ISessionUpdate {
  address?: string;
  network?: string;
}

export const useDassetsCheckoutStore = defineStore("dassets-checkout", {
  state: () => ({
    session: null as IDassetsCheckoutSession | null,
    is_save_loading: false,
    step: 1,
  }),

  getters: {
    maxStep(state): number {
      if (!state.session) {
        return 1;
      } else if (!state.session.address) {
        return 1;
      } else if (!state.session.network) {
        return 2;
      } else if (!state.session.is_payed) {
        return 3;
      } else if (
        (state.session.is_payed && !state.session.is_minted) ||
        state.session.is_succeeded
      ) {
        return 4;
      } else {
        return 1;
      }
    },
  },

  actions: {
    initPage() {
      this.step = this.maxStep;
    },

    nextPage() {
      if (this.maxStep > this.step) {
        this.step++;
      }
    },

    prevPage() {
      if (this.step > 1) {
        this.step--;
      }
    },

    async sync(session_id?: string) {
      if (!session_id && this.session) {
        session_id = this.session.id;
      }

      const data = await apollo_client
        .query<
          GqlDassetsCheckoutSessionsGet,
          GqlDassetsCheckoutSessionsGetVariables
        >({
          query: GQL_DASSETS_CHECKOUT_SESSIONS_GET,
          variables: {
            id: session_id,
          },
        })
        .then((res) => res.data.dassets_checkout_session);

      data.created_at = new Date(data.created_at);
      data.updated_at = new Date(data.updated_at);

      this.session = data;
    },

    updateSession(data: ISessionUpdate) {
      const session = this.getSessionOrFail();

      merge(session, data);
    },

    async updateSessionAndSave(data: ISessionUpdate) {
      this.updateSession(data);

      await this.saveSession();
    },

    getSessionOrFail(): IDassetsCheckoutSession {
      if (!this.session) {
        throw new Error("No session");
      }

      return this.session;
    },

    async saveSession() {
      const session = this.getSessionOrFail();

      this.is_save_loading = true;

      await apollo_client
        .query<
          GqlDassetsCheckoutSessionsUpdateOne,
          GqlDassetsCheckoutSessionsUpdateOneVariables
        >({
          query: GQL_DASSETS_CHECKOUT_SESSIONS_UPDATE_ONE,
          variables: {
            id: session.id,
            data: {
              address: session.address,
              network: session.network,
            },
          },
        })
        .then((res) => {
          this.session = res.data.dassetsCheckoutSessionUpdate;
        })
        .finally(() => {
          this.is_save_loading = false;
        });
    },
  },
});
