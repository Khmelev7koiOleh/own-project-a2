// src/router/index.js
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
      meta: { fullScreen: true }
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
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ]
})

export default router
