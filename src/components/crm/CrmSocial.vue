<script setup>
const crmSocial = ref([
  {
    icon: 'i-carbon-identification',
    number: '۲۰۰ ریال',
    title: 'درآمد ماهیانه'
  },
  {
    icon: 'i-carbon-chart-line-smooth',
    number: '۵۰۰ ریال',
    title: 'فروش هفتگی'
  },
  {
    icon: 'i-carbon-chart-minimum',
    number: '۴۰',
    title: 'مشتری‌های جدید'
  },
  {
    icon: 'i-carbon-user',
    number: '۱۹',
    title: 'کاربرهای فعال'
  }
])
</script>

<template>
  <div class="r9ry9r">
    <div v-for="card in crmSocial" :key="card" class="n21bpy">
      <div class="m3ll32">
        <div :class="card.icon" class="qds0uv" />
      </div>
      <div class="xboo2">
        <h4>{{ card.number }}</h4>
        <h5 fw-1>{{ card.title }}</h5>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.r9ry9r {
  display: grid;
  grid-gap: 0.5rem;
  gap: 0.5rem;
}

.n21bpy {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.25rem;
  background-color: rgb(84, 107, 250)
}

.n21bpy:nth-child(2) {
  background-color: rgb(58, 150, 136);
}

.n21bpy:nth-child(3) {
  background-color: rgb(124, 179, 66);
}

.n21bpy:nth-child(4) {
  background-color: rgb(248, 140, 43);
}

.m3ll32 {
  order: 1;
  padding: .5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 0.25rem;
}

.qds0uv {
  --at-apply: "filter-invert-10";
  margin-top: 0.35rem;
  font-size: 2.8rem;
  --un-invert: invert(1);
  filter: var(--un-filter);
}

.xboo2 {
  margin-right: 1rem;
  --un-text-opacity: 1;
  color: rgba(255, 255, 255, var(--un-text-opacity));
}

@media (min-width: 640px) {
  .r9ry9r {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1024px) {
  .r9ry9r {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}
</style>