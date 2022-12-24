<template>
  <div class="d-flex flex-column align-center justify-center flex-grow-1">
    <v-card min-width="500" elevation="10" class="pa-6 d-flex flex-column">
      <div class="d-flex flex-column align-center mb-6">
        <div class="text-h4 font-weight-medium">Create account</div>
        <div class="text-body-2 mt-1">
          Have an account? <router-link to="/">Sign in</router-link>
        </div>
      </div>

      <GoogleAuth />

      <div class="d-flex align-center text-grey-lighten-3 my-4">
        <v-divider
          style="border-color: currentColor"
          class="flex-grow-1"
        ></v-divider>
        <div class="px-3">OR</div>
        <v-divider
          style="border-color: currentColor"
          class="flex-grow-1"
        ></v-divider>
      </div>

      <v-form ref="reg_form" lazy-validation>
        <ui-titled-input title="Full name">
          <v-text-field
            v-model="form.full_name"
            variant="outlined"
            placeholder="e.g. John Doe"
            :rules="[
              (v: string) => !!v.length || 'Enter your name',
            ]"
          ></v-text-field>
        </ui-titled-input>
        <ui-titled-input title="Email" class="mt-3">
          <v-text-field
            v-model="form.email"
            variant="outlined"
            placeholder="e.g. john@email.com"
            :rules="[
              (v: string) => !!v.length || 'Enter email',
            ]"
          ></v-text-field>
        </ui-titled-input>
        <ui-titled-input title="Password" class="mt-3">
          <v-text-field
            v-model="form.password"
            type="password"
            variant="outlined"
            :rules="[
              (v: string) => !!v.length || 'Enter password',
            ]"
          ></v-text-field>
        </ui-titled-input>
        <ui-titled-input title="Confirm password" class="mt-3">
          <v-text-field
            v-model="form.confirm_password"
            type="password"
            variant="outlined"
            :rules="[
              (v: string) => v === form.password || 'Confirm password correctly'
            ]"
          ></v-text-field>
        </ui-titled-input>

        <v-checkbox
          density="compact"
          v-model="form.terms"
          class="mt-4"
          color="primary"
          :rules="[
            (v: boolean) => !!v || 'You must agree to the terms and conditions'
          ]"
        >
          <template #label>
            <div class="ml-2">
              <span class="font-weight-medium">I accept the</span>
              <a href="https://google.com" class="flex-grow-1">
                Terms and conditions
              </a>
            </div>
          </template>
        </v-checkbox>
      </v-form>

      <v-btn
        @click="signUp"
        :loading="signup_loading"
        class="align-self-center mt-6"
        size="large"
        color="primary"
        >Sign up</v-btn
      >
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { useQuery, useMutation } from "@vue/apollo-composable";
import { reactive, ref } from "vue";
import {
  GqlProjectGroupsCreateOne,
  GqlProjectGroupsCreateOneVariables,
  GqlProjectsCreateOne,
  GqlProjectsCreateOneVariables,
  GqlUsersSignUp,
  GqlUsersSignUpVariables,
  GQL_PROJECTS_CREATE_ONE,
  GQL_PROJECT_GROUPS_CREATE_ONE,
  GQL_USERS_GET_ME,
  GQL_USERS_SIGN_UP,
} from "@/graphql";
import { apollo_client } from "@/plugins";
import { useRouter } from "vue-router";
import { useAuthStore, useProjectsStore } from "@/store";
import GoogleAuth from "@/components/common/GoogleAuth.vue";

const router = useRouter();

const form = reactive({
  email: "",
  password: "",
  full_name: "",
  confirm_password: "",
  terms: false,
});

const signup_loading = ref(false);
const reg_form = ref<any>(null);

async function signUp() {
  const validation = await reg_form.value.validate();

  if (!validation.valid) {
    console.error("Form is not valid", validation.errors);
    return;
  }

  signup_loading.value = true;

  await apollo_client
    .mutate<GqlUsersSignUp, GqlUsersSignUpVariables>({
      mutation: GQL_USERS_SIGN_UP,
      variables: {
        data: {
          email: form.email,
          password: form.password,
        },
      },
    })
    .then(() => login())
    .then(() => createDummyProjectData())
    .finally(() => {
      signup_loading.value = false;
    });

  router.push("/");
}

const auth_store = useAuthStore();

async function login() {
  const res = await fetch(process.env["VUE_APP_API_URL"] + "/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: form.email,
      password: form.password,
    }),
  });

  const { token } = await res.json();

  await auth_store.login(token);
}

const projects_store = useProjectsStore();

async function createDummyProjectData() {
  const { data } = await apollo_client.mutate<
    GqlProjectsCreateOne,
    GqlProjectsCreateOneVariables
  >({
    mutation: GQL_PROJECTS_CREATE_ONE,
    variables: {
      data: {
        name: "First game",
      },
    },
  });

  const project_id = data?.projectCreate.id;

  await apollo_client.mutate<
    GqlProjectGroupsCreateOne,
    GqlProjectGroupsCreateOneVariables
  >({
    mutation: GQL_PROJECT_GROUPS_CREATE_ONE,
    variables: {
      data: {
        name: "First project",
        projects: [project_id],
      },
    },
  });

  await projects_store.sync();
}
</script>
