<script setup>
defineProps({
  userImg: String
})

const socials = ref(['i-carbon-logo-linkedin', 'i-carbon-logo-twitter', 'i-carbon-logo-instagram'])
</script>

<template>
  <div class="o41jos">
    <img :src="userImg" class="vciddn">
    <div leading-5>
      <h4>امید دلکش</h4>
      <h5 text-gray>ویوو دولوپر</h5>
    </div>

    <div class="fjsxo0">
      <div v-for="social in socials" :key="social" class="n63bc6">
        <div :class="social" class="aldsgl" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.o41jos>:not([hidden])~:not([hidden]) {
  --un-space-y-reverse: 0;
  margin-top: calc(0.75rem * calc(1 - var(--un-space-y-reverse)));
  margin-bottom: calc(0.75rem * var(--un-space-y-reverse));
}

.o41jos {
  border-radius: 0.25rem;
  --un-bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--un-bg-opacity));
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  text-align: center;
}

.vciddn {
  width: 5.5rem;
  border-radius: 9999px;
  --un-bg-opacity: 1;
  background-color: rgba(156, 163, 175, var(--un-bg-opacity));
}

.fjsxo0 {
  display: flex;
  justify-content: center;
}

.n63bc6 {
  margin-top: 0.75rem;
  border-radius: 9999px;
  padding: 0.5rem;
}

.fjsxo0 .n63bc6:first-child {
  --un-bg-opacity: 1;
  background-color: rgba(30, 64, 175, var(--un-bg-opacity));
}

.fjsxo0 .n63bc6:nth-child(2) {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  --un-bg-opacity: 1;
  background-color: rgba(96, 165, 250, var(--un-bg-opacity));
}

.fjsxo0 .n63bc6:last-child {
  --un-bg-opacity: 1;
  background-color: rgba(248, 113, 113, var(--un-bg-opacity));
}

.aldsgl {
  cursor: pointer;
  font-size: 1.75rem;
  line-height: 2.5rem;
  --un-text-opacity: 1;
  color: rgba(255, 255, 255, var(--un-text-opacity));
  transition-duration: 250ms;
}

.aldsgl:hover {
  opacity: 0.8;
}
</style>