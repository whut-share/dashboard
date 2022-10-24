<template>
  <div class="d-flex flex-column align-center justify-center flex-grow-1">
    <v-card min-width="500" elevation="10" class="pa-6">
      <div class="d-flex align-center mb-6">
        <div class="text-h4">Sign Up</div>
        <v-spacer></v-spacer>
        <router-link to="/">Sign in</router-link>
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
      <v-btn @click="signUp" color="success">Sign up</v-btn>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { useQuery, useMutation } from "@vue/apollo-composable";
import { reactive } from "vue";
import { GQL_USERS_GET_ME, GQL_USERS_SIGN_UP } from "@/graphql";

const form = reactive({
  email: "",
  password: "",
});

const { mutate } = useMutation(GQL_USERS_SIGN_UP, {
  fetchPolicy: "no-cache",
});

async function signUp() {
  // const { result, error, loading } = useQuery(GQL_USERS_GET_ME);

  const { data } = await mutate({
    data: form,
  });
}
</script>
