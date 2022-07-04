<script setup>
import { onMounted } from 'vue';
import { contactsList } from '../stores/data';

const selectedContact = ref({})
const tab = ref(false)
const icons = ref(['i-carbon-phone', 'i-carbon-phone-application', 'i-carbon-ibm-cloud-internet-services', 'i-carbon-accessibility-alt'])

const showContact = (contact) => {
  selectedContact.value = contact
  tab.value = true
}

onMounted(() => {
  if (window.innerWidth > 1023) {
    const contact = contactsList.value.find(contact => contact.id === 1)
    selectedContact.value = contact
  }
})
</script>

<template>
  <main lg="irt52j">
    <section v-if="!tab" class="lkpu0b">
      <div relative>
        <input type="text" class="fwut68">
        <div i-carbon-search class="cy56ff" />
      </div>
      <h3 class="yme02r">{{ contactsList.length }} مخاطب</h3>

      <div>
        <div lg:hidden>
          <ContactList v-for="contact in contactsList" :key="contact" :contact="contact"
            @click="showContact(contact)" />
        </div>

        <div hidden lg:block>
          <ContactList v-for="contact in contactsList" :key="contact" :contact="contact"
            @click="selectedContact = contact" />
        </div>
      </div>


      <div class="k9z2jy">
        <div class="h9r3i3 border-b">
          <div i-carbon-user-filled text5 />
          <h5 fw1>همه</h5>
        </div>
        <div class="h9r3i3">
          <div i-carbon-star-filled text5 />
          <h5 fw1>مورده علاقه</h5>
        </div>
      </div>
    </section>

    <div v-if="selectedContact, tab" class="lg:hidden">
      <ContactDetail :selectedContact="selectedContact" @back="tab = false" />
    </div>

    <div v-if="selectedContact" class="we9z53">
      <ContactDetail :selectedContact="selectedContact" @back="tab = false" />
    </div>
  </main>
</template>

<style scoped>
.lkpu0b {
  margin: 0.5rem;
}

.fwut68 {
  width: 100%;
  border-width: 1px;
  border-style: solid;
  --un-border-opacity: 1;
  border-color: rgba(156, 163, 175, var(--un-border-opacity));
  border-radius: 9999px;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  transition-duration: 250ms;
}

.fwut68:focus {
  --un-border-opacity: 1;
  border-color: rgba(17, 24, 39, var(--un-border-opacity));
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.fwut68:hover {
  --un-border-opacity: 1;
  border-color: rgba(31, 41, 55, var(--un-border-opacity));
}

.cy56ff {
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  font-size: 1.5rem;
  --un-text-opacity: 1;
  color: rgba(156, 163, 175, var(--un-text-opacity));
}

.yme02r {
  margin-top: 1.25rem;
  text-align: center;
  font-weight: 1;
  --un-text-opacity: 1;
  color: rgba(156, 163, 175, var(--un-text-opacity));
}

.k9z2jy {
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
}

.h9r3i3 {
  width: 100%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  background-color: rgba(156, 163, 175, 0.3);
  padding: 0.5rem;
  transition-duration: 250ms;
}

.h9r3i3:hover {
  background-color: rgba(156, 163, 175, 0.7);
}

.we9z53 {
  grid-column: span 3/span 3;
  display: none;
  width: 100%;
  height: 31.3rem;
  border-radius: 0.25rem;
  --un-bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--un-bg-opacity));
}

@media (min-width: 1024px) {
  [lg~="irt52j"] {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    margin: 0.5rem;
    align-items: flex-start;
    grid-gap: 0.5rem;
    gap: 0.5rem;
  }

  .lkpu0b {
    grid-column: span 2/span 2;
    margin: 0rem;
    width: 100%;
    border-radius: 0.25rem;
    --un-bg-opacity: 1;
    background-color: rgba(255, 255, 255, var(--un-bg-opacity));
    padding: 0.5rem;
  }

  .k9z2jy {
    margin-top: 1.30rem;
  }

  .we9z53 {
    display: block;
  }
}
</style>