<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
import MenuIcon from 'vue-material-design-icons/Menu.vue'

const SideMenu = ref(false)
</script>

<template>
  <div class="relative">
    <header class="fixed w-full min-h-[80px] z-10 bg-opacity-0">
      <div class="flex justify-between items-center p-4">
        <button type="button" @click="SideMenu = !SideMenu">
          <MenuIcon fillColor="#FFFFFF" :size="30" />
        </button>
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
      <div>
        <div class="text-[170px] text-gray-200 absolute top-[5%] left-[83%] opacity-60">To</div>

        <div class="text-[130px] text-gray-900 absolute top-[45%] left-[85%] opacity-60">G</div>
        <div class="text-[130px] text-gray-900 absolute top-[75%] left-[85%] opacity-60">O</div>
      </div>
      <img
        class="w-full h-full object-cover"
        src="/img/A large (((burg 95314bcf-8973-4a5b-9150-d5d72f7ce321.png"
        alt="A large burger"
      />

      <div
        v-if="SideMenu"
        id="SideNav"
        class="fixed top-0 left-0 w-[180px] bg-white h-full z-10 duration-300 transition p-4"
        :class="{ 'rotate-180': SideMenu.value, 'transition-transform duration-300': true }"
      >
        <button type="button" @click="SideMenu = !SideMenu">
          <MenuIcon fillColor="#00000" :size="30" class="transition rotate-90" />
        </button>
      </div>
    </main>

    <footer></footer>

    <RouterView />
  </div>
</template>

<style scoped></style>
