export const USER_ROUTES = {
  USER: 'user',
}

export const userRoutes = [
  {
    path: '/user',
    name: USER_ROUTES.USER,
    component: () => import('@/domains/user/pages/User/User.vue'),
  },
]
