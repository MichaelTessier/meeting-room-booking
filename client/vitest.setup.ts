import { config } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'
import { routes } from './src/router'
import { i18n } from './src/i18n'
import { afterEach, beforeEach, vi } from 'vitest'
import './src/test/mocks/useFetch'

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

config.global.plugins = [i18n, router]

beforeEach(async () => {
  router.push('/')
  await router.isReady()
})

afterEach(() => {
  vi.resetAllMocks()
})
