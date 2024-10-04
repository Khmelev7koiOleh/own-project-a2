import './assets/main.css'

import { createApp } from 'vue'
import 'animate.css'
import { createPinia } from 'pinia'
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'
import router from './router'

// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDVcQmLoxQINYKKBLqtqJZSl7fyLTkjrJY',
  authDomain: 'fastfood-registration-form.firebaseapp.com',
  projectId: 'fastfood-registration-form',
  storageBucket: 'fastfood-registration-form.appspot.com',
  messagingSenderId: '596990446611',
  appId: '1:596990446611:web:ba2e3f68adfc70bcfcc3e6',
  measurementId: 'G-X8VTK63ERW'
}

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig) // Renamed to avoid conflict
const analytics = getAnalytics(appFirebase) // Use the initialized Firebase app here

// Initialize Firebase

const pinia = createPinia()
pinia.use(piniaPluginPersistedState)

import App from './App.vue'

const app = createApp(App) // Create the Vue app

app.use(pinia)
app.use(router)

app.mount('#app') // Mount the Vue app
