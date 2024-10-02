import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Feed from '../views/Feed.vue'
import Register from '../views/Register.vue'
import SignIn from '@/views/SignIn.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
      alias: '/'
    },
    {
      path: '/feed',
      component: Feed
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
