<script setup>
defineProps({
  contact: Object
})
</script>

<template>
  <div class="flex items-center p2 cursor-pointer duration-250 hover:bg-gray/30">
    <img :src="contact.avatar" class="w-12 rounded-full bg-gray/50 ml3">
    <div leading-4>
      <h5>{{ contact.name }}</h5>
      <h6 class="fw1 text-gray">{{ contact.position }}</h6>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>