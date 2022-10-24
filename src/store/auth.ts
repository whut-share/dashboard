import { GQL_USERS_GET_ME } from "@/graphql";
import { defineStore } from "pinia";
import { IUser } from "@/interfaces";
import {
  DefaultApolloClient,
  provideApolloClient,
  useApolloClient,
} from "@vue/apollo-composable";
import { apollo_client } from "@/plugins/apollo";

export const useAuthStore = defineStore("auth", {
  // arrow function recommended for full type inference
  state: () => ({
    user: null as IUser | null,
    token: "",
    is_token_loaded: false,
    is_user_loaded: false,
    is_user_authed: false,
  }),

  getters: {
    hasToken(state) {
      return state.token && !!state.token.length;
    },
  },

  actions: {
    updateToken(token: string) {
      localStorage.setItem("auth", token);
      this.token = token;
    },

    setInStateToken(token: string) {
      this.token = token;
    },

    purgeToken() {
      localStorage.removeItem("auth");
      this.token = "";
    },

    setTokenLoadedState(flag: boolean) {
      this.is_token_loaded = flag;
    },

    setUserData(data: IUser) {
      this.is_user_authed = true;
      this.user = data;
    },

    purgeUserData() {
      this.is_user_authed = false;
      this.user = null;
    },

    setUserLoaded(flag: boolean) {
      this.is_user_loaded = flag;
    },

    async sync() {
      await apollo_client
        .query({
          query: GQL_USERS_GET_ME,
          variables: {},
          context: {
            headers: {
              authorization: `Bearer ${this.token}`,
            },
          },
        })
        .then(async (res) => {
          const user = res.data.me;
          this.setUserData(user);
        })
        .finally(() => {
          if (!this.is_user_loaded) {
            this.setUserLoaded(true);
          }
        });
    },

    loadTokenFromLocalStorage() {
      const token = localStorage.getItem("auth") || "";

      this.setInStateToken(token);
      this.setTokenLoadedState(true);
    },

    async login(token: string) {
      try {
        this.updateToken(token);
        await this.sync();
      } catch (error) {
        this.purgeToken();
        this.purgeUserData();
        throw error;
      }
    },

    logoutFullFlow() {
      this.purgeToken();
      this.purgeUserData();
      window.location.reload();
    },
  },
});
