<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="flex justify-center align-middle items-center gap-1 px-4 bg-[#161618] mb-4">
    <!-- <RouterLink to="/">home</RouterLink> -->
    <RouterLink class="px-3 py-2.5  font-bold uppercase text-[14px] text-white " to="/browse-contact">Contact list</RouterLink>
    <RouterLink class="px-3 py-2.5  font-bold uppercase text-[14px] text-white " to="/add-contact">Add contact</RouterLink>
  </nav>
</template>
