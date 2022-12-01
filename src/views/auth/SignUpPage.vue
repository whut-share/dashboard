<template>
  <div class="d-flex flex-column align-center justify-center flex-grow-1">
    <v-card min-width="500" elevation="10" class="pa-6 d-flex flex-column">
      <div class="d-flex flex-column align-center mb-6">
        <div class="text-h4 font-weight-medium">Create account</div>
        <div class="text-body-2 mt-1">
          Have an account? <router-link to="/">Sign in</router-link>
        </div>
      </div>

      <v-card
        @click="1"
        variant="outlined"
        class="pa-4 d-flex align-center justify-center"
        color="accent"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          class="mr-4"
        >
          <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
            <path
              fill="#4285F4"
              d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"
            />
            <path
              fill="#34A853"
              d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"
            />
            <path
              fill="#FBBC05"
              d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"
            />
            <path
              fill="#EA4335"
              d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"
            />
          </g>
        </svg>
        <span class="text-black font-weight-medium">Continue with Google</span>
      </v-card>

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
        <v-text-field
          v-model="form.full_name"
          label="Full name"
          variant="outlined"
          :rules="[
            (v: string) => !!v.length || 'Enter your name',
          ]"
        ></v-text-field>
        <v-text-field
          v-model="form.email"
          label="Email"
          variant="outlined"
          class="mt-4"
          :rules="[
            (v: string) => !!v.length || 'Enter email',
          ]"
        ></v-text-field>
        <v-text-field
          v-model="form.password"
          label="Password"
          type="password"
          variant="outlined"
          class="mt-4"
          :rules="[
            (v: string) => !!v.length || 'Enter password',
          ]"
        ></v-text-field>
        <v-text-field
          v-model="form.confirm_password"
          label="Confirm password"
          type="password"
          variant="outlined"
          class="mt-4"
          :rules="[
            (v: string) => v === form.password || 'Confirm password correctly'
          ]"
        ></v-text-field>

        <v-checkbox
          density="compact"
          v-model="form.terms"
          true-icon="solid-interface-check"
          class="mb-6 mt-4"
          :rules="[
            (v: boolean) => !!v || 'You must agree to the terms and conditions'
          ]"
        >
          <template #label>
            <div>
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
        class="align-self-center"
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
        name: "First project",
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
