<template>
  <!-- <button
             @click="openFormFunc(true)" type="button"
             > -->

  <section class="bg-black w-[100vw] h-[100vh]">
    <div class="flex justify-between">
      <section
        id="userSideMenu"
        class="fixed w-[150px] h-full right-0 bg-blue-900 overflow-x-auto z-50"
      >
        <div class="text-xl text-gray-100 flex items-center justify-between gap-2 p-4">
          <p>User account:</p>
          <p
            class="bg-green-400 rounded-full w-10 h-10 flex items-center justify-center text-white"
          >
            {{ firstLetter }}
          </p>
        </div>
      </section>

      <RouterLink to="/">
        <button class="flex items-center rounded-full bg-gray-500 px-2 p-1 justify-between m-10">
          <ChevronLeft fillColor="#ffffff" :size="35" class="bg-black rounded-full mx-1" />
          <div @click="handleSignOut()" class="text-xl text-white font-bold" v-if="isLogedIn">
            Sign-out
          </div>
        </button>
      </RouterLink>
    </div>
    <div class="flex justify-center items-center mt-10">
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
    </div>
  </section>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useRouter } from 'vue-router'
import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue'

import { onMounted, ref } from 'vue'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import router from '@/router'
const isLogedIn = ref(false)
const firstLetter = ref('')

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
