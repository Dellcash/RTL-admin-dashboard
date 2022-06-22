<template>
  <div class="k9mytl">
    <div class="h4kwgm">
      <div class="qu2480">
        <h1 class="fbqvcz">28<sup>o</sup></h1>
        <h2 fw1>India</h2>
      </div>
    </div>
  </div>
</template>

<style scoped>
.k9mytl {
  position: relative;
  direction: ltr;
  margin-top: 0.5rem;
  border-radius: 0.25rem;
  background-image: url('https://cdn.quasar.dev/img/parallax1.jpg');
  background-size: cover;
  background-position: center;
}

.h4kwgm {
  height: 12.5rem;
  --un-text-opacity: 1;
  color: rgba(255, 255, 255, var(--un-text-opacity));
}

.qu2480 {
  position: absolute;
  left: 1.75rem;
  top: 3rem;
}

.fbqvcz {
  font-size: 6rem;
  font-weight: 1;
  line-height: 4.5rem;
}

@media (min-width: 640px) {
  .k9mytl {
    height: 25rem;
  }

  .qu2480 {
    top: 15rem !important;
    left: 2rem !important;
  }
}

@media (min-width: 1024px) {
  .k9mytl {
    margin-top: 0rem !important;
    height: 100%;
  }

  .qu2480 {
    top: 12rem !important;
  }

}
</style>