<script setup>
import { icons } from '../stores/data';
</script>

<template>
  <div class="aq1a3y">
    <div>
      <img v-for="icon in icons.maintenance" :key="icon" :src="icon" class="a2bdma">
    </div>
    <h1 text-white>درحال تعمیر هستیم!</h1>
    <p class="whwe2m">سایت ما تحت تعمیر و نگهداری است. به زودی برمی گردیم.</p>
  </div>
</template>

<style scoped>
.aq1a3y {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  --un-gradient-from: rgba(107, 33, 168, var(--un-from-opacity, 1));
  --un-gradient-stops: var(--un-gradient-from), var(--un-gradient-to, rgba(255, 255, 255, 0));
  --un-gradient-to: rgba(216, 180, 254, var(--un-to-opacity, 1));
  --un-gradient-shape: to bottom right;
  --un-gradient: var(--un-gradient-shape), var(--un-gradient-stops);
  background-image: linear-gradient(var(--un-gradient));
}

.a2bdma {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  width: 5rem;
}

img {
  filter: invert(99%) sepia(3%) saturate(947%) hue-rotate(220deg) brightness(117%) contrast(100%);
}

.whwe2m {
  text-align: center;
  font-weight: 700;
  --un-text-opacity: 1;
  color: rgba(255, 255, 255, var(--un-text-opacity));
}
</style>