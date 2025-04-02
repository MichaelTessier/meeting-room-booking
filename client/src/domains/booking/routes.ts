import booking from '@/domains/booking/pages/Booking/Booking.vue'

export const BOOKING_ROUTES = {
  ROOT: 'booking',
  OVERVIEW: 'booking-overview',
  CALENDAR: 'booking-calendar',
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
        component: () =>
          import('@/domains/booking/pages/BookingOverview/BookingOverview.vue'),
      },
      {
        path: '/calendar',
        name: BOOKING_ROUTES.CALENDAR,
        component: () =>
          import('@/domains/booking/pages/BookingCalendar/BookingCalendar.vue'),
      },
    ],
  },
]
