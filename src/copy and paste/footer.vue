<script setup>
import { ref } from 'vue'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  linkWithCredential,
  fetchSignInMethodsForEmail
} from 'firebase/auth'
import { useRouter } from 'vue-router'
import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue'
import { useThisStore } from '../stores/pinia'
import { storeToRefs } from 'pinia'

// Vue Router and Store
const router = useRouter()
const useThis = useThisStore()
const { openForm } = storeToRefs(useThis)

// Form state
const email = ref('')
const password = ref('')
const isSignedIn = ref(false)
const errMsgs = ref({
  errorEmail: '',
  errorPassword: '',
  notFound: '',
  default: ''
})

// Validate Email and Password before submitting
const validateInputs = () => {
  if (!email.value) {
    errMsgs.value.errorEmail = 'Email is required.'
    return false
  }
  if (!password.value) {
    errMsgs.value.errorPassword = 'Password is required.'
    return false
  }
  errMsgs.value.errorEmail = ''
  errMsgs.value.errorPassword = ''
  return true
}

// Register with Email and Password
const registerWithEmail = async () => {
  const auth = getAuth()

  if (!validateInputs()) return // Return if validation fails

  try {
    // Check if the email is already associated with any provider
    const signInMethods = await fetchSignInMethodsForEmail(auth, email.value)

    if (signInMethods.length > 0) {
      errMsgs.value.errorEmail = 'Email is already in use. Try signing in instead.'
      return
    }

    // Create user with email and password
    await createUserWithEmailAndPassword(auth, email.value, password.value)
    isSignedIn.value = true
    router.push({ name: 'tools' })
    console.log('Successfully signed up with email')
  } catch (error) {
    console.log(error.code)
    switch (error.code) {
      case 'auth/invalid-email':
        errMsgs.value.errorEmail = 'Invalid email format.'
        break
      case 'auth/weak-password':
        errMsgs.value.errorPassword = 'Password is too weak.'
        break
      default:
        errMsgs.value.default = 'An error occurred. Please try again.'
        break
    }
  }
}

// Sign in with Google
const signInWithGoogle = async () => {
  const auth = getAuth()
  const provider = new GoogleAuthProvider()

  try {
    const result = await signInWithPopup(auth, provider)
    const googleUser = result.user

    // Check if the user already has an email/password account
    const signInMethods = await fetchSignInMethodsForEmail(auth, googleUser.email)
    if (signInMethods.length > 0) {
      // Account exists, link accounts
      const credential = GoogleAuthProvider.credentialFromResult(result)
      const currentUser = auth.currentUser
      await linkWithCredential(currentUser, credential)
      console.log('Successfully linked Google account to email account')
    } else {
      // Create new account with Google
      // ...
    }
  } catch (error) {
    console.error(error)
  }
}
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
          <p class="text-red-500">{{ errMsgs.errorEmail }}</p>
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
          <p class="text-red-500">{{ errMsgs.errorPassword }}</p>
        </div>

        <!-- Submit Button -->
        <div class="flex items-center justify-between">
          <button
            type="button"
            @click="registerWithEmail"
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
