<script setup>
const form = reactive({
  username: '',
  usernameErr: '',
  pass: '',
  passErr: ''
})

const router = useRouter()
const loading = ref(false)
const validation = () => {
  if (form.username === '') {
    form.usernameErr = 'لطفا نام کاربری خود را وارد کنید!'
  } else {
    form.usernameErr = ''
  }
  if (form.pass === '') {
    form.passErr = 'لطفا رمز خود را وارد کنید!'
  } else {
    form.passErr = ''
  }

  if (form.username !== '' && form.pass !== '') {
    loading.value = true
    setTimeout(() => {
      router.push('/')
    }, 2000);
  }
}
</script>

<template>
  <div class="i2zeiw">
    <div class="v80bq8">
      <div class="f2z5cv">
        <img src="../assets/images/james.svg" class="c8rsfp">
        <h4 text-center>ورود</h4>
      </div>
      <form @submit.prevent="validation" space-y-3>
        <div>
          <input v-model="form.username" type="text" placeholder="نام کاربری" class="hto0a2">
          <h6 class="qb9ah6">{{ form.usernameErr }}</h6>
        </div>
        <div>
          <input v-model="form.pass" type="password" placeholder="پسورد" class="hto0a2">
          <h6 class="qb9ah6">{{ form.passErr }}</h6>
        </div>
        <button class="nfx6rc">
          <span v-if="!loading">ورود</span>
          <span v-else>. . .</span>
        </button>
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
  --un-gradient-from: rgba(34, 197, 94, var(--un-from-opacity, 1));
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
  padding-top: 7.5rem;
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
  width: 100%;
  border-radius: 0.25rem;
  border-style: none;
  background-color: rgba(209, 213, 219, 0.5);
  padding: 0.75rem;
  transition-duration: 250ms;
}

.hto0a2:hover {
  background-color: rgba(209, 213, 219, 0.8);
}

.hto0a2:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  background-color: rgba(156, 163, 175, 0.5);
}

.qb9ah6 {
  font-weight: 1;
  --un-text-opacity: 1;
  color: rgba(248, 113, 113, var(--un-text-opacity));
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

@media (min-width: 640px) {
  .v80bq8 {
    width: 400px;
    padding: 1.25rem;
    padding-top: 7.5rem;
  }
}
</style>