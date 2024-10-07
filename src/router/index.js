// src/router/index.js
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Register from '../views/Register.vue'
import SignIn from '../views/SignIn.vue'
import UserAccount from '../views/UserAccount.vue'
import Cart from '@/views/Cart.vue'
import Favorites from '@/views/Favorites.vue'
import News from '@/components/News.vue'
import FindaStore from '@/components/FindaStore.vue'
import CustomersReviewsAndRating from '@/components/CustomersReviewsAndRating.vue'
import OrderOnline from '@/components/OrderOnline.vue'
import PromotionsAndOffers from '@/components/PromotionsAndOffers.vue'

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
    },
    {
      path: '/cart',
      component: Cart,
      meta: { fullScreen: true }
    },
    {
      path: '/favorites',
      component: Favorites,
      meta: { fullScreen: true }
    },
    {
      path: '/news',
      component: News,
      meta: { fullScreen: true }
    },
    {
      path: '/find-a-store',
      component: FindaStore,
      meta: { fullScreen: true }
    },
    {
      path: '/promotions-and-offers',
      component: PromotionsAndOffers,
      meta: { fullScreen: true }
    },
    {
      path: '/order-online',
      component: OrderOnline,
      meta: { fullScreen: true }
    },

    {
      path: '/customers-reviews-and-rating',
      component: CustomersReviewsAndRating,
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
