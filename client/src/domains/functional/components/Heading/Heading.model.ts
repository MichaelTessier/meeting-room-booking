export const HEADING_TYPE = {
  HEADING_SMALL: 'heading-small',
  HEADING_MEDIUM: 'heading-medium',
  HEADING_LARGE: 'heading-large',
  HEADING_X_LARGE: 'heading-x-large',
  HEADING_XX_LARGE: 'heading-xx-large',
  DISPLAY_SMALL: 'display-small',
  DISPLAY_MEDIUM: 'display-medium',
  DISPLAY_LARGE: 'display-large',
  DISPLAY_X_LARGE: 'display-x-large',
  DISPLAY_XX_LARGE: 'display-xx-large',
} as const

export const HEADING_TYPES = Object.values(HEADING_TYPE)
export type HeadingType = (typeof HEADING_TYPES)[number]

export const HEADING_TAG = {
  H1: 'h1',
  H2: 'h2',
  H3: 'h3',
  H4: 'h4',
  H5: 'h5',
  H6: 'h6',
} as const

export const HEADING_TAGS = Object.values(HEADING_TAG)
export type HeadingTag = (typeof HEADING_TAGS)[number]
