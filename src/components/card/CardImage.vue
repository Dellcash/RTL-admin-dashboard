<script setup>
defineProps({
  description: String
})
</script>

<template>
  <div class="k1i0mv">
    <div>
      <img src="@/assets/images/parallax1.jpg" class="tyu5lc">
      <h3 p="x3 b3 t1.5">بار XYZ</h3>
    </div>
    <div p="x3 y5">
      <h4 mb6>ایسگاه قایق</h4>
      <h3 mb1>عنوان</h3>
      <p text="gray-600 12px">{{ description }}</p>
    </div>
    <button class="o7tjuu">برو یه جایی</button>
  </div>
</template>

<style scoped>
.k1i0mv>:not([hidden])~:not([hidden]) {
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

.k1i0mv {
  border-radius: 0.25rem;
  --un-bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--un-bg-opacity));
  --un-text-opacity: 1;
  color: rgba(75, 85, 99, var(--un-text-opacity));
}

.tyu5lc {
  width: 100%;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}

.o7tjuu {
  margin: 0.75rem;
  margin-top: 0rem;
  border-radius: 0.25rem;
  --un-bg-opacity: 1;
  background-color: rgba(57, 73, 171, var(--un-bg-opacity));
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-size: 12px;
  --un-text-opacity: 1;
  color: rgba(255, 255, 255, var(--un-text-opacity));
  transition-duration: 250ms;
}

.o7tjuu:hover {
  opacity: 0.6;
}
</style>