<script setup>
import { ref } from 'vue'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'
import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue'
import ChevronRight from 'vue-material-design-icons/ChevronRight.vue'
import { useThisStore } from '../stores/pinia'
import { storeToRefs } from 'pinia'
const router = useRouter()
const useThis = useThisStore()
const { openForm, openFormLog } = storeToRefs(useThis)
const openFormFunc = (val) => {
  if (val) {
    openForm.value = !openForm.value
  }
}

// Form logic
const email = ref('')
const password = ref('')

const register = () => {
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log('Successfully registered!')
      router.push('/feed')
    })
    .catch((error) => {
      console.log(error.code)
      alert(error.message)
    })
}

const signInWithGoogle = () => {}

// const handleSubmit = () => {
//   if (!email.value || !password.value) {
//     alert('Please enter both email and password.')
//     return
//   }

//   // Placeholder for form submission logic
//   alert(`Email: ${email.value}, Password: ${password.value}`)
// }
</script>

<template>
  <section class="bg-gray-800 min-h-screen flex flex-col justify-center items-center">
    <div class="bg-white py-8 px-4 rounded-2xl">
      <RouterLink to="/" class="inline-block">
        <button type="button">
          <ChevronLeft fillColor="#000000" :size="40" />
        </button>
      </RouterLink>
      <div class="rounded-lg py-16 px-6 max-w-md w-full">
        <h2 class="text-2xl font-bold text-gray-700 text-center">Sign-up</h2>

        <!-- Email Field -->
        <div class="mb-4">
          <label for="email" class="block text-gray-700 font-bold mb-2">Email</label>
          <input
            id="email"
            type="email"
            v-model="email"
            placeholder="Enter your email"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <!-- Password Field -->
        <div class="mb-6">
          <label for="password" class="block text-gray-700 font-bold mb-2">Password</label>
          <input
            id="password"
            type="password"
            v-model="password"
            placeholder="Enter your password"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <!-- Submit Button -->
        <div class="flex items-center justify-between">
          <button
            type="button"
            @click="register"
            class="bg-purple-500 text-white px-6 py-2 mx-1 rounded-lg hover:bg-purple-600 transition duration-300"
          >
            Submit
          </button>

          <button
            type="button"
            @click="signInWithGoogle"
            class="bg-purple-500 text-white px-6 py-2 mx-1 rounded-lg hover:bg-purple-600 transition duration-300"
          >
            Register with Google
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
