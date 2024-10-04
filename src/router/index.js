// src/router/index.js
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Register from '../views/Register.vue'
import SignIn from '../views/SignIn.vue'
import UserAccount from '../views/UserAccount.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/user-account',
      component: UserAccount,

      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/sign-up',
      component: Register,
      meta: { fullScreen: true }
    },
    {
      path: '/sign-in',
      component: SignIn,
      meta: { fullScreen: true }
    }
  ]
})

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener()
        resolve(user)
      },
      reject
    )
  })
}

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next()
    } else {
      alert('You must sign in to view this page')
      next('/sing-in')
    }
  } else {
    next()
  }
})
export default router
