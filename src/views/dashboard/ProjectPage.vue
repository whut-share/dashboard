<template>
  <div class="project-page mt-10">
    <v-breadcrumbs
      :items="[
        {
          title: 'Dashboard',
          disabled: false,
          to: '/dsh',
        },
        'Projects',
        project.name || '...',
      ]"
      class="mb-3"
    ></v-breadcrumbs>

    <v-text-field
      label="Project name"
      v-model="project.name"
      variant="outlined"
    ></v-text-field>

    <v-row class="d-flex">
      <v-col cols="6">
        <v-text-field
          v-model="project.minter_settings.token_base_url"
          variant="outlined"
          label="Token metadata url"
        ></v-text-field>
      </v-col>

      <v-col cols="6">
        <v-select
          v-model="project.minter_settings.include_networks"
          :items="[
            { title: 'Local', value: 'local' },
            { title: 'Ethereum', value: 'ethereum' },
            { title: 'ImmutableX', value: 'immutablex' },
          ]"
          label="Networks"
          multiple
          hint="Pick your networks"
          persistent-hint
          variant="outlined"
        ></v-select>
      </v-col>
    </v-row>

    <div class="d-flex">
      <v-btn
        :loading="is_save_loading"
        color="success"
        class="mr-3"
        @click="saveProject"
        >save</v-btn
      >
    </div>

    <MinterCheckoutSessionsTable :project="project.id" />
  </div>
</template>

<script setup lang="ts">
import {
  GqlProjectsGet,
  GqlProjectsGetVariables,
  GqlProjectsUpdateOne,
  GqlProjectsUpdateOneVariables,
  GQL_PROJECTS_GET,
  GQL_PROJECTS_UPDATE_ONE,
} from "@/graphql";
import { IProject } from "@/interfaces";
import { useProjectsStore } from "@/store";
import { useApolloClient, useMutation, useQuery } from "@vue/apollo-composable";
import { onMounted, reactive, ref } from "vue";
import { useRoute } from "vue-router";
import MinterCheckoutSessionsTable from "@/components/projects/MinterCheckoutSessionsTable.vue";

const { client } = useApolloClient();
const route = useRoute();

const projects_store = useProjectsStore();
const project = reactive(
  projects_store.projects.find((n) => n.id === route.params.project) as IProject
);

const is_save_loading = ref(false);

async function saveProject() {
  const pop = async () => {
    const { data } = await client.query<
      GqlProjectsUpdateOne,
      GqlProjectsUpdateOneVariables
    >({
      query: GQL_PROJECTS_UPDATE_ONE,
      variables: {
        id: project.id,
        data: {
          minter_settings: {
            token_base_url: project.minter_settings.token_base_url,
            webhook_events_url: project.minter_settings.webhook_events_url,
            include_networks: project.minter_settings.include_networks,
          },
          name: project.name,
        },
      },
    });

    await projects_store.sync();
  };

  is_save_loading.value = true;
  pop().finally(() => {
    is_save_loading.value = false;
  });
}
</script>
