<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
import MenuIcon from 'vue-material-design-icons/Menu.vue'

const SideMenu = ref(false)
</script>

<template>
  <div class="relative">
    <header v-if="!SideMenu" class="fixed w-full min-h-[80px] z-10 bg-opacity-0">
      <div class="flex justify-between items-center p-4">
        <div class="flex justify-between items-center gap-8">
          <button type="button" @click="SideMenu = !SideMenu">
            <MenuIcon fillColor="#FFFFFF" :size="30" />
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
            Log-in
          </div>
          <div
            class="border border-black px-2.5 py-1.5 text-sm r rounded-full bg-black text-white font-normal"
          >
            Sign-up
          </div>
        </div>
      </div>
    </header>
    <main class="w-screen h-screen z-0 relative">
      <div class="absolute top-[55%] left-[15%] flex items-center justify-between gap-8">
        <input
          class="min-w-[100%] flex items-center border border-black shadow-2xl px-4 py-3 rounded-lg placeholder:text-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search delivery address..."
          type="text"
        />
        <button type="button" class="bg-black px-6 py-2 text-white rounded-2xl">Find</button>
      </div>

      <img
        class="w-full h-full object-cover"
        src="/img/A large (((burg 95314bcf-8973-4a5b-9150-d5d72f7ce321.png"
        alt="A large burger"
      />
      <div
        v-if="SideMenu"
        id="SideNav"
        class="fixed top-0 left-0 w-[180px] bg-white h-full z-50 py-8 px-4"
      >
        <div class="flex items-center justify-between">
          <button type="button" @click="SideMenu = !SideMenu" class="flex items-center justify-end">
            <MenuIcon fillColor="#000000" :size="30" class="flex items-center justify-end" />
          </button>
        </div>
        <div class="pt-10 pb-8 flex items-center justify-center">
          <img
            width="60px"
            @click="SideMenu = !SideMenu"
            class="flex items-center justify-center"
            src="/public/img/tuxpi.com.1726604318-removebg-preview.png"
            alt="A large burger"
          />
        </div>
        <ul class="flex flex-col p-2">
          <li class="text-black text-lg font-bold">Menu</li>
          <img
            width="120px"
            class="relative bottom-2 right-4"
            src="/public/img/rotated_french_fry_180__1_-removebg-preview (1).png"
            alt=""
          />
          <li class="text-black text-sm font-light">Today's best</li>
          <img
            width="120px"
            class="relative bottom-2 right-4"
            src="/public/img/rotated_french_fry_180__1_-removebg-preview (1).png"
            alt=""
          />
          <li class="text-black text-sm font-light">Food-Set</li>
          <img
            width="120px"
            class="relative bottom-2 right-4"
            src="/public/img/rotated_french_fry_180__1_-removebg-preview (1).png"
            alt=""
          />
          <li class="text-black text-sm font-light">Popular</li>
          <img
            width="120px"
            class="relative bottom-2 right-4"
            src="/public/img/rotated_french_fry_180__1_-removebg-preview (1).png"
            alt=""
          />
          <li class="text-red-700 text-sm font-bold underline underline-offset-4">Special offer</li>
          <img
            width="120px"
            class="relative bottom-2 right-4"
            src="/public/img/rotated_french_fry_180__1_-removebg-preview (1).png"
            alt=""
          />
        </ul>
      </div>

      <div class="h-[300px] bg-green-400"></div>
    </main>

    <footer></footer>

    <RouterView />
  </div>
</template>

<style scoped></style>
