<template>
  <div class="d-flex flex-column align-center justify-center flex-grow-1">
    <v-card min-width="500" elevation="10" class="pa-6">
      <div class="d-flex align-center mb-6">
        <div class="text-h4">Sign In</div>
        <v-spacer></v-spacer>
        <router-link to="/sign-up">Sign up</router-link>
      </div>
      <v-text-field
        v-model="form.email"
        label="Email"
        variant="outlined"
      ></v-text-field>
      <v-text-field
        v-model="form.password"
        label="Password"
        type="password"
        variant="outlined"
      ></v-text-field>
      <v-btn :loading="is_login_loading" @click="signIn" color="success"
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

const form = reactive({
  email: "",
  password: "",
});

const is_login_loading = ref(false);

const auth_store = useAuthStore();
const router = useRouter();

async function signIn() {
  const pop = async () => {
    const res = await fetch("http://localhost:8000/auth/login", {
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
