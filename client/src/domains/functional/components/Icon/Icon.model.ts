export const ICON_NAME = {
  ARROW_UP_RIGHT: 'arrow-up-right',
  ARROW_DOWN_RIGHT: 'arrow-down-right',
  ARROW_UP_WIDE_NARROW: 'arrow-up-wide-narrow',
} as const

export const ICON_NAMES = Object.values(ICON_NAME)
export type IconName = (typeof ICON_NAMES)[number]

export const iconLucideMatcher = {
  [ICON_NAME.ARROW_UP_RIGHT]: 'ArrowUpRight',
  [ICON_NAME.ARROW_DOWN_RIGHT]: 'ArrowDownRight',
  [ICON_NAME.ARROW_UP_WIDE_NARROW]: 'ArrowUpWideNarrow',
}
