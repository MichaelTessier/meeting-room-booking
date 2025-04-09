import {
  getLocalTimeZone,
  fromDate,
  ZonedDateTime,
} from '@internationalized/date'

export function getLocalISOString(date: Date = new Date()) {
  const timezoneOffset = date.getTimezoneOffset() * 60000 //offset in milliseconds

  return new Date(date.getTime() - timezoneOffset).toISOString().slice(0, -1)
}

export function zonedDateToISOString(date: ZonedDateTime, time: string) {
  if (!date) return ''

  const _time = time ? time : `${date.hour}:${date.minute}`
  const _date = new Date(`${date.year}-${date.month}-${date.day} ${_time}`)

  return getLocalISOString(_date)
}

export function getHours(date: Date = new Date(), isRounded: boolean = false) {
  const _date = new Date(date)
  const dateHours = _date.getHours()
  const dateMinutes = _date.getMinutes()

  const hours = dateHours < 10 ? `0${dateHours}` : `${dateHours}`
  const minutes = isRounded ? `00` : `${dateMinutes}`

  return `${hours}:${minutes}`
}

export function toZonedTime(date: Date) {
  return fromDate(date, getLocalTimeZone())
}

export const TIME = {
  '00': '00:00',
  '01': '01:00',
  '02': '02:00',
  '03': '03:00',
  '04': '04:00',
  '05': '05:00',
  '06': '06:00',
  '07': '07:00',
  '08': '08:00',
  '09': '09:00',
  '10': '10:00',
  '11': '11:00',
  '12': '12:00',
  '13': '13:00',
  '14': '14:00',
  '15': '15:00',
  '16': '16:00',
  '17': '17:00',
  '18': '18:00',
  '19': '19:00',
  '20': '20:00',
  '21': '21:00',
  '22': '22:00',
  '23': '23:00',
}

export const TIMES = Object.values(TIME)
export type Times = (typeof TIMES)[number]

export function addHours(date: Date = new Date(), hours = 1) {
  return new Date(date.getTime() + hours * (60 * 60 * 1000))
}
