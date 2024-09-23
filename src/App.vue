<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
import MenuIcon from 'vue-material-design-icons/Menu.vue'
import DasComp from './components/DasComp.vue'
import DieComp from './components/DasComp.vue'

const SideMenu = ref(false)
</script>

<template>
  <div class="relative">
    <header v-if="!SideMenu" class="fixed w-[100vw] min-h-[80px] z-10 bg-opacity-0">
      <div class="flex justify-between items-center p-4">
        <div class="flex justify-between items-center gap-8">
          <button type="button" @click="SideMenu = !SideMenu">
            <MenuIcon fillColor="#00000" :size="30" />
          </button>

          <div class="flex items-center">
            <img width="60px" src="/public/img/tuxpi.com.1726604318-removebg-preview.png" alt="" />
            <p class="text-3xl text-gray-300 font-semibold">MnT</p>
          </div>
        </div>
        <div class="flex justify-between items-center gap-4">
          <div
            class="border border-black px-2.5 py-1.5 text-sm rounded-full bg-white text-black font-normal"
          >
            Log-in2
          </div>
          <div
            class="border border-black px-2.5 py-1.5 text-sm r rounded-full bg-black text-white font-normal"
          >
            Sign-up
          </div>
        </div>
      </div>
    </header>

    <footer></footer>

    <RouterView />
  </div>
</template>

<style scoped></style>
