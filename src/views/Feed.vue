<template>
  <!-- <button
             @click="openFormFunc(true)" type="button"
             > -->
  <div class="p-20 bg-black w-[100vw] h-[100vh]">
    <div class="flex justify-between">
      <RouterLink to="/">
        <button>
          <ChevronLeft fillColor="#ffffff" :size="40" />
        </button>
      </RouterLink>
      <div class="text-2xl text-gray-400">User account:$ {name}</div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'

import { useRouter } from 'vue-router'
import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue'
</script>

<style lang="scss" scoped></style>
