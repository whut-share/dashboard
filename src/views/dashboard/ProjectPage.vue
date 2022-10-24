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

    <v-row class="d-flex" v-if="!is_project_loading">
      <v-col cols="4">
        <v-text-field
          v-model="project.dassets.token_base_url"
          variant="outlined"
          label="Token metadata url"
        ></v-text-field>
      </v-col>

      <v-col cols="4">
        <v-text-field
          label="Webhooks endpoint"
          v-model="project.dassets.webhook_events_url"
          variant="outlined"
        ></v-text-field>
      </v-col>

      <v-col cols="4">
        <v-select
          v-model="project.dassets.include_networks"
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
      <v-btn :loading="is_mint_loading" color="info" @click="mint"
        >test mint</v-btn
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  GqlProjectsSelect,
  GQL_PROJECTS_CREATE,
  GQL_PROJECTS_GET,
  GQL_PROJECTS_SELECT,
  GQL_PROJECTS_UPDATE,
} from "@/graphql";
import { IProject } from "@/interfaces";
import { useApolloClient, useMutation, useQuery } from "@vue/apollo-composable";
import { onMounted, reactive, ref } from "vue";
import { useRoute } from "vue-router";

const project = ref({} as IProject);
const is_project_loading = ref(true);
const is_save_loading = ref(false);
const is_mint_loading = ref(false);

const { client } = useApolloClient();
const route = useRoute();

async function sync() {
  is_project_loading.value = true;
  await client
    .query({
      query: GQL_PROJECTS_GET,
      variables: {
        id: route.params.project,
      },
    })
    .then(({ data }) => {
      project.value = data.project;
    })
    .finally(() => {
      is_project_loading.value = false;
    });
}

async function mint() {
  const pop = async () => {
    await fetch("http://localhost:8000/dassets/mint", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        project_id: project.value.id,
      }),
    });
  };

  is_mint_loading.value = true;
  pop().finally(() => {
    is_mint_loading.value = false;
  });
}

async function saveProject() {
  const pop = async () => {
    const { data } = await client.query({
      query: GQL_PROJECTS_UPDATE,
      variables: {
        id: project.value.id,
        data: {
          dassets: {
            token_base_url: project.value.dassets.token_base_url,
            webhook_events_url: project.value.dassets.webhook_events_url,
            include_networks: project.value.dassets.include_networks,
          },
          name: project.value.name,
        },
      },
    });

    project.value = data.projectsUpdate;
  };

  is_save_loading.value = true;
  pop().finally(() => {
    is_save_loading.value = false;
  });
}

onMounted(sync);
</script>
