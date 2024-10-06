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
const openLinkform = ref(false)
const wotstScenario = ref(false)
const errMsgs = ref({
  errorEmail: '',
  errorPassword: '',
  notFound: '',
  default: ''
})
const linkingEmail = ref('') // Email for linking
const linkingPassword = ref('') // Password for linking
const showLinkingForm = ref(false) // To show/hide linking form

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
    router.push('user-account')
    console.log('Successfully signed in with email')
  } catch (error) {
    console.log(error.code)
    openLinkform.value = openLinkform.value = true
    wotstScenario.value = wotstScenario.value = true
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
const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider()
  signInWithPopup(getAuth(), provider)
    .then((result) => {
      console.log(result.user)
      router.push('/user-account')
    })
    .catch((error) => {
      // handle error
    })
}

// Sign in with Google
const signUpWithGoogle = async () => {
  const auth = getAuth()

  const provider = new GoogleAuthProvider()
  openLinkform.value = openLinkform.value = true
  wotstScenario.value = wotstScenario.value = false

  try {
    const result = await signInWithPopup(auth, provider)
    const googleUser = result.user

    // Check if this user is already linked with email/password
    const linkedProviders = googleUser.providerData.map((provider) => provider.providerId)

    if (!linkedProviders.includes(EmailAuthProvider.PROVIDER_ID)) {
      // User is not yet linked with email/password
      showLinkingForm.value = true // Show the linking form
    } else {
      console.log('Google account already linked with email/password.')
      isSignedIn.value = true
      router.push('/user-account')
    }
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

// Link Google Account
const linkGoogleAccount = async () => {
  const auth = getAuth()
  const credential = EmailAuthProvider.credential(linkingEmail.value, linkingPassword.value)

  try {
    const currentUser = auth.currentUser
    await linkWithCredential(currentUser, credential) // Link Google account with email/password account
    console.log('Accounts successfully linked!')
    isSignedIn.value = true
    router.push('/user-account')
  } catch (error) {
    console.error(error.code)
    switch (error.code) {
      case 'auth/invalid-email':
        errMsgs.value.errorEmail = 'Invalid email format.'
        break
      case 'auth/wrong-password':
        errMsgs.value.errorPassword = 'Incorrect password.'
        break
      case 'auth/credential-already-in-use':
        alert('This account is already linked with another provider.')
        break
      default:
        errMsgs.value.default = 'An error occurred while linking accounts.'
        break
    }
  }
}
</script>

<template>
  <section
    v-if="linkGoogleAccount"
    class="bg-gray-800 min-h-screen flex flex-col justify-center items-center"
  >
    <div class="bg-white py-8 px-4 rounded-2xl">
      <RouterLink to="/" class="inline-block">
        <button type="button">
          <ChevronLeft fillColor="#000000" :size="40" />
        </button>
      </RouterLink>
      <div v-if="!openLinkform" class="rounded-lg py-16 px-6 max-w-md w-full">
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
            @click="signUpWithGoogle"
            class="bg-purple-500 text-white px-6 py-2 mx-1 rounded-lg hover:bg-purple-600 transition duration-300"
          >
            Register with Google
          </button>
        </div>
      </div>
      <!-- Linking Form -->
      <div v-if="openLinkform && !wotstScenario" class="bg-white py-8 px-4 rounded-2xl">
        <div class="mt-6">
          <h3 class="text-lg font-bold text-gray-700 text-center">Link Google Account</h3>
          <div class="mb-4">
            <label for="linkingEmail" class="block text-gray-700 font-bold mb-2">Email</label>
            <input
              id="linkingEmail"
              type="email"
              v-model="linkingEmail"
              placeholder="Enter your email to link"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div class="mb-6">
            <label for="linkingPassword" class="block text-gray-700 font-bold mb-2">Password</label>
            <input
              id="linkingPassword"
              type="password"
              v-model="linkingPassword"
              placeholder="Enter your password to link"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="button"
            @click="linkGoogleAccount"
            class="bg-blue-500 text-white px-6 py-2 mx-1 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Link Email
          </button>
          <button
            type="button"
            @click="signInWithGoogle"
            class="bg-blue-500 text-white px-6 py-2 mx-1 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Keep on with Google
          </button>
        </div>
      </div>

      <!-- Linking Form  worst scenario-->
      <div v-if="openLinkform && wotstScenario" class="bg-white py-8 px-4 rounded-2xl">
        <div class="mt-6">
          <h3 class="text-lg font-bold text-gray-700 text-center">Link Google Account</h3>
          <div class="mb-4">
            <label for="linkingEmail" class="block text-gray-700 font-bold mb-2">Email</label>
            <input
              id="linkingEmail"
              type="email"
              v-model="linkingEmail"
              placeholder="Enter your email to link"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div class="mb-6">
            <label for="linkingPassword" class="block text-gray-700 font-bold mb-2">Password</label>
            <input
              id="linkingPassword"
              type="password"
              v-model="linkingPassword"
              placeholder="Enter your password to link"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="button"
            @click="signUpWithGoogle"
            class="bg-blue-500 text-white px-6 py-2 mx-1 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Keep on with Email
          </button>
          <button
            type="button"
            @click="signInWithGoogle"
            class="bg-blue-500 text-white px-6 py-2 mx-1 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Keep on with Google
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
