<script setup lang="ts">
import type { CmTabs } from '@/types/tabs';
import { provide } from 'vue';
const props = defineProps<CmTabs>();

const model = defineModel();

const onTabClick = (tabValue: string) => {
  model.value = tabValue;
};

provide('currentTab', model);
</script>
<template>
  <div>
    <ul class="flex">
      <li v-for="tab in props.items" :key="tab.value" class="border-b-2 border-gray-300">
        <button
          class="px-4 py-1 hover:border-amber-700 hover:text-amber-700"
          :class="{
            'border-b-2 border-amber-700 font-bold text-amber-700': model === tab.value,
          }"
          @click="onTabClick(tab.value)"
          :disabled="tab.disabled"
        >
          {{ tab.name }}
        </button>
      </li>
    </ul>

    <slot name="default" />
  </div>
</template>
