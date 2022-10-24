import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import { DefaultApolloClient } from "@vue/apollo-composable";
import { apollo_client } from "./plugins/apollo";
import { pinia } from "./store";

loadFonts();

(window as any).$app = createApp(App)
  .use(router)
  .use(pinia)
  .use(vuetify)
  .provide(DefaultApolloClient, apollo_client)
  .mount("#app");
