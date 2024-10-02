<template>
  <!-- <button
             @click="openFormFunc(true)" type="button"
             > -->

  <div class="p-10 bg-black w-[100vw] h-[100vh]">
    <div class="flex justify-between">
      <RouterLink to="/">
        <button class="flex items-center rounded-full bg-gray-500 px-2 p-1 justify-between">
          <ChevronLeft fillColor="#ffffff" :size="35" class="bg-black rounded-full mx-1" />
          <div @click="handleSignOut()" class="text-xl text-white font-bold" v-if="isLogedIn">
            Sign-out
          </div>
        </button>
      </RouterLink>

      <div class="text-xl text-gray-100 flex items-center justify-between gap-2">
        <p>User account:</p>
        <p class="bg-green-400 rounded-full w-10 h-10 flex items-center justify-center text-white">
          {{ firstLetter }}
        </p>
      </div>
    </div>
  </div>
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
