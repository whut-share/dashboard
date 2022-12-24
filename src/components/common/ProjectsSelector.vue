<template>
  <v-card
    class="pa-3 d-flex align-center projects-selector ui-bordered-light"
    elevation="10"
  >
    <!-- <v-btn
      v-if="props.multiple"
      class="mr-6"
      rounded="lg"
    >
      All Games
    </v-btn> -->

    <div class="d-flex">
      <v-card
        rounded="lg"
        @click="selectProject(n.id)"
        class="project"
        :class="{ selected: n.id === props.modelValue, 'ml-0': !i, 'ml-6': i }"
        v-for="(n, i) in projects"
        color="primary"
        variant="text"
        :key="n.id"
      >
        <div
          class="d-flex bg-white d-flex align-center pa-2 rounded-lg"
          style="position: relative"
        >
          <svg
            class="mr-2"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="24" height="24" rx="6" fill="#0D0D2F" />
            <path
              d="M9 12C9 15.8508 9.00999 19 9.02332 19C9.04331 19 11.7585 18.5206 12.0916 18.4571L12.2649 18.4254V15.854V13.2857H13.2976H14.3304V12.8159C14.3304 12.5587 14.3404 11.8889 14.3537 11.3238L14.3737 10.3016H13.3209H12.2649V9.1746V8.04762H13.4808C14.1505 8.04762 14.6968 8.04127 14.6968 8.03175C14.6968 7.99683 14.9634 5.28572 14.98 5.14921L15 5H11.9983H9V12Z"
              fill="#FDFDFD"
            />
          </svg>
          <div class="text-black text-body-2 font-weight-bold">
            {{ n.name }}
          </div>
        </div>
      </v-card>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import { useProjectsStore } from "@/store";
import {
  onMounted,
  defineProps,
  computed,
  defineEmits,
  watch,
  onActivated,
  onBeforeMount,
} from "vue-demi";
import { useRoute } from "vue-router";

const projects_store = useProjectsStore();
const props = defineProps<{
  modelValue: string | null;
  multiple?: boolean;
}>();
const projects = computed(() => projects_store.selectedProjectGroupProjects);

const emit = defineEmits(["update:modelValue"]);
function selectProject(project_id: string) {
  emit("update:modelValue", project_id);
}

onBeforeMount(() => {
  if (!props.modelValue) {
    selectProject(projects.value[0].id);
  }
});
watch(
  () => props.modelValue,
  (val) => {
    if (!val) {
      selectProject(projects.value[0].id);
    }
  }
);
</script>

<style lang="scss" scoped>
.projects-selector {
  .project {
    &::before {
      z-index: -1;
      content: "";
      width: 99%;
      height: 99%;
      position: absolute;
      border-radius: 9px;
      background: linear-gradient(45deg, #7d42fb, #2ed6e1);
      transition: all 0.3s ease-in-out;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    &.selected {
      > div {
        background: linear-gradient(
          174.84deg,
          rgba(125, 66, 251, 0) 74.68%,
          #2ed6e1 160.47%
        );
      }

      overflow: visible;

      &::before {
        width: calc(100% + 2px);
        height: calc(100% + 2px);
      }
    }
  }
}
</style>
