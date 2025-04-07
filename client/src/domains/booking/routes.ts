import booking from '@/domains/booking/pages/Booking/Booking.vue'

export const BOOKING_ROUTES = {
  ROOT: 'booking',
  OVERVIEW: 'booking-overview',
  CALENDAR: 'booking-calendar',
  ROOM: 'room',
}

export const bookingRoutes = [
  {
    path: '/booking',
    name: BOOKING_ROUTES.ROOT,
    component: booking,
    redirect: { name: BOOKING_ROUTES.OVERVIEW },
    children: [
      {
        path: '/overview',
        name: BOOKING_ROUTES.OVERVIEW,
        meta: {
          hasDateFilter: true,
          hasTimeFilter: true,
        },
        component: () =>
          import('@/domains/booking/pages/BookingOverview/BookingOverview.vue'),
      },
      {
        path: '/calendar',
        name: BOOKING_ROUTES.CALENDAR,
        meta: {
          hasDateFilter: true,
        },
        component: () =>
          import('@/domains/booking/pages/BookingCalendar/BookingCalendar.vue'),
      },
      {
        path: '/room/:slug',
        name: BOOKING_ROUTES.ROOM,
        component: () => import('@/domains/booking/pages/Room/Room.vue'),
      },
    ],
  },
]
