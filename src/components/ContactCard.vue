<script setup lang="ts">
import { RouterLink, useRouter, useRoute } from 'vue-router'

const { item, handleDelele } = defineProps<{
  item: any
  handleDelele: (id: number) => void
}>()

const router = useRouter()

const route = useRoute()

const length = route?.path?.split('/').length
</script>

<template>
  <div class="rounded-[4px] mb-4 border-[1.2px] border-gray-200 px-4 py-4">
    <h1 class="font-bold text-center text-[20px]">
      {{ item?.first_name }}
      {{ item?.last_name }}
    </h1>
    <div class="text-start text-[13.5px] py-1">email : {{ item?.email }}</div>
    <div class="text-start text-[13.5px] py-1">phone : {{ item?.phone_number }}</div>
    <div class="text-start text-[13.5px] py-1">address : {{ item?.address }}</div>

    <div v-if="length !== 3" class="flex justify-center align-middle items-center gap-2 py-3">
      <RouterLink v-bind:to="'/edit-contact/' + item?.id">edit</RouterLink>
      <RouterLink v-bind:to="'/contact-detail/' + item?.id">detail</RouterLink>
      <span @click="handleDelele(item.id)" class="cursor-pointer">delete</span>
    </div>
    <div v-else class="flex justify-center align-middle items-center gap-2 py-3">
      <RouterLink to="/browse-contact"> return to the list</RouterLink>
    </div>
  </div>
</template>
