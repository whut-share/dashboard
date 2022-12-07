import { defineStore } from "pinia";

export const useModalsStore = defineStore("modals", {
  state: () => ({
    opened_modals: {} as Record<string, any>,
  }),
  getters: {
    isModalOpened: (state) => (modal: string) => {
      return state.opened_modals[modal] !== undefined;
    },

    getModal:
      (state) =>
      <T>(modal: string): T => {
        return state.opened_modals[modal] || null;
      },
  },
  actions: {
    open(modal: string, data?: any) {
      this.opened_modals = {
        ...this.opened_modals,
        [modal]: data || true,
      };
    },

    close(modal: string) {
      this.opened_modals = {
        ...this.opened_modals,
        [modal]: undefined,
      };
    },
  },
});
