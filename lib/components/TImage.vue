<template>
  <img
    class="tds-object-contain"
    v-bind="$props"
    :src="src"
    :alt="alt"
  >
</template>

<script setup lang="ts">
import type { ImgHTMLAttributes } from 'vue';

/**
 * ToggleProps for the ImageAtom component
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img for more information
 *
 */
export interface TImageProps extends /* @vue-ignore */ Omit<ImgHTMLAttributes, 'src'|'alt'> {
  /**
   * The source URL of the image
   */
  src?: string;
  /**
   * The alt text of the image
   */
  alt: string;
}
defineProps<TImageProps>();

</script>

<style scoped>

</style>
