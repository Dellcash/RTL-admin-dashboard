<script setup>
defineProps({
  userImg: String
})
</script>

<template>
  <div class="kn805d">
    <div>
      <img src="@/assets/images/chicken-salad.jpg" class="tyu5lc">
      <img :src="userImg" class="skso0g">
      <div p="x3 b3 t10">
        <h5> $ . کافه ایتالیایی</h5>
        <p class="mjlsc9">بشقاب های کوچک، سالاد و ساندویچ در محیطی صمیمی.</p>
      </div>
    </div>
    <div class="x1fcn9">
      <div i-carbon-calendar-heat-map text="6 black" />
      <h5 mr5>رزو شده</h5>
    </div>
  </div>
</template>

<style scoped>
.kn805d {
  position: relative;
  border-radius: 0.25rem;
  --un-bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--un-bg-opacity));
  --un-text-opacity: 1;
  color: rgba(75, 85, 99, var(--un-text-opacity));
}

.kn805d>:not([hidden])~:not([hidden]) {
  --un-divide-y-reverse: 0;
  border-top-width: calc(1px * calc(1 - var(--un-divide-y-reverse)));
  border-bottom-width: calc(1px * var(--un-divide-y-reverse));
  --un-divide-x-reverse: 0;
  border-left-width: calc(0px * calc(1 - var(--un-divide-x-reverse)));
  border-right-width: calc(0px * var(--un-divide-x-reverse));
  --un-divide-opacity: 1;
  border-color: rgba(156, 163, 175, var(--un-divide-opacity));
  --un-divide-opacity: 0.5;
  border-style: solid;
}

.tyu5lc {
  width: 100%;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}

.skso0g {
  position: absolute;
  top: 10rem;
  left: 50%;
  transform: translate(-50%, 0);
  width: 5.5rem;
  border-radius: 9999px;
  --un-bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--un-bg-opacity));
  --un-shadow: var(--un-shadow-inset) 0 20px 25px -5px var(--un-shadow-color, rgba(0, 0, 0, 0.1)), var(--un-shadow-inset) 0 8px 10px -6px var(--un-shadow-color, rgba(0, 0, 0, 0.1));
  box-shadow: var(--un-ring-offset-shadow, 0 0 #0000), var(--un-ring-shadow, 0 0 #0000), var(--un-shadow);
}

.mjlsc9 {
  font-size: 12px;
  color: rgba(156, 163, 175, 0.7);
}

.x1fcn9 {
  display: flex;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
}

@media (min-width: 640px) {
  .skso0g {
    top: 23rem
  }
}

@media (min-width: 768px) {
  .skso0g {
    top: 16.5rem;
  }
}
</style>