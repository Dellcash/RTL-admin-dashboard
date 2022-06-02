<script setup>
import { cardSocial } from '../../stores/data';
</script>

<template>
  <div class="r9ry9r">
    <div v-for="card in cardSocial" :key="card" class="n21bpy">
      <div class="m3ll32">
        <img :src="card.icon" class="qds0uv">
      </div>
      <div class="xboo2">
        <h4>{{ card.number }}</h4>
        <h5 fw-1>{{ card.title }}</h5>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.r9ry9r {
  display: grid;
  grid-gap: 0.5rem;
  gap: 0.5rem;
}

@media (min-width: 640px) {
  .r9ry9r {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1024px) {
  .r9ry9r {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

.n21bpy {
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 0.25rem;
  --un-bg-opacity: 1;
  background-color: rgba(80, 100, 181, var(--un-bg-opacity));
}

.n21bpy:nth-child(2) {
  background-color: #F37169;
}

.n21bpy:nth-child(3) {
  background-color: #EA6A7F;
}

.n21bpy:nth-child(4) {
  background-color: #A270B1;
}


.m3ll32 {
  padding: 1.25rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  border-radius: 0.25rem;
}

.n21bpy:first-child .m3ll32 {
  --un-bg-opacity: 1;
  background-color: rgba(62, 81, 181, var(--un-bg-opacity));
}

.n21bpy:nth-child(2) .m3ll32 {
  background-color: #F34636;
}

.n21bpy:nth-child(3) .m3ll32 {
  background-color: #EA4B64;
}

.n21bpy:nth-child(4) .m3ll32 {
  background-color: #9F52B1;
}

.qds0uv {
  --at-apply: "filter-invert-10";
  margin-top: 0.35rem;
  width: 1.5rem;
  --un-invert: invert(1);
  filter: var(--un-filter);
}

.xboo2 {
  margin-right: 1rem;
  letter-spacing: 0.1em;
  --un-text-opacity: 1;
  color: rgba(255, 255, 255, var(--un-text-opacity));
}
</style>