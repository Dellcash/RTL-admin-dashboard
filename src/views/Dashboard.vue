<script setup>
import CardSocial from '../components/card/CardSocial.vue';
import CardChart from '../components/card/CardChart.vue';
import TabSocial from '../components/tabs/TabSocial.vue';
import Tab from '../components/tabs/Tab.vue';
import Contact from '../components/tabs/each/Contact.vue';
import Message from '../components/tabs/each/Message.vue';
import Avatar from '../components/tabs/each/Avatar.vue';
import CardWithImage from '../components/card/CardWithImage.vue';
import Todo from '../components/list/Todo.vue';
import CardTimeLine from '../components/card/CardTimeLine.vue';
import TableVisits from '../components/tables/TableVisits.vue';
import { icons, usersInfo } from '../stores/data';
import { computed } from '@vue/reactivity';

const randomInfo = computed(() => {
  return usersInfo.users.sort(() => Math.random() - 0.5);
})
</script>
<template>

  <main m2>
    <CardSocial />
    <CardChart />


    <div mt-2 lg="gzoddt">
      <TabSocial>
        <Tab title="مخاطبین" :icon="icons.tabs.contact" pb2>
          <Contact v-for="user in usersInfo.users.slice(0, 5)" :key="user" :user="user" />
        </Tab>
        <Tab title="پیام‌ها" :icon="icons.tabs.message" notification="۶" pb-2>
          <Message v-for="user in randomInfo.slice(0, 5)" :key="user" :user="user" />
        </Tab>
        <Tab title="‌اعلان‌ها" :icon="icons.tabs.notification" notification="۴" py-2>
          <Avatar v-for="avatar in icons.tabs.notificationTab" :key="avatar" :avatar="avatar" />
        </Tab>
      </TabSocial>

      <CardWithImage />
    </div>

    <div my-2 lg="gzoddt">
      <Todo />

      <CardTimeLine />
    </div>

    <TableVisits />
  </main>
</template>

<style scoped>
@media (min-width: 1024px) {
  [lg~="gzoddt"] {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    align-items: center;
    grid-gap: 0.5rem;
    gap: 0.5rem;
  }
}
</style>