<script setup>
import { ref } from 'vue'
import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue'
import ChevronRight from 'vue-material-design-icons/ChevronRight.vue'
import { useThisStore } from '../stores/pinia'
import { storeToRefs } from 'pinia'
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

const handleSubmit = () => {
  if (!email.value || !password.value) {
    alert('Please enter both email and password.')
    return
  }

  // Placeholder for form submission logic
  alert(`Email: ${email.value}, Password: ${password.value}`)
}
</script>

<template>
  <div class="bg-gray-800">
    <div class="p-8">
      <button @click="openFormFunc(true)" type="button">
        <ChevronLeft fillColor="#ffffff" :size="40" />
      </button>
    </div>

    <div class="flex justify-center items-center min-h-screen bg-gray-800">
      <div class="bg-white shadow-lg rounded-lg py-20 px-8 max-w-md w-full">
        <h2 class="text-2xl font-bold text-gray-700 text-center mb-6">Login</h2>

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
            @click="handleSubmit"
            class="bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600 transition duration-300"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
