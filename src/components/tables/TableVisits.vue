<script setup>
import { computed, ref, watch } from 'vue';
import { usersInfo, toFarsiNumber, icons } from '../../stores/data';

const date = ref(new Date());
const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};
date.value = date.value.toLocaleString('fa-IR', options)

const search = ref('')
const error = ref('')
const filterUsers = computed(() => {
  return usersInfo.users.filter((user) => user.name.includes(search.value))
})

watch(search, () => {
  if (filterUsers.value.length === 0) {
    error.value = 'کاربری با این نام یافت نشد'
  } else {
    error.value = ''
  }
})
</script>

<template>
  <div class="c10kz9 shadow">
    <div mb5>
      <h4 p="2 b3">بازدید کنندگان</h4>

      <div>
        <div class="s9l3a4">
          <input v-model="search" type="text" class="m205la" placeholder="جستجو...">
          <div>
            <button class="qcese4">
              <img :src="icons.search" class="icon">
            </button>
          </div>
        </div>

      </div>
    </div>


    <table class="bdkrix">
      <thead>
        <tr>
          <th class="xgjo0">
            <h6>ID</h6>
          </th>
          <th>
            <h6>نام کاربر</h6>
          </th>
          <th>
            <h6>عنوان</h6>
          </th>
          <th>
            <h6>تاریخ</h6>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in filterUsers" :key="user" class="ptfftw">
          <td class="pr-2.5 py-3">
            <h6 fw1>{{ toFarsiNumber(user.id) }}</h6>
          </td>
          <td>
            <h6 class="jjavel">{{ user.name }}</h6>
          </td>
          <td>
            <h6 class="jjavel">{{ user.job }}</h6>
          </td>
          <td>
            <h6 class="jjavel">{{ date }}</h6>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="error">
      <h6 class="z209kq">{{ error }}</h6>
    </div>
  </div>
</template>

<style scoped>
.c10kz9 {
  border-radius: 0.25rem;
  --un-bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--un-bg-opacity));
  padding: 0.5rem;
  padding-bottom: 0rem;
}

.s9l3a4 {
  position: relative;
  width: 100%;
  border-width: 1px;
  border-style: solid;
  --un-border-opacity: 1;
  border-color: rgba(229, 231, 235, var(--un-border-opacity));
  border-radius: 0.25rem;
}

.m205la {
  width: 85%;
  border-radius: 0.25rem;
  border-style: none;
  padding: 0.5rem;
  padding-right: 0.75rem;
}

.m205la:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.m205la::placeholder {
  font-size: 12px;
}

.qcese4 {
  position: absolute;
  top: 0.45rem;
  left: 0.5rem;
}

.icon {
  --at-apply: "w-6 rotate-90 filter-invert-80";
}

.bdkrix {
  width: 100%;
  border-collapse: collapse;
  text-align: right;
}

.xgjo0 {
  width: 2.5rem;
  padding-right: 0.5rem;
}

.ptfftw {
  border-bottom-width: 1px;
  border-bottom-style: solid;
  --un-border-opacity: 1;
  border-color: rgba(229, 231, 235, var(--un-border-opacity));
}

.jjavel {
  font-weight: 1;
  letter-spacing: -0.05em;
}

.z209kq {
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  text-align: center;
  --un-text-opacity: 1;
  color: rgba(239, 68, 68, var(--un-text-opacity));
}
</style>