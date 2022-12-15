import UiModal from "@/components/ui/UiModal.vue";
import UiPulsator from "@/components/ui/UiPulsator.vue";
import UiTitledInput from "@/components/ui/UiTitledInput.vue";
import UiAddress from "@/components/ui/UiAddress.vue";
import UiTable from "@/components/ui/UiTable.vue";
import { App } from "vue";

export const ui = {
  install(app: App<any>) {
    app.component("ui-modal", UiModal);
    app.component("ui-titled-input", UiTitledInput);
    app.component("ui-pulsator", UiPulsator);
    app.component("ui-address", UiAddress);
    app.component("ui-table", UiTable);
  },
};
