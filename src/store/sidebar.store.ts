import { defineStore } from "pinia";

export const useSidebarStore = defineStore("sidebar", {
  state: () => ({
    is_expanded: true,
    is_opened: false,
  }),
  actions: {
    setLoading(flag: boolean) {
      this.is_expanded = flag;
    },

    setOpened(flag: boolean) {
      this.is_opened = flag;
    },
  },
});
