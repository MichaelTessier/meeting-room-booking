import { mount } from '@vue/test-utils'
import RoomGrid from './RoomGrid.vue'
import mock from '../../__data-test__/rooms.json'

const rooms = mock.rooms

describe('RoomGrid', async () => {
  it('should display correctly if data exists', async () => {
    const wrapper = mount(RoomGrid, {
      props: {
        rooms,
      },
    })

    const RoomCards = wrapper.findAllComponents({
      name: 'RoomCard',
    })

    expect(RoomCards.length).toEqual(rooms.length)
  })
})
