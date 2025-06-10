<script setup lang="ts">
import type { Link } from '@/types/link';
import { computed } from 'vue';

const props = withDefaults(defineProps<Link>(), {
  to: '',
  isExternal: false,
  target: '_self',
});

/** 是否為外部連結 */
const isExternalUrl = computed(() => {
  if (props.isExternal) return true;
  if (typeof props.to === 'object') return false;
  if (props.target && props.target !== '_self') return true;
  if (props.to.startsWith('http://') || props.to.startsWith('https://')) return true;
});
</script>
<template>
  <template v-if="!isExternalUrl">
    <RouterLink :to="props.to">
      <slot />
    </RouterLink>
  </template>
  <template v-else>
    <a :href="String(props.to)" :target="props.target">
      <slot />
    </a>
  </template>
</template>
