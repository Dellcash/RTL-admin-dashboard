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
  return usersInfo.users.slice(0, 5).filter((user) => user.name.includes(search.value))
})
watch(search, () => {
  if (filterUsers.value.length === 0) {
    error.value = 'کاربری با این نام یافت نشد!'
  } else {
    error.value = ''
  }
})

const selected = ref(false)
const selectedOptions = ref(['۵', '۱۰', '۱۵', '۲۰', '۲۵', '۳۰'])
</script>

<template>
  <div class="c10kz9 shadow">
    <div mb5 sm="gw6dv1">
      <h4 p="2 b3">بازدید کنندگان</h4>

      <div sm="aht1e" lg="ml-10">
        <div class="s9l3a4">
          <input v-model="search" type="text" class="m205la" placeholder="جستجو کاربر">
          <div>
            <button class="qcese4">
              <img :src="icons.search" class="icon">
            </button>
          </div>
        </div>

        <img :src="icons.bell.icon" class="n6zhu">
        <button class="snydy">استخراج
        </button>
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

    <div class="ps1ezb">
      <h6 class="!text-10px">رکودر برهر صفحه</h6>
      <select class="n501j9">
        <option v-for="option in selectedOptions" :key="option" :value="option">{{ option }}
        </option>
      </select>
      <h6 class="s198je">۵ از ۱-۵</h6>
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

.n6zhu {
  margin-left: 1.25rem;
  margin-right: 1.25rem;
  display: none;
  width: 2.1rem;
  height: 2.1rem;
  padding: .4rem;
  border-radius: 9999%;
}

.n6zhu:hover {
  --un-bg-opacity: 1;
  background-color: rgba(243, 244, 246, var(--un-bg-opacity));
}

.snydy {
  display: none;
  border-radius: 0.25rem;
  --un-bg-opacity: 1;
  background-color: rgba(0, 0, 0, var(--un-bg-opacity));
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-size: 0.75rem;
  line-height: 1rem;
  --un-text-opacity: 1;
  color: rgba(255, 255, 255, var(--un-text-opacity));
  transition-duration: 250ms;
}

.snydy:hover {
  --un-bg-opacity: 1;
  background-color: rgba(17, 24, 39, var(--un-bg-opacity));
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

.ps1ezb {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}

.n501j9 {
  cursor: pointer;
  border-style: none;
}

.n501j9:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.s198je {
  padding-right: 1rem;
  font-size: 10px !important;
}


@media (min-width: 640px) {
  [sm~="gw6dv1"] {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  [sm~="aht1e"] {
    margin-right: 1.25rem;
    width: 28rem;
    display: flex;
    align-items: center;
  }

  .snydy,
  .n6zhu {
    display: block;
  }

}

@media (min-width: 768px) {

  tr,
  th {
    padding-bottom: 1.25rem !important;
  }
}

@media (min-width: 1024px) {
  h6 {
    font-size: 0.775rem;
    line-height: 1.25rem;
  }
}
</style>