<template>
  <div class="fixed w-[100vw] min-h-[80px] z-10 bg-opacity-0">
    <div class="flex justify-between items-center p-1">
      <div class="flex justify-between items-center gap-8">
        <button type="button" @click="SideMenu = !SideMenu">
          <MenuIcon fillColor="#ffffff" :size="30" />
        </button>

        <div class="flex items-center">
          <img width="50px" src="/public/img/tuxpi.com.1726604318-removebg-preview.png" alt="" />
          <p class="text-2xl text-gray-300 font-semibold">MnT</p>
        </div>
      </div>
      <div class="flex justify-between items-center gap-4">
        <RouterLink
          to="/sign-in"
          type="button"
          class="border border-black px-2.5 py-1.5 text-sm rounded-full bg-white text-black font-normal flex gap-1"
        >
          <Email fillColor="#00000" :size="20" />
          <p>Sign-in</p>
        </RouterLink>
        <RouterLink
          to="/sign-up"
          type="button"
          class="border border-black px-2.5 py-1.5 text-sm rounded-full bg-black text-white font-normal flex gap-1"
        >
          <Email fillColor="#ffffff" :size="20" />
          <p>Sign-up</p>
        </RouterLink>
      </div>
    </div>
  </div>

  <div
    v-if="SideMenu"
    id="SideNav"
    class="fixed top-0 left-0 md:w-[260px] bg-white h-full z-40 py-8 px-4 border-r-2 rounded-sm border-gray-200 shadow-lg transition-transform duration-300"
  >
    <SideNavMenu />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useRouter } from 'vue-router'

import SideNavMenu from './SideNavMenu.vue'
import MenuIcon from 'vue-material-design-icons/Menu.vue'
import { ref } from 'vue'
import Google from 'vue-material-design-icons/Google.vue'
import Email from 'vue-material-design-icons/Email.vue'
import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue'
import ChevronRight from 'vue-material-design-icons/ChevronRight.vue'

import { useThisStore } from '../stores/pinia'
import { storeToRefs } from 'pinia'
const useThis = useThisStore()
const { SideMenu } = storeToRefs(useThis)

const route = useRouter()
</script>

<style lang="scss" scoped></style>
