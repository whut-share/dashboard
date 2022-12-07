import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import { DefaultApolloClient } from "@vue/apollo-composable";
import { apollo_client } from "./plugins/apollo";
import { pinia } from "./store";
import "@/assets/styles/index.scss";
import { ui } from "./plugins/ui";

loadFonts();

(window as any).$app = createApp(App)
  .use(router)
  .use(pinia)
  .use(vuetify)
  .use(ui)
  .provide(DefaultApolloClient, apollo_client)

  .directive("inline-svg", (el) => {
    if (!el) {
      return;
    }

    // copy attributes to first child
    const content = el.tagName === "TEMPLATE" ? el.content : el;
    if (content.children.length === 1) {
      [...el.attributes].forEach((attr) =>
        content.firstChild.setAttribute(attr.name, attr.value)
      );
    }

    // replace element with content
    if (el.tagName === "TEMPLATE") {
      el.replaceWith(el.content);
    } else {
      el.replaceWith(...el.children);
    }
  })

  .mount("#app");
