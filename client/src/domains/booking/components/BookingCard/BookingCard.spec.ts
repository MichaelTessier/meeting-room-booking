import { mount } from '@vue/test-utils'
import BookingCard from './BookingCard.vue'
import mock from '../../__data-test__/bookings.json'

const booking = mock.bookings[0]

describe('BookingCard', () => {
  it('should display correctly if data exists', async () => {
    const wrapper = mount(BookingCard, {
      props: {
        booking,
      },
    })

    expect(
      wrapper.find('[data-test="booking-card__room-name"]').text(),
    ).toEqual(booking.room.name)

    expect(wrapper.find('[data-test="booking-card__title"]').text()).toEqual(
      booking.title,
    )

    // TODO more tests
  })
})
