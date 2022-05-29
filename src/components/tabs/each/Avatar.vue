<script setup>
defineProps({
  avatar: Object
})
</script>

<template>
  <div class="uno-gqgc64">
    <img :src="avatar.icon" alt="" class="uno-bw31ws filtered-icon">
    <h5 class="uno-nazhfl">{{ avatar.title }}</h5>
  </div>
</template>

<style scoped>
.filtered-icon {
  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(188deg) brightness(102%) contrast(102%);
}

.uno-gqgc64 {
  display: flex;
  align-items: center;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}

.uno-bw31ws {
  width: 2.5rem;
  border-radius: 9999px;
  --un-bg-opacity: 1;
  background-color: rgba(96, 165, 250, var(--un-bg-opacity));
  padding: 0.5rem;
}

.uno-nazhfl {
  margin-right: 1rem;
  font-weight: 1;
  letter-spacing: 0.1em;
}
</style>