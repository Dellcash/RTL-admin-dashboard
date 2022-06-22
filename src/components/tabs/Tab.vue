<script setup>
defineProps({
  title: String,
  icon: String
})

const selectedTitle = inject('selectedTitle')
</script>

<template>
  <Transition mode="out-in" duration="300" enter-to-class="hidden" enter-from-class="hidden"
    enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut">
    <div v-if="title === selectedTitle">
      <slot />
    </div>
  </Transition>
</template>