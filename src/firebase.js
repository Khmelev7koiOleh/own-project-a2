// src/firebase.js
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

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
const appFirebase = initializeApp(firebaseConfig)
const db = getFirestore(appFirebase)
const auth = getAuth(appFirebase)

export { db, auth }
