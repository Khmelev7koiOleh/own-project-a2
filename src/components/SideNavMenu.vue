<template>
  <section class="h-[100vh] w-full">
    <div class="flex flex-col h-full overflow-auto">
      <!-- Top Bar with Menu Button -->
      <div class="flex items-center justify-between">
        <button type="button" @click="SideMenu = !SideMenu" class="flex items-center justify-end">
          <Close fillColor="#000000" :size="30" />
        </button>
      </div>

      <!-- Main content area with Menu and Sign-up Buttons -->
      <div class="flex flex-col justify-around h-full">
        <!-- Menu Section -->
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

        <!-- Sign-in and Sign-up Buttons Section -->
        <div class="flex flex-col gap-4 p-4">
          <RouterLink
            to="/sign-in"
            type="button"
            class="border border-gray-300 px-2.5 py-1.5 text-sm rounded-md bg-white text-black font-normal flex items-center justify-center"
          >
            Sign-in
          </RouterLink>
          <RouterLink
            to="/sign-up"
            type="button"
            class="border border-black px-2.5 py-1.5 text-sm rounded-md bg-black text-white font-normal flex items-center justify-center"
          >
            Sign-up
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import MenuIcon from 'vue-material-design-icons/Menu.vue'
import Close from 'vue-material-design-icons/Close.vue'
import { useThisStore } from '../stores/pinia'
import { storeToRefs } from 'pinia'
const useThis = useThisStore()
const { SideMenu } = storeToRefs(useThis)
</script>

<style lang="scss" scoped></style>
