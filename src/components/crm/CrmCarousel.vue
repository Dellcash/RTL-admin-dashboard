<script setup>
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import { crmCarousel } from '../../stores/data'
</script>

<template>
  <div class="s0afbk">
    <Carousel :autoplay="3000" :wrap-around="true">
      <Slide v-for="slide in crmCarousel" :key="slide">
        <div class="vhclaj">
          <img :src="slide.img" class="xc3v5q">
          <div p="r3 t4">
            <h5 style="direction: rtl !important">{{ slide.title }}</h5>
            <h6 class="s40ftc">{{ slide.author }}</h6>
          </div>
          <div p-3>
            <button class="pn2tk9">اشتراک‌گذاری</button>
            <button class="pn2tk9 !mr-0">بیشتر</button>
          </div>
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<style scoped>
.s0afbk {
  margin-top: 0.5rem;
  width: 100%;
  height: 350px;
  overflow-y: scroll;
  border-radius: 0.25rem;
  --un-bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--un-bg-opacity));
}

.vhclaj {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: right;
}

.xc3v5q {
  margin: 0.5rem;
  height: 20rem;
  object-fit: cover;
}

.s40ftc {
  font-weight: 1;
  --un-text-opacity: 1;
  color: rgba(156, 163, 175, var(--un-text-opacity));
}

.pn2tk9 {
  margin-right: 0.75rem;
  border-width: 1px;
  border-style: solid;
  --un-border-opacity: 1;
  border-color: rgba(96, 165, 250, var(--un-border-opacity));
  border-radius: 9999px;
  background-color: transparent;
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  font-size: 0.75rem;
  line-height: 1rem;
  --un-text-opacity: 1;
  color: rgba(96, 165, 250, var(--un-text-opacity));
  transition-duration: 250ms;
}

.pn2tk9:focus {
  border-width: 2px;
  border-style: solid;
}

.pn2tk9:hover {
  --un-bg-opacity: 1;
  background-color: rgba(219, 234, 254, var(--un-bg-opacity));
  --un-text-opacity: 1;
  color: rgba(37, 99, 235, var(--un-text-opacity));
}

@media (min-width: 1024px) {
  .s0afbk {
    margin-top: 0rem;
  }
}
</style>