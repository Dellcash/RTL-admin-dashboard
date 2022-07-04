<script setup>
const props = defineProps({
  selectedContact: Object,
  tab: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['back'])

const back = () => {
  emit('back')
}
</script>

<template>
  <div class="snw941">
    <div class="p7v3cs">
      <img :src="selectedContact.avatar" class="i4vvb9">
      <div leading-5>
        <h4>{{ selectedContact.name }}</h4>
        <h5 class="e8ocds">{{ selectedContact.position }}</h5>
      </div>
    </div>
    <div cursor-pointer flex>
      <div i-carbon-pen text-5 />
      <div i-carbon-star class="bjmzhz" />
      <div i-carbon-arrow-left text-5 @click="back" lg:hidden />
    </div>
  </div>
  <div class="p7v3cs p2">
    <div w-full>
      <div v-for="details in Object.entries(selectedContact).slice(4, 9)" :key="details" class="p7v3cs jbax4q">
        <div class="x4l4ao">
          <div v-for="detail in details" :key="detail" :class="detail.icon" class="phmocj" />
        </div>
        <div class="t07h50">
          <h4 fw1 v-for="detail in details" :key="detail">{{ detail.detail }}</h4>
          <h6 class="j944et" v-for="detail in details" :key="detail">{{ detail.title }}</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.snw941 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  --un-border-opacity: 1;
  border-color: rgba(156, 163, 175, var(--un-border-opacity));
  padding: 0.75rem;
}

.p7v3cs {
  display: flex;
  align-items: center;
}

.i4vvb9 {
  margin-left: 0.75rem;
  width: 5rem;
  border-radius: 9999px;
  background-color: rgba(156, 163, 175, 0.5);
}

.e8ocds {
  font-weight: 1;
  --un-text-opacity: 1;
  color: rgba(156, 163, 175, var(--un-text-opacity));
}

.bjmzhz {
  margin-left: 0.75rem;
  margin-right: 0.75rem;
  font-size: 1.25rem;
  --un-text-opacity: 1;
  color: rgba(250, 204, 21, var(--un-text-opacity));
}

.jbax4q {
  padding-right: 0.5rem;
  transition-duration: 250ms;
}

.jbax4q:hover {
  background-color: rgba(156, 163, 175, 0.5);
}

.x4l4ao {
  margin-left: 0.5rem;
  border-radius: 9999px;
  background-color: rgba(156, 163, 175, 0.3);
}

.phmocj {
  margin: 0.5rem;
  font-size: 1.5rem;
  --un-text-opacity: 1;
  color: rgba(55, 65, 81, var(--un-text-opacity));
}

.phmocj {
  margin: 0.5rem;
  font-size: 1.5rem;
  --un-text-opacity: 1;
  color: rgba(55, 65, 81, var(--un-text-opacity));
}

.t07h50 {
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  --un-border-opacity: 1;
  border-color: rgba(156, 163, 175, var(--un-border-opacity));
  padding: 0.25rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  line-height: 1.25rem;
}

.j944et {
  font-weight: 1;
  --un-text-opacity: 1;
  color: rgba(31, 41, 55, var(--un-text-opacity));
}
</style>