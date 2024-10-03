<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import ContactCard from '../components/ContactCard.vue'

const router = useRouter()
const route = useRoute()
const loading = ref(false)
const contact = ref({})
const success = ref(false)

onMounted(() => {
  const id = route?.params?.id
  getContactById(+id)
})

const getContactById = async (id: number) => {
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
  <div v-if="loading">
    <h1 class="text-center text-4xl">Loading...</h1>
  </div>
  <div v-else>
    <div v-if="!success">
      <h1 class="text-center text-4xl">Oupss, something went wrong...</h1>
    </div>
    <section v-else>
      <h1 class="text-3xl font-bold text-center">Contact detail</h1>
      <div class="sm:w-full w-[40%] mx-auto py-4 flex justify-center align-items">
        <ContactCard :item="contact" />
      </div>
    </section>
  </div>
</template>
