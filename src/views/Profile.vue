<script setup>
const inputs = reactive({
  name: [
    {
      type: 'text',
      placeholder: 'نام کاربری',
    },
    {
      type: 'email',
      placeholder: 'پست الکترونیک'
    },
    {
      type: 'text',
      placeholder: 'نام'
    },
    {
      type: 'text',
      placeholder: 'نام خانوادگی'
    },
  ],
  location: [
    {
      type: 'text',
      placeholder: 'شهر'
    },
    {
      type: 'text',
      placeholder: 'ادرس پستی'
    },
  ]
})

const password = ref(['رمز عبور فعلی', 'رمز عبور جدید', 'تاٖیید رمز عبور جدید'])
</script>

<template>
  <div m2>
    <div lg="evfx87">
      <div class="j5h7c7">
        <div mb5>
          <div class="nx2wc5">
            <h4>ویرایش پروفایل</h4>
            <h5>تکمیل پروفایل</h5>
          </div>

          <div class="p7v3cs">
            <img src="../assets/images/james.svg" class="u0x3o7">
            <button class="ofdk71">عکس</button>
          </div>
        </div>

        <form @submit.prevent="" space-y-5>
          <!-- username & email -->
          <div class="mzjduc">
            <div v-for="name in inputs.name.slice(0, 2)" :key="name" class="input">
              <input class="effect" :type="name.type" :placeholder="name.placeholder">
              <span class="focus_border"></span>
            </div>
          </div>

          <!-- fistname & lastname -->
          <div class="mzjduc">
            <div v-for="name in inputs.name.slice(2, 4)" :key="name" class="input">
              <input class="effect" :type="name.type" :placeholder="name.placeholder">
              <span class="focus_border"></span>
            </div>
          </div>

          <div class="input">
            <input class="effect" type="text" placeholder="آدرس">
            <span class="focus_border"></span>
          </div>

          <!-- city & postal code -->
          <div class="mzjduc">
            <div v-for="location in inputs.location" :key="location" class="input">
              <input class="effect" :type="location.type" :placeholder="location.placeholder">
              <span class="focus_border"></span>
            </div>
          </div>

          <div class="input">
            <textarea class="effect" placeholder="درباره" rows="5"></textarea>
            <span class="focus_border !bottom-2"></span>
          </div>

          <button class="nuyimb">بروزرسانی اطلاعات کاربر</button>
        </form>
      </div>

      <!-- user card -->
      <div class="u3mlt3">
        <img src="../assets/images/james.svg" class="r5fzzw">
        <h6 fw1>توسط <strong><i>دلکش</i></strong></h6>
        <h4>امید دلکش</h4>

        <p class="ejsyu0">اسم من امید دلکش (همچنین به عنوان Dellcash@ هم شناخته ‌می‌شود) است.
          از سال ۲۰۲۰ به سمت برنامه‌نویسی کشیده شدم و سپس تصمیم گرفتم به یک برنامه‌نویس ماهر و آگاه تبدیل شوم.
        </p>
      </div>
    </div>

    <div class="z7nakf">
      <h4 class="zu6jy5">تغییر رمز عبور</h4>

      <form @sumbit.prevent="" class="h40ysx">
        <div v-for="pass in password" :key="pass" lg="gw6dv1">
          <h5 class="o6e5kz">{{ pass }}</h5>
          <input type="password" :placeholder="pass" class="quswk1">
        </div>

        <button class="nuyimb !mt7">تغییر رمز عبور</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.j5h7c7 {
  border-radius: 0.25rem;
  --un-bg-opacity: 1;
  background-color: rgba(22, 43, 77, var(--un-bg-opacity));
  padding: 1.25rem;
  padding-top: 0.75rem;
}

.nx2wc5 {
  margin-bottom: 1.75rem;
  letter-spacing: 0.025em;
  --un-text-opacity: 1;
  color: rgba(255, 255, 255, var(--un-text-opacity));
}

.p7v3cs {
  display: flex;
  align-items: center;
}

.u0x3o7 {
  margin-left: 1rem;
  width: 6.25rem;
  border-radius: 9999px;
}

.ofdk71 {
  border-radius: 9999px;
  --un-bg-opacity: 1;
  background-color: rgba(49, 204, 236, var(--un-bg-opacity));
  padding-left: 1.75rem;
  padding-right: 1.75rem;
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
  font-weight: 600;
  --un-text-opacity: 1;
  color: rgba(255, 255, 255, var(--un-text-opacity));
}

.mzjduc>:not([hidden])~:not([hidden]) {
  --un-space-y-reverse: 0;
  margin-top: calc(1.25rem * calc(1 - var(--un-space-y-reverse)));
  margin-bottom: calc(1.25rem * var(--un-space-y-reverse));
}

.nuyimb {
  border-radius: 0.25rem;
  --un-bg-opacity: 1;
  background-color: rgba(49, 204, 236, var(--un-bg-opacity));
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  font-size: 0.75rem;
  line-height: 1rem;
  --un-text-opacity: 1;
  color: rgba(255, 255, 255, var(--un-text-opacity));
}

