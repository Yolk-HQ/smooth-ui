import { transparentize, lighten } from 'polished'
import { css } from '../styled-engine'
import { th, mixin } from './value'
import { lineHeightBase, lineHeightSm, lineHeightLg } from './typography'

export const inputBtnPaddingY = th('inputBtnPaddingY', '.375rem')
export const inputBtnPaddingX = th('inputBtnPaddingX', '.75rem')
export const inputBtnLineHeight = th('inputBtnLineHeight', lineHeightBase)

export const inputBtnPaddingYSm = th('inputBtnPaddingYSm', '.25rem')
export const inputBtnPaddingXSm = th('inputBtnPaddingXSm', '.5rem')
export const inputBtnLineHeightSm = th('inputBtnLineHeightSm', lineHeightSm)

export const inputBtnPaddingYLg = th('inputBtnPaddingYLg', '.5rem')
export const inputBtnPaddingXLg = th('inputBtnPaddingXLg', '1rem')
export const inputBtnLineHeightLg = th('inputBtnLineHeightLg', lineHeightLg)

export const controlFocus = mixin('controlFocus', () => baseColor => css`
  outline: 0;
  border-color: ${lighten(0.25, baseColor)};
  box-shadow: 0 0 2px ${transparentize(0.1, baseColor)};
`)
