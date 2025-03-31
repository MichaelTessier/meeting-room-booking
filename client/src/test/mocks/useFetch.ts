beforeAll(() => {
  vi.mock('@vueuse/core', () => ({
    useFetch: () => useFetchMock,
  }))
})

export const useFetchMockJson = vi.fn(() => ({
  isFetching: false,
  error: false,
  data: {},
}))

export const useFetchMock = {
  get: () => ({
    json: useFetchMockJson,
  }),
}
