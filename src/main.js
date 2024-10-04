import './assets/main.css'

import { createApp } from 'vue'
import 'animate.css'
import { createPinia } from 'pinia'
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'
import router from './router'

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: 'fastfood-registration-form.appspot.com',
  messagingSenderId: '596990446611',
  appId: '1:596990446611:web:ba2e3f68adfc70bcfcc3e6',
  measurementId: 'G-X8VTK63ERW'
}

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig) // Renamed to avoid conflict
const analytics = getAnalytics(appFirebase) // Use the initialized Firebase app here

const pinia = createPinia()
pinia.use(piniaPluginPersistedState)

import App from './App.vue'

const app = createApp(App) // Create the Vue app

app.use(pinia)
app.use(router)

app.mount('#app') // Mount the Vue app
