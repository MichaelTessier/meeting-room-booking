export const ICON_NAME = {
  ARROW_DOWN_RIGHT: 'arrow-down-right',
  ARROW_UP_RIGHT: 'arrow-up-right',
  ARROW_UP_WIDE_NARROW: 'arrow-up-wide-narrow',
  CALENDAR: 'calendar',
  CIRCLE_DOT_DASHED: 'circle-dot-dashed',
  CIRCLE_SMALL: 'circle-small',
  CLOCK_FADING: 'clock-fading',
  EDIT: 'edit',
  MAIL: 'mail',
  MENU: 'menu',
  MOON: 'moon',
  NOTIFICATION: 'notification',
  PLUS: 'plus',
  PROJECTOR: 'projector',
  SUN: 'sun',
  TV_MINIMAL: 'tv-minimal',
} as const

export const ICON_NAMES = Object.values(ICON_NAME)
export type IconName = (typeof ICON_NAMES)[number]

export const iconLucideMatcher = {
  [ICON_NAME.ARROW_DOWN_RIGHT]: 'ArrowDownRight',
  [ICON_NAME.ARROW_UP_RIGHT]: 'ArrowUpRight',
  [ICON_NAME.ARROW_UP_WIDE_NARROW]: 'ArrowUpWideNarrow',
  [ICON_NAME.CALENDAR]: 'Calendar',
  [ICON_NAME.CIRCLE_DOT_DASHED]: 'CircleDotDashed',
  [ICON_NAME.CIRCLE_SMALL]: 'CircleSmall',
  [ICON_NAME.CLOCK_FADING]: 'ClockFading',
  [ICON_NAME.EDIT]: 'Pencil',
  [ICON_NAME.MAIL]: 'Mail',
  [ICON_NAME.MENU]: 'Menu',
  [ICON_NAME.MOON]: 'MoonStar',
  [ICON_NAME.NOTIFICATION]: 'Bell',
  [ICON_NAME.PLUS]: 'Plus',
  [ICON_NAME.PROJECTOR]: 'Projector',
  [ICON_NAME.SUN]: 'Sun',
  [ICON_NAME.TV_MINIMAL]: 'TvMinimal',
}

export const ICON_SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  X_LARGE: 'x-large',
  XX_LARGE: 'xx-large',
} as const

export const ICON_SIZES = Object.values(ICON_SIZE)
export type IconSize = (typeof ICON_SIZES)[number]
