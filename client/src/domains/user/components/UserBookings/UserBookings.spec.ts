import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { useUserStore } from '@/domains/user/stores/useUserStore'
import bookings from '@/domains/user/__data-test__/bookings.json'
import UserBookings from './UserBookings.vue'

describe('UserBookings', async () => {
  it('should display user bookings', async () => {
    const wrapper = mount(UserBookings, {
      global: {
        plugins: [createTestingPinia()],
      },
    })

    const userStore = useUserStore()
    await userStore.$patch({ bookings })

    expect(wrapper.findAllComponents({ name: 'BookingCard' })).toHaveLength(
      bookings.length,
    )
  })
})
