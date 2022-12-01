// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { h } from "vue";
import { aliases } from "@/assets/icons";

const light: ThemeDefinition = {
  dark: false,
  colors: {
    background: "#FFFFFF",
    surface: "#FFFFFF",
    black: "#0D0D2F",

    primary: "#7D42FB",
    accent: "#2BABCC",
    "m-emphasis": "#6E6E83",

    error: "#D3281D",
    info: "#2196F3",
    success: "#12870F",
    warning: "#DC6A18",
  },
};

const dark: ThemeDefinition = {
  dark: true,
  colors: {
    // white: '#FFFFFF',
    // black: '#FFFFFF',
    surface: "#000000",
    // background: '#FFFFFF',

    primary: "#7D42FB",
    accent: "#2BABCC",
    "m-emphasis": "#6E6E83",

    error: "#D3281D",
    info: "#2196F3",
    success: "#12870F",
    warning: "#DC6A18",
  },
};

// Vuetify
import { createVuetify, IconProps, IconSet, ThemeDefinition } from "vuetify";

export default createVuetify({
  theme: {
    defaultTheme: "light",
    themes: {
      light,
      dark,
    },
  },

  defaults: {
    VCard: {
      rounded: "lg",
    },
    VBtn: {
      rounded: "pill",
    },
  },

  icons: {
    defaultSet: "bsl",
    aliases,
    sets: {
      bsl: {
        component: (props: IconProps) => {
          const _key = props.icon.replace(/\n| /g, "");

          console.log(_key);

          if (!aliases[_key]) {
            return h("span");
          }

          return h(
            "svg",
            { ...aliases[_key].props, key: _key },
            aliases[_key].children
          );
        },
      } as IconSet,
    },
  },
});
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
