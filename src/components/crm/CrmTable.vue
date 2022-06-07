<script setup>
import { ref } from 'vue';
import { latestSales, icons } from '../../stores/data';

const date = ref(new Date());
const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};
date.value = date.value.toLocaleString('fa-IR', options)
</script>

<template>
  <div class="c10kz9 shadow">
    <div class="v60zl9">
      <img :src="icons.basket" class="y3kgmo">
      <div>
        <h4>آخرین فروش‌ها</h4>
        <p text-10px md:w-80>شما در اینجا می‌توانید با نظارت بر محصولات خود٬ ردیابی وضعیت فروش و حمل و نقل اطلاع داشته
          باشید.
        </p>
      </div>
    </div>


    <table class="bdkrix">
      <thead>
        <tr class="gnkq0q">
          <th p="b3 r5">
            <h5>محصول</h5>
          </th>
          <th pb3>
            <h5>خریدار</h5>
          </th>
          <th pb3>
            <h5>جمع کل</h5>
          </th>
          <th pb3>
            <h5>وضعیت</h5>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="sale in latestSales" :key="sale.id" class="ptfftw">
          <td class="c0a5dr">
            <img :src="sale.productImg" class="ilh4v">
            <div class="y4kams">
              <h6 class="e925mu">{{ sale.productId }}</h6>
              <h5 fw1>{{ sale.product }}</h5>
            </div>
          </td>
          <td>
            <div class="p7v3cs">
              <img :src="sale.userImg" class="qn7wgx">
              <div class="o5wdo0">
                <h5 fw1>{{ sale.username }}</h5>
                <h6 class="e925mu">{{ date }}</h6>
              </div>
            </div>
          </td>
          <td>
            <h6>{{ sale.total }}</h6>
          </td>
          <td class="status">
            <h6 class="duqxli"><span>{{ sale.status }}</span></h6>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.c10kz9 {
  border-radius: 0.25rem;
  --un-bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--un-bg-opacity));
  padding: 0.5rem;
  padding-bottom: 0rem;
  overflow-y: scroll;
}

.v60zl9 {
  display: flex;
  align-items: center;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  padding-right: 0.75rem;
}


.y3kgmo {
  margin-left: 1rem;
  min-width: 3rem;
  filter: invert(48%) sepia(72%) saturate(3225%) hue-rotate(187deg) brightness(102%) contrast(91%);
}

.bdkrix {
  width: 40rem;
  border-collapse: collapse;
  text-align: right;
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

.ilh4v {
  width: 3rem;
  height: 3rem;
  object-fit: cover;
}

.gnkq0q {
  border-bottom-width: 1px;
  border-bottom-style: solid;
  --un-border-opacity: 1;
  border-color: rgba(209, 213, 219, var(--un-border-opacity));
}

.c0a5dr {
  display: flex;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-right: 1.25rem;
}

.y4kams {
  margin-right: 2.5rem;
  width: 100%;
  letter-spacing: -0.05em;
}

.e925mu {
  font-weight: 1;
  --un-text-opacity: 1;
  color: rgba(107, 114, 128, var(--un-text-opacity));
}

.p7v3cs {
  display: flex;
  align-items: center;
}

.qn7wgx {
  width: 2.5rem;
  border-radius: 9999px
}

.o5wdo0 {
  margin-right: 1.25rem;
  width: 100%;
  letter-spacing: -0.05em;
}

.status {
  color: white;
}

tr:nth-child(1) .status h6 {
  background-color: green;
}

tr:nth-child(2) .status h6 {
  background-color: blue;
}

tr:nth-child(3) .status h6 {
  background-color: yellowgreen;
}

tr:nth-child(4) .status h6 {
  background-color: red;
}

.duqxli {
  display: inline-block;
  border-radius: 9999px;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  font-weight: 1;
}

@media(min-width: 640px) {
  .bdkrix {
    width: 100%;
  }
}
</style>