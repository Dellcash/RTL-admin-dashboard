<script setup>
defineProps({
  userImg: String
})  
</script>

<template>
  <div class="fhe3ys">
    <div class="p7v3cs">
      <img :src="userImg" class="x330b7">
      <div leading-4>
        <h5>امید دلکش</h5>
        <h6 class="s40ftc">ویوو دولوپر</h6>
      </div>
    </div>
    <button class="o7tjuu">اضافه کن</button>
  </div>
</template>

<style scoped>
.fhe3ys {
  display: flex;
  align-items: center;
  justify-content: space-between;
  --un-bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--un-bg-opacity));
  padding: 0.75rem;
}

.p7v3cs {
  display: flex;
  align-items: center;
}

.x330b7 {
  --un-shadow-inset: var(--un-empty,
      /*!*/
      /*!*/
    );
  --un-shadow: 0 0 #0000;
}

.x330b7 {
  margin-left: 0.75rem;
  width: 4.25rem;
  border-radius: 9999px;
  background-color: rgba(156, 163, 175, 0.5);
  --un-shadow: var(--un-shadow-inset) 0 10px 15px -3px var(--un-shadow-color, rgba(0, 0, 0, 0.1)), var(--un-shadow-inset) 0 4px 6px -4px var(--un-shadow-color, rgba(0, 0, 0, 0.1));
  box-shadow: var(--un-ring-offset-shadow, 0 0 #0000), var(--un-ring-shadow, 0 0 #0000), var(--un-shadow);
}

.s40ftc {
  font-weight: 1;
  --un-text-opacity: 1;
  color: rgba(156, 163, 175, var(--un-text-opacity));
}

.o7tjuu {
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