<script setup>
import { usersInfo } from '../stores/data';

const tabIcon = reactive({
  contact: 'i-carbon-phone-ip',
  message: 'i-carbon-email-new',
  notification: 'i-carbon-notification-new',
  notificationTab: [
    {
      title: 'آواتار اعلان',
      icon: 'i-carbon-notification',
    },
    {
      title: 'آواتار اعلان',
      icon: 'i-carbon-notification-filled',
    },
    {
      title: 'آواتار اعلان',
      icon: 'i-carbon-notification-new',
    },
    {
      title: 'آواتار اعلان',
      icon: 'i-carbon-notification-off',
    },
  ]
})

const randomInfo = computed(() => {
  return usersInfo.users.sort(() => Math.random() - 0.5);
})
</script>

<template>
  <main m2>
    <CrmSocial />
    <CrmChart />

    <CrmTable mt2 />

    <div mt2 lg="gzoddt">
      <TabSocial>
        <Tab title="مخاطبین" :icon="tabIcon.contact" pb2>
          <Contact v-for="user in usersInfo.users.slice(0, 5)" :key="user" :user="user" />
        </Tab>
        <Tab title="پیام‌ها" :icon="tabIcon.message" notification="۶" pb-2>
          <Message v-for="user in randomInfo.slice(0, 5)" :key="user" :user="user" />
        </Tab>
        <Tab title="‌اعلان‌ها" :icon="tabIcon.notification" notification="۴" py-2>
          <Avatar v-for="avatar in tabIcon.notificationTab" :key="avatar" :avatar="avatar" />
        </Tab>
      </TabSocial>

      <CrmCarousel />
    </div>
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