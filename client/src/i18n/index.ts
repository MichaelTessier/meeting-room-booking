import { createI18n, type I18nOptions } from 'vue-i18n'
import roomBookingEn from '@/domains/booking/messages/en.json'
import functionalEn from '@/domains/functional/messages/en.json'
import userEn from '@/domains/user/messages/en.json'

const datetimeFormats = {
  en: {
    short: {
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    },
  },
}

export const i18n = createI18n({
  globalInjection: true,
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  datetimeFormats,
  messages: {
    en: {
      ...roomBookingEn,
      ...functionalEn,
      ...userEn,
    },
  },
} as I18nOptions)
