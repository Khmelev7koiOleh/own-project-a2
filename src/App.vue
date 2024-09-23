<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
import MenuIcon from 'vue-material-design-icons/Menu.vue'
import DasComp from './components/DasComp.vue'
import DieComp from './components/DieComp.vue'

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
    <main class="relative w-screen h-screen">
      <!-- <div
        class="bg-gradient-to-r from-yellow-400 to-green-400 h-screen w-screen flex md:hidden"
      ></div> -->
      <img
        class="h-screen w-screen flex md:hidden"
        src="/img/fast food image 481cf65f-8a3d-4cd5-a80b-ed6779124db0.png"
        alt=""
      />

      <img
        class="h-screen w-screen md:flex hidden"
        src="/img/fast food image 4bff65dd-7daf-4074-94d7-e87e35b37bad.png"
        alt=""
      />

      <div
        class="absolute top-1/2 left-5 transform -translate-y-1/2 flex flex-col justify-center items-center gap-8"
      >
        <div class="text-5xl md:text-7xl font-bold text-black md:text-gray-300 flex gap-4">
          <span class="text-white md:text-white">Order</span>
          <span class="text-black md:text-black">delivery </span>
        </div>

        <div
          class="flex flex-col items-center justify-center gap-4 w-[100%] sm:w-[80%] md:w-[70%] lg:w-[70%] xl:w-[70%]"
        >
          <div class="flex w-full gap-2">
            <input
              class="flex-grow border border-black shadow-2xl px-2 py-2 text-lg rounded-lg placeholder:text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 md:text-xl md:px-4 md:py-4 lg:text-2xl lg:px-6 lg:py-4 xl:py-4 xl:px-8"
              placeholder="Search delivery address..."
              type="text"
            />

            <button
              type="button"
              class="bg-black text-white rounded-md text-lg px-4 py-4 md:text-xl md:px-8 md:py-4 lg:text-2xl lg:px-6 lg:py-4"
            >
              Find
            </button>
          </div>
          <div class="text-sm font-light text-white pr-60">use QR code</div>
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

      <div class="w-auto h-full bg-white">
        <div class="p-8"></div>
        <div
          class="p-10 grid text-black grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-1 md:text-red-300 lg:text-red-300 sm::text-red-300 xl:text-red-300"
        >
          <DasComp
            image="/img/gimme a pic of  ffaeb647-6729-463c-8081-47641a77139b.png"
            title="The Meal Deal gets you how much?!"
            text="A 4 piece McNuggets®, small fries and soft drink, plus a McChicken® or McDouble® starts at $5. You already know the name, now get yours in the app before it’s gone.*"
            subtext="*Prices and participation may vary. McDouble Meal Deal $6 in some areas. ©2024 The Coca-Cola Company."
            button="Get the Meal in the App"
            size="500px"
          />
          <div class="px-[3%] gap-4 grid text-black grid-cols-1 py-8">
            <DieComp
              image="/img/output (3).jpg"
              title="“McD’s Best Burgers Ever.” - Hamburglar"
              text="You’re gonna love the hotter, juicier, tastier upgrades we’ve made to burgers like our Cheeseburger and Double Cheeseburger.* From patties grilled with onions and perfectly melted cheese to new soft, pillowy buns—these are our best burgers yet."
              subtext="Get one today in the app for pickup or McDelivery®.^"
              button="Get the Meal in the App"
              size="600px"
            />
          </div>
          <DasComp
            image="/img/gimme a pic of  6bbb77d8-d93e-473f-b9a2-0e4692047f1e.png"
            title="The Meal Deal gets you how much?!"
            text="A 4 piece McNuggets®, small fries and soft drink, plus a McChicken® or McDouble® starts at $5. You already know the name, now get yours in the app before it’s gone.*"
            subtext="*Prices and participation may vary. McDouble Meal Deal $6 in some areas. ©2024 The Coca-Cola Company."
            button="Get the Meal in the App"
            size="500px"
          />
        </div>
        <div class="p-8"></div>

        <!-- Carousel -->
        <!-- <div class="min-w-[800px]">
          <CustomCarousel
            category="New releases for you"
            :data="[
              {
                url: 'https://picsum.photos/id/89/300/300',
                song: 'Foregone',
                by: 'In Flames',
                releasedOn: '10/02/2023'
              },
              {
                url: 'https://picsum.photos/id/101/300/300',
                song: 'Dark Waters',
                by: 'Delain',
                releasedOn: '09/01/2023'
              },
              {
                url: 'https://picsum.photos/id/121/300/300',
                song: 'Heritage',
                by: 'Distant',
                releasedOn: '10/01/2023'
              },
              {
                url: 'https://picsum.photos/id/134/300/300',
                song: 'Meanwhile',
                by: 'Klone',
                releasedOn: '08/02/2023'
              },
              {
                url: 'https://picsum.photos/id/144/300/300',
                song: 'Truth Decay',
                by: 'You Me At Six',
                releasedOn: '10/01/2023'
              },
              {
                url: 'https://picsum.photos/id/155/300/300',
                song: 'This Is Why',
                by: 'Paramore',
                releasedOn: '10/02/2023'
              },
              {
                url: 'https://picsum.photos/id/166/300/300',
                song: 'The Jaws Of Life',
                by: 'Pierce The Veil',
                releasedOn: '09/23/2023'
              },
              {
                url: 'https://picsum.photos/id/198/300/300',
                song: 'The Future Is Your Past',
                by: 'In The Brian Jonestown Massacre',
                releasedOn: '07/25/2023'
              },
              {
                url: 'https://picsum.photos/id/211/300/300',
                song: 'The Land, The Water, The Sky',
                by: 'Black Belt Eagle Scout',
                releasedOn: '09/22/2023'
              },
              {
                url: 'https://picsum.photos/id/223/300/300',
                song: 'The Day My Father Died',
                by: 'SYML',
                releasedOn: '10/02/2023'
              },
              {
                url: 'https://picsum.photos/id/225/300/300',
                song: 'Complete Mountain Almanac',
                by: 'Complete Mountain Almanac',
                releasedOn: '10/02/2023'
              },
              {
                url: 'https://picsum.photos/id/239/300/300',
                song: 'Music From Montana Story',
                by: 'Kevin Morby',
                releasedOn: '10/01/2023'
              }
            ]"
          />
        </div> -->
      </div>
    </main>

    <footer></footer>

    <RouterView />
  </div>
</template>

<style scoped></style>
