<script setup>
import linerChart from '../charts/linerChart';
import PieChart from '../charts/pieChart'
import { icons } from '../../stores/data';
</script>

<template>
  <div class="vlji2b">
    <div class="k267k8">
      <h3 class="mhtr0l">محصولات فروخته شده
        <img :src="icons.chart" class="q2feq1">
      </h3>
      <linerChart :height="300" />
    </div>
    <div class="w-full p2">
      <h4 class="r2n14h">محصولات مرجوع شده
        <img :src="icons.chart" class="q2feq1">
      </h4>
      <PieChart :height="250" />
    </div>
  </div>
</template>

<style scoped>
.q2feq1 {
  margin-right: 0.5rem;
  width: 1.75rem;
  filter: invert(46%) sepia(93%) saturate(1658%) hue-rotate(184deg) brightness(96%) contrast(98%);
}

.vlji2b {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  margin-top: 0.5rem;
  align-items: flex-end;
  grid-gap: 0.5rem;
  gap: 0.5rem;
  border-radius: 0.25rem;
  --un-bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--un-bg-opacity));
}

.k267k8 {
  grid-column: span 2/span 2;
  width: 100%;
  padding: 0.5rem;
}

.mhtr0l {
  display: inline-flex;
  padding-bottom: 1.25rem;
  padding-top: 0.5rem;
  padding-right: 0.75rem;
}

.r2n14h {
  display: inline-flex;
  padding-bottom: 0.75rem;
  padding-right: 0.75rem;
  letter-spacing: -0.05em;
}


@media (min-width: 1024px) {
  .vlji2b {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
</style>