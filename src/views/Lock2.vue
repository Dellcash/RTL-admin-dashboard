<script setup>
const password = reactive({
  pass: '',
  passErr: ''
})

const router = useRouter()
const loading = ref(false)
const validation = () => {
  if (password.pass === '') {
    password.passErr = 'لطفا رمز خود را وارد کنید . . .'
    setTimeout(() => {
      password.passErr = ''
    }, 2000);
  } else {
    password.passErr = ''
  }

  if (password.pass !== '') {
    loading.value = true
    setTimeout(() => {
      router.push('/')
    }, 2000);
  }
}

const type = ref(false) 
</script>

<template>
  <div class="z8gm9o">
    <div class="v80bq8">
      <img src="../assets/images/james.svg" class="ykm1c">
      <div>
        <h5 text-white fw1>امید دلکش</h5>
        <form @submit.prevent="validation" class="p7v3cs">
          <div>
            <input v-model="password.pass" :type="type === false ? 'password' : 'text'" placeholder="پسورد"
              class="hto0a2 placeholder-text-gray-100/50">
            <div class="bba3qs" @click="type = !type">
              <div v-if="type" i-carbon-view-filled text="white 5" />
              <div v-else i-carbon-view-off-filled text="white 5" />
            </div>
            <Transition mode="out-in" enter-active-class="animate__animated animate__fadeIn"
              leave-active-class="animate__animated animate__fadeOut">
              <h6 v-if="password.passErr" class="puhef3">{{ password.passErr }}</h6>
            </Transition>
            <span class="focus-border"></span>
          </div>
          <button class="nzzlf0">
            <span v-if="!loading">&#10141;</span>
            <span v-else animate-pulse>&#9775;</span>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.z8gm9o {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  --un-gradient-from: rgba(234, 179, 8, var(--un-from-opacity, 1));
  --un-gradient-stops: var(--un-gradient-from), var(--un-gradient-to, rgba(255, 255, 255, 0));
  --un-gradient-to: rgba(34, 197, 94, var(--un-to-opacity, 1));
  --un-gradient-shape: to bottom right;
  --un-gradient: var(--un-gradient-shape), var(--un-gradient-stops);
  background-image: linear-gradient(var(--un-gradient));
}

.v80bq8 {
  position: relative;
  width: 300px;
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.ykm1c {
  --un-shadow-inset: var(--un-empty,
      /*!*/
      /*!*/
    );
  --un-shadow: 0 0 #0000;
}

.ykm1c {
  width: 6.25rem;
  border-radius: 9999px;
  --un-bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--un-bg-opacity));
  --un-shadow: var(--un-shadow-inset) 0 20px 25px -5px var(--un-shadow-color, rgba(0, 0, 0, 0.1)), var(--un-shadow-inset) 0 8px 10px -6px var(--un-shadow-color, rgba(0, 0, 0, 0.1));
  box-shadow: var(--un-ring-offset-shadow, 0 0 #0000), var(--un-ring-shadow, 0 0 #0000), var(--un-shadow);
}

.p7v3cs {
  display: flex;
  align-items: center;
}

.hto0a2 {
  position: relative;
  width: 100%;
  background-color: transparent;
  border: 0;
  padding: 7px;
  color: white;
  border-bottom: 1px solid #eee;
  transition: 0.4s;
  outline: none;
}

.hto0a2:hover {
  border: 0;
  border-bottom: 1px solid #fff
}

.hto0a2:focus~.focus-border {
  width: 100%;
  transition: 0.4s;
}

.hto0a2~.focus-border {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background-color: #fff;
  transition: 0.4s;
}

.hto0a2:focus~.focus-border {
  width: 61%;
  transition: 0.4s;
  left: 5.2rem;
}

.puhef3 {
  position: absolute;
  bottom: -2.25rem;
  right: 2.6rem;
  border-radius: 0.25rem;
  --un-bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--un-bg-opacity));
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-weight: 1;
  --un-text-opacity: 1;
  color: rgba(248, 113, 113, var(--un-text-opacity));
}


.bba3qs {
  position: absolute;
  top: 8.3rem;
  left: 5.5rem;
  cursor: pointer;
}

.e3n4qh {
  width: 1.25rem;
  filter: invert(99%) sepia(40%) saturate(2%) hue-rotate(180deg) brightness(112%) contrast(100%);
}

.nzzlf0 {
  --un-rotate: 0;
  --un-rotate-x: 0;
  --un-rotate-y: 0;
  --un-rotate-z: 0;
  --un-scale-x: 1;
  --un-scale-y: 1;
  --un-scale-z: 1;
  --un-skew-x: 0;
  --un-skew-y: 0;
  --un-translate-x: 0;
  --un-translate-y: 0;
  --un-translate-z: 0;
  --un-transform: translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));
}

.nzzlf0 {
  margin-right: 0.75rem;
  --un-rotate-x: 0;
  --un-rotate-y: 0;
  --un-rotate-z: 0;
  --un-rotate: 180deg;
  transform: var(--un-transform);
  border-radius: 9999px;
  --un-bg-opacity: 1;
  background-color: rgba(96, 165, 250, var(--un-bg-opacity));
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0.15rem;
  font-size: 20px;
  --un-text-opacity: 1;
  color: rgba(255, 255, 255, var(--un-text-opacity));
  outline: 2px solid transparent;
  outline-offset: 2px;
}


@media(min-width: 640px) {

  .v80bq8 {
    width: 340px !important;
    flex-direction: row;
    justify-content: space-between;
  }

  .puhef3 {
    bottom: -1.5rem;
    right: 7.55rem;
  }

  .bba3qs {
    top: 3.2rem;
    left: 3.2rem;
  }

  .hto0a2~.focus-border {
    bottom: 20px;
  }

  .hto0a2:focus~.focus-border {
    width: 55%;
    left: 2.8rem;
  }
}
</style>