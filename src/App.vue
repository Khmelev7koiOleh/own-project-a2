<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
import MenuIcon from 'vue-material-design-icons/Menu.vue'
import DasComp from './components/DasComp.vue'

const SideMenu = ref(false)
</script>

<template>
  <div class="relative">
    <header v-if="!SideMenu" class="fixed w-full min-h-[80px] z-10 bg-opacity-0">
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
    <main class="relative w-full h-screen sm:h-screen md:w-[75%] lg:w-[50%] xl:w-[100%]">
      <img
        class="w-full h-screen object-cover"
        src="/public/img/fast food image 4bff65dd-7daf-4074-94d7-e87e35b37bad.png"
        alt="A large burger"
      />

      <div
        class="absolute top-1/2 left-5 transform -translate-y-1/2 flex flex-col justify-center items-center gap-16"
      >
        <div class="text-4xl md:text-7xl font-bold text-gray-400 text-center">
          Order delivery near you 1
        </div>

        <div
          class="flex items-center justify-between gap-4 w-[80%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[60%] 2xl:w-[60%]"
        >
          <input
            class="flex-grow border border-black shadow-2xl px-4 py-3 rounded-lg placeholder:text-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search delivery address..."
            type="text"
          />
          <button type="button" class="bg-black px-6 py-3 text-white rounded-md font-xl">
            Find food
          </button>
        </div>

        <div class="text-sm font-light absolute bottom-5 left-5 text-white">
          use <span class="underline text-md font-medium">QR</span> code
        </div>
      </div>

      <div
        v-if="SideMenu"
        id="SideNav"
        class="fixed top-0 left-0 w-[180px] bg-white h-full z-50 py-8 px-4 border-r-2 border-gray-200 shadow-lg transition-transform duration-300"
      >
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
            src="/public/img/rotated_french_fry_180__1_-removebg-preview (1).png"
            alt=""
          />
          <li class="text-black text-sm font-light">Today's best</li>
          <img
            width="120"
            class="relative bottom-2 right-4"
            src="/public/img/rotated_french_fry_180__1_-removebg-preview (1).png"
            alt=""
          />
          <li class="text-black text-sm font-light">Food-Set</li>
          <img
            width="120"
            class="relative bottom-2 right-4"
            src="/public/img/rotated_french_fry_180__1_-removebg-preview (1).png"
            alt=""
          />
          <li class="text-black text-sm font-light">Popular</li>
          <img
            width="120"
            class="relative bottom-2 right-4"
            src="/public/img/rotated_french_fry_180__1_-removebg-preview (1).png"
            alt=""
          />
          <li class="text-red-700 text-sm font-bold underline underline-offset-4">Special offer</li>
          <img
            width="120"
            class="relative bottom-2 right-4"
            src="/public/img/rotated_french_fry_180__1_-removebg-preview (1).png"
            alt=""
          />
        </ul>
      </div>

      <div class="w-full h-full bg-white">
        <div class="p-8"></div>
        <div class="p-10 gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <DasComp
            image="/public/img/output.jpg"
            title="The Meal Deal gets you how much?!"
            text="A 4 piece McNuggets®, small fries and soft drink, plus a McChicken® or McDouble® starts at $5. You already know the name, now get yours in the app before it’s gone.*"
            subtext="*Prices and participation may vary. McDouble Meal Deal $6 in some areas. ©2024 The Coca-Cola Company."
            button="Get the Meal in the App"
            size="550px"
          />
          <DasComp
            image="/public/img/output (4).jpg"
            title="“McD’s Best Burgers Ever.” - Hamburglar"
            text="You’re gonna love the hotter, juicier, tastier upgrades we’ve made to burgers like our Cheeseburger and Double Cheeseburger.* From patties grilled with onions and perfectly melted cheese to new soft, pillowy buns—these are our best burgers yet."
            subtext="Get one today in the app for pickup or McDelivery®.^"
            button="Get the Meal in the App"
            size="650px"
          />
          <DasComp
            image="/public/img/output (1).jpg"
            title="The Meal Deal gets you how much?!"
            text="A 4 piece McNuggets®, small fries and soft drink, plus a McChicken® or McDouble® starts at $5. You already know the name, now get yours in the app before it’s gone.*"
            subtext="*Prices and participation may vary. McDouble Meal Deal $6 in some areas. ©2024 The Coca-Cola Company."
            button="Get the Meal in the App"
            size="550px"
          />
        </div>
      </div>
    </main>

    <footer></footer>

    <RouterView />
  </div>
</template>

<style scoped></style>
