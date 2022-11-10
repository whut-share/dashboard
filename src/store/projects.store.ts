import {
  GqlProjectsSelect,
  GqlProjectsUpdateOneVariables,
  GQL_PROJECTS_SELECT,
} from "@/graphql";
import { IProject } from "@/interfaces";
import { apollo_client } from "@/plugins";
import { defineStore } from "pinia";

export const useProjectsStore = defineStore("projects", {
  state: () => ({
    projects: [] as IProject[],
    is_loaded: false,
  }),

  actions: {
    async sync() {
      await apollo_client
        .query<GqlProjectsSelect, GqlProjectsUpdateOneVariables>({
          query: GQL_PROJECTS_SELECT,
        })
        .then((res) => {
          this.projects = res.data.projects;
        })
        .finally(() => {
          this.is_loaded = true;
        });
    },
  },
});
