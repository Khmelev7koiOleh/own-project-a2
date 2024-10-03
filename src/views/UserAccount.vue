<template>
  <!-- <button
             @click="openFormFunc(true)" type="button"
             > -->

  <section class="bg-black w-[100vw] h-[100vh] fixed">
    <div class="flex justify-between">
      <div class="flex justify-end items-end">
        <button type="button" @click="userSideMenu = !userSideMenu" class="p-5">
          <MenuIcon fillColor="#ffffff" :size="35" />
        </button>
        <p
          class="bg-green-400 rounded-full w-10 h-10 flex items-center justify-center text-white absolute top-5 right-5"
        >
          {{ firstLetter }}
        </p>
      </div>
      <section
        v-if="userSideMenu"
        id="userSideMenu"
        class="fixed w-[200px] h-full left-0 bg-yellow-400 overflow-x-auto z-50"
      >
        <div class="flex flex-col justify-around">
          <div class="text-xl text-gray-100 flex items-center gap-2 p-4 justify-between">
            <button type="button" @click="userSideMenu = !userSideMenu" class="p-1">
              <MenuIcon fillColor="#ffffff" :size="35" />
            </button>
            <p
              class="bg-green-400 rounded-full w-10 h-10 flex items-center justify-center text-white"
            >
              {{ firstLetter }}
            </p>
          </div>

          <div class="border-b border-b-gray-500"></div>
          <ul class="flex flex-col justify-center items-center py-40 md:py-40">
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
            <li class="text-red-700 text-sm font-bold underline underline-offset-4">
              Special offer
            </li>
            <img
              width="120"
              class="relative bottom-2 right-4"
              src="/img/rotated_french_fry_180__1_-removebg-preview (1).png"
              alt=""
            />
          </ul>

          <button class="flex items-center rounded-full bg-black px-2 p-1 justify-between m-10">
            <ChevronLeft fillColor="#ffffff" :size="30" class="bg-black rounded-full mx-1" />
            <div @click="handleSignOut()" class="text-sm text-white font-bold" v-if="isLogedIn">
              Sign-out
            </div>
          </button>
        </div>
      </section>
    </div>
    <section class="items-center mt-10 w-[calc(100%-200px)] h-[100vh] ml-[200px] p-8">
      <div class="text-center text-white">
        <div class="text-center text-white text-xl p-4">Title</div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum enim commodi, placeat illum,
        laudantium fugit, numquam itaque porro labore ratione impedit dolorum? Quas non commodi
        placeat reiciendis doloribus et voluptatem. Repellendus nostrum commodi, in culpa eveniet
        velit molestias vel voluptate qui doloremque, consequatur ea reiciendis! Voluptatibus,
        quisquam beatae dolorum alias modi sapiente voluptatum commodi. Nihil itaque aperiam, neque
        at impedit eos blanditiis excepturi distinctio magni, doloribus facere accusamus explicabo
        necessitatibus nisi quo pariatur optio nostrum dolorem ipsum ut eaque perspiciatis aliquid.
        Quam, rem quis! Dolorum est itaque, culpa quasi porro, ipsam sint provident hic odio
        corrupti commodi! Unde nostrum, dicta, aliquid voluptas labore iste doloribus porro quae ea
        adipisci, exercitationem quo tenetur numquam mollitia!
      </div>
      <div class="text-center text-white">
        <div class="text-center text-white text-xl p-4">Title</div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum enim commodi, placeat illum,
        laudantium fugit, numquam itaque porro labore ratione impedit dolorum? Quas non commodi
        placeat reiciendis doloribus et voluptatem. Repellendus nostrum commodi, in culpa eveniet
        velit molestias vel voluptate qui doloremque, consequatur ea reiciendis! Voluptatibus,
        quisquam beatae dolorum alias modi sapiente voluptatum commodi. Nihil itaque aperiam, neque
        at impedit eos blanditiis excepturi distinctio magni, doloribus facere accusamus explicabo
        necessitatibus nisi quo pariatur optio nostrum dolorem ipsum ut eaque perspiciatis aliquid.
        Quam, rem quis! Dolorum est itaque, culpa quasi porro, ipsam sint provident hic odio
        corrupti commodi! Unde nostrum, dicta, aliquid voluptas labore iste doloribus porro quae ea
        adipisci, exercitationem quo tenetur numquam mollitia!
      </div>
      <div class="text-center text-white">
        <div class="text-center text-white text-xl p-4">Title</div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum enim commodi, placeat illum,
        laudantium fugit, numquam itaque porro labore ratione impedit dolorum? Quas non commodi
        placeat reiciendis doloribus et voluptatem. Repellendus nostrum commodi, in culpa eveniet
        velit molestias vel voluptate qui doloremque, consequatur ea reiciendis! Voluptatibus,
        quisquam beatae dolorum alias modi sapiente voluptatum commodi. Nihil itaque aperiam, neque
        at impedit eos blanditiis excepturi distinctio magni, doloribus facere accusamus explicabo
        necessitatibus nisi quo pariatur optio nostrum dolorem ipsum ut eaque perspiciatis aliquid.
        Quam, rem quis! Dolorum est itaque, culpa quasi porro, ipsam sint provident hic odio
        corrupti commodi! Unde nostrum, dicta, aliquid voluptas labore iste doloribus porro quae ea
        adipisci, exercitationem quo tenetur numquam mollitia!
      </div>
      <div class="text-center text-white">
        <div class="text-center text-white text-xl p-4">Title</div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum enim commodi, placeat illum,
        laudantium fugit, numquam itaque porro labore ratione impedit dolorum? Quas non commodi
        placeat reiciendis doloribus et voluptatem. Repellendus nostrum commodi, in culpa eveniet
        velit molestias vel voluptate qui doloremque, consequatur ea reiciendis! Voluptatibus,
        quisquam beatae dolorum alias modi sapiente voluptatum commodi. Nihil itaque aperiam, neque
        at impedit eos blanditiis excepturi distinctio magni, doloribus facere accusamus explicabo
        necessitatibus nisi quo pariatur optio nostrum dolorem ipsum ut eaque perspiciatis aliquid.
        Quam, rem quis! Dolorum est itaque, culpa quasi porro, ipsam sint provident hic odio
        corrupti commodi! Unde nostrum, dicta, aliquid voluptas labore iste doloribus porro quae ea
        adipisci, exercitationem quo tenetur numquam mollitia!
      </div>
    </section>
  </section>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useRouter } from 'vue-router'
import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue'
import MenuIcon from 'vue-material-design-icons/Menu.vue'
import { onMounted, ref } from 'vue'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import router from '@/router'
const isLogedIn = ref(false)
const firstLetter = ref('')

let userSideMenu = ref(false)
let auth

onMounted(() => {
  auth = getAuth()
  onAuthStateChanged(auth, (user) => {
    if (user && user.email) {
      isLogedIn.value = true
      // Extract the first letter of the user's email and store it
      firstLetter.value = user.email.charAt(0).toUpperCase()
    } else {
      isLogedIn.value = false
      firstLetter.value = '' // Clear the first letter if no user is logged in
    }
  })
})

const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push('/')
  })
}
</script>

<style lang="scss" scoped></style>
