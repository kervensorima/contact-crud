<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'

import ContactCard from '../components/ContactCard.vue'

const items = ref([])
const message = ref('')

onMounted(() => {
  getData()
})

const getData = async () => {
  // console.log(import.meta.env.API_BASE_URL)

  const res = await fetch(`http://localhost:8000/api/v1/contacts/`, {
    method: 'GET'
  })

  const data = await res?.json()

  items.value = data?.data || []
  console.log(data)
}

const handleDelele = async (id: number) => {
  if (confirm('Are you sure, you wanna delete this contact???')) {
    // make the resquest and if the request succeed delete the data into the list
    const res = await fetch(`http://localhost:8000/api/v1/contacts/${id}`, {
      method: 'DELETE'
    })

    const data = await res?.json()

    console.log(data)

    // if the request success delete the data into the list and pop up a message to the screen
    if (data?.success) {
      message.value = data?.message

      items.value = items.value.filter((item) => item?.id !== id)
    }
  }
}
</script>

<template>
  <div class="sm:w-[90%] w-full mx-auto">
    <div v-if="message" class="px-4 py-4">
      {{ message }}
    </div>

    <div class="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-2">
      <ContactCard
        v-for="item in items"
        :key="item?.id"
        :item="item"
        :handleDelele="handleDelele"
      />
    </div>
  </div>
</template>
