<script setup>
import userImg from '../assets/images/james.svg'

const description = ref('لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.')

const info = reactive({
  userImg,
})
</script>

<template>
  <div m2>
    <div grid="~ gap-2 md:cols-2">
      <CardImage :description="description" md="row-span-2" />

      <CardCafe :userImg="info.userImg" />

      <div md:row-span-2>
        <SimpleCard :description="description" />
        <CardProfile2 :userImg="info.userImg" md="mt2" />
      </div>
      <div md:row-span-1>
        <CardProfile :userImg="info.userImg" md="mb2" />
        <CardProfileDark :description="description" />
      </div>

      <CardCompany :description="description" />
    </div>
  </div>
</template>