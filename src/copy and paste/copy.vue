<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
import MenuIcon from 'vue-material-design-icons/Menu.vue'

const SideMenu = ref(false)
</script>

<template>
  <div class="relative">
    <header class="fixed w-full min-h-[80px] z-10 bg-opacity-0">
      <div v-if="!SideMenu" class="flex justify-between items-center p-4">
        <div class="flex justify-between items-center">
          <button type="button" @click="SideMenu = !SideMenu">
            <MenuIcon fillColor="#FFFFFF" :size="30" />
          </button>

          <div class="flex items-center">
            <img
              class="relative"
              width="120px"
              src="/public/img/98a0d2b3-376e-4cb8-85dd-6c6a86921cd1-removebg-preview.png"
              alt=""
            />
            <p class="text-3xl text-gray-400 font-semibold absolute left-[10%]">TnM</p>
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
          class="min-w-[100%] flex items-center border border-black shadow-2xl px-4 py-3 rounded-full placeholder:text-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
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
        class="fixed top-0 left-0 w-[180px] bg-white h-full z-50 p-4"
      >
        <button
          type="button"
          @click="SideMenu = !SideMenu"
          class="cursor-pointer p-[20px] bg-black"
        >
          <MenuIcon fillColor="#999999" :size="30" />
        </button>
        <div>
          <img
            @click="SideMenu = !SideMenu"
            class="flex items-center justify-center"
            src="/public/img/98a0d2b3-376e-4cb8-85dd-6c6a86921cd1-removebg-preview.png"
            alt="A large burger"
          />
        </div>

        <ul class="flex">
          <li class="text-black text-sm font-light">1</li>
          <li class="text-black text-sm font-light">2</li>
          <li class="text-black text-sm font-light">3</li>
          <li class="text-black text-sm font-light">4</li>
          <li class="text-black text-sm font-light">5</li>
        </ul>
      </div>

      <div class="h-[300px] bg-green-400"></div>
    </main>

    <footer></footer>

    <RouterView />
  </div>
</template>

<style scoped></style>
