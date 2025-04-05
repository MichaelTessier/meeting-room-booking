export default function useRooms() {
  const route = useRoute()

  const getRoomsUrl = computed(() => {
    const url = new URL(`${import.meta.env.VITE_API_URL}/api/V1/rooms`)

    if (route.query.start) {
      url.searchParams.append('start', route.query.start as string)
    }

    return url.toString()
  })

  return {
    getRoomsUrl,
  }
}
