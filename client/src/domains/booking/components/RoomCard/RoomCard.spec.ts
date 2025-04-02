import { mount } from '@vue/test-utils'
import RoomCard from './RoomCard.vue'
import mock from '../../__data-test__/rooms.json'

const room = mock.rooms[0]

describe('RoomCard', async () => {
  it('should display correctly if data exists', async () => {
    const wrapper = mount(RoomCard, {
      props: {
        room,
      },
    })

    expect(
      wrapper.find('[data-test="room-card__image"]').attributes('src'),
    ).toEqual(room.image)

    expect(wrapper.find('[data-test="room-card__name"]').text()).toEqual(
      room.name,
    )

    expect(wrapper.find('[data-test="room-card__capacity"]').text()).toEqual(
      `Capacity: ${room.capacity}`,
    )
  })
})
