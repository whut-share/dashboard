import { GQL_USERS_GET_ME } from "@/graphql";
import { defineStore } from "pinia";
import { IDassetsFlowSession, IUser } from "@/interfaces";
import { apollo_client } from "@/plugins/apollo";
import { merge } from "lodash";

interface ISessionUpdate {
  address?: string;
  network?: string;
}

export const useDassetsFlowStore = defineStore("dassets-flow", {
  // arrow function recommended for full type inference
  state: () => ({
    session: null as IDassetsFlowSession | null,
    is_save_loading: false,
  }),

  getters: {
    step(state): number {
      if (!state.session) {
        return 0;
      } else if (!state.session.address) {
        return 1;
      } else if (!state.session.network) {
        return 2;
      } else if (!state.session.payment_id) {
        return 3;
      } else {
        return 0;
      }
    },
  },

  actions: {
    async sync(session_id: string) {
      if (!session_id && this.session) {
        session_id = this.session.id;
      }

      await fetch(
        `${process.env["VUE_APP_API_URL"]}/dassets/session/${session_id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((res) => {
          res.created_at = new Date(res.created_at);
          res.updated_at = new Date(res.updated_at);

          this.session = res;
        });
    },

    updateSession(data: ISessionUpdate) {
      const session = this.getSessionOrFail();

      merge(session, data);
    },

    async updateSessionAndSave(data: ISessionUpdate) {
      this.updateSession(data);

      await this.saveSession();
    },

    getSessionOrFail(): IDassetsFlowSession {
      if (!this.session) {
        throw new Error("No session");
      }

      return this.session;
    },

    async saveSession() {
      const session = this.getSessionOrFail();

      this.is_save_loading = true;
      await fetch(
        `${process.env["VUE_APP_API_URL"]}/dassets/session/${session.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            address: session.address,
            network: session.network,
          }),
        }
      )
        .then((res) => res.json())
        .finally(() => {
          this.is_save_loading = false;
        });
    },
  },
});
