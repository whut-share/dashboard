import { defineStore } from "pinia";

export const usePreloadStore = defineStore("preload", {
  state: () => ({
    is_loading: false,
    is_view_loading: false,
  }),
  actions: {
    setLoading(flag: boolean) {
      this.is_loading = flag;
    },

    setViewLoading(flag: boolean) {
      this.is_view_loading = flag;
    },
  },
});
