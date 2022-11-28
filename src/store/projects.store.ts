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
    selected_project_id: null as string | null,
  }),

  getters: {
    selectedProject: (state) => {
      return state.projects.find(
        (project) => project.id === state.selected_project_id
      );
    },
  },

  actions: {
    async sync() {
      await apollo_client
        .query<GqlProjectsSelect, GqlProjectsUpdateOneVariables>({
          query: GQL_PROJECTS_SELECT,
        })
        .then((res) => {
          this.projects = res.data.projects;
          if (!this.selected_project_id) {
            this.selected_project_id = this.projects[0].id;
          }
        })
        .finally(() => {
          this.is_loaded = true;
        });
    },

    select(id: string) {
      this.selected_project_id = id;
    },
  },
});
