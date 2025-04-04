import { config } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'
import { routes } from './src/router'
import { i18n } from './src/i18n'
import { createPinia, setActivePinia } from 'pinia'
import { afterEach, beforeEach, vi } from 'vitest'
import './src/test/mocks/useFetch'

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

setActivePinia(createPinia())

config.global.plugins = [i18n, router]

beforeEach(async () => {
  setActivePinia(createPinia())
  router.push('/')
  await router.isReady()
})

afterEach(() => {
  vi.resetAllMocks()
})
