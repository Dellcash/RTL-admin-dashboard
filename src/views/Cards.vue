<script setup>
const description = ref('لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.')
</script>

<template>
  <div m2 space-y-2>
    <CardImage :description="description" />
    <SimpleCard :description="description" />

    <CardCafe />
  </div>
</template>

<style lang="scss" scoped>
</style>