export const ICON_NAME = {
  ARROW_DOWN_RIGHT: 'arrow-down-right',
  ARROW_UP_RIGHT: 'arrow-up-right',
  ARROW_UP_WIDE_NARROW: 'arrow-up-wide-narrow',
  CIRCLE_DOT_DASHED: 'circle-dot-dashed',
  MAIL: 'mail',
  MENU: 'menu',
  NOTIFICATION: 'notification',
  EDIT: 'edit',
  PLUS: 'plus',
  PROJECTOR: 'projector',
  TV_MINIMAL: 'tv-minimal',
} as const

export const ICON_NAMES = Object.values(ICON_NAME)
export type IconName = (typeof ICON_NAMES)[number]

export const iconLucideMatcher = {
  [ICON_NAME.ARROW_DOWN_RIGHT]: 'ArrowDownRight',
  [ICON_NAME.ARROW_UP_RIGHT]: 'ArrowUpRight',
  [ICON_NAME.ARROW_UP_WIDE_NARROW]: 'ArrowUpWideNarrow',
  [ICON_NAME.CIRCLE_DOT_DASHED]: 'CircleDotDashed',
  [ICON_NAME.MAIL]: 'Mail',
  [ICON_NAME.MENU]: 'Menu',
  [ICON_NAME.NOTIFICATION]: 'Bell',
  [ICON_NAME.EDIT]: 'Pencil',
  [ICON_NAME.PLUS]: 'Plus',
  [ICON_NAME.PROJECTOR]: 'Projector',
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
