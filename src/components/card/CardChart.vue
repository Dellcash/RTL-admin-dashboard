<template>
  <div class="klml95">
    <div class="cxxqlzw">
      <h3 class="vqq276">بازدید امروز کاربرها</h3>
      <BubbleChart :height="200" lg:h-65 />
    </div>
    <div class="ckrac1g">
      <h3 class="vqq276">فروش امروز</h3>
      <BarChart :height="200" lg:h-65 />
    </div>
    <div class="cmjbikm">
      <h3 class="vqq276">نمودار خرید</h3>
      <ScatterChart :height="200" lg:h-65 />
    </div>
  </div>
</template>

<style scoped>
.klml95 {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  margin-top: 0.5rem;
  grid-gap: 0.5rem;
  gap: 0.5rem;
}

.cxxqlzw {
  border-radius: 0.25rem;
  --un-bg-opacity: 1;
  background-color: rgba(49, 87, 44, var(--un-bg-opacity));
}

.ckrac1g {
  border-radius: 0.25rem;
  --un-bg-opacity: 1;
  background-color: rgba(120, 88, 166, var(--un-bg-opacity));
}

.cmjbikm {
  border-radius: 0.25rem;
  --un-bg-opacity: 1;
  background-color: rgba(51, 53, 51, var(--un-bg-opacity));
}

.vqq276 {
  padding-left: 0.5rem;
  padding-top: 1rem;
  padding-right: 1.25rem;
  padding-bottom: 1.75rem;
  --un-text-opacity: 1;
  color: rgba(255, 255, 255, var(--un-text-opacity));
}



@media (min-width: 768px) {
  .klml95 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .ckrac1g {
    order: 2;
    grid-column: span 2/span 2;
  }
}

@media (min-width: 1024px) {
  .klml95 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .cxxqlzw {
    order: 2;
  }

  .ckrac1g {
    order: 1;
    grid-column: span 1/span 1;
  }
}
</style>