<template>
  <div class="d-flex flex-column align-center justify-center flex-grow-1">
    <v-card min-width="500" elevation="10" class="pa-6 d-flex flex-column">
      <div class="d-flex flex-column align-center mb-6">
        <div class="text-h4 font-weight-medium">Sign in</div>
        <div class="text-body-2 mt-1">
          Don't have account? <router-link to="/sign-up">Sign up</router-link>
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
        <ui-titled-input title="Email">
          <v-text-field
            v-model="form.email"
            placeholder="e.g. john@email.com"
            variant="outlined"
            :rules="[
              (v: string) => v.length || 'Fill email'
            ]"
          ></v-text-field>
        </ui-titled-input>

        <ui-titled-input class="mt-3" title="Password">
          <v-text-field
            v-model="form.password"
            placeholder="******"
            type="password"
            variant="outlined"
            :rules="[
              (v: string) => v.length || 'Fill password'
            ]"
          ></v-text-field>
        </ui-titled-input>
      </v-form>

      <v-btn
        :loading="is_login_loading"
        @click="signIn"
        color="success"
        class="align-self-center mt-6"
        size="large"
        >Sign in</v-btn
      >
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { useQuery, useMutation } from "@vue/apollo-composable";
import { reactive, ref } from "vue";
import { GQL_USERS_GET_ME, GQL_USERS_SIGN_UP } from "@/graphql";
import { useAuthStore } from "@/store";
import { useRouter } from "vue-router";
import GoogleAuth from "@/components/common/GoogleAuth.vue";

const form = reactive({
  email: "",
  password: "",
});

const reg_form = ref<any>(null);

const is_login_loading = ref(false);

const auth_store = useAuthStore();
const router = useRouter();

async function signIn() {
  const validation = await reg_form.value.validate();

  if (!validation.valid) {
    console.error("Form is not valid", validation.errors);
    return;
  }

  const pop = async () => {
    const res = await fetch(process.env["VUE_APP_API_URL"] + "/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const { token } = await res.json();

    await auth_store.login(token);

    router.push("/dsh");
  };

  is_login_loading.value = true;
  pop().finally(() => {
    is_login_loading.value = false;
  });
}
</script>
