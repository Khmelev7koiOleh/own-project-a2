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
    <main class="relative w-screen h-screen">
      <img
        class="w-full h-full object-cover md:width-[768px] lg:-width-[1024px] sm-width-[640px]"
        src="/public/img/fast food image 4bff65dd-7daf-4074-94d7-e87e35b37bad.png"
        alt="A large burger"
      />

      <div
        class="absolute top-1/2 left-5 transform -translate-y-1/2 flex flex-col justify-center items-center gap-16"
      >
        <div class="text-8xl md:text-7xl font-bold text-red-400 md:text-red-300 text-center">
          Order delivery near you
        </div>

        <div
          class="flex flex-col items-center justify-center gap-4 w-[100%] sm:w-[80%] md:w-[70%] lg:w-[70%] xl:w-[70%]"
        >
          <div class="flex w-full gap-2">
            <input
              class="flex-grow border border-black shadow-2xl text-4xl px-4 py-6 md:py-3 lg:py-1 xl:py-1 rounded-lg placeholder:text-2xl md:placeholder:text-lg lg:placeholder:text-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 md:text-3xl lg:text-4xl"
              placeholder="Search delivery address..."
              type="text"
            />
            <button
              type="button"
              class="bg-black text-white rounded-md text-2xl px-6 py-6 md:py-2 lg:py-2 lg:px-2 md:px-2 md:text-lg lg:text-lg"
            >
              Find food
            </button>
          </div>
          <div class="text-sm font-light text-white pr-80">
            use <span class="underline text-md font-medium">QR</span> code
          </div>
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
        <div
          class="p-10 gap-4 grid text-black grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 md:text-red-300 lg:text-red-300 sm::text-red-300 xl:text-red-300"
        >
          <DasComp
            image="./public/img/Tofu burger aa17295d-ac21-4b1f-88e7-cc34f571e1dd.png"
            title="The Meal Deal gets you how much?!"
            text="A 4 piece McNuggets®, small fries and soft drink, plus a McChicken® or McDouble® starts at $5. You already know the name, now get yours in the app before it’s gone.*"
            subtext="*Prices and participation may vary. McDouble Meal Deal $6 in some areas. ©2024 The Coca-Cola Company."
            button="Get the Meal in the App"
            size="300px"
          />
          <DasComp
            image="../public/img/The Weekend bur 91d1843b-068f-47fb-a186-4a265d3a8a2f.png"
            title="The Meal Deal gets you how much?!"
            text="A 4 piece McNuggets®, small fries and soft drink, plus a McChicken® or McDouble® starts at $5. You already know the name, now get yours in the app before it’s gone.*"
            subtext="*Prices and participation may vary. McDouble Meal Deal $6 in some areas. ©2024 The Coca-Cola Company."
            button="Get the Meal in the App"
            size="300px"
          />
        </div>
        <div class="p-8"></div>

        <div class="px-[13%] gap-4 grid text-black grid-cols-1">
          <DieComp
            image="./public/img/output (3).jpg"
            title="“McD’s Best Burgers Ever.” - Hamburglar"
            text="You’re gonna love the hotter, juicier, tastier upgrades we’ve made to burgers like our Cheeseburger and Double Cheeseburger.* From patties grilled with onions and perfectly melted cheese to new soft, pillowy buns—these are our best burgers yet."
            subtext="Get one today in the app for pickup or McDelivery®.^"
            button="Get the Meal in the App"
            size="600px"
          />
        </div>

        <div class="p-80"></div>
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
