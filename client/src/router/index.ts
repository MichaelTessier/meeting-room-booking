import { createRouter, createWebHistory } from 'vue-router'
import { bookingRoutes } from '../domains/booking/routes'
import { userRoutes } from '@/domains/user/routes'

export const routes = [...bookingRoutes, ...userRoutes]

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'home',
      path: '/',
      redirect: BOOKING_ROUTES.ROOT,
    },
    ...routes,
  ],
})
