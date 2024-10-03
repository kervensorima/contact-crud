<script setup lang="ts">
import { RouterLink, useRouter } from 'vue-router'
import { ref } from 'vue'

const { contact } = defineProps<{
  contact?: {
    type: any
    required: false
  }
  edit: {
    type: boolean
    required: true
  }
}>()

const router = useRouter()

const loading = ref(false)
const success = ref(false)

const handleSubmit = async (event) => {
  loading.value = true
  const formData = new FormData(event?.target)
  const payload = JSON.stringify(Object.fromEntries(formData))

  if (contact && contact?.id) {
    // we going to update the contact otherwise save it
    const res = await fetch(`http://localhost:8000/api/v1/contacts/${contact?.id}`, {
      method: 'PUT',
      body: payload,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const data = await res?.json()
    loading.value = false
    success.value = data?.success
    if (data?.success) {
      router.push(`/browse-contact`)
    }
  } else {
    const res = await fetch(`http://localhost:8000/api/v1/contacts/`, {
      method: 'POST',
      body: payload,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const data = await res?.json()

    loading.value = false
    success.value = data?.success
    if (data?.success) {
      router.push(`/browse-contact`)
    }
  }
}
</script>

<template>
  <div class="w-full sm:w-[50%] mx-auto">
    <div class="my-4">
      <h1 class="text-3xl font-bold text-center">Contact form</h1>
    </div>
    <form @submit.prevent="handleSubmit">
      <div class="grid sm:grid-cols-2 grid-cols-1 gap-4">
        <div>
          <label for="first_name"> First name </label>
          <input
            required
            min="2"
            max="255"
            placeholder="Enter the first name"
            :value="contact?.first_name"
            class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400"
            type="text"
            name="first_name"
          />
        </div>
        <div>
          <label for="last_name"> Last name </label>
          <input
            required
            min="2"
            max="255"
            placeholder="Enter the last name"
            :value="contact?.last_name"
            class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400"
            type="text"
            name="last_name"
          />
        </div>

        <div>
          <label for="email"> Email </label>
          <input
            required
            min="2"
            max="255"
            placeholder="Enter the email"
            :value="contact?.email"
            class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400"
            type="email"
            name="email"
          />
        </div>

        <div>
          <label for="phone_number"> Phone number </label>
          <input
            required
            min="2"
            max="255"
            placeholder="Enter the phone number"
            :value="contact?.phone_number"
            class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400"
            type="tel"
            name="phone_number"
          />
        </div>
      </div>
      <div>
        <label for="address"> address </label>
        <input
          required
          min="2"
          max="255"
          placeholder="Enter the address"
          :value="contact?.address"
          class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400"
          type="text"
          name="address"
        />
      </div>

      <div class="flex justify-end align-middle">
        <button
          type="submit"
          class="text-center inline-block w-[140px] px-4 py-2 bg-[#0EA5E9] text-white rounded-[6px] my-4"
        >
          <span v-if="loading">Processing...</span>
          <span v-else> save changes </span>
        </button>
      </div>
    </form>
  </div>
</template>
