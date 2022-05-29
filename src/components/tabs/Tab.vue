<script setup>
import { inject } from 'vue';

defineProps({
  title: String,
  icon: String
})

const selectedTitle = inject('selectedTitle')
</script>

<template>
  <div v-if="title === selectedTitle">
    <slot />
  </div>
</template>