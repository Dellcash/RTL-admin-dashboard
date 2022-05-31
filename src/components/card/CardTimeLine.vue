<script setup>
import { icons, timeLine } from '../../stores/data';
</script>

<template>
  <div class="bgwhit">
    <div class="flexit">
      <img :src="icons.timeLine.clock" class="ssm251">
      <h3 tracking-wide>زمانبندی</h3>
    </div>

    <div class="fmha4u">
      <div v-for="detail in timeLine" :key="detail" mb-7>
        <h4 class="msjys">{{ detail.title }}</h4>
        <h6 class="nnjlnh">{{ detail.message }}</h6>
      </div>
    </div>

    <div class="ozhp7e -rotate-90">
      <!-- #2196f3 -->
      <img :src="icons.timeLine.like1" class="arkq5k rotate-90 bg-#2196f3">
      <div class="border-#f44336 k8wcgg"></div>
      <img :src="icons.timeLine.tick" class="arkq5k rotate-90 bg-#ff9800">
      <div class="border-#ff9800 k8wcgg"></div>
      <img :src="icons.timeLine.like2" class="arkq5k rotate-90 bg-#f44336 ml-1">
    </div>
  </div>
</template>

<style scoped>
.bgwhit {
  --un-shadow-inset: var(--un-empty,
      /*!*/
      /*!*/
    );
  --un-shadow: 0 0 #0000;
}

.bgwhit {
  position: relative;
  border-radius: 0.25rem;
  --un-bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--un-bg-opacity));
  --un-shadow: var(--un-shadow-inset) 0 1px 3px 0 var(--un-shadow-color, rgba(0, 0, 0, 0.1)), var(--un-shadow-inset) 0 1px 2px -1px var(--un-shadow-color, rgba(0, 0, 0, 0.1));
  box-shadow: var(--un-ring-offset-shadow, 0 0 #0000), var(--un-ring-shadow, 0 0 #0000), var(--un-shadow);
}

.flexit {
  display: flex;
  align-items: center;
  padding: 1.25rem;
  padding-right: 1.5rem;
}

.ssm251 {
  margin-left: 1rem;
  width: 2.25rem;
  filter: invert(46%) sepia(47%) saturate(2485%) hue-rotate(185deg) brightness(98%) contrast(95%);
}

.fmha4u {
  margin-top: 1.25rem;
  padding-right: 3.5rem;
  padding-left: 1rem;
  padding-bottom: 1.75rem;
}

.msjys {
  margin-bottom: 0.75rem;
  font-size: 0.9rem;
  letter-spacing: -0.05em;
}

.nnjlnh {
  font-size: 0.6rem;
  font-weight: 1;
  line-height: 1.25rem;
}

.ozhp7e {
  position: absolute;
  top: 13.7rem;
  right: -7.2rem;
  width: 94%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.arkq5k {
  width: 1.85rem;
  border-radius: 9999px;
  padding: 0.425rem;
  filter: invert(100%) sepia(10%) saturate(100%) hue-rotate(339deg) brightness(105%) contrast(103%);
}

.k8wcgg {
  margin-left: 0.25rem;
  margin-right: 0.25rem;
  width: 8.75rem;
  border-width: 2px;
  border-style: solid;
  opacity: 0.5;
}
</style>