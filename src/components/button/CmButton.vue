<script setup lang="ts">
import type { Button } from '@/types/button';
import { computed } from 'vue';

const props = withDefaults(defineProps<Button>(), {
  type: 'button',
  size: 'normal',
  color: 'primary',
});

const buttonClass = computed(() => {
  const size = props.size === 'normal' ? '' : 'btn-sm';

  const colorMapping = {
    primary: 'btn-primary-500',
    secondary: 'btn-secondary',
    success: 'btn-success-500',
    warning: 'btn-warning-500',
    danger: 'btn-danger-500',
    info: 'btn-info-500',
  };

  const color = colorMapping[props.color];

  return [size, color];
});
</script>
<template>
  <button :class="buttonClass" class="btn" :type="props.type">
    <slot />
  </button>
</template>
