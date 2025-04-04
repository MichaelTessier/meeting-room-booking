import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { useUserStore } from '@/domains/user/stores/useUserStore'
import user from '@/domains/user/__data-test__/user.json'
import UserAvatar from './UserAvatar.vue'

describe('UserAvatar', async () => {
  it('should display Two letters', async () => {
    const wrapper = mount(UserAvatar, {
      global: {
        plugins: [createTestingPinia()],
      },
    })

    const userStore = useUserStore()
    await userStore.$patch({ user })

    expect(wrapper.find('[data-test="user-avatar"]').text()).toEqual('JD')

    await userStore.$patch({
      user: {
        ...user,
        name: 'John Doe Doe Di Da',
      },
    })

    expect(wrapper.find('[data-test="user-avatar"]').text()).toEqual('JD')
  })

  it('should display One letter', async () => {
    const wrapper = mount(UserAvatar, {
      global: {
        plugins: [createTestingPinia()],
      },
    })

    const userStore = useUserStore()
    await userStore.$patch({
      user: {
        ...user,
        name: 'Jonathan',
      },
    })

    expect(wrapper.find('[data-test="user-avatar"]').text()).toEqual('J')
  })

  it('should NOT display', async () => {
    const wrapper = mount(UserAvatar, {
      global: {
        plugins: [createTestingPinia()],
      },
    })

    const userStore = useUserStore()
    await userStore.$patch({
      user: {
        ...user,
        name: '',
      },
    })

    expect(wrapper.find('[data-test="user-avatar"]').exists()).toEqual(false)
  })
})
