<script setup>
const password = reactive({
  pass: '',
  passErr: ''
})

const router = useRouter()
const loading = ref(false)
const validation = () => {
  if (password.pass === '') {
    password.passErr = 'لطفا رمز خود را وارد کنید!'
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
  <div class="i2zeiw">
    <div class="v80bq8">
      <div class="f2z5cv">
        <img src="../assets/images/james.svg" class="c8rsfp">
        <h4 text-center>امید دلکش</h4>
      </div>
      <form @submit.prevent="validation" space-y-3>
        <div>
          <input v-model="password.pass" :type="type === false ? 'password' : 'text'" placeholder="پسورد"
            class="hto0a2">
          <div class="bba3qs" @click="type = !type">
            <div v-if="type" i-carbon-view-filled w5 />
            <div v-else i-carbon-view-off-filled w5 />
          </div>
          <span class="focus-border"></span>
          <Transition mode="out-in" enter-active-class="animate__animated animate__fadeIn"
            leave-active-class="animate__animated animate__fadeOut">
            <h6 v-if="password.passErr" class="qb9ah6">{{ password.passErr }}</h6>
          </Transition>
        </div>
        <div class="flex justify-center">
          <button class="nfx6rc">
            <span v-if="!loading">ورود</span>
            <span v-else>. . .</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.i2zeiw {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  --un-gradient-from: rgba(239, 68, 68, var(--un-from-opacity, 1));
  --un-gradient-stops: var(--un-gradient-from), var(--un-gradient-to, rgba(255, 255, 255, 0));
  --un-gradient-to: rgba(59, 130, 246, var(--un-to-opacity, 1));
  --un-gradient-shape: to top left;
  --un-gradient: var(--un-gradient-shape), var(--un-gradient-stops);
  background-image: linear-gradient(var(--un-gradient));
}


.v80bq8 {
  position: relative;
  width: 300px;
  border-radius: 0.25rem;
  --un-bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--un-bg-opacity));
  padding: 0.75rem;
  padding-top: 6.5rem;
}

.f2z5cv {
  position: absolute;
  top: -2.75rem;
  left: 50%;
  transform: translate(-50%, 0);
}

.c8rsfp {
  --un-shadow-inset: var(--un-empty,
      /*!*/
      /*!*/
    );
  --un-shadow: 0 0 #0000;
}

.c8rsfp {
  width: 5.75rem;
  border-radius: 9999px;
  --un-bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--un-bg-opacity));
  --un-shadow: var(--un-shadow-inset) 0 20px 25px -5px var(--un-shadow-color, rgba(0, 0, 0, 0.1)), var(--un-shadow-inset) 0 8px 10px -6px var(--un-shadow-color, rgba(0, 0, 0, 0.1));
  box-shadow: var(--un-ring-offset-shadow, 0 0 #0000), var(--un-ring-shadow, 0 0 #0000), var(--un-shadow);
}

.hto0a2 {
  position: relative;
  width: 100%;
  border: 0;
  padding: 7px;
  border-bottom: 1px solid #ccc;
  transition: 0.4s;
  outline: none;
}

.hto0a2:hover {
  border: 0;
  border-bottom: 1px solid #000
}

.hto0a2:focus~.focus-border {
  width: 100%;
  transition: 0.4s;
}

.hto0a2~.focus-border {
  position: absolute;
  bottom: 59px;
  left: 50%;
  width: 0;
  height: 2px;
  background-color: #000;
  transition: 0.4s;
}

.hto0a2:focus~.focus-border {
  width: 92%;
  transition: 0.4s;
  left: 12px;
}

.bba3qs {
  position: absolute;
  top: 7rem;
  left: 1.25rem;
  cursor: pointer;
}

.qb9ah6 {
  position: absolute;
  top: 5.5rem;
  font-weight: 1;
  right: 27%;
  border-radius: 0.25rem;
  --un-bg-opacity: 1;
  background-color: rgba(248, 113, 113, var(--un-bg-opacity));
  padding-top: 0.125rem;
  padding-bottom: 0.125rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  --un-text-opacity: 1;
  color: rgba(255, 255, 255, var(--un-text-opacity));
}

.hto0a2:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.nfx6rc {
  border-radius: 0.25rem;
  --un-bg-opacity: 1;
  background-color: rgba(31, 41, 55, var(--un-bg-opacity));
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 0.5rem;
  padding-top: 0.35rem;
  --un-text-opacity: 1;
  color: rgba(255, 255, 255, var(--un-text-opacity));
  transition-duration: 250ms;
}

.nfx6rc:hover {
  background-color: rgba(31, 41, 55, 0.8);
}

.nfx6rc:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}
</style>