<template>
  <div class="home-page mt-10">
    <v-breadcrumbs :items="['Dashboard', 'Home']" class="mb-3"></v-breadcrumbs>

    <v-dialog max-width="500" v-model="is_modal_opened">
      <v-card rounded="lg" class="pa-5">
        <div class="text-h5 font-weight-bold mb-8 align-center d-flex">
          New project
          <v-spacer></v-spacer>
          <v-btn
            @click="is_modal_opened = false"
            icon="mdi-close"
            variant="text"
          ></v-btn>
        </div>
        <v-text-field
          label="Project name"
          variant="outlined"
          v-model="project_form.name"
        ></v-text-field>
        <v-btn
          :loading="is_create_project_loading"
          class="align-self-start"
          @click="createProject"
          color="success"
          >create</v-btn
        >
      </v-card>
    </v-dialog>

    <div class="list">
      <v-row v-if="!are_projects_loading">
        <v-col cols="4">
          <v-card
            @click="is_modal_opened = true"
            rounded="lg"
            height="100%"
            class="d-flex flex-column align-center justify-center pa-5 bg-blue"
          >
            <v-icon size="x-large">mdi-plus</v-icon>
            <div class="text-h6">New project</div>
          </v-card>
        </v-col>

        <v-col cols="4" v-for="n in projects" :key="n.id">
          <v-card
            rounded="lg"
            height="100%"
            class="d-flex flex-column align-start pa-5 bg-blue"
          >
            <div class="text-h5">
              {{ n.name }}
            </div>
            <v-btn
              @click="router.push(`/dsh/project/${n.id}`)"
              variant="tonal"
              class="mt-10"
              rounded
              small
              >open</v-btn
            >
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  GqlProjectsSelect,
  GQL_PROJECTS_CREATE,
  GQL_PROJECTS_SELECT,
} from "@/graphql";
import { IProject } from "@/interfaces";
import { useApolloClient, useMutation, useQuery } from "@vue/apollo-composable";
import { onMounted, reactive, ref } from "vue";
import { useRouter } from "vue-router";

const project_form = reactive({
  name: "",
});

const { client } = useApolloClient();
const router = useRouter();

const is_modal_opened = ref(false);
const is_create_project_loading = ref(false);

const projects = ref([] as IProject[]);
const are_projects_loading = ref(true);

async function sync() {
  await client
    .query({
      query: GQL_PROJECTS_SELECT,
    })
    .then(({ data }) => {
      projects.value = data.projects;
    })
    .finally(() => {
      are_projects_loading.value = false;
    });
}

async function createProject() {
  const pop = async () => {
    await client.mutate({
      mutation: GQL_PROJECTS_CREATE,
      variables: {
        data: project_form,
      },
    });

    await sync();
  };

  is_create_project_loading.value = true;
  pop().finally(() => {
    is_create_project_loading.value = false;
    is_modal_opened.value = false;
  });
}

onMounted(sync);
</script>
