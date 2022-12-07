import UiModal from "@/components/ui/UiModal.vue";
import UiPulsator from "@/components/ui/UiPulsator.vue";
import UiTitledInput from "@/components/ui/UiTitledInput.vue";
import { App } from "vue";

export const ui = {
  install(app: App<any>) {
    app.component("ui-modal", UiModal);
    app.component("ui-titled-input", UiTitledInput);
    app.component("ui-pulsator", UiPulsator);
  },
};
