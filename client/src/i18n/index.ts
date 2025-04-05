import { createI18n, type I18nOptions } from 'vue-i18n'
import roomBookingEn from '@/domains/booking/messages/en.json'
import functionalEn from '@/domains/functional/messages/en.json'

const datetimeFormats = {
  en: {
    day: {
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    },
    short: {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    },
    long: {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      weekday: 'short',
      hour: 'numeric',
      minute: 'numeric',
    },
  },
}

export const i18n = createI18n({
  fallbackLocale: 'en',
  datetimeFormats,
  messages: {
    en: {
      ...roomBookingEn,
      ...functionalEn,
    },
  },
} as I18nOptions)