.u3mlt3 {
  margin-top: 0.5rem;
  border-radius: 0.25rem;
  --un-bg-opacity: 1;
  background-color: rgba(22, 43, 77, var(--un-bg-opacity));
  padding: 1rem;
  text-align: center;
  --un-text-opacity: 1;
  color: rgba(255, 255, 255, var(--un-text-opacity));
}

.u3mlt3>:not([hidden])~:not([hidden]) {
  --un-space-y-reverse: 0;
  margin-top: calc(0.75rem * calc(1 - var(--un-space-y-reverse)));
  margin-bottom: calc(0.75rem * var(--un-space-y-reverse));
}

.r5fzzw {
  width: 6.25rem;
  border-radius: 9999px;
  --un-bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--un-bg-opacity));
}

.ejsyu0 {
  padding-top: 0.75rem;
  font-size: 14px;
  --un-text-opacity: 1;
  color: rgba(255, 255, 255, var(--un-text-opacity));
}

.z7nakf {
  margin-top: 0.5rem;
  border-radius: 0.25rem;
  --un-bg-opacity: 1;
  background-color: rgba(22, 43, 77, var(--un-bg-opacity));
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}

.zu6jy5 {
  letter-spacing: 0.025em;
  --un-text-opacity: 1;
  color: rgba(255, 255, 255, var(--un-text-opacity));
}

.h40ysx {
  margin-top: 1.75rem;
}

.h40ysx>:not([hidden])~:not([hidden]) {
  --un-space-y-reverse: 0;
  margin-top: calc(0.75rem * calc(1 - var(--un-space-y-reverse)));
  margin-bottom: calc(0.75rem * var(--un-space-y-reverse));
}

.o6e5kz {
  margin-bottom: 1rem;
  font-weight: 1;
  --un-text-opacity: 1;
  color: rgba(255, 255, 255, var(--un-text-opacity));
}

.quswk1 {
  border-width: 1px;
  border-style: solid;
  --un-border-opacity: 1;
  border-color: rgba(107, 114, 128, var(--un-border-opacity));
  border-radius: 0.25rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  transition-duration: 250ms;
}

.quswk1:focus {
  border-width: 2px;
  border-style: solid;
  --un-border-opacity: 1;
  border-color: rgba(255, 255, 255, var(--un-border-opacity));
  padding-top: 7px;
  padding-bottom: 7px;
  padding-left: 0.7rem;
  padding-right: 0.7rem;
  --un-shadow-opacity: 1;
  --un-shadow-color: rgba(255, 255, 255, var(--un-shadow-opacity));
}

.quswk1:hover {
  --un-border-opacity: 1;
  border-color: rgba(209, 213, 219, var(--un-border-opacity));
}

.quswk1:focus {
  border-width: 2px;
  border-style: solid;
  --un-border-opacity: 1;
  border-color: rgba(255, 255, 255, var(--un-border-opacity));
  padding-top: 7px;
  padding-bottom: 7px;
  padding-left: 0.7rem;
  padding-right: 0.7rem;
  --un-shadow-opacity: 1;
  --un-shadow-color: rgba(255, 255, 255, var(--un-shadow-opacity));
}

:focus {
  outline: none;
}

.input {
  width: 100%;
  position: relative;
  z-index: 5;
}

input {
  color: #f2f2f2;
  width: 100%;
  box-sizing: border-box;
  letter-spacing: 1px;
  background: none;
}

textarea {
  color: #f2f2f2;
  width: 100%;
  box-sizing: border-box;
  letter-spacing: 1px;
  background: none;
}

.effect {
  border: 0;
  padding: 7px 0;
  border-bottom: 1px solid #aaa;
}

.effect~.focus_border {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background-color: #fff;
  transition: 0.4s;
}

.effect:focus~.focus_border {
  width: 100%;
  transition: 0.4s;
  left: 0;
}

@media (min-width: 1024px) {
  [lg~="evfx87"] {
    display: flex;
    align-items: flex-start;
  }

  .j5h7c7 {
    margin-left: 0.5rem;
    width: 65%;
  }

  .mzjduc {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    align-items: center;
    grid-gap: 1.25rem;
    gap: 1.25rem;
  }

  .mzjduc>:not([hidden])~:not([hidden]) {
    --un-space-y-reverse: 0;
    margin-top: calc(0rem * calc(1 - var(--un-space-y-reverse)));
    margin-bottom: calc(0rem * var(--un-space-y-reverse));
  }

  .u3mlt3 {
    margin-top: 0rem;
    width: 35%;
  }

  .z7nakf {
    width: 64.5%;
  }

  [lg~="gw6dv1"] {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .o6e5kz {
    margin-bottom: 0rem;
    margin-right: 1rem;
  }

  .quswk1 {
    width: 70% !important;
  }
}
</style>