<script setup>
import { icons, toFarsiNumber, usersInfo } from '../../stores/data';
</script>

<template>
  <div class="cd8n95">
    <div class="wv650s">
      <img :src="icons.todo.slice(0, 1)" class="k4lpvh">
      <div text-white>
        <h4>لیست تسک‌ها</h4>
        <h5 fw1>تمامی تسک‌های شما</h5>
      </div>
    </div>

    <div>
      <div v-for="(task, index) in usersInfo.users.slice(0, 6)" :key="index" class="i6f4rr">
        <div class="p7v3cs justify-between">
          <div class="p7v3cs">
            <input type="checkbox" v-model="task.compeleted" class="flytkb">
            <div>
              <h5 :class="[task.compeleted === false ? '' : 'line-through']">انجام کار {{ toFarsiNumber(task.id) }}
              </h5>
              <h6 :class="[task.compeleted === false ? '' : 'line-through']" fw1>توضیحات کار</h6>
            </div>
          </div>
          <img :src="icons.todo.slice(1, 2)" class="filter-invert-50 w6">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cd8n95 {
  border-radius: 0.25rem;
  --un-bg-opacity: 1;
  background-color: rgba(33, 150, 243, var(--un-bg-opacity));
  padding-bottom: 1rem;
}

.wv650s {
  display: flex;
  align-items: center;
  padding: 1.75rem;
}

.k4lpvh {
  margin-left: 1rem;
  width: 2.5rem;
  filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(110deg) brightness(98%) contrast(108%);
}

.i6f4rr {
  margin-left: 1rem;
  margin-right: 1rem;
  --un-bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--un-bg-opacity));
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}

.p7v3cs {
  display: flex;
  align-items: center;
}

.flytkb {
  margin-left: 1rem;
  width: 1.25rem;
  height: 1.25rem;
  border-width: 1px;
  border-style: solid;
  cursor: pointer;
}
</style>