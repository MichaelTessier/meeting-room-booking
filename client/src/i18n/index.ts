import { createI18n } from 'vue-i18n'
import roomBookingEn from '@/domains/roomBooking/messages/en.json'
import functionalEn from '@/domains/functional/messages/en.json'

export const i18n = createI18n({
  fallbackLocale: 'en',
  messages: {
    en: {
      ...roomBookingEn,
      ...functionalEn,
    },
  },
})
