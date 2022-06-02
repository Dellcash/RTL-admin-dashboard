<script setup>
import { ref, useSlots, provide } from 'vue';

const props = defineProps({
  title: String,
  icon: String,
  notification: String
})

const slots = useSlots()

const tabs = ref(slots.default().map(tab => tab.props.title))
const icons = ref(slots.default().map(tab => tab.props.icon))
const notification = ref(slots.default().map(tab => tab.props.notification))
const selectedTitle = ref(tabs.value[0])

provide('selectedTitle', selectedTitle)
</script>

<template>

  <div class="x1lzsq shadow-lg">
    <div class="kyi2qn">
      <div v-for="title in tabs" :key="title" @click="selectedTitle = title" class="nc6b13">
        <div class="agp57s">
          <img :src="icons[tabs.indexOf(title)]" class="h7ik6a"
            :class="[title == selectedTitle ? 'filtered-img' : 'filter-invert-70']" />
          <h6 :class="[title == selectedTitle ? '!text-blue-500 fromRight' : '']" class="a0v1i5">{{
              title
          }}
          </h6>
        </div>
        <h6 class="oznpso">
          {{ notification[tabs.indexOf(title)] }}
        </h6>
      </div>
    </div>
    <slot />
  </div>
</template>

<style>
.filtered-img {
  filter: invert(48%) sepia(77%) saturate(3394%) hue-rotate(201deg) brightness(100%) contrast(94%)
}

.x1lzsq {
  cursor: pointer;
  --un-bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--un-bg-opacity));
  border-radius: 0.25rem;
}

.kyi2qn {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  --un-border-opacity: 1;
  border-color: rgba(209, 213, 219, var(--un-border-opacity));
}

.nc6b13 {
  position: relative;
  width: 100%;
  padding-top: 0.5rem;
  transition-duration: 300ms;
}

.nc6b13:hover {
  --un-bg-opacity: 1;
  background-color: rgba(239, 246, 255, var(--un-bg-opacity));
}

.agp57s {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.h7ik6a {
  width: 1.75rem;
  cursor: pointer;
  transition-duration: 100ms;
}

.a0v1i5 {
  width: 100%;
  text-align: center;
  /* font-weight: 1; */
  letter-spacing: 0.025em;
  --un-text-opacity: 1;
  color: rgba(156, 163, 175, var(--un-text-opacity));
  transition-duration: 75ms
}

.a0v1i5:after {
  display: block;
  content: '';
  border-bottom: solid 2px rgb(57, 69, 82);
  transform: scaleX(0);
  transition: transform 250ms ease-in-out;
  margin: 0 10px 0 10px;
  padding-top: 5px
}

.a0v1i5.fromRight:after {
  transform-origin: 100% 50%;
  transform: scaleX(1);
  --un-text-opacity: 1 !important;
  color: rgba(59, 130, 246, var(--un-text-opacity)) !important;
}

.oznpso {
  position: absolute;
  top: 0.25rem;
  right: 0.25rem;
  border-radius: 0.25rem;
  --un-bg-opacity: 1;
  background-color: rgba(185, 28, 28, var(--un-bg-opacity));
  padding-left: 0.3rem;
  padding-right: 0.3rem;
  font-weight: 1;
  --un-text-opacity: 1;
  color: rgba(255, 255, 255, var(--un-text-opacity));
}

@media (min-width: 640px) {
  .oznpso {
    right: 4rem;
  }
}

@media (min-width: 1024px) {
  .oznpso {
    right: 0.25rem;
  }
}
</style>
