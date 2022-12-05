import {
  GqlProjectGroupsSelect,
  GqlProjectsSelect,
  GqlProjectsUpdateOneVariables,
  GQL_PROJECTS_SELECT,
  GQL_PROJECT_GROUPS_SELECT,
} from "@/graphql";
import { IProject, IProjectGroup } from "@/interfaces";
import { apollo_client } from "@/plugins";
import { defineStore } from "pinia";

export const useProjectsStore = defineStore("projects", {
  state: () => ({
    projects: [] as IProject[],
    project_groups: [] as IProjectGroup[],
    is_loaded: false,
    selected_project_group_id: null as string | null,
  }),

  getters: {
    selectedProjectGroup: (state) => {
      return state.project_groups.find(
        (n) => n.id === state.selected_project_group_id
      );
    },

    selectedProjectGroupProjects: (state): IProject[] => {
      const pg = state.project_groups.find(
        (n) => n.id === state.selected_project_group_id
      );

      if (!pg) return [];

      return state.projects.filter((n) => pg.projects.includes(n.id));
    },
  },

  actions: {
    async sync() {
      await Promise.all([
        apollo_client
          .query<GqlProjectsSelect, GqlProjectsUpdateOneVariables>({
            query: GQL_PROJECTS_SELECT,
          })
          .then((res) => {
            this.projects = res.data.projects;
          }),

        apollo_client
          .query<GqlProjectGroupsSelect>({
            query: GQL_PROJECT_GROUPS_SELECT,
          })
          .then((res) => {
            this.project_groups = res.data.project_groups;
            if (!this.selected_project_group_id) {
              this.selected_project_group_id = this.project_groups[0].id;
            }
          }),
      ]).finally(() => {
        this.is_loaded = true;
      });
    },

    selectProjectGroup(id: string) {
      this.selected_project_group_id = id;
    },
  },
});
