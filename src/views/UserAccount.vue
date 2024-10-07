<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useRouter } from 'vue-router'
import Main from '@/components/Main.vue'
import TextAreaComponent from '@/components/TextAreaComponent.vue'
import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue'
import OpenInNew from 'vue-material-design-icons/OpenInNew.vue'
import Google from 'vue-material-design-icons/Google.vue'
import Cart from 'vue-material-design-icons/Cart.vue'
import Heart from 'vue-material-design-icons/Heart.vue'
import MenuIcon from 'vue-material-design-icons/Menu.vue'
import { onMounted, ref } from 'vue'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import router from '@/router'
const isLogedIn = ref(false)
const firstLetter = ref('')
const fullEmail = ref('')
// let userMenu = ref(false)

let userSideMenu = ref(false)
const openMenu = ref(false)
let auth

onMounted(() => {
  auth = getAuth()
  onAuthStateChanged(auth, (user) => {
    if (user && user.email) {
      isLogedIn.value = true
      // Extract the first letter of the user's email and store it
      firstLetter.value = user.email.charAt(0).toUpperCase()
      fullEmail.value = user.email
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
<template>
  <!-- <button
             @click="openFormFunc(true)" type="button"
             > -->

  <section class="w-[100vw] h-[100vh]">
    <div class="flex justify-between w-[100vw] h-[80px] fixed z-30">
      <button v-if="!userSideMenu" type="button" @click="userSideMenu = !userSideMenu" class="p-5">
        <MenuIcon fillColor="#00000" :size="35" />
      </button>
      <p
        class="bg-green-400 rounded-full w-10 h-10 flex items-center justify-center text-white absolute top-5 right-5"
      >
        {{ firstLetter }}
      </p>
    </div>
    <div class="flex justify-between">
      <section
        v-if="userSideMenu"
        id="userSideMenu"
        class="fixed w-[220px] h-[100vh] left-0 bg-yellow-400 overflow-auto z-30"
      >
        <div class="flex flex-col justify-around">
          <div class="text-xl text-gray-100 flex items-center gap-2 p-4 justify-between">
            <button type="button" @click="userSideMenu = !userSideMenu" class="py-1.5 px-1">
              <MenuIcon fillColor="#000000" :size="35" />
            </button>
          </div>

          <div class="border-b border-b-gray-500"></div>
          <ul class="flex flex-col justify-center py-4">
            <RouterLink to="/cart">
              <div class="flex gap-4 p-4">
                <Cart fillColor="#0000000" :size="35" class="p-0" />
                <li class="text-gray-700 text-lg font-bold p-2">Cart</li>
              </div>
            </RouterLink>
            <RouterLink to="/favorites">
              <div class="flex gap-4 p-4">
                <Heart fillColor="#000000" :size="35" class="p-0" />
                <li class="text-gray-700 text-lg font-bold">Favorives</li>
              </div>
            </RouterLink>
          </ul>

          <div class="border-b border-b-gray-500 m-4"></div>
          <button
            type="button"
            @click="openMenu = !openMenu"
            class="flex justify-center items-center text-xl font-semibold"
          >
            <ChevronLeft fillColor="#00000" :size="30" />
            Menu
          </button>
          <ul v-if="openMenu" class="flex flex-col justify-center items-center mb-10">
            <li class="text-black text-sm font-light">Today's best</li>
            <img
              width="120"
              class="relative bottom-2 right-4"
              src="/img/rotated_french_fry_180__1_-removebg-preview (1).png"
              alt=""
            />
            <li class="text-black text-sm font-light">Recomended</li>
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

          <div class="fixed bottom-0">
            <button class="flex items-center rounded-full bg-black px-2 p-1 justify-between m-5">
              <ChevronLeft fillColor="#ffffff" :size="30" class="bg-black rounded-full mx-1" />
              <div
                @click="handleSignOut()"
                class="text-md px-1 text-white font-bold"
                v-if="isLogedIn"
              >
                Sign-out
              </div>
            </button>
            <div class="flex flex-col justify-end items-center p-4">
              <!-- <p
              class="bg-green-400 rounded-full w-10 h-10 flex items-center justify-center text-white"
            >
              {{ firstLetter }}
            </p> -->
              <p class="items-center justify-center text-black text-sm font-light">
                {{ fullEmail }}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
    <!-- Main Content -->
    <section id="mainContent">
      <div class="w-screen h-auto bg-gray-100">
        <Main />
      </div>
    </section>
  </section>
</template>

<style lang="scss" scoped></style>
