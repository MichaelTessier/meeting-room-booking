import { mount } from '@vue/test-utils'
import Equipment from './Equipment.vue'
import mock from '../../__data-test__/rooms.json'

const equipment = mock.rooms[0].equipments[0]

describe('Equipment', () => {
  it('should display correctly if data exists', async () => {
    const wrapper = mount(Equipment, {
      props: {
        equipment,
      },
    })

    expect(wrapper.find('[data-test="equipment__name"]').text()).toEqual(
      equipment.name,
    )

    expect(wrapper.findComponent({ name: 'Icon' }).props('icon')).toEqual(
      ICON_NAME.TV_MINIMAL,
    )
  })

  it('should display NOT display Icon', async () => {
    const wrapper = mount(Equipment, {
      props: {
        equipment: {
          ...equipment,
          type: null,
        },
      },
    })

    expect(wrapper.findComponent({ name: 'Icon' }).exists()).toEqual(false)

    await wrapper.setProps({
      equipment: {
        ...equipment,
        type: 'unknown',
      },
    })

    expect(wrapper.findComponent({ name: 'Icon' }).exists()).toEqual(false)
  })
})
