<script setup>
defineProps({
  description: String
})
</script>

<template>
  <div class="lx0ttk">
    <h4>امید دلکش</h4>
    <p class="axp673">{{ description }}</p>
    <h5 class="qb9ah6">_ ویوو دولوپر در <strong>پونه</strong></h5>
  </div>
</template>

<style scoped>
.lx0ttk {
  border-radius: 0.25rem;
  --un-bg-opacity: 1;
  background-color: rgba(24, 28, 77, var(--un-bg-opacity));
  padding: 1.25rem;
  --un-text-opacity: 1;
  color: rgba(255, 255, 255, var(--un-text-opacity));
}

.axp673 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  font-size: 12px;
  --un-text-opacity: 1;
  color: rgba(255, 255, 255, var(--un-text-opacity));
}

.qb9ah6 {
  font-weight: 1;
  --un-text-opacity: 1;
  color: rgba(248, 113, 113, var(--un-text-opacity));
}
</style>