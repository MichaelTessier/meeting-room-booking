import { flushPromises, mount } from '@vue/test-utils'
import DataProvider from './DataProvider.vue'
import { useFetchMockJson } from '@/test/mocks/useFetch'

describe('DataProvider', async () => {
  it('should display correctly if data exists', async () => {
    useFetchMockJson.mockReturnValue({
      isFetching: false,
      error: false,
      data: { content: 'content' },
    })
    const DataProviderMount = defineComponent({
      components: { DataProvider },
      template: `<Suspense>
        <DataProvider :url="'url'">
          <template #data="{ data }">
            <div data-test="data">{{ data }}</div>
          </template>
        </DataProvider>
      </Suspense>`,
    })

    const wrapper = mount(DataProviderMount)

    await flushPromises()

    const dataProvider = wrapper.findComponent({ name: 'DataProvider' })

    expect(dataProvider.find('[data-test="data"]').exists()).toEqual(true)
  })
})
