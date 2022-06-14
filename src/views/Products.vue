<script setup>
import { ref, computed, watch } from 'vue';
import { icons, productsInfo } from '../stores/data';
import vue3starRatings from 'vue3-star-ratings'

const search = ref('')
const error = ref('')
const filterProducts = computed(() => {
  return productsInfo.products.filter((product) => product.name.includes(search.value))
})
watch(search, () => {
  if (filterProducts.value.length === 0) {
    error.value = 'محصولی با این نام یافت نشد!'
  } else {
    error.value = ''
  }
})
</script>

<template>
  <main>
    <div m2>
      <input v-model="search" type="text" placeholder="جستجو محصول" class="yzxa65">
    </div>

    <div v-if="error" class="k5x8df">
      <p class="oow231">{{ error }}</p>
    </div>

    <section class="j7783q">
      <div v-for="product in filterProducts" :key="product" class="k4zxjp">
        <img :src="product.img" class="jov6po">
        <div class="lne1fv">
          <h3 pb3>{{ product.name }}</h3>
          <p text-14px>{{ product.description }}</p>
          <vue3starRatings v-model="product.rating" starSize="18" starColor="#ffeb3f" inactiveColor="#ccc"
            :disableClick="true" :showControl="false" class="lgj9tb" />
          <div class="o2dewx">
            <button class="f5y0ro">دیدن جزئیات</button>
            <h4>{{ product.price }}</h4>
          </div>
        </div>
        <h6 class="nkvn86">{{ product.status }}</h6>
        <img :src="icons.addToCart" class="fttsnp">
      </div>
    </section>
  </main>
</template>

<style scoped>
.yzxa65 {
  width: 100%;
  border-width: 1px;
  border-style: solid;
  --un-border-opacity: 1;
  border-color: rgba(209, 213, 219, var(--un-border-opacity));
  border-radius: 9999px;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  transition-duration: 250ms;
}

.yzxa65:hover {
  --un-border-opacity: 1;
  border-color: rgba(156, 163, 175, var(--un-border-opacity));
}

.yzxa65::placeholder {
  color: rgba(156, 163, 175, 0.7);
}

.yzxa65:focus {
  --un-outline-color-opacity: 1;
  outline-color: rgba(107, 114, 128, var(--un-outline-color-opacity));
}

.k5x8df {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.oow231 {
  position: absolute;
  top: 35%;
  --un-text-opacity: 1;
  color: rgba(248, 113, 113, var(--un-text-opacity));
}

.j7783q {
  display: grid;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  grid-gap: 0.5rem;
  gap: 0.5rem;
}

.k4zxjp {
  --un-shadow-inset: var(--un-empty,
      /*!*/
      /*!*/
    );
  --un-shadow: 0 0 #0000;
}

.k4zxjp {
  position: relative;
  border-radius: 0.25rem;
  --un-bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--un-bg-opacity));
  --un-shadow: var(--un-shadow-inset) 0 1px 3px 0 var(--un-shadow-color, rgba(0, 0, 0, 0.1)), var(--un-shadow-inset) 0 1px 2px -1px var(--un-shadow-color, rgba(0, 0, 0, 0.1));
  box-shadow: var(--un-ring-offset-shadow, 0 0 #0000), var(--un-ring-shadow, 0 0 #0000), var(--un-shadow);
}

.jov6po {
  width: 100%;
  height: 12.5rem;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  object-fit: contain;
}

.lne1fv {
  background-color: rgba(243, 244, 246, 0.5);
  padding: 0.75rem;
  padding-top: 2.25rem;
}

.lgj9tb {
  margin: 0rem !important;
  margin-top: 0.25rem !important;
  display: flex !important;
  align-items: flex-start !important;
  padding: 0rem !important;
}

.o2dewx {
  margin-top: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.f5y0ro {
  border-width: 1px;
  border-style: solid;
  --un-border-opacity: 1;
  border-color: rgba(96, 165, 250, var(--un-border-opacity));
  border-radius: 9999px;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
  line-height: 1.25rem;
  --un-text-opacity: 1;
  color: rgba(96, 165, 250, var(--un-text-opacity));
  transition-duration: 250ms;
}

.f5y0ro:hover {
  background-color: rgba(191, 219, 254, 0.5);
}


.nkvn86 {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  border-radius: 9999px;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  font-weight: 1;
  --un-text-opacity: 1;
  color: rgba(96, 165, 250, var(--un-text-opacity));
}


section div:nth-child(2) .nkvn86 {
  --un-bg-opacity: 1;
  background-color: rgba(75, 85, 99, var(--un-bg-opacity));
  color: white
}

section div:nth-child(3) .nkvn86 {
  --un-bg-opacity: 1;
  background-color: rgba(229, 231, 235, var(--un-bg-opacity));
  --un-text-opacity: 1;
  color: rgba(96, 165, 250, var(--un-text-opacity));
}

section div:last-child .nkvn86 {
  --un-bg-opacity: 1;
  background-color: rgba(229, 231, 235, var(--un-bg-opacity));
  --un-text-opacity: 1;
  color: rgba(96, 165, 250, var(--un-text-opacity));
}

.fttsnp {
  position: absolute;
  top: 11.75rem;
  left: 1.25rem;
  width: 2.5rem;
  border-radius: 9999px;
  background-color: rgba(224, 242, 254, 0.1);
  padding: 0.25rem;
  padding-top: 0.475rem;
  padding-bottom: 0.475rem;
  filter: invert(0%) sepia(97%) saturate(7450%) hue-rotate(10deg) brightness(74%) contrast(95%);
}

@media (min-width: 640px) {
  .oow231 {
    font-size: 24px;
  }
}

@media (min-width: 768px) {
  .j7783q {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    align-items: center;
  }
}

@media (min-width: 1024px) {
  .oow231 {
    font-size: 28px;
  }

  .j7783q {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
</style>
