<script setup>
import { cardSocial } from '../../stores/data';
</script>

<template>
  <div class="grid gap-2 m-2">
    <div v-for="card in cardSocial" :key="card" class="uno-21nbpy">
      <div class="uno-m3ll32">
        <img :src="card.icon" class="uno-qds0uv">
      </div>
      <div class="text-white mr-4 tracking-widest">
        <h4>{{ card.number }}</h4>
        <h5 fw-1>{{ card.title }}</h5>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.uno-21nbpy {
  width: 100%;
  display: flex;
  align-items: center;
  --un-bg-opacity: 1;
  background-color: rgba(80, 100, 181, var(--un-bg-opacity));
}

.uno-21nbpy:nth-child(2) {
  background-color: #F37169;
}

.uno-21nbpy:nth-child(3) {
  background-color: #EA6A7F;
}

.uno-21nbpy:nth-child(4) {
  background-color: #A270B1;
}


.uno-m3ll32 {
  padding: 1.25rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.uno-21nbpy:first-child .uno-m3ll32 {
  --un-bg-opacity: 1;
  background-color: rgba(62, 81, 181, var(--un-bg-opacity));
}

.uno-21nbpy:nth-child(2) .uno-m3ll32 {
  background-color: #F34636;
}

.uno-21nbpy:nth-child(3) .uno-m3ll32 {
  background-color: #EA4B64;
}

.uno-21nbpy:nth-child(4) .uno-m3ll32 {
  background-color: #9F52B1;
}

.uno-qds0uv {
  margin-top: 0.35rem;
  width: 1.5rem;
  --un-invert: invert(1);
  filter: var(--un-filter);
}
</style>