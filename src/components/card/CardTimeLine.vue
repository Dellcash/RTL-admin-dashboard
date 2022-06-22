<script setup>
import { timeLine } from '../../stores/data';
</script>


<template>
  <div class="bgwhit">
    <div class="flexit">
      <div i-carbon-bloch-sphere text="blue 10" />
      <h3 tracking-wide mr3>زمانبندی</h3>
    </div>

    <div v-for="detail in timeLine" :key="detail" class="j16j2">
      <div class="d424t"></div>
      <ul>
        <li pb5>
          <div class="p7v3cs">
            <img :src="detail.icon" class="ngeyly" />
            <h4 class="q6yexc">{{ detail.title }}</h4>
          </div>
          <div pr-12>
            <p class="sxt68f">{{ detail.message }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bgwhit {
  --un-shadow-inset: var(--un-empty,

    );
  --un-shadow: 0 0 #0000;
}

.bgwhit {
  position: relative;
  border-radius: 0.25rem;
  margin-top: 0.5rem;
  height: 100%;
  --un-bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--un-bg-opacity));
  --un-shadow: var(--un-shadow-inset) 0 1px 3px 0 var(--un-shadow-color, rgba(0, 0, 0, 0.1)), var(--un-shadow-inset) 0 1px 2px -1px var(--un-shadow-color, rgba(0, 0, 0, 0.1));
  box-shadow: var(--un-ring-offset-shadow, 0 0 #0000), var(--un-ring-shadow, 0 0 #0000), var(--un-shadow);
}

.flexit {
  display: flex;
  align-items: center;
  padding: 1.25rem;
  padding-right: 1.5rem;
}

.ssm251 {
  margin-left: 1rem;
  width: 2.25rem;
  filter: invert(46%) sepia(47%) saturate(2485%) hue-rotate(185deg) brightness(98%) contrast(95%);
}

.j16j2 {
  position: relative;
  margin-top: 0.5rem;
  max-width: 42rem;
}

.j16j2:last-child div {
  border: none;
}

.j16j2:first-child div {
  border-color: #2f3 !important;
}

.j16j2:last-child ul {
  padding-bottom: 2rem;
}

.j16j2:last-child ul li .p7v3cs img {
  background-color: #2196f3;
}

.j16j2:nth-child(2) ul li .p7v3cs img {
  background-color: #219;
}

.d424t {
  position: absolute;
  top: 2.25rem;
  right: 1.2rem;
  height: 70%;
  border-right-width: 2px;
  border-right-style: solid;
  border-color: #f449;
}

.p7v3cs {
  display: flex;
  align-items: center;
}

.p7v3cs:first-child img {
  background-color: #ff9800;
}

.ngeyly {
  margin-right: 0.5rem;
  width: 1.7rem;
  height: 1.7rem;
  border-radius: 9999px;
  --un-bg-opacity: 1;
  padding: 5px;
  filter: invert(100%) sepia(10%) saturate(100%) hue-rotate(339deg) brightness(105%) contrast(103%);
}

.q6yexc {
  margin-right: 1rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  letter-spacing: -0.05em;
}

.sxt68f {
  font-size: 0.6rem;
  line-height: 1rem;
  padding-left: 1rem;
  width: 100%;
  --un-text-opacity: 1;
  color: rgba(107, 114, 128, var(--un-text-opacity));
}

@media(min-width: 640px) {
  .sxt68f {
    font-size: 0.8rem;
    padding-left: 1rem;
  }
}

@media (min-width: 1024px) {
  .bgwhit {
    margin-top: 0rem
  }

  .sxt68f {
    line-height: 1.25rem;
    width: 90%;
  }

}
</style>