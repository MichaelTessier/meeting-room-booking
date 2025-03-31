import { createRouter, createWebHistory } from 'vue-router'
import { roomBookingRoutes } from '../domains/roomBooking/routes'
import { userRoutes } from '@/domains/user/routes'

export const routes = [...roomBookingRoutes, ...userRoutes]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
