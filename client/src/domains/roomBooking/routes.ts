import RoomBooking from '@/domains/roomBooking/pages/RoomBooking/RoomBooking.vue'

export const ROOM_BOOKING_ROUTES = {
  ROOT: 'room-booking',
  OVERVIEW: 'room-overview',
}

export const roomBookingRoutes = [
  {
    path: '/room-booking',
    name: ROOM_BOOKING_ROUTES.ROOT,
    component: RoomBooking,
    redirect: { name: ROOM_BOOKING_ROUTES.OVERVIEW },
    children: [
      {
        path: '/overview',
        name: ROOM_BOOKING_ROUTES.OVERVIEW,
        component: () =>
          import(
            '@/domains/roomBooking/pages/RoomBookingOverview/RoomBookingOverview.vue'
          ),
      },
    ],
  },
]
