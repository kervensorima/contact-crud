<script setup lang="ts">
import NavHeader from './components/NavHeader.vue'

import { RouterView } from 'vue-router'


</script>

<template>
  <NavHeader />
  <main class="px-4">

    
    <RouterView />
  </main>
</template>
