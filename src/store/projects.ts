import { IProject } from "@/interfaces";
import { defineStore } from "pinia";

export const useProjectsStore = defineStore("auth", {
  // arrow function recommended for full type inference
  state: () => ({
    data: [] as IProject[],
  }),

  actions: {
    sync() {
      // ...
    },
  },
});
