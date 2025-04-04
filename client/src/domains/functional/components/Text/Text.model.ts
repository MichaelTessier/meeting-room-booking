export const TEXT_TYPE = {
  X_SMALL: 'x-small',
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  X_LARGE: 'x-large',
  XX_LARGE: 'xx-large',
} as const

export const TEXT_TYPES = Object.values(TEXT_TYPE)
export type TextType = (typeof TEXT_TYPES)[number]
