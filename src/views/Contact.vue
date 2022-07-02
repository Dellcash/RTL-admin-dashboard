<script setup>
import { contactsList } from '../stores/data';

const selectedContact = ref({})
const tab = ref(false)
const details = ref([
  {
    // icon: '',
    // iconColor: '',
    lable: '',
    field: '',
  }
])
</script>

<template>
  <main>
    <section m2 v-if="!tab">
      <div relative>
        <input type="text"
          class="w-full rounded-full border border-gray duration-250 py-2 px-4 hover:border-gray-800 focus:outline-none focus:border-gray-900">
        <div i-carbon-search class="absolute top-2 left-2 text-6 text-gray" />
      </div>
      <h3 class="text-center fw1 text-gray mt5">{{ contactsList.length }} مخاطب</h3>

      <div>
        <div>
          <div v-for="contact in contactsList" :key="contact" @click="selectedContact = contact, tab = !tab"
            class="flex items-center p2 cursor-pointer duration-250 hover:bg-gray/30">
            <img :src="contact.avatar" class="w-12 rounded-full bg-gray/50 ml3">
            <div leading-4>
              <h5>{{ contact.name }}</h5>
              <h6 class="fw1 text-gray">{{ contact.position }}</h6>
            </div>
          </div>
        </div>
      </div>


      <div class="flex items-center justify-evenly text-center mt2">
        <div
          class="w-full flex justify-center flex-col items-center p2 bg-gray/30 cursor-pointer duration-250 hover:bg-gray/70">
          <div i-carbon-user-filled class="text-5" />
          <h5 fw1>همه</h5>
        </div>
        <div
          class="w-full flex justify-center flex-col items-center p2 bg-gray/30 cursor-pointer duration-250 hover:bg-gray/70">
          <div i-carbon-star-filled class="text-5" />
          <h5 fw1>مورده علاقه</h5>
        </div>
      </div>
    </section>

    <div v-if="selectedContact, tab" class="">
      <div class="flex items-center justify-between p3 border-b border-gray">
        <div flex items-center>
          <img :src="selectedContact.avatar" class="w-20 rounded-full bg-gray/50 ml3">
          <div leading-5>
            <h4>{{ selectedContact.name }}</h4>
            <h5 class="fw1 text-gray">{{ selectedContact.position }}</h5>
          </div>
        </div>
        <div cursor-pointer>
          <div i-carbon-arrow-left text-5 @click="tab = false" />
        </div>
      </div>
      <div class="flex items-center" p2>
        <div w-full>
          <div leading-5 p2 border-b-1 border-gray>
            <h4 class="fw1">{{ selectedContact.email }}</h4>
            <h6 fw1 text-gray-800>پست الکترونیک</h6>
          </div>
          <div leading-5 p2 border-b-1 border-gray>
            <h4 class="fw1">{{ selectedContact.phone }}</h4>
            <h6 fw1 text-gray-800>شماره تماس</h6>
          </div>
          <div leading-5 p2 border-b-1 border-gray>
            <h4 class="fw1">{{ selectedContact.website }}</h4>
            <h6 fw1 text-gray-800>وب‌سایت</h6>
          </div>
          <div leading-5 p2 border-b-1 border-gray>
            <h4 class="fw1">{{ selectedContact.address }}</h4>
            <h6 fw1 text-gray-800>‌آدرس</h6>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
</style>