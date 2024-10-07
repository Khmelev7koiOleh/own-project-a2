<template>
  <section class="h-[100h] w-full">
    <div class="flex flex-col h-full">
      <!-- Top Bar with Menu Button -->
      <div class="flex items-center justify-between">
        <button type="button" @click="SideMenu = !SideMenu" class="flex items-center justify-end">
          <Close fillColor="#000000" :size="30" />
        </button>
      </div>

      <div class="border-b border-b-gray-500 py-2"></div>
      <!-- Main content area with Menu and Sign-up Buttons -->
      <div class="flex flex-col h-full gap-7 py-10 justify-center p-2">
        <!-- Menu Sec
         tion -->

        <RouterLink to="/news" class="text-md font-semibold flex hover:text-gray-500"
          ><p>News</p>
          <ChevronRight class="p-0.5" fillColor="#000000" :size="20"
        /></RouterLink>
        <RouterLink to="/find-a-store" class="text-md font-semibold flex hover:text-gray-500">
          Find a store <ChevronRight class="p-0.5" fillColor="#000000" :size="20" />
        </RouterLink>
        <RouterLink
          to="/promotions-and-offers"
          class="text-md font-semibold flex hover:text-gray-500"
          >Promotions & Offers <ChevronRight class="p-0.5" fillColor="#000000" :size="20"
        /></RouterLink>
        <RouterLink to="/order-online" class="text-md font-semibold flex hover:text-gray-500"
          >Order Online <ChevronRight class="p-0.5" fillColor="#000000" :size="20"
        /></RouterLink>
        <RouterLink
          to="/customers-reviews-and-rating"
          class="text-md font-semibold flex hover:text-gray-500"
          >Customer Reviews & Ratings <ChevronRight class="p-0.5" fillColor="#000000" :size="20"
        /></RouterLink>

        <div class="flex justify-start items-center">
          <UserMenu />
        </div>
        <!-- Sign-in and Sign-up Buttons Section -->
        <div class="flex absolute bottom-0 gap-2 py-4">
          <RouterLink
            to="/sign-in"
            type="button"
            class="border border-gray-300 px-2.5 py-1.5 text-sm rounded-md bg-white text-black font-normal flex items-center justify-center"
          >
            <Email fillColor="#000000" :size="20" />
            Sign-in
            <Google fillColor="#000000" :size="20" />
          </RouterLink>
          <RouterLink
            to="/sign-up"
            type="button"
            class="border border-black px-2.5 py-1.5 text-sm rounded-md bg-black text-white font-normal flex items-center justify-center"
          >
            <Email fillColor="#ffffff" :size="20" />
            Sign-up
            <Google fillColor="#ffffff" :size="20" />
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import MenuIcon from 'vue-material-design-icons/Menu.vue'
import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue'
import ChevronRight from 'vue-material-design-icons/ChevronRight.vue'
import Close from 'vue-material-design-icons/Close.vue'
import Google from 'vue-material-design-icons/Google.vue'
import Email from 'vue-material-design-icons/Email.vue'
import { useThisStore } from '../stores/pinia'
import { storeToRefs } from 'pinia'
import UserMenu from './userMenu.vue'
const useThis = useThisStore()
const { SideMenu } = storeToRefs(useThis)

let openMenu = ref(false)
</script>

<style lang="scss" scoped></style>
