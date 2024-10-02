import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Feed from '../views/UserAccount.vue'
import Register from '../views/Register.vue'
import SignIn from '@/views/SignIn.vue'
import UserAccount from '../views/UserAccount.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
      alias: '/'
    },
    {
      path: '/user-account',
      component: UserAccount
    },
    {
      path: '/sign-up',
      component: Register
    },
    {
      path: '/sign-in',
      component: SignIn
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ]
})

export default router
