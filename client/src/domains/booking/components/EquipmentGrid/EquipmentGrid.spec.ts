import { mount } from '@vue/test-utils'
import EquipmentGrid from './EquipmentGrid.vue'
import mock from '../../__data-test__/rooms.json'

const equipments = mock.rooms[0].equipments

describe('EquipmentGrid', () => {
  it('should display correctly if data exists', async () => {
    const wrapper = mount(EquipmentGrid, {
      props: {
        equipments,
      },
    })

    expect(wrapper.findAllComponents({ name: 'Equipment' }).length).toEqual(
      equipments.length,
    )
  })
})
