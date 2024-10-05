<script setup>
import { ref } from 'vue'
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  EmailAuthProvider,
  linkWithCredential
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

// Sign in with Email and Password
const register = async () => {
  const auth = getAuth()

  if (!validateInputs()) return // Return if validation fails

  try {
    const data = await signInWithEmailAndPassword(auth, email.value, password.value)
    isSignedIn.value = true
    router.push({ name: 'tools' })
    console.log('Successfully signed in with email')
  } catch (error) {
    console.log(error.code)
    switch (error.code) {
      case 'auth/invalid-email':
        errMsgs.value.errorEmail = 'Invalid email format.'
        break
      case 'auth/user-not-found':
        errMsgs.value.notFound = 'No account with that email was found.'
        break
      case 'auth/wrong-password':
        errMsgs.value.errorPassword = 'Incorrect password.'
        break
      case 'auth/too-many-requests':
        errMsgs.value.default = 'Too many attempts. Please try again later.'
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

    // Check if this user is already linked with email/password
    const linkedProviders = googleUser.providerData.map((provider) => provider.providerId)

    if (!linkedProviders.includes(EmailAuthProvider.PROVIDER_ID)) {
      // User is not yet linked with email/password, prompt for email/password to link the accounts
      const emailPrompt = prompt('Enter your email to link with Google:')
      const passwordPrompt = prompt('Enter your password:')

      if (emailPrompt && passwordPrompt) {
        const credential = EmailAuthProvider.credential(emailPrompt, passwordPrompt)
        await linkWithCredential(googleUser, credential) // Link Google account with email/password account
        console.log('Accounts successfully linked!')
      } else {
        alert('Please enter both email and password.')
      }
    } else {
      console.log('Google account already linked with email/password.')
    }

    isSignedIn.value = true
    router.push({ name: 'tools' })
  } catch (error) {
    console.log(error.code)
    switch (error.code) {
      case 'auth/invalid-email':
        errMsgs.value.errorEmail = 'Invalid email format.'
        break
      case 'auth/user-not-found':
        errMsgs.value.notFound = 'No account with that email was found.'
        break
      case 'auth/credential-already-in-use':
        alert('This account is already linked with another provider.')
        break
      default:
        errMsgs.value.default = 'An error occurred during sign-in.'
        break
    }
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
