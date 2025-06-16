<script setup lang="ts">
import type { CmTabPanel } from '@/types/tabs';
import { inject } from 'vue';

const props = defineProps<CmTabPanel>();

const currentTab = inject('currentTab', null);
</script>
<template>
  <div v-if="props.value === currentTab" :value="props.value">
    {{ props.value }}
    {{ currentTab }}
    <slot />
  </div>
</template>
