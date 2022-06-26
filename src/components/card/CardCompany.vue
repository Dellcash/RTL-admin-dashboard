<script setup>
defineProps({
  description: String
})
</script>

<template>
  <div class="mjo3cl">
    <h3>پک ویژه</h3>
    <div class="i-carbon-finance dustqh" />
    <h1>۵۵۰تومان</h1>
    <p class="a52c24">{{ description }}</p>
    <div>
      <button class="s1fr2k">خرید</button>
    </div>
  </div>
</template>

<style scoped>
.mjo3cl {
  text-align: center;
  color: #fff;
  padding: 1rem 0.75rem;
  border-radius: 0.25rem;
  --un-gradient-from: rgba(34, 197, 94, var(--un-from-opacity, 1));
  --un-gradient-stops: var(--un-gradient-from), var(--un-gradient-to, rgba(255, 255, 255, 0));
  --un-gradient-to: rgba(59, 130, 246, var(--un-to-opacity, 1));
  --un-gradient-shape: to bottom right;
  --un-gradient: var(--un-gradient-shape), var(--un-gradient-stops);
  background-image: linear-gradient(var(--un-gradient));
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.mjo3cl {
  --un-gradient-from: rgba(234, 179, 8, 0.5);
  --un-gradient-stops: var(--un-gradient-from),
    var(--un-gradient-to, rgba(255, 255, 255, 0));
  --un-gradient-to: rgba(239, 68, 68, var(--un-to-opacity, 1));
  --un-gradient-shape: to bottom right;
  --un-gradient: var(--un-gradient-shape),
    var(--un-gradient-stops);
  background-image: linear-gradient(var(--un-gradient));
}

.dustqh {
  font-size: 4rem;
  margin-top: 2.5rem;
  align-self: center;
}

.a52c24 {
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-weight: 700;
  --un-text-opacity: 1;
  color: rgba(255, 255, 255, var(--un-text-opacity));
}

.s1fr2k {
  border-width: 1px;
  border-style: solid;
  border-radius: 0.25rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  --un-text-opacity: 1;
  color: rgba(255, 255, 255, var(--un-text-opacity));
  transition-duration: 250ms;
}

.s1fr2k:hover {
  background-color: rgba(243, 244, 246, 0.1);
}
</style>