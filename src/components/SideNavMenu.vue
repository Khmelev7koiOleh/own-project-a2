<template>
  <div>
    <div class="flex items-center justify-between">
      <button type="button" @click="SideMenu = !SideMenu" class="flex items-center justify-end">
        <MenuIcon fillColor="#000000" :size="30" />
      </button>
    </div>
    <div class="py-10 flex items-center justify-center">
      <img
        width="60"
        @click="SideMenu = !SideMenu"
        class="cursor-pointer"
        src="/public/img/tuxpi.com.1726604318-removebg-preview.png"
        alt="A large burger"
      />
    </div>

    <div class="border-b border-b-gray-500"></div>
    <ul class="flex flex-col p-2">
      <li class="text-black text-lg font-bold">Menu</li>
      <img
        width="120"
        class="relative bottom-2 right-4"
        src="/img/rotated_french_fry_180__1_-removebg-preview (1).png"
        alt=""
      />
      <li class="text-black text-sm font-light">Today's best</li>
      <img
        width="120"
        class="relative bottom-2 right-4"
        src="/img/rotated_french_fry_180__1_-removebg-preview (1).png"
        alt=""
      />
      <li class="text-black text-sm font-light">Food-Set</li>
      <img
        width="120"
        class="relative bottom-2 right-4"
        src="/img/rotated_french_fry_180__1_-removebg-preview (1).png"
        alt=""
      />
      <li class="text-black text-sm font-light">Popular</li>
      <img
        width="120"
        class="relative bottom-2 right-4"
        src="/img/rotated_french_fry_180__1_-removebg-preview (1).png"
        alt=""
      />
      <li class="text-red-700 text-sm font-bold underline underline-offset-4">Special offer</li>
      <img
        width="120"
        class="relative bottom-2 right-4"
        src="/img/rotated_french_fry_180__1_-removebg-preview (1).png"
        alt=""
      />
    </ul>
  </div>
</template>

<script setup>
import MenuIcon from 'vue-material-design-icons/Menu.vue'

import { useThisStore } from '../stores/pinia'
import { storeToRefs } from 'pinia'
const useThis = useThisStore()
const { SideMenu } = storeToRefs(useThis)
</script>

<style lang="scss" scoped></style>
