<script setup>
defineProps({
  avatar: Object
})
</script>

<template>
  <div class="gqgc64">
    <div :class="avatar.icon" class="bw31ws" />
    <h5 class="nazhfl">{{ avatar.title }}</h5>
  </div>
</template>

<style scoped>
.gqgc64 {
  display: flex;
  align-items: center;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}

.bw31ws {
  --un-text-opacity: 1;
  color: rgba(156, 163, 175, var(--un-text-opacity));
  font-size: 2.5rem;
  padding: 0.5rem;
}

.nazhfl {
  margin-right: 1rem;
  font-weight: 1;
  letter-spacing: 0.1em;
}
</style>