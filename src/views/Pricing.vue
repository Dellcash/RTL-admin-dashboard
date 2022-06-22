<script setup>
const navs = ref([
  {
    title: 'داشبورد',
    icon: 'i-carbon-dashboard',
    to: '/'
  },
  {
    title: 'ورود',
    icon: 'i-carbon-login',
    to: '/login'
  },
  {
    title: 'قفل',
    icon: 'i-carbon-locked',
    to: '/lock'
  }
])

const pricing = ref([
  {
    title: 'پایه',
    icon: 'i-carbon-building',
    price: '۰تومان',
    description: 'این پک برای کمپانی‌های بین ۲ تا ۱۰ نفر مناسب می‌باشد.'
  },
  {
    title: 'کمپانی‌های کوچک',
    icon: 'i-carbon-home',
    price: '۲۵تومان',
    description: 'این پک برای کمپانی‌های بین ۲ تا ۱۰ نفر مناسب می‌باشد.'
  },
  {
    title: 'تمدید شده',
    icon: 'i-carbon-enterprise',
    price: '۲۵۰تومان',
    description: 'این پک برای کمپانی‌های بین ۱۰ تا ۱۰۰ نفر مناسب می‌باشد.'
  },
  {
    title: 'پک ویژه',
    icon: 'i-carbon-finance',
    price: '۵۵۰تومان',
    description: 'این پک برای کمپانی‌های بین ۲ تا ۱۰ نفر مناسب می‌باشد.'
  },
])
</script>

<template>
  <div class="cvm9yy">
    <header class="tm4be9">
      <h3 class="q7adk0">صفحه قیمت‌ها</h3>
      <div class="p7v3cs">
        <router-link v-for="nav in navs" :key="nav" :to="nav.to" class="q9f34v">
          <div :class="nav.icon" text-5 />
          <h5 mr1>{{ nav.title }}</h5>
        </router-link>
      </div>
    </header>

    <main p="t10 lg:t20">
      <div class="b4bgvz">
        <h2>بهترین قیمت را برای خود انتخاب کنید</h2>
        <h6>شما به‌روزرسانی‌های نامحدود رایگان و پشتیبانی ممتاز در هر بسته دارید.</h6>
      </div>

      <div class="l6wolb">
        <div v-for="price in pricing" :key="price" class="mjo3cl">
          <h3>{{ price.title }}</h3>
          <div :class="price.icon" class="dustqh" />
          <h1>{{ price.price }}</h1>
          <p class="a52c24">{{ price.description }}</p>
          <div>
            <button class="s1fr2k">خرید</button>
          </div>
        </div>
      </div>
    </main>

    <footer p="t10 b3">
      <p text="12px white center">تمام حقوق این سایت متعلق به <strong>دلکش</strong> است.</p>
    </footer>
  </div>
</template>

<style scoped>
.cvm9yy {
  --un-gradient-from: rgba(55, 65, 81, 0.4);
  --un-gradient-stops: var(--un-gradient-from), var(--un-gradient-to, rgba(255, 255, 255, 0));
  --un-gradient-to: rgba(30, 58, 138, var(--un-to-opacity, 1));
  --un-gradient-shape: to bottom right;
  --un-gradient: var(--un-gradient-shape), var(--un-gradient-stops);
  background-image: linear-gradient(var(--un-gradient));
  --un-text-opacity: 1;
  color: rgba(255, 255, 255, var(--un-text-opacity));
}

.tm4be9 {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 0.75rem;
  padding-left: 0.75rem;
}

.q7adk0 {
  margin-right: 0.75rem;
  display: none;
}


.p7v3cs {
  display: flex;
  align-items: center;
}

.q9f34v {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  letter-spacing: 0.025em;
  padding: 0.25rem;
  transition-duration: 250ms;
}

.q9f34v:hover {
  background-color: rgba(243, 244, 246, 0.3);
}

.p7v3cs:nth-child(2) .q9f34v {
  margin-right: 1rem;
  margin-left: 1rem
}

.b4bgvz {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  text-align: center;
}

.l6wolb {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  margin-top: 1.25rem;
  grid-gap: 0.5rem;
  gap: 0.5rem;
}

.a52c24 {
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-weight: 700;
  --un-text-opacity: 1;
  color: rgba(255, 255, 255, var(--un-text-opacity));
}

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

.mjo3cl:nth-child(2) {
  --un-gradient-from: rgba(234, 179, 8, 0.5);
  --un-gradient-stops: var(--un-gradient-from),
    var(--un-gradient-to, rgba(255, 255, 255, 0));
  --un-gradient-to: rgba(239, 68, 68, var(--un-to-opacity, 1));
  --un-gradient-shape: to bottom right;
  --un-gradient: var(--un-gradient-shape),
    var(--un-gradient-stops);
  background-image: linear-gradient(var(--un-gradient));
}

.mjo3cl:nth-child(3) {
  --un-gradient-from: rgba(168, 85, 247, var(--un-from-opacity, 1));
  --un-gradient-stops: var(--un-gradient-from), var(--un-gradient-to, rgba(255, 255, 255, 0));
  --un-gradient-to: rgba(244, 63, 94, 0.5);
  --un-gradient-shape: to bottom right;
  --un-gradient: var(--un-gradient-shape), var(--un-gradient-stops);
  background-image: linear-gradient(var(--un-gradient));
}

.mjo3cl:nth-child(4) {
  --un-gradient-from: rgba(37, 99, 235, var(--un-from-opacity, 1));
  --un-gradient-stops: var(--un-gradient-from), var(--un-gradient-to, rgba(255, 255, 255, 0));
  --un-gradient-to: rgba(16, 185, 129, 0.5);
  --un-gradient-shape: to bottom right;
  --un-gradient: var(--un-gradient-shape), var(--un-gradient-stops);
  background-image: linear-gradient(var(--un-gradient));
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


.dustqh {
  font-size: 4rem;
  margin-top: 2.5rem;
  align-self: center;
}

img {
  filter: invert(99%) sepia(0%) saturate(3719%) hue-rotate(81deg) brightness(115%) contrast(100%);
}

@media(min-width: 640px) {
  .tm4be9 {
    justify-content: space-between;
  }

  .q7adk0 {
    display: block;
  }

  .w1rioi {
    padding-left: 0.25rem;
  }

  .p7v3cs:nth-child(2) .q9f34v {
    margin-right: 0.5rem;
    margin-left: 0.5rem
  }

  .q9f34v {
    flex-direction: row;
  }
}

@media (min-width: 768px) {
  .l6wolb {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1024px) {
  .l6wolb {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    margin-top: 2.5rem;
  }
}
</style>