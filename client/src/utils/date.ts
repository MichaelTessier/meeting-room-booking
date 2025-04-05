export function getLocalISOString(date: Date) {
  console.log('🚀 ~ getLocalISOString ~ date:', date)
  const timezoneOffset = new Date(date).getTimezoneOffset() * 60000 //offset in milliseconds

  return new Date(date.getTime() - timezoneOffset).toISOString().slice(0, -1)
}

export function getCurrentHours(isRounded: boolean = false) {
  const date = new Date()
  const dateHours = date.getHours()
  const dateMinutes = date.getMinutes()

  const hours = dateHours < 10 ? `0${dateHours}` : `${dateHours}`
  const minutes = isRounded ? `00` : `${dateMinutes}`

  return `${hours}:${minutes}`
}
