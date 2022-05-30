<script setup>
import CardSocial from '../components/card/CardSocial.vue';
import CardChart from '../components/card/CardChart.vue';
import TabSocial from '../components/tabs/TabSocial.vue';
import Tab from '../components/tabs/Tab.vue';
import Contact from '../components/tabs/each/Contact.vue';
import Message from '../components/tabs/each/Message.vue';
import Avatar from '../components/tabs/each/Avatar.vue';
import { icons, usersInfo } from '../stores/data';
import { computed } from '@vue/reactivity';
import CardWithImage from '../components/card/CardWithImage.vue';

const randomInfo = computed(() => {
  return usersInfo.users.sort(() => Math.random() - 0.5);
})
</script>
<template>

  <main m2>
    <CardSocial />
    <CardChart />


    <div mt-2>
      <TabSocial>
        <Tab title="مخاطبین" :icon="icons.tabs.contact" pb2>
          <Contact v-for="user in usersInfo.users" :key="user" :user="user" />
        </Tab>
        <Tab title="پیام‌ها" :icon="icons.tabs.message" notification="۶" pb-2>
          <Message v-for="user in randomInfo" :key="user" :user="user" />
        </Tab>
        <Tab title="‌اعلان‌ها" :icon="icons.tabs.notification" notification="۴" py-2>
          <Avatar v-for="avatar in icons.tabs.notificationTab" :key="avatar" :avatar="avatar" />
        </Tab>
      </TabSocial>

      <CardWithImage />
    </div>
  </main>
</template>

<style scoped>
</style>