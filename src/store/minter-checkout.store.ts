import {
  GqlMinterCheckoutSessionsGet,
  GqlMinterCheckoutSessionsGetVariables,
  GqlMinterCheckoutSessionsUpdateOne,
  GqlMinterCheckoutSessionsUpdateOneVariables,
  GQL_MINTER_CHECKOUT_SESSIONS_GET,
  GQL_MINTER_CHECKOUT_SESSIONS_UPDATE_ONE,
  GQL_USERS_GET_ME,
} from "@/graphql";
import { defineStore } from "pinia";
import { IMinterCheckoutSession, IUser } from "@/interfaces";
import { apollo_client } from "@/plugins/apollo";
import { merge } from "lodash";

interface ISessionUpdate {
  address?: string;
  network?: string;
}

export const useMinterCheckoutStore = defineStore("minter-checkout", {
  state: () => ({
    session: null as IMinterCheckoutSession | null,
    is_save_loading: false,
    step: 0,
  }),

  getters: {
    maxStep(state): number {
      if (!state.session) {
        return 0;
      } else if (!state.session.network) {
        return 1;
      } else if (!state.session.is_payed) {
        return 2;
      } else if (
        (state.session.is_payed && !state.session.is_minted) ||
        state.session.is_succeeded
      ) {
        return 3;
      } else {
        return 0;
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

    setPage(step: number) {
      if (step > this.maxStep) {
        step = this.maxStep;
      }

      this.step = step;
    },

    async sync(session_id?: string) {
      if (!session_id && this.session) {
        session_id = this.session.id;
      }

      const data = await apollo_client
        .query<
          GqlMinterCheckoutSessionsGet,
          GqlMinterCheckoutSessionsGetVariables
        >({
          query: GQL_MINTER_CHECKOUT_SESSIONS_GET,
          variables: {
            id: session_id,
          },
        })
        .then((res) => res.data.minter_checkout_session);

      data.created_at = new Date(data.created_at);
      data.updated_at = new Date(data.updated_at);

      this.session = data;
    },

    updateSession(data: ISessionUpdate) {
      const session = this.getSessionOrFail();

      merge(session, data);
    },

    setSession(data: IMinterCheckoutSession) {
      this.session = data;
    },

    async updateSessionAndSave(data: ISessionUpdate) {
      this.updateSession(data);

      await this.saveSession();
    },

    getSessionOrFail(): IMinterCheckoutSession {
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
          GqlMinterCheckoutSessionsUpdateOne,
          GqlMinterCheckoutSessionsUpdateOneVariables
        >({
          query: GQL_MINTER_CHECKOUT_SESSIONS_UPDATE_ONE,
          variables: {
            id: session.id,
            data: {
              address: session.address,
              network: session.network,
            },
          },
        })
        .then((res) => {
          this.session = res.data.minterCheckoutSessionUpdate;
        })
        .finally(() => {
          this.is_save_loading = false;
        });
    },
  },
});
