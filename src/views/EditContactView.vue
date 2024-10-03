<script setup>
import ContactForm from '../components/ContactForm.vue'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const loading = ref(false)
const contact = ref({})
const success = ref(false)


onMounted(() => {
  getContactById(route?.params?.id)
})

const getContactById = async (id) => {
  loading.value = true
  const res = await fetch(`http://localhost:8000/api/v1/contacts/${id}`, {
    method: 'GET'
  })
  const data = await res?.json()
  contact.value = data?.data
  success.value = data?.success

  loading.value = false
}
</script>

<template>
  <template v-if="loading">
    <h1 class="text-center text-4xl">Loading...</h1>
  </template>

  <template v-else>
    <div v-if="!success">
      <h1 class="text-center text-4xl">Oupss, something went wrong...</h1>
    </div>
    <div>
      <h1>Edit contact vue</h1>
      <ContactForm :contact="contact" />
    </div>
  </template>
</template>
