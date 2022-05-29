<script setup>
defineProps({
  user: Object
})
</script>

<template>
  <div class="uno-4i0nbk">
    <div class="uno-p7v3cs">
      <img :src="user.img" alt="کاربر" class="uno-nl5wi2">
      <div>
        <h5 class="uno-avssp4">{{ user.name }}</h5>
        <h6 class="uno-pi707w">{{ user.message }}</h6>
      </div>
    </div>
    <h6 text-gray-400>{{ user.lastMessage }}</h6>
  </div>
</template>

<style scoped>
.uno-4i0nbk {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top-width: 1px;
  border-top-style: solid;
  --un-border-opacity: 1;
  border-color: rgba(209, 213, 219, var(--un-border-opacity));
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
}

.uno-4i0nbk:first-child {
  border-top-width: 0;
}

.uno-p7v3cs {
  display: flex;
  align-items: center;
}

.uno-nl5wi2 {
  margin-left: 0.75rem;
  width: 2.5rem;
  border-radius: 9999px;
}

.uno-avssp4 {
  font-weight: 1;
  letter-spacing: -0.05em;
}

.uno-pi707w {
  height: 1rem;
  width: 170px;
  font-weight: 1;
  letter-spacing: -0.025rem;
  overflow: hidden;
  text-overflow: ellipsis;
  --un-text-opacity: 1;
  color: rgba(156, 163, 175, var(--un-text-opacity));
}
</style>