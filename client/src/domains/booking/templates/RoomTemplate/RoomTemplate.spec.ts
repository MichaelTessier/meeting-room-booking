import { mount } from '@vue/test-utils'
import RoomTemplate from './RoomTemplate.vue'
import mock from '../../__data-test__/rooms.json'

const room = mock.rooms[0]

describe('RoomTemplate', async () => {
  it('should display correctly if data exists', async () => {
    const wrapper = mount(RoomTemplate, {
      props: {
        room,
      },
    })

    expect(
      wrapper.find('[data-test="room-template__image"]').attributes('src'),
    ).toEqual(room.image)

    expect(wrapper.find('[data-test="room-template__name"]').text()).toEqual(
      room.name,
    )

    expect(
      wrapper.find('[data-test="room-template__capacity-label"]').text(),
    ).toEqual(`Capacity`)

    expect(
      wrapper.find('[data-test="room-template__capacity-info"]').text(),
    ).toEqual(`up to 5 people`)

    expect(
      wrapper.findComponent({ name: 'EquipmentGrid' }).props('equipments'),
    ).toEqual(room.equipments)
  })

  it('should NOT display image if missing', async () => {
    const wrapper = mount(RoomTemplate, {
      props: {
        room: {
          image: null,
        },
      },
    })

    expect(wrapper.find('[data-test="room-template__image"]').exists()).toEqual(
      false,
    )
  })

  it('should NOT display name if missing', async () => {
    const wrapper = mount(RoomTemplate, {
      props: {
        room: {
          name: null,
        },
      },
    })

    expect(wrapper.find('[data-test="room-template__name"]').exists()).toEqual(
      false,
    )
  })

  it('should NOT display capacity if missing', async () => {
    const wrapper = mount(RoomTemplate, {
      props: {
        room: {
          capacity: null,
        },
      },
    })

    expect(
      wrapper.find('[data-test="room-template__capacity"]').exists(),
    ).toEqual(false)
  })

  it('should NOT display capacity if missing', async () => {
    const wrapper = mount(RoomTemplate, {
      props: {
        room: {
          equipments: null,
        },
      },
    })

    expect(wrapper.findComponent({ name: 'EquipmentGrid' }).exists()).toEqual(
      false,
    )
  })
})
