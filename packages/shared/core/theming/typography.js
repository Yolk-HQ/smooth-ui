import { modularScale } from 'polished'

import { th } from './value'

export const fontSizeBase = th('fontSizeBase', '1rem')
export const fontSizeSm = th('fontSizeSm', '1rem', s => modularScale(-1, s))
export const fontSizeLg = th('fontSizeLg', '1rem', s => modularScale(1, s))

export const fontWeightLight = th('fontWeightLight', 300)
export const fontWeightNormal = th('fontWeightNormal', 400)
export const fontWeightBold = th('fontWeightBold', 700)

export const lineHeightBase = th('lineHeightBase', 1.5)
export const lineHeightSm = th('lineHeightSm', 1.5)
export const lineHeightLg = th('lineHeightLg', 1.5)
