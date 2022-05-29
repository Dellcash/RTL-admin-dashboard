<script setup>
// import CardSocial from '../components/card/CardSocial.vue';
// import CardChart from '../components/card/CardChart.vue';
import TabSocial from '../components/tabs/TabSocial.vue';
import Tab from '../components/tabs/Tab.vue';
import { icons } from '../stores/data';
import { tabs } from '../stores/data';
</script>

<template>
  <main m2>
    <!-- <CardSocial />
    <CardChart /> -->

    <div mt-2>
      <TabSocial>
        <Tab title="مخاطبین" :icon="icons.tabs.contact">
          <div>
            <div v-for="contact in tabs.contact" :key="contact" class="flex items-center justify-between py-2 px-5 border-t
              first:border-t-none border-gray-300">
              <div flex items-center>
                <img :src="contact.img" alt="کاربر" w-10 rounded-full ml-3>
                <div>
                  <h5 fw1 tracking-tighter>{{ contact.name }}</h5>
                  <h6 text-gray-400 fw1 tracking-wider>{{ contact.job }}</h6>
                </div>
              </div>
              <img :src="icons.tabs.phone" w-6 rotate-180>
            </div>
          </div>
        </Tab>
        <Tab title="پیام‌ها" :icon="icons.tabs.message" notification="۶">پیام‌ها2</Tab>
        <Tab title="‌اعلان‌ها" :icon="icons.tabs.notification" notification="۴">اعلان3</Tab>
      </TabSocial>
    </div>
  </main>
</template>

<style scoped>
</style>