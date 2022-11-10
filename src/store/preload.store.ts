import { defineStore } from "pinia";

export const usePreloadStore = defineStore("preload", {
  state: () => ({
    is_loading: false,
  }),
  actions: {
    setLoading(flag: boolean) {
      this.is_loading = flag;
    },
  },
});
